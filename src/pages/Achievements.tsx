import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { AchievementCard } from "../components/AchievementCard";
import { achievementsData } from "../data/portfolioData";
import { PageTransition } from "../components/PageTransition";

export const Achievements: React.FC = () => {
  return (
    <PageTransition>
      <section className="py-24 max-w-4xl mx-auto px-6 md:px-12 w-full text-left">
        <SectionHeading title="Achievements" subtitle="Competitions & Distinctions" />

        <div className="space-y-6 mt-8">
          {achievementsData.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </section>
    </PageTransition>
  );
};
export default Achievements;
