import React from "react";
import { Link } from "react-router-dom";
import { SocialLinks } from "./SocialLinks";

export const Footer: React.FC = () => {
  const currentYear = 2026; // Set to 2026 as explicitly requested by copyright string

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Certifications", path: "/certifications" },
    { name: "Achievements", path: "/achievements" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-sand-100 border-t border-sand-300 py-12 md:py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        {/* Name and Title */}
        <div className="text-center md:text-left">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-charcoal hover:opacity-85 transition-opacity"
          >
            Rakshit<span className="text-brown-accent">.</span>
          </Link>
          <p className="text-xs text-brown-accent uppercase tracking-widest font-semibold mt-1">
            AI Engineer
          </p>
          <p className="text-sm text-neutral-gray mt-3 max-w-xs">
            Learning Today. Building Tomorrow. Code. Create. Innovate.
          </p>
        </div>

        {/* Navigation Quicklinks */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:max-w-md mx-auto">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-charcoal-muted hover:text-brown-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Socials & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <SocialLinks iconSize={18} />
          <p className="text-xs text-neutral-gray text-center md:text-right mt-2">
            © {currentYear} Rakshit Vijayavarthanan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
