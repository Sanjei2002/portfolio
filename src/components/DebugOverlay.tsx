"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { useViewMode } from "./ViewModeContext";
import { Terminal, Activity, Cpu, Wifi, Database, RefreshCw, Clock, X, ChevronRight } from "lucide-react";
import portfolioData from "@/data/info.json";
import type { PortfolioData } from "@/types/portfolio";

const data = portfolioData as PortfolioData;

interface LogEntry {
  timestamp: string;
  level: "info" | "warn" | "success" | "debug";
  service: string;
  message: string;
}

interface Metric {
  label: string;
  value: string | number;
  unit?: string;
  status: "good" | "warning" | "critical";
  icon: typeof Activity;
}

export default function DebugOverlay() {
  const { theme } = useTheme();
  const { isDebugModeActive, toggleDebugMode } = useViewMode();
  const [logs, setLogs] = useState<LogEntry[]>([]);

  // Get telemetry from info.json
  const telemetry = data.system?.telemetry;

  const [metrics, setMetrics] = useState<Metric[]>([
    { label: "Mail Sync", value: data.system?.status === "operational" ? "Online" : "Offline", status: "good", icon: RefreshCw },
    { label: "Latency", value: telemetry?.latency || 42, unit: "ms", status: "good", icon: Activity },
    { label: "Cache Hit", value: telemetry?.cacheHitRate || 91, unit: "%", status: "good", icon: Database },
    { label: "Auth Token", value: telemetry?.authStatus || "Valid", status: "good", icon: Wifi },
    { label: "CPU Usage", value: 12, unit: "%", status: "good", icon: Cpu },
    { label: "Memory", value: 234, unit: "MB", status: "good", icon: Database },
  ]);

  // Generate fake logs
  useEffect(() => {
    if (!isDebugModeActive) return;

    const services = ["MailSync", "AuthService", "CacheManager", "NotifyWorker", "BackgroundTask"];
    const messages = [
      "Connection established",
      "Token refreshed successfully",
      "Cache invalidated for user mailbox",
      "Background sync completed",
      "Notification dispatched",
      "IMAP IDLE connection active",
      "Delta sync: 3 new messages",
      "OAuth2 token expires in 3540s",
      "Toast notification queued",
      "Telemetry event logged",
    ];
    const levels: LogEntry["level"][] = ["info", "debug", "success", "info"];

    const generateLog = (): LogEntry => ({
      timestamp: new Date().toISOString().split("T")[1].split(".")[0],
      level: levels[Math.floor(Math.random() * levels.length)],
      service: services[Math.floor(Math.random() * services.length)],
      message: messages[Math.floor(Math.random() * messages.length)],
    });

    // Initial logs
    setLogs(Array.from({ length: 8 }, generateLog));

    // Add new logs periodically
    const interval = setInterval(() => {
      setLogs((prev) => [generateLog(), ...prev.slice(0, 14)]);
      
      // Update metrics randomly
      setMetrics((prev) =>
        prev.map((m) => ({
          ...m,
          value: typeof m.value === "number"
            ? Math.max(1, m.value + Math.floor(Math.random() * 10) - 5)
            : m.value,
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [isDebugModeActive]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isDebugModeActive) {
        toggleDebugMode();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isDebugModeActive, toggleDebugMode]);

  if (!isDebugModeActive) return null;

  const levelColors = {
    info: theme === "dark" ? "text-dracula-cyan" : "text-sky-600",
    warn: theme === "dark" ? "text-dracula-yellow" : "text-amber-600",
    success: theme === "dark" ? "text-dracula-green" : "text-emerald-600",
    debug: theme === "dark" ? "text-dracula-comment" : "text-slate-500",
  };

  const statusColors = {
    good: theme === "dark" ? "text-dracula-green" : "text-emerald-600",
    warning: theme === "dark" ? "text-dracula-yellow" : "text-amber-600",
    critical: theme === "dark" ? "text-dracula-red" : "text-red-600",
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Semi-transparent overlay */}
      <div
        className={`
          absolute inset-0
          ${theme === "dark" ? "bg-slate-950/60" : "bg-slate-100/60"}
          backdrop-blur-sm
          pointer-events-auto
        `}
        onClick={toggleDebugMode}
      />

      {/* Debug Panel - Right Side */}
      <div
        className={`
          absolute right-0 top-0 bottom-0 w-96
          ${theme === "dark" 
            ? "bg-slate-900/95 border-l border-slate-800/50" 
            : "bg-white/95 border-l border-slate-200/50"
          }
          backdrop-blur-xl
          pointer-events-auto
          overflow-hidden
          flex flex-col
        `}
      >
        {/* Header */}
        <div className={`
          p-4 flex items-center justify-between
          ${theme === "dark" ? "border-b border-slate-800/50" : "border-b border-slate-200/50"}
        `}>
          <div className="flex items-center gap-3">
            <Terminal className={`w-5 h-5 ${theme === "dark" ? "text-dracula-green" : "text-emerald-600"}`} />
            <div>
              <span className={`text-xs font-mono uppercase tracking-wide block ${theme === "dark" ? "text-dracula-comment" : "text-slate-500"}`}>
                DEBUG MODE
              </span>
              <span className={`text-sm font-semibold ${theme === "dark" ? "text-dracula-fg" : "text-slate-900"}`}>
                System Diagnostics
              </span>
            </div>
          </div>
          <button
            onClick={toggleDebugMode}
            className={`
              p-2 rounded-lg
              ${theme === "dark" 
                ? "hover:bg-slate-800 text-dracula-comment hover:text-dracula-fg" 
                : "hover:bg-slate-100 text-slate-500 hover:text-slate-900"
              }
              transition-colors duration-200
            `}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Metrics Grid */}
        <div className={`
          p-4
          ${theme === "dark" ? "border-b border-slate-800/50" : "border-b border-slate-200/50"}
        `}>
          <span className={`text-xs font-mono uppercase tracking-wide block mb-3 ${theme === "dark" ? "text-dracula-comment" : "text-slate-500"}`}>
            Performance Metrics
          </span>
          <div className="grid grid-cols-2 gap-2">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div
                  key={idx}
                  className={`
                    p-3 rounded-lg
                    ${theme === "dark" ? "bg-slate-800/50" : "bg-slate-50"}
                  `}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className={`w-3 h-3 ${theme === "dark" ? "text-dracula-comment" : "text-slate-400"}`} />
                    <span className={`text-xs ${theme === "dark" ? "text-dracula-comment" : "text-slate-500"}`}>
                      {metric.label}
                    </span>
                  </div>
                  <span className={`text-lg font-mono font-bold ${statusColors[metric.status]}`}>
                    {metric.value}
                    {metric.unit && (
                      <span className={`text-xs ml-0.5 ${theme === "dark" ? "text-dracula-comment" : "text-slate-500"}`}>
                        {metric.unit}
                      </span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Logs */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="p-4 pb-2 flex items-center justify-between">
            <span className={`text-xs font-mono uppercase tracking-wide ${theme === "dark" ? "text-dracula-comment" : "text-slate-500"}`}>
              Live Logs
            </span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className={`text-xs ${theme === "dark" ? "text-dracula-green" : "text-emerald-600"}`}>
                Streaming
              </span>
            </div>
          </div>
          
          <div className={`
            flex-1 overflow-y-auto px-4 pb-4
            font-mono text-xs
            ${theme === "dark" ? "bg-slate-950/50" : "bg-slate-50/50"}
          `}>
            {logs.map((log, idx) => (
              <div
                key={idx}
                className={`
                  py-1.5 flex items-start gap-2
                  ${idx === 0 ? "animate-slide-in" : ""}
                  ${theme === "dark" ? "border-b border-slate-800/30" : "border-b border-slate-200/30"}
                `}
              >
                <span className={`${theme === "dark" ? "text-dracula-comment" : "text-slate-400"} shrink-0`}>
                  {log.timestamp}
                </span>
                <span className={`${levelColors[log.level]} shrink-0 uppercase`}>
                  [{log.level.slice(0, 4)}]
                </span>
                <span className={`${theme === "dark" ? "text-dracula-purple" : "text-sky-600"} shrink-0`}>
                  {log.service}
                </span>
                <ChevronRight className={`w-3 h-3 mt-0.5 ${theme === "dark" ? "text-dracula-comment" : "text-slate-400"}`} />
                <span className={theme === "dark" ? "text-dracula-fg" : "text-slate-700"}>
                  {log.message}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className={`
          p-3 text-center
          ${theme === "dark" ? "border-t border-slate-800/50 bg-slate-900/50" : "border-t border-slate-200/50 bg-white/50"}
        `}>
          <span className={`text-xs font-mono ${theme === "dark" ? "text-dracula-comment" : "text-slate-500"}`}>
            Press <kbd className={`px-1.5 py-0.5 rounded ${theme === "dark" ? "bg-slate-800" : "bg-slate-200"}`}>ESC</kbd> to close
          </span>
        </div>
      </div>

      {/* Architecture Callouts - Left Side */}
      <div className="absolute left-6 top-24 space-y-3 pointer-events-none">
        {[
          { label: "Mail Sync Service", value: "Online", color: "green" },
          { label: "Active Connections", value: "3", color: "cyan" },
          { label: "Pending Operations", value: "0", color: "green" },
          { label: "Last Heartbeat", value: "2s ago", color: "cyan" },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`
              px-3 py-2 rounded-lg
              ${theme === "dark" 
                ? "bg-slate-900/80 border border-slate-800/50" 
                : "bg-white/80 border border-slate-200/50"
              }
              backdrop-blur-md
              font-mono text-xs
              animate-fade-in
            `}
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <span className={theme === "dark" ? "text-dracula-comment" : "text-slate-500"}>
              {item.label}:{" "}
            </span>
            <span className={
              item.color === "green" 
                ? theme === "dark" ? "text-dracula-green" : "text-emerald-600"
                : theme === "dark" ? "text-dracula-cyan" : "text-sky-600"
            }>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
