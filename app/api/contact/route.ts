import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";
const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 4000;

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const sanitize = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "liu61x0801@gmail.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  if (!resendApiKey) {
    return NextResponse.json(
      {
        message:
          "Contact form is not configured yet. Set RESEND_API_KEY to enable email delivery.",
      },
      { status: 500 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim() || "";
  const email = payload.email?.trim() || "";
  const message = payload.message?.trim() || "";
  const company = payload.company?.trim() || "";

  if (company) {
    return NextResponse.json({ message: "Message sent successfully." }, { status: 200 });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  if (name.length > MAX_FIELD_LENGTH || email.length > MAX_FIELD_LENGTH) {
    return NextResponse.json(
      { message: "Name or email is too long." },
      { status: 400 }
    );
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { message: "Message is too long." },
      { status: 400 }
    );
  }

  const ipAddress =
    request.headers.get("x-forwarded-for") ||
    request.headers.get("x-real-ip") ||
    "Unavailable";

  const resendResponse = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Portfolio contact from ${name}`,
      html: `
        <div>
          <h2>New portfolio message</h2>
          <p><strong>Name:</strong> ${sanitize(name)}</p>
          <p><strong>Email:</strong> ${sanitize(email)}</p>
          <p><strong>IP:</strong> ${sanitize(ipAddress)}</p>
          <p><strong>Message:</strong></p>
          <p>${sanitize(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
      text: `New portfolio message

Name: ${name}
Email: ${email}
IP: ${ipAddress}

Message:
${message}`,
    }),
  });

  if (!resendResponse.ok) {
    const errorPayload = (await resendResponse.json().catch(() => null)) as
      | { message?: string; error?: { message?: string } }
      | null;

    return NextResponse.json(
      {
        message:
          errorPayload?.message ||
          errorPayload?.error?.message ||
          "Email delivery failed.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ message: "Message sent successfully." }, { status: 200 });
}
