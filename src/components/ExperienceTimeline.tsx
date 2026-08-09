import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import type { Experience } from "../data/portfolioData";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <div className="relative border-l-2 border-sand-300 ml-4 md:ml-6 pl-6 md:pl-10 py-2 space-y-12">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
          className="relative"
        >
          {/* Node Icon Indicator */}
          <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-7 h-7 bg-white border-2 border-brown-accent rounded-full flex items-center justify-center text-brown-accent shadow-xs">
            <Briefcase size={12} />
          </div>

          {/* Experience Card */}
          <div className="bg-white border border-sand-300/60 rounded-2xl p-6 md:p-8 shadow-xs hover:shadow-md transition-shadow relative">
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold text-charcoal tracking-tight">{exp.title}</h3>
                <p className="text-sm font-semibold text-brown-accent mt-0.5">{exp.company}</p>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-sand-100 border border-sand-300 text-brown-accent w-max">
                {exp.type}
              </span>
            </div>

            {/* Sub-header meta */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-neutral-gray mb-6">
              <div className="flex items-center gap-1">
                <Calendar size={13} />
                <span>{exp.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={13} />
                <span>{exp.location}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
              {exp.description}
            </p>

            {/* Skills learned */}
            <div className="flex flex-wrap gap-1.5 border-t border-sand-100 pt-4">
              {exp.skills.map((skill: string) => (
                <span
                  key={skill}
                  className="text-[10px] font-semibold text-charcoal-muted bg-sand-50 border border-sand-200 px-2 py-0.5 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
