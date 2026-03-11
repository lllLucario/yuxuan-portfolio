export type Project = {
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  href: string;
  links?: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "MediaJira (Campaign Operations Platform)",
    description:
      "Decision Module contribution: a full-stack workflow system for managing draft, approval, review, and linked execution within a larger campaign operations platform.",
    highlights: [
      "Designed and implemented a lifecycle-driven Decision module with approval gates, audited transitions, review loops, and linked execution tasks.",
      "Built full-stack Next.js and Django flows for drafting, approval handling, review UX, and graph-based decision relationships beyond basic CRUD behavior.",
      "Integrated the module into a larger multi-feature platform while keeping workflow rules and lifecycle constraints enforced on the backend.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Django REST Framework", "PostgreSQL", "Docker", "Redis"],
    href: "https://github.com/quanwangniuniu/mediaJira",
    links: [
      {
        label: "View on GitHub ↗",
        href: "https://github.com/quanwangniuniu/mediaJira",
      },
      {
        label: "View PRs ↗",
        href: "https://github.com/quanwangniuniu/mediaJira/issues?q=is%3Apr%20author%3AlllLucario",
      },
    ],
  },
  {
    title: "Hot Desk Reservation Platform",
    description:
      "A full-stack workspace reservation system with real-time desk updates, role-based flows, and containerized local deployment.",
    highlights: [
      "Built end-to-end booking workflows with Flask, React, PostgreSQL, and JWT-based authentication for desk and reservation management.",
      "Implemented real-time desk availability updates using Postgres triggers, LISTEN/NOTIFY, and Socket.IO synchronization.",
      "Delivered a Dockerized multi-service setup covering frontend, backend, and database environments for local development.",
    ],
    stack: ["React", "Flask", "PostgreSQL", "JWT", "Socket.IO", "Docker"],
    href: "https://github.com/lllLucario/portfolio-cms-dashboard",
  },
];
