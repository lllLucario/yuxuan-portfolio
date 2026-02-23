"use client";

import { useState } from "react";

type Theme = "light" | "dark";

const applyTheme = (theme: Theme) => {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
  localStorage.setItem("theme", theme);
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
      ? "dark"
      : "light"
  );

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="relative inline-flex items-center rounded-full border border-black/10 bg-white/60 p-1 shadow-sm backdrop-blur transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-black/20 dark:border-white/10 dark:bg-neutral-950/50 dark:focus-visible:ring-white/20"
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-1 left-1 h-9 w-9 rounded-full border border-black/10 bg-white/80 shadow-sm transition-transform duration-200 ease-out dark:border-white/10 dark:bg-neutral-900/70 ${
          theme === "dark" ? "translate-x-9" : "translate-x-0"
        }`}
      />

      <span
        aria-hidden="true"
        className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-150 ${
          theme === "light" ? "text-amber-500" : "text-neutral-600 dark:text-neutral-300"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 2.5v2.5M12 19v2.5M21.5 12H19M5 12H2.5M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8M18.7 18.7l-1.8-1.8M7.1 7.1 5.3 5.3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <span
        aria-hidden="true"
        className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-150 ${
          theme === "dark" ? "text-sky-300" : "text-neutral-600 dark:text-neutral-300"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M14.8 3.6a8.4 8.4 0 1 0 5.6 14.8A9 9 0 0 1 14.8 3.6Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M18.4 6.1v1.8M17.5 7h1.8M7.2 4.8v1.5M6.45 5.55h1.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </button>
  );
}
