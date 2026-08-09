import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import type { Project } from "../data/portfolioData";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Render a beautiful, custom, abstract CSS background based on the project ID
  const renderVisualPlaceholder = (id: string) => {
    switch (id) {
      case "vanet-misbehavior":
        return (
          <div className="absolute inset-0 bg-[#EFECE0] flex items-center justify-center overflow-hidden">
            <div className="absolute w-40 h-40 rounded-full border border-brown-accent/20 animate-pulse" />
            <div className="absolute w-24 h-24 rounded-full border border-brown-accent/30" />
            <svg className="w-full h-full text-brown-accent/40" viewBox="0 0 200 120">
              <circle cx="40" cy="30" r="4" fill="currentColor" />
              <circle cx="160" cy="30" r="4" fill="currentColor" />
              <circle cx="100" cy="60" r="5" fill="currentColor" />
              <circle cx="50" cy="90" r="4" fill="currentColor" />
              <circle cx="150" cy="90" r="4" fill="currentColor" />
              <line x1="40" y1="30" x2="100" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="160" y1="30" x2="100" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="50" y1="90" x2="100" y2="60" stroke="currentColor" strokeWidth="1" />
              <line x1="150" y1="90" x2="100" y2="60" stroke="currentColor" strokeWidth="1" />
              <line x1="40" y1="30" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
              <line x1="160" y1="30" x2="150" y2="90" stroke="currentColor" strokeWidth="0.5" />
            </svg>
            <div className="absolute bottom-3 left-3 bg-[#FDFBF7] border border-sand-300 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider text-brown-accent">
              V2X Network Simulation
            </div>
          </div>
        );
      case "movie-recommender":
        return (
          <div className="absolute inset-0 bg-[#EFECE0]/80 flex items-center justify-center overflow-hidden">
            <svg className="w-2/3 h-2/3 text-brown-accent/50" viewBox="0 0 100 60" fill="none">
              <circle cx="30" cy="30" r="12" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="70" cy="30" r="12" stroke="currentColor" strokeWidth="1.5" />
              <path d="M42 30h16M47 25l5 5-5 5" stroke="currentColor" strokeWidth="1" />
              <circle cx="30" cy="30" r="4" fill="currentColor" />
              <circle cx="70" cy="30" r="6" fill="currentColor" />
            </svg>
            <div className="absolute bottom-3 left-3 bg-[#FDFBF7] border border-sand-300 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider text-brown-accent">
              Collaborative Filter
            </div>
          </div>
        );
      case "student-management":
        return (
          <div className="absolute inset-0 bg-[#EFECE0]/60 flex items-center justify-center overflow-hidden">
            <svg className="w-1/2 h-1/2 text-brown-accent/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div className="absolute bottom-3 left-3 bg-[#FDFBF7] border border-sand-300 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider text-brown-accent">
              SQL / Java Database
            </div>
          </div>
        );
      case "automation-testing":
        return (
          <div className="absolute inset-0 bg-[#EFECE0]/90 flex items-center justify-center overflow-hidden">
            <div className="absolute border border-brown-accent/10 w-48 h-28 rounded-lg rotate-12 flex items-center justify-center bg-white/20">
              <svg className="w-8 h-8 text-brown-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <div className="absolute bottom-3 left-3 bg-[#FDFBF7] border border-sand-300 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider text-brown-accent">
              Selenium Scripts
            </div>
          </div>
        );
      default:
        return (
          <div className="absolute inset-0 bg-sand-200 flex items-center justify-center">
            <Code size={40} className="text-sand-400" />
          </div>
        );
    }
  };

  const handleGithubClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!project.githubUrl) {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2500);
    } else {
      window.open(project.githubUrl, "_blank");
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="card-hover-shadow bg-white border border-sand-300/60 rounded-2xl overflow-hidden flex flex-col h-full relative"
    >
      {/* Project Visual Area */}
      <div className="h-48 md:h-52 w-full relative overflow-hidden border-b border-sand-200 group">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          renderVisualPlaceholder(project.id)
        )}
        <div className="absolute inset-0 bg-charcoal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Details */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        {project.featured && (
          <span className="text-[10px] font-bold uppercase tracking-wider text-brown-accent bg-sand-100 border border-sand-300 px-2.5 py-1 rounded-full w-max mb-3">
            Featured / Final Year Project
          </span>
        )}
        <h3 className="text-xl font-bold text-charcoal leading-tight mb-3 hover:text-brown-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-charcoal-muted leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-[11px] font-medium text-charcoal-muted bg-sand-50 border border-sand-200 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons / Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-sand-100 mt-auto relative">
          <button
            onClick={handleGithubClick}
            className={`flex-1 py-2 px-4 rounded-xl border border-sand-300 text-charcoal-muted text-xs font-semibold hover:bg-sand-200 hover:text-charcoal transition-all flex items-center justify-center gap-2 cursor-pointer ${
              !project.githubUrl ? "relative" : ""
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            Code
          </button>
          
          {/* Tooltip for missing Github URL */}
          {showTooltip && (
            <div className="absolute bottom-16 left-0 right-0 mx-auto w-max max-w-xs bg-charcoal text-white text-[11px] py-1.5 px-3 rounded-lg shadow-lg text-center z-10 animate-in fade-in slide-in-from-bottom-2 duration-200">
              Repository link is coming soon!
            </div>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-4 rounded-xl bg-brown-accent hover:bg-brown-accent-hover text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};
