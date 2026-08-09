import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Cpu } from "lucide-react";
import { NetworkCanvas } from "../components/NetworkCanvas";
import { SocialLinks } from "../components/SocialLinks";
import { PageTransition } from "../components/PageTransition";

// Section Components
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { ExperiencePage } from "./Experience";
import { Certifications } from "./Certifications";
import { Achievements } from "./Achievements";
import { Blog } from "./Blog";
import { Contact } from "./Contact";

export const Home: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [searchParams] = useSearchParams();
  const scrollTarget = searchParams.get("scroll");

  // Handle smooth scroll on search query parameter detection
  useEffect(() => {
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) {
        const offset = 70; // Header offset
        const timer = setTimeout(() => {
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [scrollTarget]);

  const handleResumeDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/resume.pdf", { method: "HEAD" });
      if (response.ok) {
        window.open("/resume.pdf", "_blank");
      } else {
        setShowResumeModal(true);
      }
    } catch {
      setShowResumeModal(true);
    }
  };

  return (
    <PageTransition>
      {/* 1. Hero Section */}
      <div id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
        {/* Background Network Animation */}
        <NetworkCanvas />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand-200 border border-sand-300/60 text-xs font-semibold text-brown-accent"
            >
              <Terminal size={12} />
              <span>Hello, I'm</span>
            </motion.div>

            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-charcoal tracking-tight leading-none"
              >
                Rakshit
                <span className="block mt-1 text-gradient-accent">Vijayavarthanan</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                className="text-xl md:text-2xl font-bold text-brown-accent tracking-wide flex items-center gap-2 mt-3"
              >
                <Cpu size={18} />
                AI Engineer
              </motion.h2>
            </div>

            {/* Tagline block */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
              className="border-l-2 border-brown-accent pl-4 py-1.5"
            >
              <p className="text-sm md:text-base font-semibold text-charcoal-muted font-serif italic">
                "Learning Today. Building Tomorrow.<br />Code. Create. Innovate."
              </p>
            </motion.div>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
              className="text-sm md:text-base text-neutral-gray max-w-xl leading-relaxed font-medium"
            >
              A passionate technology student focused on Artificial Intelligence, Machine Learning, software development, and building practical solutions through code.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="px-6 py-3.5 rounded-xl bg-brown-accent hover:bg-brown-accent-hover text-white text-xs font-bold transition-all flex items-center gap-2 shadow-sm hover:scale-102 active:scale-98"
              >
                <span>View My Work</span>
                <ArrowRight size={14} />
              </a>

              <button
                onClick={handleResumeDownload}
                className="px-6 py-3.5 rounded-xl border border-sand-300 hover:bg-sand-200 text-charcoal-muted text-xs font-bold transition-all flex items-center gap-2 hover:scale-102 active:scale-98 cursor-pointer"
              >
                <Download size={14} />
                <span>Download Resume</span>
              </button>
            </motion.div>

            {/* Social profiles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="pt-6 border-t border-sand-200 max-w-sm"
            >
              <SocialLinks iconSize={18} />
            </motion.div>
          </div>

          {/* Profile Photo Placeholder Area */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl border border-sand-400/50 p-3 bg-white shadow-lg"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden bg-sand-100 flex items-center justify-center relative">
                {!imgError ? (
                  <img
                    src="/profile.jpg"
                    alt="Rakshit Vijayavarthanan"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-[#EFECE0] to-[#F7F4EB] p-8 text-center relative overflow-hidden">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-2/3 h-2/3 text-brown-accent/30 mb-2"
                      fill="currentColor"
                    >
                      <path d="M50 15a15 15 0 1 0 0 30 15 15 0 0 0 0-30zm0 35c-20 0-35 12-35 25v5h70v-5c0-13-15-25-35-25z" />
                    </svg>
                    <div className="relative z-10">
                      <span className="text-[15px] font-bold text-charcoal tracking-tight block">
                        Rakshit V.
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brown-accent mt-0.5 block">
                        AI Engineer
                      </span>
                    </div>
                    <div className="absolute inset-0 opacity-15 pointer-events-none">
                      <svg className="w-full h-full text-brown-accent" viewBox="0 0 100 100">
                        <line x1="10" y1="20" x2="40" y2="40" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="80" y1="10" x2="60" y2="45" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="10" y1="80" x2="35" y2="70" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="90" y1="80" x2="70" y2="65" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="40" cy="40" r="1.5" />
                        <circle cx="60" cy="45" r="1.5" />
                        <circle cx="35" cy="70" r="1.5" />
                        <circle cx="70" cy="65" r="1.5" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll/Swipe Indicator */}
        <div className="absolute bottom-6 left-0 right-0 mx-auto w-max flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col items-center gap-1.5"
          >
            <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-gray block md:hidden">
              Swipe Down
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-gray hidden md:block">
              Scroll Down
            </span>
            <div className="w-5 h-9 rounded-full border-2 border-sand-400 p-1 flex justify-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 bg-brown-accent rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. About Section */}
      <div id="about" className="border-t border-sand-200">
        <About />
      </div>

      {/* 3. Skills Section */}
      <div id="skills" className="border-t border-sand-200 bg-sand-100/30">
        <Skills />
      </div>

      {/* 4. Projects Section */}
      <div id="projects" className="border-t border-sand-200">
        <Projects />
      </div>

      {/* 5. Experience Section */}
      <div id="experience" className="border-t border-sand-200 bg-sand-100/30">
        <ExperiencePage />
      </div>

      {/* 6. Certifications Section */}
      <div id="certifications" className="border-t border-sand-200">
        <Certifications />
      </div>

      {/* 7. Achievements Section */}
      <div id="achievements" className="border-t border-sand-200 bg-sand-100/30">
        <Achievements />
      </div>

      {/* 8. Blog Section */}
      <div id="blog" className="border-t border-sand-200">
        <Blog />
      </div>

      {/* 9. Contact Section */}
      <div id="contact" className="border-t border-sand-200 bg-sand-100/30">
        <Contact />
      </div>

      {/* Resume fallback modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity"
            onClick={() => setShowResumeModal(false)}
          />
          <div className="relative bg-[#FDFBF7] border border-sand-400/60 rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl text-center z-10 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-full bg-sand-200 text-brown-accent flex items-center justify-center mx-auto mb-4">
              <Download size={22} />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-2">Resume Coming Soon</h3>
            <p className="text-sm text-neutral-gray mb-6 leading-relaxed">
              The resume document is currently being updated to reflect recent milestones and projects. 
              Please reach out directly or check back shortly to download it!
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:rakshitvijayavarthanan@gmail.com"
                className="w-full py-2.5 rounded-lg bg-brown-accent hover:bg-brown-accent-hover text-white font-semibold text-sm transition-colors block"
              >
                Email Rakshit
              </a>
              <button
                onClick={() => setShowResumeModal(false)}
                className="w-full py-2.5 rounded-lg border border-sand-300 hover:bg-sand-200 text-charcoal-muted font-semibold text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </PageTransition>
  );
};
