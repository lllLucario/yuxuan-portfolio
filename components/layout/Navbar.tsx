"use client";

import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import ThemeToggle from "@/app/components/theme/ThemeToggle";

const NAV_ITEMS = [
  { href: "#hero", id: "hero", label: "I'm" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#education", id: "education", label: "Education" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<(typeof NAV_ITEMS)[number]["id"]>("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      const offset = 140;
      const scrollPos = window.scrollY + offset;
      let currentSection: (typeof NAV_ITEMS)[number]["id"] = "hero";

      NAV_ITEMS.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;
        const top = section.offsetTop;
        if (scrollPos >= top) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full pt-3 sm:pt-4">
      <Container>
        <div className="mx-auto w-fit">
          <div
            className={`flex h-12 items-center gap-2 rounded-full border px-4 shadow-sm backdrop-blur transition-colors transition-shadow duration-200 sm:h-14 sm:px-6 ${
              scrolled
                ? "border-black/15 bg-white/75 shadow-md dark:border-white/15 dark:bg-neutral-950/65"
                : "border-black/10 bg-white/60 dark:border-white/10 dark:bg-neutral-950/50"
            }`}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden items-center gap-2 sm:flex">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-black/20 dark:focus-visible:ring-white/20 ${
                        isActive
                          ? "bg-black/8 text-neutral-900 font-semibold shadow-sm dark:bg-white/15 dark:text-neutral-100"
                          : "text-neutral-500 hover:bg-black/5 hover:text-neutral-700 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-neutral-100"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
              <div className="hidden h-6 w-px bg-black/10 dark:bg-white/10 sm:block" />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
