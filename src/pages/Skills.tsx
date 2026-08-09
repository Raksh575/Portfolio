import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { SkillCategory } from "../components/SkillCategory";
import { PageTransition } from "../components/PageTransition";

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const skillCategories = [
    {
      id: "programming",
      title: "Programming Languages",
      iconName: "Code",
      skills: ["Python", "Java", "JavaScript", "Dart", "SQL"],
      group: "Core",
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      iconName: "Cpu",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Scikit-learn",
        "TensorFlow",
        "Pandas",
      ],
      group: "Data",
    },
    {
      id: "development",
      title: "Web & Mobile Development",
      iconName: "Laptop",
      skills: [
        "React",
        "Node.js",
        "Django REST Framework",
        "Spring Boot",
        "Flutter",
        "REST APIs",
      ],
      group: "Dev",
    },
    {
      id: "databases",
      title: "Databases & Storage",
      iconName: "Database",
      skills: ["MySQL", "Firebase", "Spring Data JPA"],
      group: "Dev",
    },
    {
      id: "tools",
      title: "Tools & Technologies",
      iconName: "Settings",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "NetBeans",
        "Jupyter Notebook",
        "Selenium",
        "Docker",
        "Apache Kafka",
        "RabbitMQ",
      ],
      group: "Tools",
    },
    {
      id: "strengths",
      title: "Core Strengths",
      iconName: "Zap",
      skills: [
        "Problem Solving",
        "Algorithm Design",
        "API Development",
        "Data Analysis",
        "Automation",
        "Software Development",
      ],
      group: "Core",
    },
  ];

  const tabs = ["All", "Core", "Data", "Dev", "Tools"];

  const filteredCategories =
    activeTab === "All"
      ? skillCategories
      : skillCategories.filter((cat) => cat.group === activeTab);

  return (
    <PageTransition>
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full text-left">
        <SectionHeading title="Skills & Competencies" subtitle="Technical Toolkit" />

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2.5 mb-10 border-b border-sand-200 pb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-brown-accent text-white shadow-xs"
                  : "bg-transparent border border-sand-300 text-charcoal-muted hover:bg-sand-200"
              }`}
            >
              {tab === "All" ? "All Skills" : tab}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <SkillCategory
                  title={category.title}
                  skills={category.skills}
                  iconName={category.iconName}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </PageTransition>
  );
};
export default Skills;
