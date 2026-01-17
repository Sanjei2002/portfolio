"use client";

import { Mail, MapPin, Github, Linkedin, Twitter, Globe, Braces, Server, Cloud, Code, Database, Terminal, Layers, Cpu, Smartphone, ExternalLink, Monitor, Zap, Shield, Clock, Target, Briefcase, FileCode } from "lucide-react";
import UniverseBackground from "@/components/UniverseBackground";
import ControlPanel from "@/components/ControlPanel";
import SystemModule from "@/components/SystemModule";
import SystemMapOverlay from "@/components/SystemMapOverlay";
import DebugOverlay from "@/components/DebugOverlay";
import TelemetryIndicator from "@/components/TelemetryIndicator";
import { SectionFlowConnector } from "@/components/TelemetryIndicator";
import SkillIcon from "@/components/SkillIcon";
import SystemBanner from "@/components/SystemBanner";
import { useTheme } from "@/components/ThemeProvider";
import portfolioData from "@/data/info.json";
import type { PortfolioData, DraculaColor, IconName } from "@/types/portfolio";

const data = portfolioData as PortfolioData;
const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

// Map icon names to components
const iconMap = {
  Braces,
  Server,
  Cloud,
  Code,
  Database,
  Globe,
  Terminal,
  Layers,
  Cpu,
  Smartphone,
};

// Map color names to Tailwind classes
const colorClasses: Record<DraculaColor, { text: string; bg: string; hover: string }> = {
  cyan: { text: "text-dracula-cyan", bg: "bg-dracula-cyan", hover: "hover:bg-dracula-cyan" },
  green: { text: "text-dracula-green", bg: "bg-dracula-green", hover: "hover:bg-dracula-green" },
  orange: { text: "text-dracula-orange", bg: "bg-dracula-orange", hover: "hover:bg-dracula-orange" },
  pink: { text: "text-dracula-pink", bg: "bg-dracula-pink", hover: "hover:bg-dracula-pink" },
  purple: { text: "text-dracula-purple", bg: "bg-dracula-purple", hover: "hover:bg-dracula-purple" },
  red: { text: "text-dracula-red", bg: "bg-dracula-red", hover: "hover:bg-dracula-red" },
  yellow: { text: "text-dracula-yellow", bg: "bg-dracula-yellow", hover: "hover:bg-dracula-yellow" },
};

export default function Home() {
  const { profile, contact, socials, skills, experience, platformFocus, caseStudies, system } = data;
  const { theme } = useTheme();

  // System configuration with fallbacks
  const systemVersion = system?.version || "v1.0.0";
  const systemBuild = system?.build || "2026.01.01";
  const modules = system?.modules;

  return (
    <>
      <UniverseBackground />
      <ControlPanel />
      <SystemMapOverlay />
      <DebugOverlay />
      <TelemetryIndicator />
      
      <div className="min-h-screen flex flex-col md:flex-row relative z-10">
        {/* Left Column - Profile (Fixed on Desktop) */}
        <aside className="w-full md:w-[35%] md:fixed md:h-screen md:border-r md:border-slate-800/30 p-8 md:p-14 flex flex-col bg-slate-950/80 backdrop-blur-md">
          {/* System Status Bar */}
          <div className={`
            absolute top-4 left-4 right-4
            flex items-center justify-between
            px-3 py-1.5 rounded-lg
            ${theme === "dark" 
              ? "bg-slate-900/50 border border-slate-800/30" 
              : "bg-white/50 border border-slate-200/30"
            }
            font-mono text-[10px] uppercase tracking-wider
          `}>
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-green-500 animate-ping opacity-50" />
              </div>
              <span className={theme === "dark" ? "text-dracula-green" : "text-emerald-600"}>
                System Active
              </span>
            </div>
            <span className={theme === "dark" ? "text-dracula-comment" : "text-slate-500"}>
              {systemVersion}
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center text-center mt-8">
            {/* Avatar with system frame */}
            <div className="relative mb-8 group">
              {/* Corner brackets */}
              <div className={`absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 ${theme === "dark" ? "border-dracula-purple/50" : "border-sky-500/50"}`} />
              <div className={`absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 ${theme === "dark" ? "border-dracula-purple/50" : "border-sky-500/50"}`} />
              <div className={`absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 ${theme === "dark" ? "border-dracula-purple/50" : "border-sky-500/50"}`} />
              <div className={`absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 ${theme === "dark" ? "border-dracula-purple/50" : "border-sky-500/50"}`} />
              
              <div className="w-32 h-32 rounded-full bg-dracula-current overflow-hidden ring-2 ring-dracula-purple group-hover:ring-4 group-hover:ring-dracula-pink transition-all duration-300">
                {profile.avatarUrl ? (
                  <img src={`${basePath}${profile.avatarUrl}`} alt={profile.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-dracula-comment to-dracula-current flex items-center justify-center text-dracula-purple text-4xl font-semibold">
                    {profile.initials}
                  </div>
                )}
              </div>
            </div>

            {/* Identity */}
            <h1 className="text-2xl font-bold text-dracula-fg mb-1">{profile.name}</h1>
            <h2 className="text-dracula-comment mb-1">{profile.title}</h2>
            <div className={`w-8 h-0.5 ${theme === "dark" ? "bg-dracula-pink" : "bg-sky-500"} mb-6`}></div>

            {/* Bio */}
            <p className="text-dracula-comment text-sm leading-relaxed mb-8 max-w-xs">
              {profile.bio}
            </p>

            {/* Meta with system styling */}
            <div className="space-y-3 mb-8">
              <div className={`
                flex items-center gap-3 px-4 py-2 rounded-lg
                ${theme === "dark" ? "bg-slate-900/30" : "bg-slate-100/50"}
                text-dracula-comment text-sm
              `}>
                <Mail className={`w-4 h-4 ${theme === "dark" ? "text-dracula-cyan" : "text-sky-600"}`} />
                <span>{contact.email}</span>
              </div>
              <div className={`
                flex items-center gap-3 px-4 py-2 rounded-lg
                ${theme === "dark" ? "bg-slate-900/30" : "bg-slate-100/50"}
                text-dracula-comment text-sm
              `}>
                <MapPin className={`w-4 h-4 ${theme === "dark" ? "text-dracula-cyan" : "text-sky-600"}`} />
                <span>{contact.location}</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              {socials.github && (
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-2.5 rounded-lg
                    ${theme === "dark" 
                      ? "bg-slate-900/30 hover:bg-slate-800/50 text-dracula-comment hover:text-dracula-purple" 
                      : "bg-slate-100/50 hover:bg-slate-200/70 text-slate-500 hover:text-sky-600"
                    }
                    transition-all duration-200 hover:scale-110
                  `}
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {socials.linkedin && (
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-2.5 rounded-lg
                    ${theme === "dark" 
                      ? "bg-slate-900/30 hover:bg-slate-800/50 text-dracula-comment hover:text-dracula-purple" 
                      : "bg-slate-100/50 hover:bg-slate-200/70 text-slate-500 hover:text-sky-600"
                    }
                    transition-all duration-200 hover:scale-110
                  `}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {socials.twitter && (
                <a
                  href={socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-2.5 rounded-lg
                    ${theme === "dark" 
                      ? "bg-slate-900/30 hover:bg-slate-800/50 text-dracula-comment hover:text-dracula-purple" 
                      : "bg-slate-100/50 hover:bg-slate-200/70 text-slate-500 hover:text-sky-600"
                    }
                    transition-all duration-200 hover:scale-110
                  `}
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {socials.website && (
                <a
                  href={socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-2.5 rounded-lg
                    ${theme === "dark" 
                      ? "bg-slate-900/30 hover:bg-slate-800/50 text-dracula-comment hover:text-dracula-purple" 
                      : "bg-slate-100/50 hover:bg-slate-200/70 text-slate-500 hover:text-sky-600"
                    }
                    transition-all duration-200 hover:scale-110
                  `}
                >
                  <Globe className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Build info */}
          <div className={`
            text-center font-mono text-[10px] uppercase tracking-wider
            ${theme === "dark" ? "text-dracula-comment/50" : "text-slate-400"}
          `}>
            Build {systemBuild} • Module {systemVersion}
          </div>
        </aside>

        {/* Right Column - Content (Scrollable) */}
        <main className="w-full md:w-[65%] md:ml-[35%] p-8 md:p-14 md:py-24 space-y-6">
          
          {/* System Banner - Onboarding */}
          <SystemBanner />

          {/* System Scope Section */}
          {platformFocus && platformFocus.length > 0 && (
            <SystemModule
              title="System Scope"
              subtitle={modules?.systemScope?.subtitle}
              description={modules?.systemScope?.description}
              icon={Target}
              status={modules?.systemScope?.status || "online"}
              version={modules?.systemScope?.version || "v1.0.0"}
              delay={0}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {platformFocus.map((focus, index) => (
                  <div 
                    key={index} 
                    className={`
                      group flex items-center gap-3 p-4 rounded-xl
                      ${theme === "dark" 
                        ? "bg-slate-900/40 border border-slate-800/30 hover:border-dracula-cyan/30" 
                        : "bg-slate-50/80 border border-slate-200/50 hover:border-sky-400/50"
                      }
                      transition-all duration-300 hover:translate-x-1
                    `}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className={`
                      p-2 rounded-lg
                      ${theme === "dark" 
                        ? "bg-dracula-cyan/10 group-hover:bg-dracula-cyan/20" 
                        : "bg-sky-100 group-hover:bg-sky-200"
                      }
                      transition-colors duration-200
                    `}>
                      <Monitor className={`w-4 h-4 ${theme === "dark" ? "text-dracula-cyan" : "text-sky-600"}`} />
                    </div>
                    <span className="text-dracula-fg text-sm">{focus}</span>
                  </div>
                ))}
              </div>
            </SystemModule>
          )}

          <SectionFlowConnector />

          {/* Capabilities Section */}
          <SystemModule
            title="Capabilities"
            subtitle={modules?.capabilities?.subtitle}
            description={modules?.capabilities?.description}
            icon={Layers}
            status={modules?.capabilities?.status || "active"}
            version={modules?.capabilities?.version || "v1.0.0"}
            delay={100}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Object.entries(skills).map(([categoryName, category], index) => {
                const IconComponent = iconMap[category.icon as IconName];
                const isFullWidth = index === Object.keys(skills).length - 1 && Object.keys(skills).length % 2 === 1;
                
                return (
                  <div 
                    key={categoryName} 
                    className={`
                      ${isFullWidth ? "sm:col-span-2" : ""}
                      p-4 rounded-xl
                      ${theme === "dark" 
                        ? "bg-slate-900/30 border border-slate-800/20" 
                        : "bg-slate-50/60 border border-slate-200/40"
                      }
                    `}
                  >
                    <div className="flex items-center gap-2 text-dracula-comment text-sm mb-3">
                      {IconComponent && (
                        <div className={`
                          p-1.5 rounded-md
                          ${theme === "dark" ? "bg-slate-800/50" : "bg-white/80"}
                        `}>
                          <IconComponent className={`w-4 h-4 ${colorClasses[category.color].text}`} />
                        </div>
                      )}
                      <span className="capitalize font-medium">{categoryName}</span>
                      <div className={`ml-auto w-1.5 h-1.5 rounded-full ${theme === "dark" ? "bg-dracula-green" : "bg-emerald-500"}`} />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill) => (
                        <span
                          key={skill.name}
                          className={`
                            ${theme === "dark" ? "bg-dracula-current" : "bg-white/80 border border-slate-200/50"}
                            ${colorClasses[skill.color].text} 
                            rounded-lg px-3 py-1.5 text-sm 
                            ${colorClasses[skill.color].hover} 
                            hover:text-dracula-bg 
                            transition-all duration-200 
                            cursor-default 
                            flex items-center gap-1.5
                            hover:scale-105 hover:shadow-lg
                          `}
                        >
                          <SkillIcon skillName={skill.name} className="w-3.5 h-3.5" />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </SystemModule>

          <SectionFlowConnector />

          {/* Deployment History Section */}
          <SystemModule
            title="Deployment History"
            subtitle={modules?.deploymentHistory?.subtitle}
            description={modules?.deploymentHistory?.description}
            icon={Briefcase}
            status={modules?.deploymentHistory?.status || "online"}
            version={modules?.deploymentHistory?.version || "v1.0.0"}
            delay={200}
          >
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div 
                  key={index} 
                  className={`
                    relative pl-8 
                    ${index !== experience.length - 1 ? "pb-8" : ""}
                  `}
                >
                  {/* Timeline */}
                  <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
                    {/* Node */}
                    <div className="relative">
                      <div className={`
                        w-4 h-4 rounded-full border-2
                        ${theme === "dark" 
                          ? "border-dracula-pink bg-dracula-pink/20" 
                          : "border-sky-500 bg-sky-500/20"
                        }
                      `} />
                      <div className={`
                        absolute inset-0 w-4 h-4 rounded-full
                        ${theme === "dark" ? "bg-dracula-pink" : "bg-sky-500"}
                        animate-ping opacity-30
                      `} />
                    </div>
                    
                    {/* Line */}
                    {index !== experience.length - 1 && (
                      <div className={`
                        w-0.5 flex-grow mt-2
                        ${theme === "dark" 
                          ? "bg-gradient-to-b from-dracula-pink/50 to-slate-700" 
                          : "bg-gradient-to-b from-sky-400/50 to-slate-300"
                        }
                      `} />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`
                    p-5 rounded-xl
                    ${theme === "dark" 
                      ? "bg-slate-900/40 border border-slate-800/30 hover:border-dracula-pink/30" 
                      : "bg-slate-50/80 border border-slate-200/50 hover:border-sky-400/30"
                    }
                    transition-all duration-300 group
                  `}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className={`
                          font-semibold text-dracula-fg 
                          group-hover:text-dracula-pink 
                          transition-colors duration-200
                        `}>
                          {job.title}
                        </h4>
                        <p className={`text-sm ${theme === "dark" ? "text-dracula-pink" : "text-sky-600"}`}>
                          {job.company}
                        </p>
                      </div>
                      <span className={`
                        text-xs font-mono px-2 py-1 rounded
                        ${theme === "dark" 
                          ? "bg-slate-800/50 text-dracula-comment" 
                          : "bg-slate-200/50 text-slate-500"
                        }
                      `}>
                        {job.period}
                      </span>
                    </div>
                    
                    {Array.isArray(job.description) ? (
                      <ul className="space-y-2 mt-4">
                        {job.description.map((item, i) => (
                          <li key={i} className="text-dracula-comment text-sm flex items-start gap-2">
                            <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${theme === "dark" ? "bg-dracula-purple" : "bg-sky-500"}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-dracula-comment text-sm leading-relaxed mt-2">
                        {job.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </SystemModule>

          <SectionFlowConnector />

          {/* System Architecture Section */}
          {caseStudies && caseStudies.length > 0 && (
            <SystemModule
              title="System Architecture"
              subtitle={modules?.systemArchitecture?.subtitle}
              description={modules?.systemArchitecture?.description}
              icon={FileCode}
              status={modules?.systemArchitecture?.status || "syncing"}
              version={modules?.systemArchitecture?.version || "v1.0.0"}
              delay={300}
            >
              <div className="space-y-8">
                {caseStudies.map((study, index) => (
                  <div 
                    key={index} 
                    className={`
                      p-6 rounded-xl
                      ${theme === "dark" 
                        ? "bg-slate-900/50 border border-slate-800/40 hover:border-dracula-purple/40" 
                        : "bg-slate-50/90 border border-slate-200/60 hover:border-sky-400/40"
                      }
                      transition-all duration-300 group
                    `}
                  >
                    {/* Case Study Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`
                        p-3 rounded-xl
                        ${theme === "dark" 
                          ? "bg-dracula-orange/10 group-hover:bg-dracula-orange/20" 
                          : "bg-orange-100 group-hover:bg-orange-200"
                        }
                        transition-colors duration-200
                      `}>
                        <Shield className={`w-6 h-6 ${theme === "dark" ? "text-dracula-orange" : "text-orange-600"}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`
                          text-lg font-semibold 
                          ${theme === "dark" ? "text-dracula-orange group-hover:text-dracula-pink" : "text-orange-600 group-hover:text-sky-600"}
                          transition-colors duration-200
                        `}>
                          {study.title}
                        </h4>
                        <p className="text-dracula-comment text-sm mt-1">
                          {study.overview}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Key Systems */}
                      {study.keySystems.length > 0 && (
                        <div className={`
                          p-4 rounded-lg
                          ${theme === "dark" ? "bg-slate-800/30" : "bg-white/60"}
                        `}>
                          <h5 className={`
                            text-xs font-mono uppercase tracking-wider mb-3
                            ${theme === "dark" ? "text-dracula-cyan" : "text-sky-600"}
                          `}>
                            Key Systems
                          </h5>
                          <div className="grid grid-cols-2 gap-2">
                            {study.keySystems.map((system, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-dracula-comment">
                                <div className={`w-1 h-1 rounded-full ${theme === "dark" ? "bg-dracula-cyan" : "bg-sky-500"}`} />
                                {system}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Engineering Challenges */}
                      {study.challenges.length > 0 && (
                        <div className={`
                          p-4 rounded-lg
                          ${theme === "dark" ? "bg-slate-800/30" : "bg-white/60"}
                        `}>
                          <h5 className={`
                            text-xs font-mono uppercase tracking-wider mb-3
                            ${theme === "dark" ? "text-dracula-pink" : "text-pink-600"}
                          `}>
                            Engineering Challenges
                          </h5>
                          <ul className="space-y-2">
                            {study.challenges.map((challenge, i) => (
                              <li key={i} className="text-dracula-comment text-sm flex items-start gap-2">
                                <Zap className={`w-3 h-3 mt-1 flex-shrink-0 ${theme === "dark" ? "text-dracula-pink" : "text-pink-500"}`} />
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-6">
                      <h5 className={`
                        text-xs font-mono uppercase tracking-wider mb-3
                        ${theme === "dark" ? "text-dracula-comment" : "text-slate-500"}
                      `}>
                        Tech Stack
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {study.techStack.map((tech) => (
                          <span
                            key={tech.name}
                            className={`
                              ${theme === "dark" ? "bg-dracula-current/80" : "bg-white/80 border border-slate-200/50"}
                              ${colorClasses[tech.color].text} 
                              rounded-lg px-3 py-1.5 text-xs 
                              ${colorClasses[tech.color].hover} 
                              hover:text-dracula-bg 
                              transition-all duration-200 
                              cursor-default 
                              flex items-center gap-1.5
                              hover:scale-105
                            `}
                          >
                            <SkillIcon skillName={tech.name} className="w-3 h-3" />
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Case Study Link */}
                    {study.link && (
                      <a
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          inline-flex items-center gap-2 mt-6
                          ${theme === "dark" 
                            ? "bg-dracula-current hover:bg-dracula-purple text-dracula-fg" 
                            : "bg-slate-100 hover:bg-sky-500 text-slate-700 hover:text-white"
                          }
                          text-sm px-4 py-2 rounded-lg 
                          transition-all duration-200 
                          group/link
                        `}
                      >
                        View Details
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </SystemModule>
          )}

          {/* Footer spacing */}
          <div className="h-20" />
        </main>
      </div>
    </>
  );
}
