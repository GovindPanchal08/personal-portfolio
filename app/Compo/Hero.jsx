import React, { useState, useEffect } from "react";

import About from "./About";
import Work from "./Work";
import Skills from "./Skills";
import Social from "./Social";
import Profile from "./Profile";
import ActionBtn from "./ActionBtn";

const Hero = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showWorks, setShowWorks] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Welcome animation sequence
    const timer1 = setTimeout(() => {
      setShowWelcome(false);
    }, 1800);

    const timer2 = setTimeout(() => {
      setIsVisible(true);
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Welcome screen — simple, clean fade
  if (showWelcome) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center z-50"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="text-center" style={{ animation: "fadeInUp 0.6s ease-out forwards" }}>
          <h1
            className="text-5xl md:text-6xl"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-text)",
              letterSpacing: "-0.02em",
            }}
          >
            Hiren Panchal
          </h1>
          <div
            className="mt-4 flex items-center justify-center gap-2"
          >
            <span
              className="block w-8 h-px"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            <span
              className="text-sm tracking-widest uppercase"
              style={{
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
              }}
            >
              Portfolio
            </span>
            <span
              className="block w-8 h-px"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Content */}
      <div className="relative z-10 w-full px-6 py-20 lg:px-8 min-h-screen flex items-center justify-center"
        style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}
      >
        <div
          className={`w-full max-w-3xl mx-auto text-center transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <Profile />
          <Skills isVisible={isVisible} />
          <ActionBtn setShowAbout={setShowAbout} setShowWorks={setShowWorks} />
          <Social />
        </div>
      </div>

      {/* Modals */}
      <About showAbout={showAbout} setShowAbout={setShowAbout} />
      <Work showWorks={showWorks} setShowWorks={setShowWorks} />
    </div>
  );
};

export default Hero;
