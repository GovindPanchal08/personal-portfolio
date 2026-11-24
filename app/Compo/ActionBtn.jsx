import React from "react";
import { ArrowRight, Briefcase, Download, User } from "lucide-react";

const btnBase = {
  fontFamily: "var(--font-body)",
  fontWeight: 500,
  borderRadius: "var(--radius)",
  fontSize: "15px",
  transition: "all 0.2s ease",
};

const ActionBtn = ({ setShowAbout, setShowWorks }) => {
  return (
    <nav aria-label="Quick actions" className="flex flex-wrap justify-center gap-3 mb-12">
      {/* Primary — About Me */}
      <button
        onClick={() => setShowAbout(true)}
        className="group px-6 py-3 flex items-center gap-2"
        style={{
          ...btnBase,
          backgroundColor: "var(--color-accent)",
          color: "#fff",
          border: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "var(--color-accent-hover)";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "var(--color-accent)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <User className="w-4 h-4" />
        About Me
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Secondary — View Works */}
      <button
        onClick={() => setShowWorks(true)}
        className="group px-6 py-3 flex items-center gap-2"
        style={{
          ...btnBase,
          backgroundColor: "transparent",
          color: "var(--color-text)",
          border: "1px solid var(--color-border)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--color-accent)";
          e.currentTarget.style.color = "var(--color-accent)";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--color-border)";
          e.currentTarget.style.color = "var(--color-text)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <Briefcase className="w-4 h-4" />
        View Works
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Tertiary — Resume */}
      <a
        href="/Hiren_Panchal_Resume.pdf"
        className="group px-6 py-3 flex items-center gap-2"
        style={{
          ...btnBase,
          backgroundColor: "transparent",
          color: "var(--color-text)",
          border: "1px solid var(--color-border)",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--color-accent)";
          e.currentTarget.style.color = "var(--color-accent)";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--color-border)";
          e.currentTarget.style.color = "var(--color-text)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <Download className="w-4 h-4" />
        Resume
      </a>
    </nav>
  );
};

export default ActionBtn;
