export type Skill = {
  name: string;
  icon: string;
  tone: "mono" | "color";
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: "nextjs", tone: "mono" },
      { name: "React", icon: "react", tone: "color" },
      { name: "TypeScript", icon: "ts", tone: "color" },
      { name: "Tailwind CSS", icon: "tailwind", tone: "color" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "node", tone: "color" },
      { name: "Django", icon: "django", tone: "color" },
      { name: "PostgreSQL", icon: "postgres", tone: "color" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "git", tone: "color" },
      { name: "Docker", icon: "docker", tone: "color" },
      { name: "Vercel", icon: "vercel", tone: "mono" },
    ],
  },
];
