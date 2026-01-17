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
}
