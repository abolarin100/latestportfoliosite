"use client";

import { useTheme } from "./ThemeProvider";
import { SunIcon, MoonIcon } from "./icons";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="flex h-8 w-8 items-center justify-center rounded-md border border-line-strong text-fg-soft transition-all duration-150 hover:scale-105 hover:border-army hover:text-army active:scale-95"
    >
      {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </button>
  );
}
