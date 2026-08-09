import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const navLinks = [
    { name: "Home", path: "/", sectionId: "hero" },
    { name: "About", path: "/about", sectionId: "about" },
    { name: "Skills", path: "/skills", sectionId: "skills" },
    { name: "Projects", path: "/projects", sectionId: "projects" },
    { name: "Experience", path: "/experience", sectionId: "experience" },
    { name: "Certifications", path: "/certifications", sectionId: "certifications" },
    { name: "Achievements", path: "/achievements", sectionId: "achievements" },
    { name: "Blog", path: "/blog", sectionId: "blog" },
    { name: "Contact", path: "/contact", sectionId: "contact" },
  ];

  // Sticky navbar trigger on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Scrollspy to set active nav link based on viewport scroll position
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("");
      return;
    }

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200; // Trigger point offset

      for (const link of navLinks) {
        const el = document.getElementById(link.sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy(); // Initialize on mount
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [isHomePage]);

  const handleNavLinkClick = (e: React.MouseEvent, sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    if (isHomePage) {
      e.preventDefault();
      if (sectionId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 70; // Sticky header offset
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    }
  };

  const handleResumeClick = async (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/resume.pdf", { method: "HEAD" });
      if (response.ok) {
        window.open("/resume.pdf", "_blank");
      } else {
        setShowResumeModal(true);
      }
    } catch {
      setShowResumeModal(true);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#FDFBF7]/80 backdrop-blur-md shadow-md border-b border-sand-300/40"
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to={isHomePage ? "/" : "/?scroll=hero"}
            onClick={(e) => isHomePage && handleNavLinkClick(e, "hero")}
            className="text-2xl font-bold tracking-tight text-charcoal hover:opacity-85 transition-opacity flex items-center gap-1"
          >
            Rakshit<span className="text-brown-accent">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = isHomePage
                ? activeSection === link.sectionId
                : location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={isHomePage ? `/?scroll=${link.sectionId}` : link.path}
                  onClick={(e) => handleNavLinkClick(e, link.sectionId)}
                  className={`text-sm font-semibold tracking-wide transition-all duration-300 relative py-1 hover:text-brown-accent ${
                    isActive ? "text-brown-accent" : "text-charcoal-muted"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brown-accent rounded-full" />
                  )}
                </Link>
              );
            })}

            <button
              onClick={handleResumeClick}
              className="px-5 py-2 rounded-full bg-brown-accent hover:bg-brown-accent-hover text-white text-sm font-semibold transition-all duration-300 shadow-sm flex items-center gap-2 hover:scale-102 active:scale-98 cursor-pointer"
            >
              <Download size={14} />
              Resume
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={handleResumeClick}
              className="p-2 rounded-full bg-brown-accent text-white hover:bg-brown-accent-hover transition-colors flex items-center justify-center"
              aria-label="Download Resume"
            >
              <Download size={15} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-charcoal hover:bg-sand-200 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-charcoal/20 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#FDFBF7] border-l border-sand-300 z-50 flex flex-col p-8 transition-transform duration-300 ease-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="text-xl font-bold text-charcoal">
            Rakshit<span className="text-brown-accent">.</span>
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 hover:bg-sand-200 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-5 flex-grow">
          {navLinks.map((link) => {
            const isActive = isHomePage
              ? activeSection === link.sectionId
              : location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={isHomePage ? `/?scroll=${link.sectionId}` : link.path}
                onClick={(e) => handleNavLinkClick(e, link.sectionId)}
                className={`text-base font-semibold tracking-wide py-2 border-b border-sand-200 transition-colors ${
                  isActive ? "text-brown-accent" : "text-charcoal-muted"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={handleResumeClick}
          className="w-full py-3 rounded-xl bg-brown-accent hover:bg-brown-accent-hover text-white text-center font-semibold transition-colors flex items-center justify-center gap-2 mt-auto cursor-pointer"
        >
          <Download size={16} />
          Download Resume
        </button>
      </div>

      {/* Resume Falling Back Dialog */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity"
            onClick={() => setShowResumeModal(false)}
          />
          <div className="relative bg-[#FDFBF7] border border-sand-400/60 rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl text-center z-10 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-full bg-sand-200 text-brown-accent flex items-center justify-center mx-auto mb-4">
              <Download size={22} />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-2">Resume Coming Soon</h3>
            <p className="text-sm text-neutral-gray mb-6 leading-relaxed">
              The resume document is currently being updated to reflect recent milestones and projects. 
              Please reach out directly or check back shortly to download it!
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:rakshitvijayavarthanan@gmail.com"
                className="w-full py-2.5 rounded-lg bg-brown-accent hover:bg-brown-accent-hover text-white font-semibold text-sm transition-colors block"
              >
                Email Rakshit
              </a>
              <button
                onClick={() => setShowResumeModal(false)}
                className="w-full py-2.5 rounded-lg border border-sand-300 hover:bg-sand-200 text-charcoal-muted font-semibold text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
