"use client";

import React from "react";

/* ──────────────────────────────────────────────────────────
   FloatingCard — Frosted glass info card
   Used for the side info cards (left: "Turn ideas into products",
   right: "Available worldwide")
   ────────────────────────────────────────────────────────── */
const FloatingCard = ({
  icon,
  title,
  caption,
  rotation = "0deg",
  className = "",
  animationClass = "float-1",
  animDelay = "0s",
  ariaLabel,
}) => {
  return (
    <div
      className={`glass-card-strong rounded-3xl p-5 max-w-[220px] ${animationClass} ${className}`}
      style={{
        transform: `rotate(${rotation})`,
        animationDelay: animDelay,
      }}
      role="article"
      aria-label={ariaLabel || title}
    >
      {/* Icon */}
      <div className="mb-3 text-xl">{icon}</div>

      {/* Title */}
      <h3 className="text-[15px] font-semibold text-ink leading-tight font-sans mb-1">
        {title}
      </h3>

      {/* Caption */}
      <p className="text-[13px] text-muted leading-snug font-sans">
        {caption}
      </p>
    </div>
  );
};

export default FloatingCard;
