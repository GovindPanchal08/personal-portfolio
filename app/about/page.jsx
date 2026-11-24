"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../Compo/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream flex flex-col">
      <Navbar />

      <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-4xl mx-auto">
          {/* Section badge / label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted font-sans">
              About Hiren
            </span>
            <div className="flex-1 h-px bg-black/10" />
          </div>

          {/* Editorial Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] text-ink mb-10">
            Designing clearer ideas<br />
            <span className="italic text-ink/75">for a brighter web.</span>
          </h1>

          {/* Main Story Grid */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 mt-12 items-start">
            {/* Story text (7 cols) */}
            <div className="md:col-span-7 space-y-6">
              <p className="text-[16px] sm:text-[17px] text-ink/80 leading-relaxed font-sans">
                I&apos;m Hiren Panchal, a Full-Stack Developer based in India. I build web applications with React, Node.js, Express, and MongoDB, bridging thoughtful design with robust engineering.
              </p>

              <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed font-sans">
                With a BCA background, my journey started with curious curiosity about how pixels and databases connect. Over the past couple of years, I&apos;ve moved from crafting frontend prototypes to engineering full-stack systems — real-time WebSocket tools, collaboration suites, and REST APIs.
              </p>

              <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed font-sans">
                Together with close peers, I&apos;ve freelanced on client projects, shipping real websites and web products. Working with client feedback, deployment pipelines, and hard deadlines is where my genuine problem-solving was honed.
              </p>

              {/* Working Philosophy */}
              <div className="pt-6 border-t border-black/[0.08]">
                <h2 className="text-xs font-semibold tracking-wider uppercase text-ink/60 mb-4 font-sans">
                  Core Principles
                </h2>
                <div className="space-y-3 font-sans">
                  <div className="flex items-start gap-3">
                    <span className="text-lavender font-bold text-sm mt-0.5">✦</span>
                    <div>
                      <strong className="text-ink text-[14px] font-medium">Clarity over complexity:</strong>
                      <p className="text-muted text-[13px]">Clean, maintainable codebases that are easy to reason about and scale.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lime font-bold text-sm mt-0.5">✦</span>
                    <div>
                      <strong className="text-ink text-[14px] font-medium">Thoughtful Interaction:</strong>
                      <p className="text-muted text-[13px]">Polished micro-animations and typography that feel alive without being loud.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-peach font-bold text-sm mt-0.5">✦</span>
                    <div>
                      <strong className="text-ink text-[14px] font-medium">Full-Cycle Delivery:</strong>
                      <p className="text-muted text-[13px]">From initial architecture and database schemas all the way to cloud deployment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Card: Quick Details & Snapshot (5 cols) */}
            <div className="md:col-span-5 space-y-5">
              <div className="glass-card-strong rounded-3xl p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-black/[0.06]">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-muted font-sans mb-5">
                  Overview
                </h3>
                
                <div className="space-y-4 font-sans text-[14px]">
                  <div className="flex justify-between items-center py-2 border-b border-black/[0.04]">
                    <span className="text-muted">Role</span>
                    <span className="font-medium text-ink">Full-Stack Developer</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-black/[0.04]">
                    <span className="text-muted">Education</span>
                    <span className="font-medium text-ink">BCA Graduate</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-black/[0.04]">
                    <span className="text-muted">Location</span>
                    <span className="font-medium text-ink flex items-center gap-1.5">
                      <span>India</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-black/[0.04]">
                    <span className="text-muted">Focus</span>
                    <span className="font-medium text-ink">Web Apps & Real-Time</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted">Availability</span>
                    <span className="font-medium text-ink">Open to projects</span>
                  </div>
                </div>

                <div className="mt-7 pt-5 border-t border-black/[0.06] flex items-center justify-between">
                  <span className="text-xs text-muted font-sans">Have an idea?</span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink bg-white px-4 py-2 rounded-full border border-black/[0.08] shadow-sm hover:shadow transition-all"
                  >
                    Let&apos;s talk <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Action pill card */}
              <div className="rounded-2xl p-6 bg-white/40 border border-black/[0.04] backdrop-blur-sm font-sans flex items-center justify-between">
                <div>
                  <p className="text-[14px] font-medium text-ink">Looking for proof of work?</p>
                  <p className="text-[12px] text-muted">Browse my featured apps & code.</p>
                </div>
                <Link
                  href="/work"
                  className="bg-ink text-white text-xs font-medium px-4 py-2.5 rounded-full hover:bg-ink/90 transition-all shrink-0"
                >
                  View Work →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
