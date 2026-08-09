import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  iconName: string;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, iconName }) => {
  // Dynamically resolve Lucide icon from string name
  const resolveIcon = (name: string) => {
    const IconComponent = (Icons as any)[name];
    if (IconComponent) {
      return <IconComponent className="text-brown-accent" size={20} />;
    }
    return <Icons.Code className="text-brown-accent" size={20} />;
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white border border-sand-300/60 p-6 md:p-8 rounded-2xl shadow-xs transition-shadow hover:shadow-md flex flex-col h-full"
    >
      <div className="flex items-center gap-3 mb-6 pb-3 border-b border-sand-200">
        <div className="p-2.5 bg-sand-100 rounded-xl flex items-center justify-center">
          {resolveIcon(iconName)}
        </div>
        <h3 className="text-lg font-bold text-charcoal tracking-tight">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2.5 mt-auto">
        {skills.map((skill) => (
          <motion.span
            key={skill}
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: "#EFECE0" }}
            whileTap={{ scale: 0.98 }}
            className="text-xs font-semibold text-charcoal-muted bg-sand-100 border border-sand-200/60 px-3 py-1.5 rounded-lg transition-colors cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
