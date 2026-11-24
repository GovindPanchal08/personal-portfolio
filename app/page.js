"use client";

import HeroSection from "./Compo/HeroSection";

/* ──────────────────────────────────────────────────────────
   Page — Home entry point (Hero Landing)
   Clean, editorial, and focused.
   ────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream flex flex-col justify-center">
      <HeroSection />
    </main>
  );
}
