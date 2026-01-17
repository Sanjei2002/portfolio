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
import { FaAws, FaJava, FaMicrosoft } from "react-icons/fa";

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
  ".net": SiDotnet,
  ".net web api": SiDotnet,
  dotnet: SiDotnet,
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
