import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { ContactForm } from "../components/ContactForm";
import { PageTransition } from "../components/PageTransition";

export const Contact: React.FC = () => {
  const contactDetails = [
    {
      label: "Email",
      value: "rakshitvijayavarthanan@gmail.com",
      href: "mailto:rakshitvijayavarthanan@gmail.com",
      icon: <Mail size={18} />,
    },
    {
      label: "Phone",
      value: "+91 7448836366",
      href: "tel:+917448836366",
      icon: <Phone size={18} />,
    },
    {
      label: "Location",
      value: "Tiruppur, Tamil Nadu, India",
      icon: <MapPin size={18} />,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Raksh575",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rakshit-vijayavarthanan-0960a8291",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Rakshit_V_/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="currentColor"
        >
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.877 9.88a1.376 1.376 0 0 0-.008 1.947l.008.008 6.862 6.862a1.377 1.377 0 0 0 1.947-.008l9.877-9.88a1.376 1.376 0 0 0 .008-1.946l-.008-.008-6.862-6.862a1.37 1.37 0 0 0-.987-.409zm-8.2 11.23L13.483 3.03l5.856 5.855-8.2 8.205-4.856-4.856zm10.707 5.485c-.93-.93-.93-2.438 0-3.368a2.382 2.382 0 0 1 3.368 0c.93.93.93 2.438 0 3.368a2.382 2.382 0 0 1-3.368 0z" />
        </svg>
      ),
    },
  ];

  return (
    <PageTransition>
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full text-left">
        <SectionHeading title="Get In Touch" subtitle="Contact & Collaboration" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
          
          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-charcoal tracking-tight mb-4 leading-snug">
                Let's Build Something Together.
              </h3>
              <p className="text-sm md:text-base text-charcoal-muted leading-relaxed font-medium">
                Have an idea, opportunity, or project in mind? I'd love to connect and explore how technology can turn ideas into meaningful solutions.
              </p>
            </div>

            {/* Direct details grid */}
            <div className="space-y-4">
              {contactDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-start gap-4 p-4 bg-white border border-sand-300/40 rounded-2xl"
                >
                  <div className="p-2.5 bg-sand-100 rounded-xl text-brown-accent flex items-center justify-center shrink-0">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-neutral-gray uppercase tracking-widest leading-none mb-1.5">
                      {detail.label}
                    </h4>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-sm font-bold text-charcoal hover:text-brown-accent transition-colors"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="text-sm font-bold text-charcoal">{detail.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social footer list */}
            <div className="pt-6 border-t border-sand-200">
              <h4 className="text-xs font-bold text-neutral-gray uppercase tracking-widest mb-4">
                Follow My Profiles
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="p-3 bg-white border border-sand-300 rounded-xl text-charcoal-muted hover:text-brown-accent hover:bg-sand-200 transition-colors flex items-center justify-center shadow-2xs hover:scale-105"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>

        </div>
      </section>
    </PageTransition>
  );
};
export default Contact;
