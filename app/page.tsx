import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export default function Home() {
  return (
    <main className="pt-16">
      <Section id="hero">
        <Container>
          <div className="flex min-h-[80vh] items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-neutral-50 sm:text-5xl">
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
          <div>Skills</div>
        </Container>
      </Section>

      <Section id="projects">
        <Container>
          <div>Projects</div>
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
