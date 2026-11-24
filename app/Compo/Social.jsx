import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/GovindPanchal08/",
    label: "GitHub profile",
    Icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/hiren-panchal-042987252/",
    label: "LinkedIn profile",
    Icon: Linkedin,
  },
  {
    href: "https://mail.google.com/mail/u/1/#inbox",
    label: "Email",
    Icon: Mail,
  },
];

const Social = () => {
  return (
    <footer aria-label="Social links" className="flex justify-center gap-3">
      {socialLinks.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="p-3 transition-all duration-200"
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius)",
            color: "var(--color-text-muted)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--color-accent)";
            e.currentTarget.style.color = "var(--color-accent)";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--color-border)";
            e.currentTarget.style.color = "var(--color-text-muted)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </footer>
  );
};

export default Social;
