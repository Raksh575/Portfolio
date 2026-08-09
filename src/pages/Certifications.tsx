import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { CertificationCard } from "../components/CertificationCard";
import { certificationsData } from "../data/portfolioData";
import { PageTransition } from "../components/PageTransition";

export const Certifications: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [issuerFilter, setIssuerFilter] = useState("All");

  const issuers = ["All", "Infosys", "TCS iON", "NPTEL", "LinkedIn"];

  const filteredCertifications = certificationsData.filter((cert) => {
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesIssuer =
      issuerFilter === "All" ||
      cert.issuer.toLowerCase().includes(issuerFilter.toLowerCase());

    return matchesSearch && matchesIssuer;
  });

  return (
    <PageTransition>
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full text-left">
        <SectionHeading title="Certifications" subtitle="Academic & Industry Credentials" />

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-10 pb-6 border-b border-sand-200">
          {/* Search bar */}
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-gray" size={16} />
            <input
              type="text"
              placeholder="Search credentials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-sand-300 rounded-xl text-xs focus:outline-hidden focus:border-brown-accent transition-colors"
            />
          </div>

          {/* Issuer Filters */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-bold text-neutral-gray flex items-center gap-1.5 mr-2">
              <Filter size={12} />
              Filter:
            </span>
            {issuers.map((issuer) => (
              <button
                key={issuer}
                onClick={() => setIssuerFilter(issuer)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  issuerFilter === issuer
                    ? "bg-brown-accent text-white"
                    : "bg-white border border-sand-300 text-charcoal-muted hover:bg-sand-200"
                }`}
              >
                {issuer}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        {filteredCertifications.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            {filteredCertifications.map((cert, index) => (
              <CertificationCard key={cert.id} certification={cert} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-sand-300/40 rounded-3xl">
            <p className="text-sm text-neutral-gray font-medium">No certifications found matching your filters.</p>
          </div>
        )}
      </section>
    </PageTransition>
  );
};
export default Certifications;
