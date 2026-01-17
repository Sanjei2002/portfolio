"use client";

import { ReactNode, useState, useEffect } from "react";
import { LucideIcon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface SystemModuleProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon: LucideIcon;
  status?: "online" | "active" | "idle" | "syncing";
  version?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

const statusConfig = {
  online: { label: "Online", color: "bg-green-500", pulse: false },
  active: { label: "Active", color: "bg-cyan-500", pulse: true },
  idle: { label: "Idle", color: "bg-yellow-500", pulse: false },
  syncing: { label: "Syncing", color: "bg-purple-500", pulse: true },
};

export default function SystemModule({
  title,
  subtitle,
  description,
  icon: Icon,
  status = "online",
  version = "v1.0.0",
  children,
  className = "",
  delay = 0,
}: SystemModuleProps) {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const statusInfo = statusConfig[status];

  return (
    <section
      className={`
        relative overflow-hidden
        rounded-2xl
        transition-all duration-500 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${isHovered ? "scale-[1.01]" : "scale-100"}
        ${className}
      `}
      style={{
        transitionDelay: `${delay}ms`,
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Module Background with Glassmorphism */}
      <div
        className={`
          absolute inset-0 rounded-2xl
          ${theme === "dark" 
            ? "bg-slate-950/70 backdrop-blur-xl" 
            : "bg-white/85 backdrop-blur-xl"
          }
          border
          ${theme === "dark" 
            ? "border-slate-800/50" 
            : "border-slate-200/50"
          }
          ${isHovered 
            ? theme === "dark" 
              ? "border-purple-500/30 shadow-lg shadow-purple-500/10" 
              : "border-sky-500/30 shadow-lg shadow-sky-500/10"
            : ""
          }
          transition-all duration-300
        `}
      />

      {/* Corner Markers */}
      <div className={`absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 rounded-tl-2xl ${theme === "dark" ? "border-purple-500/40" : "border-sky-500/40"}`} />
      <div className={`absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 rounded-tr-2xl ${theme === "dark" ? "border-purple-500/40" : "border-sky-500/40"}`} />
      <div className={`absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 rounded-bl-2xl ${theme === "dark" ? "border-purple-500/20" : "border-sky-500/20"}`} />
      <div className={`absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 rounded-br-2xl ${theme === "dark" ? "border-purple-500/20" : "border-sky-500/20"}`} />

      {/* Content Container */}
      <div className="relative z-10 p-8">
        {/* Module Header Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {/* Icon with glow */}
            <div className={`
              relative p-2 rounded-lg
              ${theme === "dark" 
                ? "bg-purple-500/10 text-dracula-purple" 
                : "bg-sky-500/10 text-sky-600"
              }
            `}>
              <Icon className="w-5 h-5" />
              {isHovered && (
                <div className={`absolute inset-0 rounded-lg ${theme === "dark" ? "bg-purple-500/20" : "bg-sky-500/20"} animate-pulse`} />
              )}
            </div>

            {/* Title */}
            <div>
              <span className={`
                text-[10px] font-mono uppercase tracking-wider
                ${theme === "dark" ? "text-dracula-comment" : "text-slate-500"}
              `}>
                SYSTEM MODULE
              </span>
              <h3 className={`
                font-semibold text-lg -mt-0.5
                ${theme === "dark" ? "text-dracula-fg" : "text-slate-900"}
              `}>
                {title}
              </h3>
              {subtitle && (
                <span className={`
                  text-xs font-medium
                  ${theme === "dark" ? "text-dracula-purple" : "text-sky-600"}
                `}>
                  {subtitle}
                </span>
              )}
            </div>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-4">
            {/* Version Badge */}
            <span className={`
              text-[10px] font-mono px-2 py-1 rounded
              ${theme === "dark" 
                ? "bg-slate-800/50 text-dracula-comment" 
                : "bg-slate-100 text-slate-500"
              }
            `}>
              {version}
            </span>

            {/* Status Dot */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className={`w-2 h-2 rounded-full ${statusInfo.color}`} />
                {statusInfo.pulse && (
                  <div className={`absolute inset-0 w-2 h-2 rounded-full ${statusInfo.color} animate-ping opacity-75`} />
                )}
              </div>
              <span className={`
                text-[10px] font-mono uppercase tracking-wide
                ${theme === "dark" ? "text-dracula-comment" : "text-slate-500"}
              `}>
                {statusInfo.label}
              </span>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className={`
          w-full h-px mb-4
          ${theme === "dark" 
            ? "bg-gradient-to-r from-purple-500/30 via-slate-700/50 to-transparent" 
            : "bg-gradient-to-r from-sky-500/30 via-slate-300/50 to-transparent"
          }
        `} />

        {/* Module Description */}
        {description && (
          <p className={`
            text-sm leading-relaxed mb-6
            ${theme === "dark" ? "text-dracula-comment" : "text-slate-600"}
          `}>
            {description}
          </p>
        )}

        {/* Module Content */}
        <div className="relative">
          {children}
        </div>
      </div>

      {/* Hover Glow Effect */}
      {isHovered && (
        <div className={`
          absolute inset-0 rounded-2xl pointer-events-none
          ${theme === "dark" 
            ? "bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" 
            : "bg-gradient-to-br from-sky-500/5 via-transparent to-cyan-500/5"
          }
        `} />
      )}
    </section>
  );
}
