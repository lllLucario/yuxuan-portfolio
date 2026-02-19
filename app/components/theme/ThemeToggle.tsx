"use client";

type Theme = "light" | "dark";

const applyTheme = (theme: Theme) => {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
  localStorage.setItem("theme", theme);
};

export default function ThemeToggle() {
  const toggleTheme = () => {
    const current: Theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    const nextTheme: Theme = current === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md text-neutral-700 transition duration-150 hover:bg-neutral-200/70 hover:text-neutral-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-black/20 dark:text-neutral-300 dark:hover:bg-neutral-900/60 dark:hover:text-neutral-100 dark:focus-visible:ring-white/20"
    >
      ◐
    </button>
  );
}
