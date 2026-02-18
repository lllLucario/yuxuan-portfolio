import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { skillGroups } from "@/app/data/skills";
import { projects } from "@/app/data/projects";
import SkillChip from "@/app/components/skills/SkillChip";

export default function Home() {
  return (
    <main className="pt-16">
      <Section id="hero">
        <Container>
          <div className="flex min-h-[80vh] items-center">
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
          <div className="space-y-8">
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
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-100">
              Featured Projects
            </h2>
            <div className="space-y-10">
              {projects.map((project) => (
                <article key={project.title} className="space-y-3">
                  <h3 className="text-xl font-medium text-neutral-100">{project.title}</h3>
                  <p className="text-base text-neutral-300">{project.description}</p>
                  <ul className="list-disc space-y-1 pl-5 text-neutral-300/90">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-neutral-400">{project.stack.join(", ")}</p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-200 hover:text-neutral-50"
                  >
                    View on GitHub ↗
                  </a>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="education">
        <Container>
          <div>Education</div>
        </Container>
      </Section>

      <Section id="contact">
        <Container>
          <div>Contact</div>
        </Container>
      </Section>
    </main>
  );
}
