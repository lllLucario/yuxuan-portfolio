import Image from "next/image";

type SkillChipProps = {
  name: string;
  icon?: string;
};

const ICONS: Record<string, string> = {
  nextjs: "/nextjs.svg",
  react: "/react-icon.svg",
  ts: "/typescript-icon.svg",
  tailwind: "/tailwind.svg",
  node: "/nodejs.svg",
  django: "/django-icon.svg",
  postgres: "/postgresql.svg",
  git: "/git-icon.svg",
  docker: "/docker-icon.svg",
  vercel: "/vercel.svg",
};

const DEFAULT_ICON = "/file.svg";

export default function SkillChip({ name, icon }: SkillChipProps) {
  const iconSrc = (icon && ICONS[icon]) || DEFAULT_ICON;

  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-neutral-200/70 px-3 py-1.5 text-sm text-neutral-700 transition duration-150 hover:border-black/20 hover:bg-neutral-200 dark:border-white/10 dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:border-white/20 dark:hover:bg-neutral-900/80">
      <Image src={iconSrc} alt="" width={16} height={16} className="h-4 w-4 opacity-80 dark:brightness-90" />
      {name}
    </span>
  );
}
