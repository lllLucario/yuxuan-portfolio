export type Skill = {
  name: string;
  icon: string;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "ts" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "node" },
      { name: "Django", icon: "django" },
      { name: "PostgreSQL", icon: "postgres" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
];
