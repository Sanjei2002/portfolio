"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-xl 
        bg-slate-900/80 backdrop-blur-md border border-slate-700/50
        hover:border-dracula-purple/50 transition-all duration-300 group
        shadow-lg shadow-purple-500/10"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-dracula-yellow group-hover:text-dracula-orange transition-colors duration-200" />
      ) : (
        <Moon className="w-5 h-5 text-dracula-purple group-hover:text-dracula-pink transition-colors duration-200" />
      )}
    </button>
  );
}
