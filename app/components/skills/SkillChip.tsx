import Image from "next/image";

type SkillChipProps = {
  name: string;
  icon?: string;
  tone?: "mono" | "color";
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

export default function SkillChip({ name, icon, tone = "color" }: SkillChipProps) {
  const iconSrc = (icon && ICONS[icon]) || DEFAULT_ICON;
  const isMono = tone === "mono";
  const monoIconClass = "w-4 h-4 text-neutral-900 dark:text-neutral-100";
  const colorIconClass = "w-4 h-4";

  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-1.5 text-sm text-neutral-700 transition duration-150 hover:border-black/20 hover:bg-neutral-100 dark:border-white/10 dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:border-white/20 dark:hover:bg-neutral-900/80">
      {isMono ? (
        <span
          aria-hidden="true"
          className={`${monoIconClass} bg-current`}
          style={{
            WebkitMask: `url("${iconSrc}") center / contain no-repeat`,
            mask: `url("${iconSrc}") center / contain no-repeat`,
          }}
        />
      ) : (
        <Image src={iconSrc} alt="" width={16} height={16} className={colorIconClass} />
      )}
      {name}
    </span>
  );
}
