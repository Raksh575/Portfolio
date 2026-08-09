import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { projectsData } from "../data/portfolioData";
import type { Project } from "../data/portfolioData";
import { PageTransition } from "../components/PageTransition";

export const Projects: React.FC = () => {
  const [showFeaturedTooltip, setShowFeaturedTooltip] = useState(false);

  const featuredProject = projectsData.find((p: Project) => p.featured);
  const regularProjects = projectsData.filter((p: Project) => !p.featured);

  const handleFeaturedGithubClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowFeaturedTooltip(true);
    setTimeout(() => setShowFeaturedTooltip(false), 2500);
  };

  return (
    <PageTransition>
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full text-left">
        <SectionHeading title="Projects" subtitle="Research & Practical Work" />

        {/* Featured Project Section */}
        {featuredProject && (
          <div className="mb-16">
            <h3 className="text-xs uppercase tracking-widest text-neutral-gray font-bold mb-6 flex items-center gap-2">
              <ShieldCheck size={14} className="text-brown-accent" />
              Featured / Final Year Project
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white border border-sand-300/60 rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Visual graphic on Left */}
              <div className="lg:col-span-5 min-h-[220px] lg:min-h-full bg-[#EFECE0] flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-sand-200 relative group">
                <div className="absolute w-48 h-48 rounded-full border border-brown-accent/25 animate-pulse" />
                <div className="absolute w-28 h-28 rounded-full border border-brown-accent/35" />
                
                <svg className="w-4/5 h-4/5 text-brown-accent/40" viewBox="0 0 200 120">
                  <circle cx="40" cy="30" r="5" fill="currentColor" />
                  <circle cx="160" cy="30" r="5" fill="currentColor" />
                  <circle cx="100" cy="65" r="7" fill="currentColor" />
                  <circle cx="50" cy="95" r="5" fill="currentColor" />
                  <circle cx="150" cy="95" r="5" fill="currentColor" />
                  <line x1="40" y1="30" x2="100" y2="65" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
                  <line x1="160" y1="30" x2="100" y2="65" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
                  <line x1="50" y1="95" x2="100" y2="65" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="150" y1="95" x2="100" y2="65" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="40" y1="30" x2="50" y2="95" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="160" y1="30" x2="150" y2="95" stroke="currentColor" strokeWidth="0.8" />
                </svg>

                <div className="absolute bottom-4 left-4 bg-[#FDFBF7] border border-sand-300 px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-widest text-brown-accent shadow-xs">
                  VANET Intrusion Detection
                </div>
              </div>

              {/* Project description on Right */}
              <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brown-accent bg-sand-100 border border-sand-300 px-2.5 py-1 rounded-full w-max block">
                    Deep Learning Research
                  </span>
                  
                  <h4 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-charcoal tracking-tight leading-snug">
                    {featuredProject.title}
                  </h4>

                  <p className="text-sm md:text-base text-charcoal-muted leading-relaxed font-medium">
                    {featuredProject.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {featuredProject.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold text-charcoal-muted bg-sand-50 border border-sand-200 px-3 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-8 border-t border-sand-100 mt-8 relative">
                  <button
                    onClick={handleFeaturedGithubClick}
                    className="px-6 py-3 border border-sand-300 text-charcoal-muted text-xs font-bold rounded-xl hover:bg-sand-200 hover:text-charcoal transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>View Repository</span>
                  </button>

                  {/* Tooltip for missing Github URL */}
                  {showFeaturedTooltip && (
                    <div className="absolute bottom-16 left-0 bg-charcoal text-white text-[11px] py-1.5 px-3 rounded-lg shadow-lg z-10 animate-in fade-in slide-in-from-bottom-2 duration-200">
                      GitHub Repository link is coming soon!
                    </div>
                  )}

                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-brown-accent hover:bg-brown-accent-hover text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 shadow-xs"
                    >
                      <ExternalLink size={15} />
                      <span>Live Demonstration</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Regular Projects Section */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-neutral-gray font-bold mb-6">
            Other Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {regularProjects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
export default Projects;
