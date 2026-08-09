import React from "react";
import { Mail } from "lucide-react";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ className = "", iconSize = 20 }) => {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/Raksh575",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width={iconSize}
          height={iconSize}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
      hoverColor: "hover:text-[#1A1A1A] hover:bg-sand-200",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rakshit-vijayavarthanan-0960a8291",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width={iconSize}
          height={iconSize}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      hoverColor: "hover:text-[#0077B5] hover:bg-sand-200",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Rakshit_V_/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width={iconSize}
          height={iconSize}
          fill="currentColor"
          className="transition-colors"
        >
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.877 9.88a1.376 1.376 0 0 0-.008 1.947l.008.008 6.862 6.862a1.377 1.377 0 0 0 1.947-.008l9.877-9.88a1.376 1.376 0 0 0 .008-1.946l-.008-.008-6.862-6.862a1.37 1.37 0 0 0-.987-.409zm-8.2 11.23L13.483 3.03l5.856 5.855-8.2 8.205-4.856-4.856zm10.707 5.485c-.93-.93-.93-2.438 0-3.368a2.382 2.382 0 0 1 3.368 0c.93.93.93 2.438 0 3.368a2.382 2.382 0 0 1-3.368 0z" />
        </svg>
      ),
      hoverColor: "hover:text-[#FFA116] hover:bg-sand-200",
    },
    {
      name: "Email",
      url: "mailto:rakshitvijayavarthanan@gmail.com",
      icon: <Mail size={iconSize} />,
      hoverColor: "hover:text-brown-accent hover:bg-sand-200",
    },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
          className={`p-2.5 rounded-full border border-sand-300 bg-transparent text-charcoal-muted transition-all duration-300 ${social.hoverColor} hover:scale-110 active:scale-95 flex items-center justify-center`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
