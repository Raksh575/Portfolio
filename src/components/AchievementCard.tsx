import React from "react";
import { motion } from "framer-motion";
import { Trophy, CheckCircle } from "lucide-react";
import type { Achievement } from "../data/portfolioData";

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index }) => {
  const isCodeVita = achievement.id === "ach-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white border border-sand-300/60 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-start gap-6 hover:shadow-md transition-shadow h-full"
    >
      {/* Visual Badge representing achievement */}
      <div className={`p-4 rounded-2xl flex items-center justify-center shrink-0 ${
        isCodeVita ? "bg-sand-100 text-[#FFA116]" : "bg-sand-200 text-brown-accent"
      }`}>
        {isCodeVita ? <Trophy size={32} /> : <CheckCircle size={32} />}
      </div>

      {/* Content */}
      <div className="flex-grow">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-3">
          <h3 className="text-xl font-bold text-charcoal tracking-tight">{achievement.title}</h3>
          {achievement.subtitle && (
            <span className="text-xs font-semibold text-brown-accent font-mono uppercase tracking-wider">
              {achievement.subtitle}
            </span>
          )}
        </div>

        {isCodeVita ? (
          <div className="mb-4">
            <div className="flex items-baseline gap-1.5">
              <span className="text-4xl font-extrabold text-charcoal font-serif">6,234</span>
              <span className="text-xs text-neutral-gray uppercase tracking-widest font-semibold">
                Global Ranking
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-sand-200 border border-sand-300/80 px-2 py-0.5 rounded text-brown-accent">
              Environmental Impact
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-sand-200 border border-sand-300/80 px-2 py-0.5 rounded text-brown-accent">
              Industry 4.0 / IoT
            </span>
          </div>
        )}

        <p className="text-sm text-charcoal-muted leading-relaxed">
          {achievement.description}
        </p>
      </div>
    </motion.div>
  );
};
