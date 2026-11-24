"use client";

import React from "react";

/* ──────────────────────────────────────────────────────────
   OrbitCards — Frosted glass cards in a curved arc
   around the portrait, matching the Mindly reference.
   Cards have perspective rotateY for 3D depth,
   individual float animations, and hover effects.
   ────────────────────────────────────────────────────────── */
const OrbitCards = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-[18]"
      aria-hidden="true"
      style={{ perspective: "1200px" }}
    >
      {/* ── React Card (upper-left, angled inward) ── */}
      <div
        className="absolute pointer-events-auto float-1"
        style={{
          top: "2%",
          left: "22%",
          transform: "rotateY(-20deg) rotateZ(-2deg)",
        }}
      >
        <div className="glass-card rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 cursor-default hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: "#C8E972" }}
          >
            {/* Code brackets icon */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 4L1 8l4 4M11 4l4 4-4 4M9.5 2.5l-3 11" stroke="#3A5A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-ink leading-tight font-sans whitespace-nowrap">
              React · Node.js
            </p>
            <p className="text-[11px] text-muted leading-snug font-sans whitespace-nowrap">
              Full-stack engineer
            </p>
          </div>
        </div>
      </div>

      {/* ── Mountain image card (left side, mid-height) ── */}
      <div
        className="absolute pointer-events-auto float-3"
        style={{
          top: "35%",
          left: "14%",
          transform: "rotateY(-25deg) rotateZ(1deg)",
        }}
      >
        <div className="glass-card rounded-2xl overflow-hidden w-[100px] h-[72px] cursor-default hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
          <img
            src="/images/mountain.jpg"
            alt="Mountain landscape project"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* ── Live Projects Card (center-top, directly above portrait head) ── */}
      <div
        className="absolute pointer-events-auto float-2"
        style={{
          top: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 22,
        }}
      >
        <div className="glass-card rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 cursor-default hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: "#C4B5FD" }}
          >
            {/* Layers / projects icon */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 5.5L8 2l6.5 3.5-6.5 3.5L1.5 5.5z" stroke="#4B2EA0" strokeWidth="1.4" strokeLinejoin="round"/>
              <path d="M1.5 9L8 12.5 14.5 9" stroke="#4B2EA0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-ink leading-tight font-sans whitespace-nowrap">
              4 Live Projects
            </p>
            <p className="text-[11px] text-muted leading-snug font-sans whitespace-nowrap">
              Shipped & in production
            </p>
          </div>
        </div>
      </div>

      {/* ── Available Card (upper-right, angled inward) ── */}
      <div
        className="absolute pointer-events-auto float-4"
        style={{
          top: "5%",
          right: "22%",
          transform: "rotateY(20deg) rotateZ(2deg)",
        }}
      >
        <div className="glass-card rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 cursor-default hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: "#F4A261" }}
          >
            {/* Globe icon */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="6.5" stroke="#7A3B00" strokeWidth="1.4"/>
              <path d="M8 1.5C8 1.5 5.5 4 5.5 8s2.5 6.5 2.5 6.5M8 1.5C8 1.5 10.5 4 10.5 8S8 14.5 8 14.5" stroke="#7A3B00" strokeWidth="1.4"/>
              <path d="M1.5 8h13" stroke="#7A3B00" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-ink leading-tight font-sans whitespace-nowrap">
              Open to Work
            </p>
            <p className="text-[11px] text-muted leading-snug font-sans whitespace-nowrap">
              Remote · Worldwide
            </p>
          </div>
        </div>
      </div>

      {/* ── Moon image card (right side, mid-height) ── */}
      <div
        className="absolute pointer-events-auto float-1"
        style={{
          top: "32%",
          right: "15%",
          transform: "rotateY(22deg) rotateZ(-1deg)",
        }}
      >
        <div className="glass-card rounded-2xl overflow-hidden w-[100px] h-[72px] cursor-default hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
          <img
            src="/images/moon.jpg"
            alt="Moon surface project"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default OrbitCards;
