export type Project = {
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio CMS Dashboard",
    description: "A focused internal dashboard for managing portfolio content updates quickly.",
    highlights: [
      "Designed role-based content workflows for faster publishing.",
      "Built API-driven forms with robust validation and inline feedback.",
      "Improved content update turnaround through reusable admin modules.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    href: "https://github.com/lllLucario/portfolio-cms-dashboard",
  },
  {
    title: "Team Task Coordination App",
    description: "A lightweight collaboration app for tracking priorities and weekly delivery.",
    highlights: [
      "Implemented task lifecycle states with clear ownership and due dates.",
      "Added filtered views for sprint planning and daily execution.",
      "Integrated GitHub-style activity logging for transparent updates.",
    ],
    stack: ["React", "Node.js", "Django", "Docker", "Vercel"],
    href: "https://github.com/lllLucario/team-task-coordination-app",
  },
];
