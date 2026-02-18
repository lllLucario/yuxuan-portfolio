"use client";

import { useEffect } from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { skillGroups } from "@/app/data/skills";
import { projects } from "@/app/data/projects";
import SkillChip from "@/app/components/skills/SkillChip";
import ProjectCard from "@/app/components/projects/ProjectCard";

export default function Home() {
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

  return (
    <main className="pt-16">
      <Section id="hero">
        <Container>
          <div className="reveal flex min-h-[80vh] items-center">
            <div className="space-y-6">
              <h1 className="bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
                Full-Stack Developer
              </h1>
              <p className="text-lg text-neutral-200 sm:text-xl">Hi, I&apos;m Yuxuan Liu</p>
              <p className="max-w-2xl text-base text-neutral-300/80 sm:text-lg">
                I build clean, user-focused web applications.
              </p>
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-neutral-100 px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
              >
                View Resume
              </button>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="skills">
        <Container>
          <div className="reveal space-y-8">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-100">Skills</h2>
            <div className="space-y-5">
              {skillGroups.map((group) => (
                <div key={group.title} className="space-y-2">
                  <h3 className="text-sm font-medium uppercase tracking-wide text-neutral-400">
                    {group.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <SkillChip key={skill.name} name={skill.name} icon={skill.icon} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="projects">
        <Container>
          <div className="reveal space-y-8">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-100">
              Featured Projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="education">
        <Container>
          <div className="reveal space-y-8">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-100">Education</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <article className="rounded-xl border border-white/10 bg-neutral-900/30 p-6 hover:bg-neutral-900/40">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-neutral-100">
                    Master of Science in Computer Science
                  </h3>
                  <p className="text-sm text-neutral-300">
                    University of Example, Department of Computer Science
                  </p>
                  <p className="text-xs text-neutral-400">2022 - 2024</p>
                  <p className="text-sm text-neutral-400">
                    Focused on scalable web systems, distributed architecture, and product
                    engineering.
                  </p>
                </div>
              </article>

              <article className="rounded-xl border border-white/10 bg-neutral-900/30 p-6 hover:bg-neutral-900/40">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-neutral-100">
                    Bachelor of Engineering in Software Engineering
                  </h3>
                  <p className="text-sm text-neutral-300">Example Institute of Technology</p>
                  <p className="text-xs text-neutral-400">2018 - 2022</p>
                  <p className="text-sm text-neutral-400">
                    Built a strong foundation in full-stack development, databases, and team
                    software delivery.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="contact">
        <Container>
          <div className="reveal space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-100">Contact Me</h2>
              <p className="text-sm text-neutral-300">
                Feel free to reach out for collaborations, opportunities, or just a quick hello.
              </p>
            </div>

            <form className="max-w-xl space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full rounded-md border border-white/10 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 transition-colors duration-150 hover:border-white/20 focus:border-white/30 focus:ring-1 focus:ring-white/20 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-md border border-white/10 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 transition-colors duration-150 hover:border-white/20 focus:border-white/30 focus:ring-1 focus:ring-white/20 focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                className="min-h-[120px] w-full resize-none rounded-md border border-white/10 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 transition-colors duration-150 hover:border-white/20 focus:border-white/30 focus:ring-1 focus:ring-white/20 focus:outline-none"
              />
              <button
                type="button"
                className="rounded-md bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200 active:scale-[0.99]"
              >
                Send Message
              </button>
            </form>

            <div className="flex items-center gap-5 pt-6">
              <a
                href="https://github.com/lllLucario"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-neutral-900/40 text-neutral-300 transition-all duration-150 hover:border-white/20 hover:bg-neutral-900/70 hover:text-neutral-100 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/30 active:scale-[0.97]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor">
                  <path
                    d="M9 19c-4 1.2-4-2-6-2m12 4v-3.1c0-.9.1-1.4-.4-2c1.8-.2 3.9-.9 3.9-4.1 0-.9-.3-1.7-.9-2.3.1-.3.4-1.2-.1-2.5 0 0-.8-.3-2.6 1A8.9 8.9 0 0012 7.8c-.9 0-1.9.1-2.8.4-1.8-1.3-2.6-1-2.6-1-.5 1.3-.2 2.2-.1 2.5-.6.6-.9 1.4-.9 2.3 0 3.2 2.1 3.9 3.9 4.1-.5.6-.5 1.2-.5 2V21"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-neutral-900/40 text-neutral-300 transition-all duration-150 hover:border-white/20 hover:bg-neutral-900/70 hover:text-neutral-100 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/30 active:scale-[0.97]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor">
                  <rect x="4" y="4" width="16" height="16" rx="2.5" strokeWidth="1.5" />
                  <path d="M8 10v6M8 8h.01M12 16v-3.3c0-1.6 2-1.8 2 0V16m0-2.6V10" strokeWidth="1.5" />
                </svg>
              </a>
              <a
                href="mailto:placeholder@example.com"
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-neutral-900/40 text-neutral-300 transition-all duration-150 hover:border-white/20 hover:bg-neutral-900/70 hover:text-neutral-100 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/30 active:scale-[0.97]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor">
                  <rect x="3.5" y="6.5" width="17" height="11" rx="2" strokeWidth="1.5" />
                  <path d="M4.5 8l7.5 5l7.5-5" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
