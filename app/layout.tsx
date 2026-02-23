import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import CursorLens from "@/app/components/effects/CursorLens";
import ThemeToggle from "@/app/components/theme/ThemeToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Yuxuan Liu",
    template: "%s | Yuxuan Liu",
  },
  description: "Full-Stack Developer portfolio showcasing projects and skills.",
  keywords: ["Yuxuan Liu", "Portfolio", "Full-Stack Developer", "Next.js"],
  authors: [{ name: "Yuxuan Liu" }],
};

const themeInitScript = `
(() => {
  try {
    const stored = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored === "light" || stored === "dark" ? stored : (systemDark ? "dark" : "light");
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  } catch {
    document.documentElement.classList.add("dark");
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorLens />
        <div className="lens-overlay" aria-hidden="true" />
        <div className="relative z-10">
          <div className="fixed top-0 left-0 z-50 w-full pt-3 sm:pt-4">
            <Container>
              <div className="relative flex items-center justify-center">
                <Navbar />
                <div className="absolute top-1/2 right-0 -translate-y-1/2 sm:right-auto sm:left-full sm:ml-3">
                  <ThemeToggle />
                </div>
              </div>
            </Container>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
