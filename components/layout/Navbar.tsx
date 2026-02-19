"use client";

import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import ThemeToggle from "@/app/components/theme/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full ${
        scrolled
          ? "border-b border-black/10 bg-neutral-100/70 backdrop-blur dark:border-white/10 dark:bg-neutral-950/60"
          : ""
      }`}
    >
      <Container>
        <div className="flex h-14 items-center justify-between sm:h-16">
          <a
            href="#hero"
            className="text-sm text-neutral-700 transition duration-150 hover:text-neutral-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-black/20 dark:text-neutral-200 dark:hover:text-neutral-50 dark:focus-visible:ring-white/20"
          >
            Yuxuan Liu
          </a>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden items-center gap-6 sm:flex">
              <a
                href="#skills"
                className="text-sm text-neutral-700 transition duration-150 hover:text-neutral-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-black/20 dark:text-neutral-200 dark:hover:text-neutral-50 dark:focus-visible:ring-white/20"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-sm text-neutral-700 transition duration-150 hover:text-neutral-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-black/20 dark:text-neutral-200 dark:hover:text-neutral-50 dark:focus-visible:ring-white/20"
              >
                Projects
              </a>
              <a
                href="#education"
                className="text-sm text-neutral-700 transition duration-150 hover:text-neutral-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-black/20 dark:text-neutral-200 dark:hover:text-neutral-50 dark:focus-visible:ring-white/20"
              >
                Education
              </a>
              <a
                href="#contact"
                className="text-sm text-neutral-700 transition duration-150 hover:text-neutral-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-black/20 dark:text-neutral-200 dark:hover:text-neutral-50 dark:focus-visible:ring-white/20"
              >
                Contact
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </nav>
  );
}
