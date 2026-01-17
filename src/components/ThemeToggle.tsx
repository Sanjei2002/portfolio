"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-xl 
        bg-slate-900/80 dark:bg-slate-900/80 light:bg-white/80
        backdrop-blur-md border 
        border-slate-700/50 dark:border-slate-700/50 light:border-slate-300/50
        hover:border-dracula-purple/50 dark:hover:border-dracula-purple/50 light:hover:border-blueprint-accent/50
        transition-all duration-300 group
        shadow-lg shadow-purple-500/10 dark:shadow-purple-500/10 light:shadow-slate-400/20"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-dracula-yellow group-hover:text-dracula-orange transition-colors duration-200" />
      ) : (
        <Moon className="w-5 h-5 text-blueprint-accent group-hover:text-blueprint-line transition-colors duration-200" />
      )}
    </button>
  );
}
