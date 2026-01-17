"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Activity, Wifi, Cpu, Clock, Zap } from "lucide-react";
import portfolioData from "@/data/info.json";
import type { PortfolioData } from "@/types/portfolio";

const data = portfolioData as PortfolioData;

interface TelemetryData {
  uptime: string;
  status: "operational" | "degraded" | "offline";
  latency: number;
  build: string;
  lastSync: string;
}

export default function TelemetryIndicator() {
  const { theme } = useTheme();
  const system = data.system;
  
  const [telemetry, setTelemetry] = useState<TelemetryData>({
    uptime: system?.uptime || "99.9%",
    status: (system?.status as TelemetryData["status"]) || "operational",
    latency: system?.telemetry?.latency || 42,
    build: system?.build || "2026.01.01",
    lastSync: "Just now",
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate live telemetry updates
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        ...prev,
        latency: Math.floor(Math.random() * 20) + 35,
        lastSync: "Just now",
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const statusColors = {
    operational: "text-green-500",
    degraded: "text-yellow-500",
    offline: "text-red-500",
  };

  return (
    <div
      className={`
        fixed bottom-6 left-6 z-40
        hidden lg:flex flex-col gap-1
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      {/* System Status Bar */}
      <div className={`
        flex items-center gap-4 px-4 py-2 rounded-lg
        ${theme === "dark" 
          ? "bg-slate-900/90 border border-slate-800/50" 
          : "bg-white/90 border border-slate-200/50"
        }
        backdrop-blur-md
        font-mono text-[10px] uppercase tracking-wider
      `}>
        {/* Status */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className={`w-1.5 h-1.5 rounded-full ${telemetry.status === "operational" ? "bg-green-500" : "bg-yellow-500"}`} />
            {telemetry.status === "operational" && (
              <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-green-500 animate-ping opacity-50" />
            )}
          </div>
          <span className={statusColors[telemetry.status]}>
            {telemetry.status}
          </span>
        </div>

        {/* Divider */}
        <div className={`w-px h-3 ${theme === "dark" ? "bg-slate-700" : "bg-slate-300"}`} />

        {/* Latency */}
        <div className={`flex items-center gap-1.5 ${theme === "dark" ? "text-dracula-cyan" : "text-sky-600"}`}>
          <Zap className="w-3 h-3" />
          <span>{telemetry.latency}ms</span>
        </div>

        {/* Divider */}
        <div className={`w-px h-3 ${theme === "dark" ? "bg-slate-700" : "bg-slate-300"}`} />

        {/* Build */}
        <div className={`flex items-center gap-1.5 ${theme === "dark" ? "text-dracula-comment" : "text-slate-500"}`}>
          <span>Build: {telemetry.build}</span>
        </div>

        {/* Divider */}
        <div className={`w-px h-3 ${theme === "dark" ? "bg-slate-700" : "bg-slate-300"}`} />

        {/* Uptime */}
        <div className={`flex items-center gap-1.5 ${theme === "dark" ? "text-dracula-green" : "text-emerald-600"}`}>
          <Activity className="w-3 h-3" />
          <span>{telemetry.uptime}</span>
        </div>
      </div>
    </div>
  );
}

// Mini status component for section headers
export function StatusDot({ 
  status = "online",
  showLabel = false,
}: { 
  status?: "online" | "active" | "idle" | "syncing";
  showLabel?: boolean;
}) {
  const { theme } = useTheme();
  
  const colors = {
    online: "bg-green-500",
    active: "bg-cyan-500",
    idle: "bg-yellow-500",
    syncing: "bg-purple-500",
  };

  const pulseStates = ["active", "syncing"];

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className={`w-2 h-2 rounded-full ${colors[status]}`} />
        {pulseStates.includes(status) && (
          <div className={`absolute inset-0 w-2 h-2 rounded-full ${colors[status]} animate-ping opacity-50`} />
        )}
      </div>
      {showLabel && (
        <span className={`
          text-[10px] font-mono uppercase tracking-wide
          ${theme === "dark" ? "text-dracula-comment" : "text-slate-500"}
        `}>
          {status}
        </span>
      )}
    </div>
  );
}

// Timeline connector for experience section
export function TimelineConnector({ 
  isActive = false,
  isFirst = false,
  isLast = false,
}: { 
  isActive?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  const { theme } = useTheme();

  return (
    <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
      {/* Line to previous */}
      {!isFirst && (
        <div className={`
          w-0.5 flex-grow
          ${theme === "dark" 
            ? isActive ? "bg-gradient-to-b from-purple-500/50 to-purple-500" : "bg-slate-700" 
            : isActive ? "bg-gradient-to-b from-sky-400/50 to-sky-500" : "bg-slate-300"
          }
        `} />
      )}
      
      {/* Node */}
      <div className="relative my-1">
        <div className={`
          w-3 h-3 rounded-full border-2
          ${theme === "dark" 
            ? isActive ? "border-dracula-pink bg-dracula-pink/20" : "border-slate-600 bg-slate-800" 
            : isActive ? "border-sky-500 bg-sky-500/20" : "border-slate-300 bg-white"
          }
        `} />
        {isActive && (
          <div className={`
            absolute inset-0 w-3 h-3 rounded-full
            ${theme === "dark" ? "bg-dracula-pink" : "bg-sky-500"}
            animate-ping opacity-50
          `} />
        )}
      </div>
      
      {/* Line to next */}
      {!isLast && (
        <div className={`
          w-0.5 flex-grow
          ${theme === "dark" ? "bg-slate-700" : "bg-slate-300"}
        `} />
      )}
    </div>
  );
}

// Section flow connector
export function SectionFlowConnector() {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center py-4">
      <div className="flex flex-col items-center gap-1">
        <div className={`w-px h-8 ${theme === "dark" ? "bg-gradient-to-b from-purple-500/50 to-purple-500/20" : "bg-gradient-to-b from-sky-500/50 to-sky-500/20"}`} />
        <div className={`w-2 h-2 rounded-full ${theme === "dark" ? "bg-purple-500/30" : "bg-sky-500/30"}`} />
        <div className={`w-px h-8 ${theme === "dark" ? "bg-gradient-to-b from-purple-500/20 to-transparent" : "bg-gradient-to-b from-sky-500/20 to-transparent"}`} />
      </div>
    </div>
  );
}
