export type DraculaColor = 
  | "cyan" 
  | "green" 
  | "orange" 
  | "pink" 
  | "purple" 
  | "red" 
  | "yellow";

export type IconName = 
  | "Braces" 
  | "Server" 
  | "Cloud" 
  | "Code" 
  | "Database" 
  | "Globe" 
  | "Terminal"
  | "Layers"
  | "Cpu"
  | "Smartphone";

export interface Profile {
  initials: string;
  name: string;
  title: string;
  bio: string;
  avatarUrl: string | null;
}

export interface Contact {
  email: string;
  location: string;
  phone: string | null;
}

export interface Socials {
  github: string | null;
  linkedin: string | null;
  twitter: string | null;
  website: string | null;
}

export interface SkillItem {
  name: string;
  color: DraculaColor;
}

export interface SkillCategory {
  icon: IconName;
  color: DraculaColor;
  items: SkillItem[];
}

export interface Skills {
  [category: string]: SkillCategory;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string | string[];
}

export interface CaseStudy {
  title: string;
  overview: string;
  image: string | null;
  link: string | null;
  techStack: SkillItem[];
  keySystems: string[];
  challenges: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string | null;
  link: string | null;
  features: string[];
  technologies: SkillItem[];
}

export interface Meta {
  siteTitle: string;
  siteDescription: string;
  siteUrl: string;
  keywords: string[];
  twitterHandle: string | null;
}

export type SystemNodeStatus = "active" | "idle" | "processing";
export type ModuleStatus = "online" | "active" | "idle" | "syncing";

export interface SystemNode {
  id: string;
  label: string;
  icon: string;
  x: number;
  y: number;
  status: SystemNodeStatus;
  description: string;
}

export interface SystemConnection {
  from: string;
  to: string;
  label?: string;
  animated?: boolean;
}

export interface ModuleConfig {
  version: string;
  status: ModuleStatus;
  subtitle?: string;
  description?: string;
}

export interface SystemTelemetry {
  latency: number;
  cacheHitRate: number;
  authStatus: string;
}

export interface SystemArchitecture {
  name: string;
  nodes: SystemNode[];
  connections: SystemConnection[];
}

export interface SystemConfig {
  version: string;
  build: string;
  status: string;
  uptime: string;
  modules: {
    systemScope: ModuleConfig;
    capabilities: ModuleConfig;
    deploymentHistory: ModuleConfig;
    systemArchitecture: ModuleConfig;
  };
  telemetry: SystemTelemetry;
  architecture: SystemArchitecture;
}

export interface PortfolioData {
  profile: Profile;
  contact: Contact;
  socials: Socials;
  skills: Skills;
  experience: Experience[];
  platformFocus?: string[];
  caseStudies?: CaseStudy[];
  projects?: Project[];
  meta: Meta;
  system?: SystemConfig;
}
