"use client";

import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";

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
        scrolled ? "border-b border-white/10 bg-neutral-950/60 backdrop-blur" : ""
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="text-sm text-neutral-200 hover:text-neutral-50">
            Yuxuan Liu
          </a>
          <div className="hidden items-center gap-6 sm:flex">
            <a href="#skills" className="text-sm text-neutral-200 hover:text-neutral-50">
              Skills
            </a>
            <a href="#projects" className="text-sm text-neutral-200 hover:text-neutral-50">
              Projects
            </a>
            <a href="#education" className="text-sm text-neutral-200 hover:text-neutral-50">
              Education
            </a>
            <a href="#contact" className="text-sm text-neutral-200 hover:text-neutral-50">
              Contact
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
}
