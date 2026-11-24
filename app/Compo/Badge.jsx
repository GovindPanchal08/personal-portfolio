"use client";

import React from "react";

/* ──────────────────────────────────────────────────────────
   Badge — Circular rotating text with a star icon.
   "OPEN TO WORK · OPEN TO WORK ·" revolving around a ✦ star.
   ────────────────────────────────────────────────────────── */
const Badge = ({ className = "" }) => {
  const text = "OPEN TO WORK · OPEN TO WORK · ";
  const chars = text.split("");

  return (
    <div
      className={`relative ${className}`}
      style={{ width: "96px", height: "96px" }}
      aria-label="Open to work"
      role="img"
    >
      {/* Rotating text circle */}
      <svg
        className="rotating-badge w-full h-full"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <defs>
          <path
            id="circlePath"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text
          fill="#1A1A1A"
          fontSize="8.5"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="600"
          letterSpacing="2"
        >
          <textPath href="#circlePath">{text}</textPath>
        </text>
      </svg>

      {/* Center star */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-ink text-lg">✦</span>
      </div>
    </div>
  );
};

export default Badge;
