import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import type { Certification } from "../data/portfolioData";

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ certification, index }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCertificateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!certification.certificateUrl) {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2500);
    } else {
      window.open(certification.certificateUrl, "_blank");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      className="bg-white border border-sand-300/60 p-6 rounded-2xl flex flex-col justify-between h-full hover:shadow-md transition-shadow relative"
    >
      <div>
        <div className="w-10 h-10 rounded-xl bg-sand-100 flex items-center justify-center text-brown-accent mb-4">
          <Award size={20} />
        </div>

        <h3 className="text-base font-bold text-charcoal leading-snug mb-1">
          {certification.title}
        </h3>

        <p className="text-xs font-semibold text-brown-accent mb-3">
          {certification.issuer}
        </p>

        <div className="flex items-center gap-1 text-[11px] text-neutral-gray mb-6">
          <Calendar size={12} />
          <span>{certification.date}</span>
        </div>
      </div>

      <div className="relative mt-auto">
        <button
          onClick={handleCertificateClick}
          className={`w-full py-2 px-4 rounded-xl border border-sand-300 text-charcoal-muted text-xs font-semibold hover:bg-sand-200 hover:text-charcoal transition-all flex items-center justify-center gap-1.5 cursor-pointer`}
        >
          <span>View Certificate</span>
          <ExternalLink size={12} />
        </button>

        {showTooltip && (
          <div className="absolute bottom-12 left-0 right-0 mx-auto w-max max-w-[200px] bg-charcoal text-white text-[10px] py-1.5 px-3 rounded-lg shadow-lg text-center z-10 animate-in fade-in slide-in-from-bottom-2 duration-200">
            Certificate URL coming soon!
          </div>
        )}
      </div>
    </motion.div>
  );
};
