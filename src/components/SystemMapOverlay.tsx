"use client";

import { useState, useEffect, useMemo } from "react";
import { X, Mail, Shield, Database, Bell, Cpu, Cloud, Layers, ArrowRight, RefreshCw, Zap, Server, Globe, LucideIcon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useViewMode } from "./ViewModeContext";
import portfolioData from "@/data/info.json";
import type { PortfolioData, SystemNode as SystemNodeType, SystemConnection } from "@/types/portfolio";

const data = portfolioData as PortfolioData;

// Map icon names to components
const iconMap: Record<string, LucideIcon> = {
  Mail,
  Shield,
  Database,
  Bell,
  Cpu,
  Cloud,
  Layers,
  RefreshCw,
  Server,
  Globe,
};

interface DisplayNode {
  id: string;
  label: string;
  icon: LucideIcon;
  x: number;
  y: number;
  status: "active" | "idle" | "processing";
  description: string;
}

export default function SystemMapOverlay() {
  const { theme } = useTheme();
  const { isSystemMapActive, toggleSystemMap } = useViewMode();
  const [selectedNode, setSelectedNode] = useState<DisplayNode | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Get architecture data from info.json
  const architecture = data.system?.architecture;
  const architectureName = architecture?.name || "System Architecture";

  // Convert JSON nodes to display nodes with icon components
  const systemNodes: DisplayNode[] = useMemo(() => {
    if (!architecture?.nodes) return [];
    return architecture.nodes.map((node) => ({
      ...node,
      icon: iconMap[node.icon] || Cpu,
      status: node.status as "active" | "idle" | "processing",
    }));
  }, [architecture]);

  const connections: SystemConnection[] = architecture?.connections || [];

  // Handle mount/unmount with animation
  useEffect(() => {
    if (isSystemMapActive) {
      setShouldRender(true);
      // Small delay to allow DOM to render before animating in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      setIsVisible(false);
      // Wait for exit animation to complete before unmounting
      const timer = setTimeout(() => setShouldRender(false), 400);
      return () => clearTimeout(timer);
    }
  }, [isSystemMapActive]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSystemMapActive) {
        toggleSystemMap();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isSystemMapActive, toggleSystemMap]);

  // Handle close with animation
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      toggleSystemMap();
    }, 300);
  };

  if (!shouldRender) return null;

  const getNodeColor = (status: string) => {
    if (theme === "dark") {
      switch (status) {
        case "active": return "border-dracula-green bg-dracula-green/10";
        case "processing": return "border-dracula-cyan bg-dracula-cyan/10";
        case "idle": return "border-dracula-comment bg-dracula-comment/10";
        default: return "border-slate-600 bg-slate-800/50";
      }
    } else {
      switch (status) {
        case "active": return "border-emerald-500 bg-emerald-500/10";
        case "processing": return "border-sky-500 bg-sky-500/10";
        case "idle": return "border-slate-400 bg-slate-400/10";
        default: return "border-slate-300 bg-white/50";
      }
    }
  };

  const getStatusDotColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-500";
      case "processing": return "bg-cyan-500";
      case "idle": return "bg-slate-500";
      default: return "bg-slate-400";
    }
  };

  return (
    <div
      className={`
        fixed inset-0 z-50
        transition-all duration-300 ease-out
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* Backdrop */}
      <div
        className={`
          absolute inset-0
          ${theme === "dark" 
            ? "bg-slate-950/95" 
            : "bg-slate-100/95"
          }
          backdrop-blur-xl
          transition-transform duration-300 ease-out
          ${isVisible ? "scale-100" : "scale-105"}
        `}
        onClick={handleClose}
      />

      {/* Blueprint Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: theme === "dark"
            ? `
              linear-gradient(to right, rgba(139, 92, 246, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(139, 92, 246, 0.05) 1px, transparent 1px)
            `
            : `
              linear-gradient(to right, rgba(56, 189, 248, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56, 189, 248, 0.1) 1px, transparent 1px)
            `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-20">
        <div className={`
          flex items-center gap-4
          transition-all duration-300 delay-100
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
        `}>
          <div className={`
            p-3 rounded-xl
            ${theme === "dark" ? "bg-purple-500/10" : "bg-sky-500/10"}
          `}>
            <Layers className={`w-6 h-6 ${theme === "dark" ? "text-dracula-purple" : "text-sky-600"}`} />
          </div>
          <div>
            <span className={`
              text-xs font-mono uppercase tracking-wider block
              ${theme === "dark" ? "text-dracula-comment" : "text-slate-500"}
            `}>
              SYSTEM ARCHITECTURE
            </span>
            <h2 className={`
              text-2xl font-semibold
              ${theme === "dark" ? "text-dracula-fg" : "text-slate-900"}
            `}>
              {architectureName}
            </h2>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className={`
            p-3 rounded-xl
            ${theme === "dark" 
              ? "bg-slate-800/50 hover:bg-slate-700/50 text-dracula-comment hover:text-dracula-fg" 
              : "bg-white/50 hover:bg-white text-slate-500 hover:text-slate-900"
            }
            border ${theme === "dark" ? "border-slate-700/50" : "border-slate-200/50"}
            transition-all duration-200
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
          `}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* System Diagram Container */}
      <div className={`
        absolute inset-0 flex items-center justify-center p-20 pt-28
        transition-all duration-300 delay-75
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}>
        <div className="relative w-full max-w-5xl h-full">
          
          {/* SVG Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3.5, 0 7"
                  fill={theme === "dark" ? "#6272a4" : "#94a3b8"}
                />
              </marker>
              <marker
                id="arrowhead-active"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3.5, 0 7"
                  fill={theme === "dark" ? "#8be9fd" : "#0ea5e9"}
                />
              </marker>
            </defs>
            
            {connections.map((conn, idx) => {
              const fromNode = systemNodes.find(n => n.id === conn.from);
              const toNode = systemNodes.find(n => n.id === conn.to);
              if (!fromNode || !toNode) return null;

              const x1 = `${fromNode.x}%`;
              const y1 = `${fromNode.y}%`;
              const x2 = `${toNode.x}%`;
              const y2 = `${toNode.y}%`;

              return (
                <g key={idx}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={theme === "dark" 
                      ? conn.animated ? "#8be9fd" : "#6272a4"
                      : conn.animated ? "#0ea5e9" : "#94a3b8"
                    }
                    strokeWidth={conn.animated ? 2 : 1}
                    strokeDasharray={conn.animated ? "8 4" : undefined}
                    markerEnd={conn.animated ? "url(#arrowhead-active)" : "url(#arrowhead)"}
                    className={conn.animated ? "animate-dash" : ""}
                    opacity={0.6}
                  />
                  {conn.label && (
                    <text
                      x={`${(fromNode.x + toNode.x) / 2}%`}
                      y={`${(fromNode.y + toNode.y) / 2 - 2}%`}
                      textAnchor="middle"
                      className={`text-[10px] font-mono ${theme === "dark" ? "fill-dracula-comment" : "fill-slate-500"}`}
                    >
                      {conn.label}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          {/* System Nodes */}
          {systemNodes.map((node, idx) => {
            const Icon = node.icon;
            const isSelected = selectedNode?.id === node.id;

            return (
              <div
                key={node.id}
                className={`
                  absolute transform -translate-x-1/2 -translate-y-1/2
                  transition-all duration-300
                  ${isSelected ? "z-20 scale-110" : "z-10 hover:scale-105"}
                `}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <button
                  onClick={() => setSelectedNode(isSelected ? null : node)}
                  className={`
                    relative p-4 rounded-xl border-2
                    ${getNodeColor(node.status)}
                    ${isSelected 
                      ? theme === "dark" 
                        ? "ring-2 ring-dracula-purple ring-offset-2 ring-offset-slate-950" 
                        : "ring-2 ring-sky-500 ring-offset-2 ring-offset-slate-100"
                      : ""
                    }
                    backdrop-blur-md
                    transition-all duration-200
                    group
                  `}
                >
                  {/* Status Dot */}
                  <div className="absolute -top-1 -right-1">
                    <div className={`w-3 h-3 rounded-full ${getStatusDotColor(node.status)}`} />
                    {node.status === "processing" && (
                      <div className={`absolute inset-0 w-3 h-3 rounded-full ${getStatusDotColor(node.status)} animate-ping opacity-50`} />
                    )}
                  </div>

                  {/* Icon */}
                  <Icon className={`
                    w-8 h-8 mb-2
                    ${theme === "dark" ? "text-dracula-fg" : "text-slate-700"}
                    group-hover:scale-110 transition-transform duration-200
                  `} />

                  {/* Label */}
                  <span className={`
                    text-xs font-mono block text-center whitespace-nowrap
                    ${theme === "dark" ? "text-dracula-fg" : "text-slate-700"}
                  `}>
                    {node.label}
                  </span>
                </button>

                {/* Tooltip/Description */}
                {isSelected && (
                  <div className={`
                    absolute top-full mt-2 left-1/2 -translate-x-1/2
                    px-4 py-2 rounded-lg
                    ${theme === "dark" 
                      ? "bg-slate-800 border border-slate-700" 
                      : "bg-white border border-slate-200 shadow-lg"
                    }
                    whitespace-nowrap z-30
                  `}>
                    <p className={`text-xs ${theme === "dark" ? "text-dracula-comment" : "text-slate-600"}`}>
                      {node.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className={`
        absolute bottom-6 left-6 z-20
        px-4 py-3 rounded-xl
        ${theme === "dark" 
          ? "bg-slate-900/80 border border-slate-800/50" 
          : "bg-white/80 border border-slate-200/50"
        }
        backdrop-blur-md
        transition-all duration-300 delay-150
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}>
        <span className={`text-xs font-mono uppercase tracking-wide block mb-2 ${theme === "dark" ? "text-dracula-comment" : "text-slate-500"}`}>
          Status Legend
        </span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className={`text-xs ${theme === "dark" ? "text-dracula-fg" : "text-slate-700"}`}>Active</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500" />
            <span className={`text-xs ${theme === "dark" ? "text-dracula-fg" : "text-slate-700"}`}>Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-slate-500" />
            <span className={`text-xs ${theme === "dark" ? "text-dracula-fg" : "text-slate-700"}`}>Idle</span>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className={`
        absolute bottom-6 right-6 z-20
        px-4 py-2 rounded-lg
        ${theme === "dark" 
          ? "bg-slate-900/60 text-dracula-comment" 
          : "bg-white/60 text-slate-500"
        }
        backdrop-blur-md
        text-xs font-mono
        transition-all duration-300 delay-150
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}>
        Press <kbd className={`px-1.5 py-0.5 rounded ${theme === "dark" ? "bg-slate-800" : "bg-slate-200"}`}>ESC</kbd> or click backdrop to close
      </div>
    </div>
  );
}
