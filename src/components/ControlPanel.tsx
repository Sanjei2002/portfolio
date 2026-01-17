"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { useViewMode } from "./ViewModeContext";
import { 
  Layers, 
  Bug, 
  Sun, 
  Moon, 
  Map,
  ChevronRight,
  Maximize2,
  Monitor,
} from "lucide-react";

export default function ControlPanel() {
  const { theme, toggleTheme } = useTheme();
  const { 
    viewMode, 
    toggleSystemMap, 
    toggleDebugMode,
    isSystemMapActive,
    isDebugModeActive,
  } = useViewMode();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`
        fixed top-6 right-6 z-50
        flex items-start gap-2
      `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Expanded Controls */}
      <div className={`
        flex items-center gap-2
        transition-all duration-300 ease-out
        ${isExpanded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}
      `}>
        {/* System Map Toggle */}
        <button
          onClick={toggleSystemMap}
          className={`
            group relative p-3 rounded-xl
            ${theme === "dark" 
              ? "bg-slate-900/80 hover:bg-slate-800/80" 
              : "bg-white/80 hover:bg-white"
            }
            backdrop-blur-md border
            ${isSystemMapActive
              ? theme === "dark"
                ? "border-dracula-purple shadow-lg shadow-purple-500/20"
                : "border-sky-500 shadow-lg shadow-sky-500/20"
              : theme === "dark"
                ? "border-slate-700/50 hover:border-dracula-purple/50"
                : "border-slate-300/50 hover:border-sky-500/50"
            }
            transition-all duration-200
          `}
          title="View System Architecture"
        >
          <Map className={`
            w-5 h-5
            ${isSystemMapActive
              ? theme === "dark" ? "text-dracula-purple" : "text-sky-600"
              : theme === "dark" ? "text-dracula-comment group-hover:text-dracula-purple" : "text-slate-500 group-hover:text-sky-600"
            }
            transition-colors duration-200
          `} />
          
          {/* Tooltip */}
          <span className={`
            absolute -bottom-8 left-1/2 -translate-x-1/2
            px-2 py-1 rounded text-xs font-medium whitespace-nowrap
            ${theme === "dark" ? "bg-slate-800 text-dracula-fg" : "bg-slate-900 text-white"}
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            pointer-events-none
          `}>
            System Map
          </span>
        </button>

        {/* Debug Mode Toggle */}
        <button
          onClick={toggleDebugMode}
          className={`
            group relative p-3 rounded-xl
            ${theme === "dark" 
              ? "bg-slate-900/80 hover:bg-slate-800/80" 
              : "bg-white/80 hover:bg-white"
            }
            backdrop-blur-md border
            ${isDebugModeActive
              ? theme === "dark"
                ? "border-dracula-green shadow-lg shadow-green-500/20"
                : "border-emerald-500 shadow-lg shadow-emerald-500/20"
              : theme === "dark"
                ? "border-slate-700/50 hover:border-dracula-green/50"
                : "border-slate-300/50 hover:border-emerald-500/50"
            }
            transition-all duration-200
          `}
          title="Debug Mode"
        >
          <Bug className={`
            w-5 h-5
            ${isDebugModeActive
              ? theme === "dark" ? "text-dracula-green" : "text-emerald-600"
              : theme === "dark" ? "text-dracula-comment group-hover:text-dracula-green" : "text-slate-500 group-hover:text-emerald-600"
            }
            transition-colors duration-200
          `} />
          
          {/* Tooltip */}
          <span className={`
            absolute -bottom-8 left-1/2 -translate-x-1/2
            px-2 py-1 rounded text-xs font-medium whitespace-nowrap
            ${theme === "dark" ? "bg-slate-800 text-dracula-fg" : "bg-slate-900 text-white"}
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            pointer-events-none
          `}>
            Debug View
          </span>
        </button>
      </div>

      {/* Primary Toggle (Theme) */}
      <button
        onClick={toggleTheme}
        className={`
          group relative p-3 rounded-xl
          ${theme === "dark" 
            ? "bg-slate-900/80 hover:bg-slate-800/80" 
            : "bg-white/80 hover:bg-white"
          }
          backdrop-blur-md border
          ${theme === "dark" 
            ? "border-slate-700/50 hover:border-dracula-purple/50" 
            : "border-slate-300/50 hover:border-sky-500/50"
          }
          shadow-lg
          ${theme === "dark" ? "shadow-purple-500/10" : "shadow-slate-400/20"}
          transition-all duration-200
        `}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-dracula-yellow group-hover:text-dracula-orange transition-colors duration-200" />
        ) : (
          <Moon className="w-5 h-5 text-sky-600 group-hover:text-sky-700 transition-colors duration-200" />
        )}

        {/* Expand Indicator */}
        <div className={`
          absolute -left-1 top-1/2 -translate-y-1/2
          transition-all duration-200
          ${isExpanded ? "opacity-0 -translate-x-2" : "opacity-100"}
        `}>
          <ChevronRight className={`w-3 h-3 ${theme === "dark" ? "text-dracula-comment" : "text-slate-400"}`} />
        </div>
      </button>
    </div>
  );
}
