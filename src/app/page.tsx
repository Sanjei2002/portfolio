import { Mail, MapPin, Github, Linkedin, Twitter, Globe, Braces, Server, Cloud, Code, Database, Terminal, Layers, Cpu, Smartphone } from "lucide-react";
import UniverseBackground from "@/components/UniverseBackground";
import portfolioData from "@/data/info.json";
import type { PortfolioData, DraculaColor, IconName } from "@/types/portfolio";

const data = portfolioData as PortfolioData;

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
  const { profile, contact, socials, skills, experience } = data;

  return (
    <>
      <UniverseBackground />
      <div className="min-h-screen flex flex-col md:flex-row relative z-10">
        {/* Left Column - Profile (Fixed on Desktop) */}
        <aside className="w-full md:w-[35%] md:fixed md:h-screen md:border-r md:border-slate-800/30 p-8 md:p-12 flex flex-col bg-slate-950/80 backdrop-blur-md">
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          {/* Avatar */}
          <div className="w-32 h-32 rounded-full bg-dracula-current mb-8 overflow-hidden ring-2 ring-dracula-purple hover:ring-4 hover:ring-dracula-pink transition-all duration-300">
            {profile.avatarUrl ? (
              <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-dracula-comment to-dracula-current flex items-center justify-center text-dracula-purple text-4xl font-semibold">
                {profile.initials}
              </div>
            )}
          </div>

          {/* Identity */}
          <h1 className="text-2xl font-bold text-dracula-fg mb-1">{profile.name}</h1>
          <h2 className="text-dracula-comment mb-1">{profile.title}</h2>
          <div className="w-8 h-0.5 bg-dracula-pink mb-6"></div>

          {/* Bio */}
          <p className="text-dracula-comment text-sm leading-relaxed mb-8 max-w-xs">
            {profile.bio}
          </p>

          {/* Meta */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-dracula-comment text-sm">
              <Mail className="w-4 h-4 text-dracula-cyan" />
              <span>{contact.email}</span>
            </div>
            <div className="flex items-center gap-3 text-dracula-comment text-sm">
              <MapPin className="w-4 h-4 text-dracula-cyan" />
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
                className="text-dracula-comment hover:text-dracula-purple hover:scale-110 transition-all duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dracula-comment hover:text-dracula-purple hover:scale-110 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {socials.twitter && (
              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dracula-comment hover:text-dracula-purple hover:scale-110 transition-all duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {socials.website && (
              <a
                href={socials.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dracula-comment hover:text-dracula-purple hover:scale-110 transition-all duration-200"
              >
                <Globe className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </aside>

      {/* Right Column - Content (Scrollable) */}
      <main className="w-full md:w-[65%] md:ml-[35%] p-8 md:p-12 md:py-20">
        {/* Core Skills Section */}
        <section className="mb-16 p-6 rounded-xl bg-slate-950/70 backdrop-blur-md border border-slate-800/50 hover:border-purple-500/30 transition-all duration-300 shadow-xl shadow-purple-500/5">
          <h3 className="text-dracula-fg font-semibold text-lg mb-8">Core Skills</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {Object.entries(skills).map(([categoryName, category], index) => {
              const IconComponent = iconMap[category.icon as IconName];
              const isFullWidth = index === Object.keys(skills).length - 1 && Object.keys(skills).length % 2 === 1;
              
              return (
                <div key={categoryName} className={isFullWidth ? "sm:col-span-2" : ""}>
                  <div className="flex items-center gap-2 text-dracula-comment text-sm mb-3">
                    {IconComponent && <IconComponent className={`w-4 h-4 ${colorClasses[category.color].text}`} />}
                    <span className="capitalize">{categoryName}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill.name}
                        className={`bg-dracula-current ${colorClasses[skill.color].text} rounded-full px-3 py-1 text-sm ${colorClasses[skill.color].hover} hover:text-dracula-bg transition-all duration-200 cursor-default`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Experience Section */}
        <section className="p-6 rounded-xl bg-slate-950/70 backdrop-blur-md border border-slate-800/50 hover:border-purple-500/30 transition-all duration-300 shadow-xl shadow-purple-500/5">
          <h3 className="text-dracula-fg font-semibold text-lg mb-8">Experience</h3>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-dracula-current hover:border-dracula-pink transition-colors duration-200 group">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-dracula-pink group-hover:scale-150 transition-transform duration-200"></div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-dracula-fg group-hover:text-dracula-pink transition-colors duration-200">{job.title}</h4>
                  <span className="text-dracula-comment text-sm">{job.period}</span>
                </div>
                <p className="text-dracula-pink text-sm mb-2">{job.company}</p>
                <p className="text-dracula-comment text-sm leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
    </>
  );
}
