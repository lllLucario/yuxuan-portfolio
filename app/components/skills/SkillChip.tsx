import type { ReactNode } from "react";

type SkillChipProps = {
  name: string;
  icon?: string;
};

const ICONS: Record<string, ReactNode> = {
  nextjs: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 opacity-80" fill="none" stroke="currentColor">
      <path d="M5 18L12 6L19 18Z" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 opacity-80" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="8" ry="3.5" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="8" ry="3.5" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse
        cx="12"
        cy="12"
        rx="8"
        ry="3.5"
        strokeWidth="1.5"
        transform="rotate(120 12 12)"
      />
    </svg>
  ),
  ts: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 opacity-80" fill="none" stroke="currentColor">
      <rect x="4.5" y="4.5" width="15" height="15" rx="2.5" strokeWidth="1.5" />
      <path d="M9 9.2h6M12 9.2v5.6M14.5 12h3M16 12v2.8M15 14.8h2" strokeWidth="1.4" />
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 opacity-80" fill="none" stroke="currentColor">
      <path d="M5 10c1.5-2 3-3 4.5-3c2.2 0 3.1 1.2 4.1 2.4c1 1.2 1.8 2.1 3.9 2.1c1 0 2.1-.2 3.5-1.5" strokeWidth="1.5" />
      <path d="M5 16c1.5-2 3-3 4.5-3c2.2 0 3.1 1.2 4.1 2.4c1 1.2 1.8 2.1 3.9 2.1c1 0 2.1-.2 3.5-1.5" strokeWidth="1.5" />
    </svg>
  ),
  node: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 opacity-80" fill="none" stroke="currentColor">
      <path d="M12 3.5L19 7.5V15.5L12 19.5L5 15.5V7.5Z" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 8.5V14.5M9.5 10.5L14.5 12.5" strokeWidth="1.5" />
    </svg>
  ),
  django: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 opacity-80" fill="none" stroke="currentColor">
      <path d="M8 6H12.5C15.8 6 18 8.2 18 12C18 15.8 15.8 18 12.5 18H8Z" strokeWidth="1.6" />
      <path d="M11 10V14.2H12.8C14.4 14.2 15.3 13.3 15.3 12C15.3 10.7 14.4 10 12.8 10Z" strokeWidth="1.4" />
    </svg>
  ),
  postgres: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 opacity-80" fill="none" stroke="currentColor">
      <ellipse cx="12" cy="7.5" rx="6.5" ry="2.8" strokeWidth="1.5" />
      <path d="M5.5 7.5V15.5C5.5 17 8.4 18.2 12 18.2C15.6 18.2 18.5 17 18.5 15.5V7.5" strokeWidth="1.5" />
      <path d="M5.5 11.5C5.5 13 8.4 14.2 12 14.2C15.6 14.2 18.5 13 18.5 11.5" strokeWidth="1.5" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 opacity-80" fill="none" stroke="currentColor">
      <circle cx="7" cy="7" r="1.8" strokeWidth="1.5" />
      <circle cx="17" cy="7" r="1.8" strokeWidth="1.5" />
      <circle cx="12" cy="17" r="1.8" strokeWidth="1.5" />
      <path d="M8.8 7H15.2M12 15.2V8.8" strokeWidth="1.5" />
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 opacity-80" fill="none" stroke="currentColor">
      <rect x="5" y="10" width="3" height="3" strokeWidth="1.4" />
      <rect x="8.5" y="10" width="3" height="3" strokeWidth="1.4" />
      <rect x="12" y="10" width="3" height="3" strokeWidth="1.4" />
      <path d="M5 14.5H13.5C15.8 14.5 17.5 13.9 18.8 12.3" strokeWidth="1.5" />
      <path d="M17.2 10.4C18 10 18.8 10.1 19.4 10.7" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  vercel: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 opacity-80" fill="none" stroke="currentColor">
      <path d="M12 5L18.5 17H5.5Z" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
};

const DEFAULT_ICON = (
  <svg viewBox="0 0 24 24" className="h-4 w-4 opacity-80" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="4.5" strokeWidth="1.6" />
  </svg>
);

export default function SkillChip({ name, icon }: SkillChipProps) {
  const iconNode = (icon && ICONS[icon]) || DEFAULT_ICON;

  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900/60 px-3 py-1.5 text-sm text-neutral-200 hover:bg-neutral-900/80">
      <span className="text-neutral-300">{iconNode}</span>
      {name}
    </span>
  );
}
