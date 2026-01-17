"use client";

import { useState, useEffect } from "react";
import { Activity, CheckCircle, Terminal, Info } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import portfolioData from "@/data/info.json";
import type { PortfolioData } from "@/types/portfolio";

const data = portfolioData as PortfolioData;

export default function SystemBanner() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const systemStatus = data.system?.status || "operational";
  const systemBuild = data.system?.build || "2026.01.17";
  const systemVersion = data.system?.version || "v2.3.1";

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl mb-8
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      {/* Background with Acrylic Effect */}
      <div
        className={`
          absolute inset-0 rounded-2xl
          ${theme === "dark"
            ? "bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-purple-950/30 backdrop-blur-2xl"
            : "bg-gradient-to-br from-white/95 via-slate-50/95 to-sky-50/80 backdrop-blur-2xl"
          }
          border
          ${theme === "dark"
            ? "border-purple-500/20"
            : "border-sky-500/20"
          }
          shadow-xl
          ${theme === "dark"
            ? "shadow-purple-500/5"
            : "shadow-sky-500/10"
          }
        `}
      />

      {/* Accent Gradient Bar */}
      <div
        className={`
          absolute top-0 left-0 right-0 h-1
          ${theme === "dark"
            ? "bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500"
            : "bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500"
          }
        `}
      />

      {/* Content */}
      <div className="relative z-10 p-6 pt-5">
        {/* Header Row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div
              className={`
                p-2.5 rounded-xl
                ${theme === "dark"
                  ? "bg-purple-500/10 text-dracula-purple"
                  : "bg-sky-500/10 text-sky-600"
                }
              `}
            >
              <Terminal className="w-5 h-5" />
            </div>

            {/* Title Block */}
            <div>
              <span
                className={`
                  text-[10px] font-mono uppercase tracking-widest
                  ${theme === "dark" ? "text-dracula-comment" : "text-slate-500"}
                `}
              >
                PORTFOLIO INTERFACE
              </span>
              <h2
                className={`
                  text-xl font-bold -mt-0.5
                  ${theme === "dark" ? "text-dracula-fg" : "text-slate-900"}
                `}
              >
                System Overview
              </h2>
            </div>
          </div>

          {/* Status Badges */}
          <div className="flex items-center gap-3">
            {/* Status */}
            <div
              className={`
                flex items-center gap-2 px-3 py-1.5 rounded-lg
                ${theme === "dark"
                  ? "bg-green-500/10 border border-green-500/20"
                  : "bg-green-50 border border-green-200"
                }
              `}
            >
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping opacity-50" />
              </div>
              <span
                className={`
                  text-[10px] font-mono uppercase tracking-wide
                  ${theme === "dark" ? "text-green-400" : "text-green-700"}
                `}
              >
                {systemStatus}
              </span>
            </div>

            {/* Build */}
            <div
              className={`
                flex items-center gap-2 px-3 py-1.5 rounded-lg
                ${theme === "dark"
                  ? "bg-slate-800/50 border border-slate-700/50"
                  : "bg-slate-100 border border-slate-200"
                }
              `}
            >
              <span
                className={`
                  text-[10px] font-mono
                  ${theme === "dark" ? "text-dracula-comment" : "text-slate-500"}
                `}
              >
                Build:
              </span>
              <span
                className={`
                  text-[10px] font-mono font-medium
                  ${theme === "dark" ? "text-dracula-fg" : "text-slate-700"}
                `}
              >
                {systemBuild}
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`
            w-full h-px mb-4
            ${theme === "dark"
              ? "bg-gradient-to-r from-purple-500/30 via-slate-700/30 to-transparent"
              : "bg-gradient-to-r from-sky-500/30 via-slate-300/30 to-transparent"
            }
          `}
        />

        {/* Description Block */}
        <div className="space-y-3">
          {/* Primary Description */}
          <p
            className={`
              text-base leading-relaxed
              ${theme === "dark" ? "text-dracula-fg" : "text-slate-800"}
            `}
          >
            {data.profile?.bio || "Enterprise Windows Application Engineer building and operating long-lived production systems."}
          </p>

          {/* Onboarding Note */}
          <div
            className={`
              flex items-start gap-3 p-3 rounded-lg
              ${theme === "dark"
                ? "bg-cyan-500/5 border border-cyan-500/10"
                : "bg-sky-50 border border-sky-100"
              }
            `}
          >
            <Info
              className={`
                w-4 h-4 mt-0.5 flex-shrink-0
                ${theme === "dark" ? "text-dracula-cyan" : "text-sky-600"}
              `}
            />
            <p
              className={`
                text-sm leading-relaxed
                ${theme === "dark" ? "text-dracula-comment" : "text-slate-600"}
              `}
            >
              This portfolio is presented as a software system. Each module below represents a real engineering layer of my career — from core capabilities to deployed production systems.
            </p>
          </div>
        </div>

        {/* Quick Stats Row */}
        <div className="flex items-center gap-6 mt-4 pt-4 border-t border-slate-700/20">
          <div className="flex items-center gap-2">
            <CheckCircle
              className={`w-4 h-4 ${theme === "dark" ? "text-dracula-green" : "text-green-600"}`}
            />
            <span
              className={`
                text-xs font-mono
                ${theme === "dark" ? "text-dracula-comment" : "text-slate-500"}
              `}
            >
              {data.experience?.length || 1} Deployment{(data.experience?.length || 1) > 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Activity
              className={`w-4 h-4 ${theme === "dark" ? "text-dracula-cyan" : "text-sky-600"}`}
            />
            <span
              className={`
                text-xs font-mono
                ${theme === "dark" ? "text-dracula-comment" : "text-slate-500"}
              `}
            >
              {Object.keys(data.skills || {}).length} Capability Domains
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal
              className={`w-4 h-4 ${theme === "dark" ? "text-dracula-purple" : "text-purple-600"}`}
            />
            <span
              className={`
                text-xs font-mono
                ${theme === "dark" ? "text-dracula-comment" : "text-slate-500"}
              `}
            >
              {systemVersion}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
