"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { skillGroups } from "@/app/data/skills";
import { projects } from "@/app/data/projects";
import SkillChip from "@/app/components/skills/SkillChip";
import ProjectCard from "@/app/components/projects/ProjectCard";

const SKILL_GROUP_ICONS: Record<string, string> = {
  Frontend: "/frontend-icon.svg",
  Backend: "/backend-icon.svg",
  Tools: "/tools-icon.svg",
};

export default function Home() {
  const [showResume, setShowResume] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [contactStatus, setContactStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const updateContactField = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setContactForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const submitContactForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmittingContact) return;

    setIsSubmittingContact(true);
    setContactStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message || "Unable to send your message right now.");
      }

      setContactForm({
        name: "",
        email: "",
        message: "",
        company: "",
      });
      setContactStatus({
        type: "success",
        message: payload.message || "Message sent successfully.",
      });
    } catch (error) {
      setContactStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to send your message right now.",
      });
    } finally {
      setIsSubmittingContact(false);
    }
  };

  return (
    <main className="pt-16 sm:pt-20">
      <Section id="hero">
        <Container>
          <div className="reveal grid min-h-[62vh] items-center gap-10 sm:min-h-[72vh] lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-14">
            <div className="space-y-5 sm:space-y-6">
              <h1 className="bg-gradient-to-r from-neutral-700 to-neutral-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent dark:from-neutral-100 dark:to-neutral-400 sm:text-4xl lg:text-5xl">
                Full-Stack Developer
              </h1>
              <p className="text-lg text-neutral-700 dark:text-neutral-200 sm:text-xl">
                Hi, I&apos;m Yuxuan Liu
              </p>
              <p className="max-w-2xl text-sm text-neutral-600/80 dark:text-neutral-300/80 sm:text-base">
                I build clean, user-focused web applications.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowResume((current) => !current)}
                  className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-neutral-100 transition duration-150 hover:bg-neutral-700 focus:outline-none focus-visible:ring-1 focus-visible:ring-black/20 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus-visible:ring-white/20"
                >
                  {showResume ? "Show Portrait" : "View Resume"}
                </button>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center rounded-md border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-neutral-700 transition duration-150 hover:border-black/20 hover:bg-white dark:border-white/10 dark:bg-neutral-900/50 dark:text-neutral-200 dark:hover:border-white/20 dark:hover:bg-neutral-900/70"
                >
                  Open PDF
                </a>
              </div>
            </div>

            <div className="hero-flip-stage mx-auto w-full max-w-[420px]">
              <div className={`hero-flip-card ${showResume ? "is-flipped" : ""}`}>
                <div className="hero-flip-face overflow-hidden rounded-[28px] border border-black/10 bg-white/70 shadow-[0_24px_60px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-neutral-900/60">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/image.png"
                      alt="Portrait of Yuxuan Liu"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="hero-flip-face hero-flip-back rounded-[28px] border border-black/10 bg-white/85 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-neutral-950/80">
                  <div className="overflow-hidden rounded-[20px] bg-white dark:bg-neutral-900">
                    <iframe
                      src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
                      title="Resume PDF"
                      className="h-[520px] w-full border-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="skills">
        <Container>
          <div className="reveal">
            <h2 className="mb-8 text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-2xl">
              Skills
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-xl border border-black/10 bg-white/12 p-5 transition duration-200 hover:scale-[1.06] hover:border-black/20 hover:bg-white/45 dark:border-white/10 dark:bg-neutral-900/30 dark:hover:border-white/20 dark:hover:bg-neutral-900/30"
                >
                  <div className="mb-4 flex items-center gap-2">
                    <Image
                      src={SKILL_GROUP_ICONS[group.title] || "/file.svg"}
                      alt=""
                      width={26}
                      height={26}
                      className="h-[26px] w-[26px]"
                    />
                    <h3 className="text-base font-semibold tracking-wide text-neutral-600 dark:text-neutral-300">
                      {group.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {group.skills.map((skill) => (
                      <SkillChip key={skill.name} name={skill.name} icon={skill.icon} tone={skill.tone} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="projects">
        <Container>
          <div className="reveal">
            <h2 className="mb-8 text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-2xl">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="education">
        <Container>
          <div className="reveal">
            <h2 className="mb-8 text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-2xl">
              Education
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <article className="rounded-xl border border-black/10 bg-white/12 p-6 transition duration-200 hover:scale-[1.08] hover:border-black/20 hover:bg-white/45 dark:border-white/10 dark:bg-neutral-900/30 dark:hover:border-white/20 dark:hover:bg-neutral-900/30">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    Master of Information Technology (Artificial Intelligence)
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">
                    University of New South Wales (UNSW Sydney)
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Jan 2023 - Dec 2024 · Sydney, Australia
                  </p>
                  <ul className="space-y-2 pt-2 text-sm text-neutral-500 dark:text-neutral-400 sm:text-base">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500 dark:bg-neutral-400" />
                      <span>
                        Specialized in artificial intelligence, with coursework in machine
                        learning, data analytics, and intelligent systems.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500 dark:bg-neutral-400" />
                      <span>
                        Built a strong foundation in software engineering, distributed systems,
                        and modern web technologies through academic and project-based work.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500 dark:bg-neutral-400" />
                      <span>
                        Completed a full-stack capstone project developing a desk reservation
                        system with Flask, React, and PostgreSQL, focused on scalable backend
                        design and API-driven architecture.
                      </span>
                    </li>
                  </ul>
                </div>
              </article>

              <article className="rounded-xl border border-black/10 bg-white/12 p-6 transition duration-200 hover:scale-[1.08] hover:border-black/20 hover:bg-white/45 dark:border-white/10 dark:bg-neutral-900/30 dark:hover:border-white/20 dark:hover:bg-neutral-900/30">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    Bachelor of Engineering in Computer Science and Technology
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">
                    Beijing Institute of Technology, Zhuhai
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Sep 2018 - Jun 2022 · Zhuhai, China
                  </p>
                  <ul className="space-y-2 pt-2 text-sm text-neutral-500 dark:text-neutral-400 sm:text-base">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500 dark:bg-neutral-400" />
                      <span>GPA: 3.4 / 4.0</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500 dark:bg-neutral-400" />
                      <span>
                        Developed strong foundations in algorithms, data structures, database
                        systems, and computer networks.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500 dark:bg-neutral-400" />
                      <span>
                        Completed multiple software development projects involving system design
                        and programming in Python and Java.
                      </span>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="contact">
        <Container>
          <div className="reveal space-y-8">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-2xl">
                Contact Me
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">
                Feel free to reach out for collaborations, opportunities, or just a quick hello.
              </p>
            </div>

            <form className="w-full max-w-xl space-y-4" onSubmit={submitContactForm}>
              <input
                type="text"
                name="company"
                value={contactForm.company}
                onChange={updateContactField}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={contactForm.name}
                onChange={updateContactField}
                required
                className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-500 transition duration-150 hover:border-black/20 focus:border-black/30 focus:ring-1 focus:ring-black/20 focus:outline-none focus-visible:ring-1 focus-visible:ring-black/20 dark:border-white/10 dark:bg-neutral-900/50 dark:text-neutral-100 dark:hover:border-white/20 dark:focus:border-white/30 dark:focus:ring-white/20 dark:focus-visible:ring-white/20 sm:text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={contactForm.email}
                onChange={updateContactField}
                required
                className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-500 transition duration-150 hover:border-black/20 focus:border-black/30 focus:ring-1 focus:ring-black/20 focus:outline-none focus-visible:ring-1 focus-visible:ring-black/20 dark:border-white/10 dark:bg-neutral-900/50 dark:text-neutral-100 dark:hover:border-white/20 dark:focus:border-white/30 dark:focus:ring-white/20 dark:focus-visible:ring-white/20 sm:text-base"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={contactForm.message}
                onChange={updateContactField}
                required
                className="min-h-[120px] w-full resize-none rounded-md border border-black/10 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-500 transition duration-150 hover:border-black/20 focus:border-black/30 focus:ring-1 focus:ring-black/20 focus:outline-none focus-visible:ring-1 focus-visible:ring-black/20 dark:border-white/10 dark:bg-neutral-900/50 dark:text-neutral-100 dark:hover:border-white/20 dark:focus:border-white/30 dark:focus:ring-white/20 dark:focus-visible:ring-white/20 sm:text-base"
              />
              <button
                type="submit"
                disabled={isSubmittingContact}
                className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-100 transition duration-150 hover:bg-neutral-700 focus:outline-none focus-visible:ring-1 focus-visible:ring-black/20 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus-visible:ring-white/20"
              >
                {isSubmittingContact ? "Sending..." : "Send Message"}
              </button>
              {contactStatus.message ? (
                <p
                  className={`text-sm ${
                    contactStatus.type === "success"
                      ? "text-emerald-700 dark:text-emerald-300"
                      : "text-red-700 dark:text-red-300"
                  }`}
                >
                  {contactStatus.message}
                </p>
              ) : null}
            </form>

            <div className="flex items-center gap-5 pt-2">
              <a
                href="https://github.com/lllLucario"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-white text-neutral-700 transition duration-150 hover:border-black/20 hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-black/20 dark:border-white/10 dark:bg-neutral-900/40 dark:text-neutral-300 dark:hover:border-white/20 dark:hover:bg-neutral-900/70 dark:hover:text-neutral-100 dark:focus-visible:ring-white/20"
              >
                <span
                  aria-hidden="true"
                  className="h-4 w-4 bg-current"
                  style={{
                    WebkitMask: 'url("/github-icon.svg") center / contain no-repeat',
                    mask: 'url("/github-icon.svg") center / contain no-repeat',
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-white text-neutral-700 transition duration-150 hover:border-black/20 hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-black/20 dark:border-white/10 dark:bg-neutral-900/40 dark:text-neutral-300 dark:hover:border-white/20 dark:hover:bg-neutral-900/70 dark:hover:text-neutral-100 dark:focus-visible:ring-white/20"
              >
                <span
                  aria-hidden="true"
                  className="h-4 w-4 bg-current"
                  style={{
                    WebkitMask: 'url("/linkedin-icon.svg") center / contain no-repeat',
                    mask: 'url("/linkedin-icon.svg") center / contain no-repeat',
                  }}
                />
              </a>
              <a
                href="mailto:liu61x0801@gmail.com"
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-white text-neutral-700 transition duration-150 hover:border-black/20 hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-black/20 dark:border-white/10 dark:bg-neutral-900/40 dark:text-neutral-300 dark:hover:border-white/20 dark:hover:bg-neutral-900/70 dark:hover:text-neutral-100 dark:focus-visible:ring-white/20"
              >
                <span
                  aria-hidden="true"
                  className="h-4 w-4 bg-current"
                  style={{
                    WebkitMask: 'url("/email-icon.svg") center / contain no-repeat',
                    mask: 'url("/email-icon.svg") center / contain no-repeat',
                  }}
                />
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <footer className="pb-10 pt-2 sm:pb-14">
        <Container>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Yuxuan Liu
          </p>
        </Container>
      </footer>
    </main>
  );
}
