import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export default function Home() {
  return (
    <main>
      <Section id="hero">
        <Container>
          <div>Hero</div>
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
