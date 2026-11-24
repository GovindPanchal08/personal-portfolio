"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import OrbitCards from "./OrbitCards";
import Badge from "./Badge";

/* ─────────────────────────────────────────────────────────────────
   HeroSection — Mobile-first magazine layout
   Mobile  : Full-bleed portrait + stat pills
   Tablet  : Shared portrait with float cards
   Desktop : Full orbit cards + floating side cards + connector lines
   ───────────────────────────────────────────────────────────────── */

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = (delay = "0.15s") => ({
    className: `transition-all duration-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
    style: { transitionDelay: delay },
  });

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center p-3 sm:p-4 lg:p-6"
      aria-label="Hero section"
    >
      <div
        className="hero-container bg-grain relative w-full max-w-container mx-auto rounded-[28px]"
        style={{ overflow: "clip" }}
      >
        <div className="bg-radial-glow absolute inset-0 pointer-events-none z-0" />
        <Navbar insideBox={true} />

        {/* ═══════════════════════════════════════
            MOBILE LAYOUT  (< md) — Magazine Cover
            ═══════════════════════════════════════ */}
        <div className="md:hidden relative z-10">
          {/* Portrait — edge-to-edge, bleeds */}
          <div
            className={`relative w-full transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <img
              src="/images/portrait.jpg"
              alt="Hiren Panchal — Full-Stack Developer"
              className="w-full object-cover object-top select-none"
              style={{
                height: "72vw",
                maxHeight: "340px",
                filter: "grayscale(100%) contrast(1.1) brightness(1.05)",
                mixBlendMode: "multiply",
                maskImage:
                  "linear-gradient(to bottom, black 55%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 55%, transparent 100%)",
              }}
              loading="eager"
            />

            {/* Pill — top-left */}
            <div
              className={`absolute top-3 left-3 transition-all duration-500 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
              style={{ transitionDelay: "0.6s" }}
            >
              <div className="glass-card rounded-xl px-3 py-1.5 flex items-center gap-2 float-1">
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#C8E972" }}
                >
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M5.5 4L2 7l3.5 3.5M8.5 4L12 7l-3.5 3.5M9 1.5l-4 11"
                      stroke="#3A5A00"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-ink leading-tight">
                    Full-Stack
                  </p>
                  <p className="text-[9px] text-muted">React · Node.js</p>
                </div>
              </div>
            </div>

            {/* Pill — top-right */}
            <div
              className={`absolute top-3 right-3 transition-all duration-500 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
              style={{ transitionDelay: "0.75s" }}
            >
              <div className="glass-card rounded-xl px-3 py-1.5 flex items-center gap-2 float-2">
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#F4A261" }}
                >
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <circle
                      cx="8"
                      cy="8"
                      r="6.5"
                      stroke="#7A3B00"
                      strokeWidth="1.4"
                    />
                    <path
                      d="M8 1.5C8 1.5 5.5 4 5.5 8s2.5 6.5 2.5 6.5M8 1.5C8 1.5 10.5 4 10.5 8S8 14.5 8 14.5"
                      stroke="#7A3B00"
                      strokeWidth="1.4"
                    />
                    <path
                      d="M1.5 8h13"
                      stroke="#7A3B00"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-ink leading-tight">
                    Open to Work
                  </p>
                  <p className="text-[9px] text-muted">Remote · Worldwide</p>
                </div>
              </div>
            </div>

            {/* Pill — bottom-right */}
            <div
              className={`absolute bottom-4 right-3 transition-all duration-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "0.9s" }}
            >
              <div className="glass-card rounded-xl px-3 py-1.5 flex items-center gap-2 float-3">
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#C4B5FD" }}
                >
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1.5 5L7 2l5.5 3L7 8 1.5 5z"
                      stroke="#4B2EA0"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.5 8.5L7 11.5l5.5-3"
                      stroke="#4B2EA0"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-ink leading-tight">
                    4 Projects
                  </p>
                  <p className="text-[9px] text-muted">In production</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text block */}
          <div
            className={`px-5 pt-5 pb-2 transition-all duration-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "0.4s" }}
          >
            <h1
              className="font-serif font-normal leading-[1.05] tracking-[-0.025em] text-ink"
              style={{ fontSize: "clamp(2.1rem, 10vw, 2.8rem)" }}
            >
              Designing
              <br />
              clearer ideas
              <br />
              <span className="italic text-ink/80">for a brighter web.</span>
            </h1>
            <p className="mt-3 text-[14px] text-muted leading-relaxed font-sans">
              Hi, I&apos;m{" "}
              <span className="text-ink font-medium">Hiren Panchal</span> —
              Full-Stack Developer building beautiful, fast digital experiences.
            </p>
          </div>

          {/* CTA buttons */}
          <div
            className={`px-5 pt-3 pb-5 flex items-center gap-3 transition-all duration-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "0.55s" }}
          >
            <Link
              href="/work"
              className="btn-primary inline-flex items-center justify-center gap-2 bg-ink text-white rounded-full px-5 py-2.5 text-[13px] font-medium"
            >
              View Work <span className="arrow-icon text-xs">→</span>
            </Link>
            <a
              href="/Hiren_Panchal_Resume.pdf"
              download
              className="btn-secondary inline-flex items-center justify-center gap-2 bg-white/70 text-ink border border-black/10 rounded-full px-4 py-2.5 text-[13px] font-medium backdrop-blur-sm"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v12m0 0l-4-4m4 4l4-4M4 18h16"
                />
              </svg>
              CV
            </a>
          </div>

          {/* Mobile bottom bar — clean, refined editorial badge */}
          <div className="px-5 pt-3 pb-6 flex items-center justify-between border-t border-black/[0.05]">
            <p className="text-[12px] text-muted font-sans flex items-center gap-1.5">
              <span className="text-ink text-xs">✦</span>
              <span>Less noise. More craft.</span>
            </p>
            <span className="text-[11px] font-mono uppercase tracking-wider text-muted font-medium">
              Portfolio &apos;26
            </span>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            TABLET + DESKTOP LAYOUT  (≥ md)
            ═══════════════════════════════════════ */}
        <div className="hidden md:block relative z-10 pt-8 sm:pt-12 lg:pt-14 pb-0">
          {/* Headline */}
          <div className="text-center px-4 sm:px-8">
            <h1
              className={`font-serif font-normal leading-[1.05] tracking-[-0.02em] transition-all duration-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                transitionDelay: "0.15s",
              }}
            >
              <span className="block">Designing clearer ideas</span>
              <span className="block italic text-ink/90">
                for a brighter web.
              </span>
            </h1>

            <p
              className={`mt-5 sm:mt-6 text-muted text-[15px] sm:text-base leading-relaxed max-w-[480px] mx-auto font-sans transition-all duration-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "0.3s" }}
            >
              Hi, I&apos;m Hiren Panchal, a Full-Stack Developer who builds
              beautiful, fast and meaningful digital experiences.
            </p>

            <div
              className={`mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "0.45s" }}
            >
              <Link
                href="/work"
                className="btn-primary inline-flex items-center gap-2.5 bg-ink text-white rounded-full px-7 py-3 text-sm font-medium w-full sm:w-auto justify-center"
              >
                View My Work
                <span className="arrow-icon inline-block transition-transform duration-300">
                  →
                </span>
              </Link>
              <a
                href="/Hiren_Panchal_Resume.pdf"
                download
                className="btn-secondary inline-flex items-center gap-2.5 bg-white/70 text-ink border border-black/10 rounded-full px-7 py-3 text-sm font-medium backdrop-blur-sm w-full sm:w-auto justify-center"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v12m0 0l-4-4m4 4l4-4M4 18h16"
                  />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* Portrait + Orbit section */}
          <div
            className={`relative mt-10 sm:mt-14 lg:mt-16 transition-all duration-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "0.6s" }}
          >
            {/* SVG Connector Lines */}
            <svg
              className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-[5]"
              aria-hidden="true"
            >
              <path
                d="M 160 200 C 260 300, 360 360, 460 380"
                className="connector-line"
                strokeDasharray="4 4"
              />
              <path
                d="M 1080 180 C 980 280, 880 340, 780 380"
                className="connector-line"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Floating Left Card */}
            <div
              className={`hidden md:block absolute left-4 lg:left-8 xl:left-14 top-8 lg:top-16 z-20 transition-all duration-700 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              style={{ transitionDelay: "0.85s" }}
            >
              <div className="glass-card-strong rounded-3xl p-5 max-w-[220px] float-2">
                <div className="mb-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8 6L4 12l4 6M16 6l4 6-4 6M14 3.5l-4 17"
                      stroke="#1A1A1A"
                      strokeOpacity="0.7"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-[15px] font-semibold text-ink leading-tight font-sans mb-1">
                  Full-Stack Engineer
                </h3>
                <p className="text-[13px] text-muted leading-snug font-sans">
                  React · Node.js · Socket.io
                </p>
              </div>
            </div>

            {/* Floating Right Card */}
            <div
              className={`hidden md:block absolute right-4 lg:right-8 xl:right-14 top-12 lg:top-20 z-20 transition-all duration-700 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              style={{ transitionDelay: "0.95s" }}
            >
              <div className="glass-card-strong rounded-3xl p-5 max-w-[220px] float-3">
                <div className="mb-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#F4A261" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <circle
                        cx="8"
                        cy="8"
                        r="6.5"
                        stroke="#7A3B00"
                        strokeWidth="1.4"
                      />
                      <path
                        d="M8 1.5C8 1.5 5.5 4 5.5 8s2.5 6.5 2.5 6.5M8 1.5C8 1.5 10.5 4 10.5 8S8 14.5 8 14.5"
                        stroke="#7A3B00"
                        strokeWidth="1.4"
                      />
                      <path
                        d="M1.5 8h13"
                        stroke="#7A3B00"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-[15px] font-semibold text-ink leading-tight font-sans mb-1">
                  Open to Opportunities
                </h3>
                <p className="text-[13px] text-muted leading-snug font-sans">
                  Freelance · Full-time · Remote
                </p>
              </div>
            </div>

            {/* Portrait + Orbit */}
            <div className="relative flex justify-center">
              <div className="hidden lg:block absolute inset-0 z-[18]">
                <OrbitCards />
              </div>

              {/* Tablet: mini cards on portrait */}
              <div className="hidden md:flex lg:hidden absolute inset-0 items-start justify-center pt-2 z-[18] pointer-events-none">
                <div className="relative w-full max-w-[420px] h-[280px]">
                  <div className="glass-card rounded-xl px-3 py-2 flex items-center gap-2 absolute top-0 left-4 float-1 pointer-events-auto">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#C8E972" }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M5.5 4L2 7l3.5 3.5M8.5 4L12 7l-3.5 3.5M9 1.5l-4 11"
                          stroke="#3A5A00"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-ink">
                        React · Node.js
                      </p>
                      <p className="text-[10px] text-muted">
                        Full-stack engineer
                      </p>
                    </div>
                  </div>
                  <div className="glass-card rounded-xl px-3 py-2 flex items-center gap-2 absolute top-10 right-4 float-2 pointer-events-auto">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#C4B5FD" }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <circle
                          cx="7"
                          cy="7"
                          r="5.5"
                          stroke="#4B2EA0"
                          strokeWidth="1.4"
                        />
                        <path
                          d="M1.5 7h11M7 1.5C7 1.5 5 3.5 5 7s2 5.5 2 5.5M7 1.5C7 1.5 9 3.5 9 7s-2 5.5-2 5.5"
                          stroke="#4B2EA0"
                          strokeWidth="1.2"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-ink">
                        Open to Work
                      </p>
                      <p className="text-[10px] text-muted">
                        Remote · Worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portrait */}
              <div
                className={`relative z-[15] w-[280px] sm:w-[340px] md:w-[380px] lg:w-[440px] xl:w-[480px] transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: "0.7s" }}
              >
                <img
                  src="/images/portrait.jpg"
                  alt="Hiren Panchal — Full-Stack Developer portrait"
                  className="w-full h-auto object-contain select-none"
                  style={{
                    filter: "grayscale(100%) contrast(1.15) brightness(1.05)",
                    mixBlendMode: "multiply",
                    maskImage:
                      "linear-gradient(to bottom, black 70%, transparent 98%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 70%, transparent 98%)",
                  }}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative z-20 px-6 sm:px-8 lg:px-12 pb-8 sm:pb-10 -mt-20 sm:-mt-28 lg:-mt-32">
            <div className="flex items-end justify-end">
              <div
                className={`text-right transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: "1.15s" }}
              >
                <span className="text-ink text-sm mr-1" aria-hidden="true">
                  ✦
                </span>
                <p className="text-[12px] sm:text-[13px] text-muted font-sans inline">
                  Less noise. More craft.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rotating Badge — tablet/desktop only */}
        <div
          className={`absolute top-28 sm:top-32 lg:top-36 right-6 sm:right-8 lg:right-12 z-20 hidden md:block transition-all duration-700 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
          style={{ transitionDelay: "0.55s" }}
        >
          <Badge className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
