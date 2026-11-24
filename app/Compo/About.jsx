import React from "react";
import { MapPin, X, Code2 } from "lucide-react";

const About = ({ showAbout, setShowAbout }) => {
  return (
    <>
      {showAbout && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          role="dialog"
          aria-modal="true"
          aria-label="About Hiren Panchal"
        >
          <div
            className="relative w-full max-w-lg mx-auto p-6 sm:p-8 my-10 animate-fadeInScale"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
            }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2
                className="text-2xl sm:text-3xl"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-text)",
                }}
              >
                About Me
              </h2>
              <button
                onClick={() => setShowAbout(false)}
                className="p-2 transition-colors duration-200"
                style={{
                  color: "var(--color-text-muted)",
                  borderRadius: "var(--radius)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-text)";
                  e.currentTarget.style.backgroundColor = "var(--color-bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-text-muted)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
                aria-label="Close about dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Meta */}
            <div
              className="space-y-4 overflow-y-auto max-h-[80vh] pr-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2" style={{ color: "var(--color-text-muted)" }}>
                  <MapPin className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
                  <span className="text-sm">Based in India</span>
                </div>
                <div className="flex items-center gap-2" style={{ color: "var(--color-text-muted)" }}>
                  <Code2 className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
                  <span className="text-sm">Full-Stack Developer</span>
                </div>
              </div>

              {/* Bio — 2 short, concrete paragraphs */}
              <p style={{ color: "var(--color-text)", lineHeight: 1.7 }}>
                I&apos;m a BCA graduate who&apos;s been building web apps with
                React, JavaScript, and modern CSS for the past couple of years.
                More recently I&apos;ve been working across the stack — Node.js,
                Express, MongoDB — putting together REST APIs and hooking them up
                to real front-ends.
              </p>

              <p style={{ color: "var(--color-text)", lineHeight: 1.7 }}>
                Together with a close friend, I&apos;ve been freelancing — we&apos;ve
                shipped a few client websites and are currently working on two more.
                That&apos;s where most of my real-world problem-solving has come from:
                working with actual deadlines, client feedback, and deployment pipelines.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
