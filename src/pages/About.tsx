import React from "react";
import { GraduationCap, BookOpen, Star } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { PageTransition } from "../components/PageTransition";

export const About: React.FC = () => {
  return (
    <PageTransition>
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full text-left">
        <SectionHeading title="About Me" subtitle="Biography & Education" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Biography content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-charcoal-muted text-sm md:text-base leading-relaxed font-medium"
          >
            <p>
              I’m <span className="text-charcoal font-bold">Rakshit Vijayavarthanan</span>, a passionate and curious student with a strong interest in technology, software development, and emerging technologies. I enjoy turning ideas into practical solutions and continuously improving my skills through projects, learning, and hands-on experience.
            </p>
            <p>
              My interests include Python, Java, Machine Learning, Artificial Intelligence, Web Development, and Software Engineering. I’ve worked on projects involving machine learning, recommendation systems, automation testing, and intelligent applications.
            </p>
            <p>
              I believe in learning by building, solving problems creatively, and staying curious about new technologies. My goal is to grow as a skilled technology professional while creating solutions that are useful, innovative, and impactful.
            </p>

            {/* Micro value badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex gap-3 items-start p-4 bg-white border border-sand-300/40 rounded-2xl">
                <div className="p-2 bg-sand-100 rounded-lg text-brown-accent mt-0.5">
                  <BookOpen size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-charcoal uppercase tracking-wider">Continuous Learning</h4>
                  <p className="text-xs text-neutral-gray mt-1 leading-snug">Expanding knowledge daily in AI paradigms, algorithms, and frameworks.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-4 bg-white border border-sand-300/40 rounded-2xl">
                <div className="p-2 bg-sand-100 rounded-lg text-brown-accent mt-0.5">
                  <Star size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-charcoal uppercase tracking-wider">Practical Execution</h4>
                  <p className="text-xs text-neutral-gray mt-1 leading-snug">Focusing on hands-on applications and functional systems over pure theory.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-xs uppercase tracking-widest text-neutral-gray font-bold mb-4 block">
              Education Path
            </h3>

            <div className="bg-white border border-sand-300/60 p-6 md:p-8 rounded-3xl shadow-xs relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sand-100 rounded-bl-full opacity-40 -z-10 group-hover:scale-105 transition-transform" />
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sand-200 rounded-2xl text-brown-accent flex items-center justify-center shrink-0">
                  <GraduationCap size={24} />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brown-accent bg-sand-100 border border-sand-300/80 px-2 py-0.5 rounded-full">
                      Undergraduate
                    </span>
                    <h4 className="text-lg md:text-xl font-bold text-charcoal mt-2 tracking-tight leading-snug">
                      B.Tech Information Technology
                    </h4>
                    <p className="text-sm font-semibold text-charcoal-muted mt-1 leading-snug">
                      Dr. Mahalingam College of Engineering and Technology
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-neutral-gray font-mono font-semibold">
                    <span>2023 – 2027</span>
                    <span className="text-sand-400">•</span>
                    <span>Tiruppur / Pollachi, TN</span>
                  </div>

                  <p className="text-xs text-neutral-gray leading-relaxed pt-2 border-t border-sand-100">
                    Acquiring strong fundamentals in computing structures, software design patterns, databases, artificial intelligence methodologies, and cloud engineering principles.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};
export default About;
