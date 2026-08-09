import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { experienceData } from "../data/portfolioData";
import { PageTransition } from "../components/PageTransition";

export const ExperiencePage: React.FC = () => {
  return (
    <PageTransition>
      <section className="py-24 max-w-4xl mx-auto px-6 md:px-12 w-full text-left">
        <SectionHeading title="Work Experience" subtitle="Internships & Industry Roles" />
        
        <div className="mt-8">
          <ExperienceTimeline experiences={experienceData} />
        </div>
      </section>
    </PageTransition>
  );
};
export default ExperiencePage;
