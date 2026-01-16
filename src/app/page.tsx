import { Mail, MapPin, Github, Linkedin, Braces, Server, Cloud } from "lucide-react";
import UniverseBackground from "@/components/UniverseBackground";

export default function Home() {
  return (
    <>
      <UniverseBackground />
      <div className="min-h-screen flex flex-col md:flex-row relative z-10">
        {/* Left Column - Profile (Fixed on Desktop) */}
        <aside className="w-full md:w-[35%] md:fixed md:h-screen md:border-r md:border-slate-800/30 p-8 md:p-12 flex flex-col bg-slate-950/80 backdrop-blur-md">
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          {/* Avatar */}
          <div className="w-32 h-32 rounded-full bg-dracula-current mb-8 overflow-hidden ring-2 ring-dracula-purple hover:ring-4 hover:ring-dracula-pink transition-all duration-300">
            <div className="w-full h-full bg-gradient-to-br from-dracula-comment to-dracula-current flex items-center justify-center text-dracula-purple text-4xl font-semibold">
              JD
            </div>
          </div>

          {/* Identity */}
          <h1 className="text-2xl font-bold text-dracula-fg mb-1">John Doe</h1>
          <h2 className="text-dracula-comment mb-1">Senior Software Engineer</h2>
          <div className="w-8 h-0.5 bg-dracula-pink mb-6"></div>

          {/* Bio */}
          <p className="text-dracula-comment text-sm leading-relaxed mb-8 max-w-xs">
            15+ years building scalable systems and leading engineering teams
          </p>

          {/* Meta */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-dracula-comment text-sm">
              <Mail className="w-4 h-4 text-dracula-cyan" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-dracula-comment text-sm">
              <MapPin className="w-4 h-4 text-dracula-cyan" />
              <span>San Francisco, CA</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dracula-comment hover:text-dracula-purple hover:scale-110 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dracula-comment hover:text-dracula-purple hover:scale-110 transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </aside>

      {/* Right Column - Content (Scrollable) */}
      <main className="w-full md:w-[65%] md:ml-[35%] p-8 md:p-12 md:py-20">
        {/* Core Skills Section */}
        <section className="mb-16 p-6 rounded-xl bg-slate-950/70 backdrop-blur-md border border-slate-800/50 hover:border-purple-500/30 transition-all duration-300 shadow-xl shadow-purple-500/5">
          <h3 className="text-dracula-fg font-semibold text-lg mb-8">Core Skills</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Languages */}
            <div>
              <div className="flex items-center gap-2 text-dracula-comment text-sm mb-3">
                <Braces className="w-4 h-4 text-dracula-yellow" />
                <span>Languages</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-dracula-current text-dracula-cyan rounded-full px-3 py-1 text-sm hover:bg-dracula-cyan hover:text-dracula-bg transition-all duration-200 cursor-default">
                  TypeScript
                </span>
                <span className="bg-dracula-current text-dracula-green rounded-full px-3 py-1 text-sm hover:bg-dracula-green hover:text-dracula-bg transition-all duration-200 cursor-default">
                  Python
                </span>
                <span className="bg-dracula-current text-dracula-orange rounded-full px-3 py-1 text-sm hover:bg-dracula-orange hover:text-dracula-bg transition-all duration-200 cursor-default">
                  Go
                </span>
              </div>
            </div>

            {/* Backend */}
            <div>
              <div className="flex items-center gap-2 text-dracula-comment text-sm mb-3">
                <Server className="w-4 h-4 text-dracula-green" />
                <span>Backend</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-dracula-current text-dracula-green rounded-full px-3 py-1 text-sm hover:bg-dracula-green hover:text-dracula-bg transition-all duration-200 cursor-default">
                  Node.js
                </span>
                <span className="bg-dracula-current text-dracula-cyan rounded-full px-3 py-1 text-sm hover:bg-dracula-cyan hover:text-dracula-bg transition-all duration-200 cursor-default">
                  PostgreSQL
                </span>
                <span className="bg-dracula-current text-dracula-red rounded-full px-3 py-1 text-sm hover:bg-dracula-red hover:text-dracula-bg transition-all duration-200 cursor-default">
                  Redis
                </span>
              </div>
            </div>

            {/* Cloud */}
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2 text-dracula-comment text-sm mb-3">
                <Cloud className="w-4 h-4 text-dracula-purple" />
                <span>Cloud</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-dracula-current text-dracula-orange rounded-full px-3 py-1 text-sm hover:bg-dracula-orange hover:text-dracula-bg transition-all duration-200 cursor-default">
                  AWS
                </span>
                <span className="bg-dracula-current text-dracula-cyan rounded-full px-3 py-1 text-sm hover:bg-dracula-cyan hover:text-dracula-bg transition-all duration-200 cursor-default">
                  Kubernetes
                </span>
                <span className="bg-dracula-current text-dracula-purple rounded-full px-3 py-1 text-sm hover:bg-dracula-purple hover:text-dracula-bg transition-all duration-200 cursor-default">
                  Docker
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="p-6 rounded-xl bg-slate-950/70 backdrop-blur-md border border-slate-800/50 hover:border-purple-500/30 transition-all duration-300 shadow-xl shadow-purple-500/5">
          <h3 className="text-dracula-fg font-semibold text-lg mb-8">Experience</h3>

          <div className="space-y-8">
            {/* Job 1 */}
            <div className="relative pl-6 border-l-2 border-dracula-current hover:border-dracula-pink transition-colors duration-200 group">
              <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-dracula-pink group-hover:scale-150 transition-transform duration-200"></div>
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-semibold text-dracula-fg group-hover:text-dracula-pink transition-colors duration-200">Senior Software Engineer</h4>
                <span className="text-dracula-comment text-sm">2020 - Present</span>
              </div>
              <p className="text-dracula-pink text-sm mb-2">Tech Corp</p>
              <p className="text-dracula-comment text-sm leading-relaxed">
                Led development of microservices architecture. 40% improvement in system performance.
              </p>
            </div>

            {/* Job 2 */}
            <div className="relative pl-6 border-l-2 border-dracula-current hover:border-dracula-pink transition-colors duration-200 group">
              <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-dracula-pink group-hover:scale-150 transition-transform duration-200"></div>
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-semibold text-dracula-fg group-hover:text-dracula-pink transition-colors duration-200">Software Engineer</h4>
                <span className="text-dracula-comment text-sm">2017 - 2020</span>
              </div>
              <p className="text-dracula-pink text-sm mb-2">Innovation Labs</p>
              <p className="text-dracula-comment text-sm leading-relaxed">
                Architected cloud-native applications, mentored junior developers.
              </p>
            </div>

            {/* Job 3 */}
            <div className="relative pl-6 border-l-2 border-dracula-current hover:border-dracula-pink transition-colors duration-200 group">
              <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-dracula-pink group-hover:scale-150 transition-transform duration-200"></div>
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-semibold text-dracula-fg group-hover:text-dracula-pink transition-colors duration-200">Full Stack Developer</h4>
                <span className="text-dracula-comment text-sm">2015 - 2017</span>
              </div>
              <p className="text-dracula-pink text-sm mb-2">StartUp Inc</p>
              <p className="text-dracula-comment text-sm leading-relaxed">
                Built scalable web applications using React and Node.js.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  );
}
