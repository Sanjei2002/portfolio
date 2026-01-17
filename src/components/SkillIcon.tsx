"use client";

import { IconType } from "react-icons";
import {
  SiTypescript,
  SiPython,
  SiGo,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiAmazonwebservices,
  SiKubernetes,
  SiDocker,
  SiGit,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiRust,
  SiCplusplus,
  SiSharp,
  SiGraphql,
  SiTerraform,
  SiGooglecloud,
  SiLinux,
  SiNginx,
  SiVercel,
  SiVite,
  SiWebpack,
  SiElasticsearch,
  SiRabbitmq,
  SiApachekafka,
  SiJenkins,
  SiGithubactions,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiDotnet,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiPhp,
  SiRuby,
  SiMysql,
  SiSqlite,
  SiFirebase,
  SiSupabase,
  SiPrisma,
  SiExpress,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiSpring,
  SiNestjs,
} from "react-icons/si";
import { FaAws, FaJava, FaMicrosoft, FaWindows, FaCogs, FaNetworkWired, FaLock, FaCube, FaBell, FaLink, FaExchangeAlt, FaBox, FaServer, FaPlug, FaLayerGroup, FaSitemap, FaSyringe, FaPuzzlePiece, FaChartLine, FaWaveSquare, FaTerminal, FaCode } from "react-icons/fa";
import { VscDebugAlt, VscWindow, VscAzureDevops } from "react-icons/vsc";
import { TbApi, TbMail, TbMailForward } from "react-icons/tb";

// Map skill names (lowercase) to icons
const skillIconMap: Record<string, IconType> = {
  // Languages
  typescript: SiTypescript,
  python: SiPython,
  go: SiGo,
  javascript: SiJavascript,
  rust: SiRust,
  "c++": SiCplusplus,
  cpp: SiCplusplus,
  "c#": SiSharp,
  csharp: SiSharp,
  java: FaJava,
  php: SiPhp,
  ruby: SiRuby,
  swift: SiSwift,
  kotlin: SiKotlin,
  powershell: FaTerminal,
  xaml: FaCode,

  // Windows Frameworks
  ".net 6": SiDotnet,
  ".net 8": SiDotnet,
  ".net": SiDotnet,
  ".net web api": SiDotnet,
  dotnet: SiDotnet,
  "windows app sdk": FaWindows,
  uwp: FaWindows,
  "winui 3": VscWindow,
  winui: VscWindow,
  wpf: VscWindow,

  // Architecture Patterns
  mvvm: FaSitemap,
  "clean architecture": FaLayerGroup,
  "dependency injection": FaSyringe,
  "modular ui": FaCube,
  "plugin systems": FaPuzzlePiece,

  // Windows Platform
  "msix packaging": FaBox,
  msix: FaBox,
  "windows services": FaServer,
  winrt: FaWindows,
  com: FaPlug,
  "background tasks": FaCogs,
  "toast notifications": FaBell,
  "deep linking": FaLink,
  "app lifecycle": FaExchangeAlt,

  // Networking & Protocols
  imap: TbMail,
  smtp: TbMailForward,
  pop3: TbMail,
  oauth2: FaLock,
  "rest apis": TbApi,
  websockets: FaNetworkWired,

  // Tooling
  "visual studio": FaMicrosoft,
  windbg: VscDebugAlt,
  perfview: FaChartLine,
  "etw tracing": FaWaveSquare,
  "app center": FaMicrosoft,
  "azure devops": VscAzureDevops,

  // Runtimes & Frameworks
  "node.js": SiNodedotjs,
  nodejs: SiNodedotjs,
  node: SiNodedotjs,
  react: SiReact,
  "next.js": SiNextdotjs,
  nextjs: SiNextdotjs,
  "vue.js": SiVuedotjs,
  vue: SiVuedotjs,
  angular: SiAngular,
  svelte: SiSvelte,
  express: SiExpress,
  "express.js": SiExpress,
  fastapi: SiFastapi,
  django: SiDjango,
  flask: SiFlask,
  spring: SiSpring,
  "nest.js": SiNestjs,
  nestjs: SiNestjs,
  flutter: SiFlutter,

  // Databases
  postgresql: SiPostgresql,
  postgres: SiPostgresql,
  mongodb: SiMongodb,
  redis: SiRedis,
  mysql: SiMysql,
  sqlite: SiSqlite,
  elasticsearch: SiElasticsearch,
  firebase: SiFirebase,
  supabase: SiSupabase,
  prisma: SiPrisma,

  // Cloud & DevOps
  aws: FaAws,
  "amazon web services": SiAmazonwebservices,
  kubernetes: SiKubernetes,
  k8s: SiKubernetes,
  docker: SiDocker,
  terraform: SiTerraform,
  gcp: SiGooglecloud,
  "google cloud": SiGooglecloud,
  azure: FaMicrosoft,
  vercel: SiVercel,
  nginx: SiNginx,
  linux: SiLinux,

  // Tools
  git: SiGit,
  graphql: SiGraphql,
  vite: SiVite,
  webpack: SiWebpack,
  rabbitmq: SiRabbitmq,
  kafka: SiApachekafka,
  jenkins: SiJenkins,
  "github actions": SiGithubactions,

  // Styling
  "tailwind css": SiTailwindcss,
  tailwindcss: SiTailwindcss,
  tailwind: SiTailwindcss,
};

interface SkillIconProps {
  skillName: string;
  className?: string;
}

export default function SkillIcon({ skillName, className = "w-4 h-4" }: SkillIconProps) {
  const normalizedName = skillName.toLowerCase().trim();
  const IconComponent = skillIconMap[normalizedName];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} />;
}

export function hasSkillIcon(skillName: string): boolean {
  return skillName.toLowerCase().trim() in skillIconMap;
}
