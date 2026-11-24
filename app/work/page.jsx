"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../Compo/Navbar";



const PROJECTS = [
  {
    id: "collab-editor",
    title: "Real-Time Collaboration Code Editor",
    category: "Full-Stack & Real-Time",
    description:
      "A multi-developer collaborative coding platform featuring live synchronized code editing, built-in text chat, and integrated video calls. Solves remote pair programming bottlenecks with sub-100ms socket latency.",
    tags: ["React", "Node.js", "Socket.io", "ZegoCloud", "MongoDB"],
    liveUrl: "https://real-time-collab-two.vercel.app/",
    githubUrl: "https://github.com/GovindPanchal08",
    highlight: "WebSockets + Video SDK",
    accentBg: "bg-[#C4B5FD]/20",
    accentDot: "bg-[#C4B5FD]",
    accentText: "text-[#7C3AED]",
    num: "01",
  },
  {
    id: "kanban-manager",
    title: "Kanban Project Management App",
    category: "Full-Stack",
    description:
      "A clean, responsive Kanban board app featuring drag-and-drop task flows, columns, and real-time WebSocket sync. Built with vanilla JavaScript on the frontend to master core browser APIs and DOM manipulation.",
    tags: ["JavaScript (Vanilla)", "HTML/CSS", "Node.js", "WebSocket"],
    liveUrl: "https://task-5dtk.onrender.com/",
    githubUrl: "https://github.com/GovindPanchal08",
    highlight: "Zero-Framework Core JS",
    accentBg: "bg-[#C8E972]/20",
    accentDot: "bg-[#C8E972]",
    accentText: "text-[#4A7C00]",
    num: "02",
  },
  {
    id: "youtube-clone",
    title: "YouTube Interface Clone",
    category: "Frontend",
    description:
      "A pixel-accurate recreation of YouTube's desktop and mobile frontend interface in React. Features dynamic video grid layouts, responsive collapsible sidebars, custom search bar, and chip filters.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: null,
    githubUrl: "https://github.com/GovindPanchal08/Youtube-ui",
    highlight: "Component Design & UI",
    accentBg: "bg-[#F4A261]/20",
    accentDot: "bg-[#F4A261]",
    accentText: "text-[#B45309]",
    num: "03",
  },
  {
    id: "memory-game",
    title: "Interactive Memory Game",
    category: "Frontend",
    description:
      "A card-matching memory game with fluid 3D card-flip animations, move trackers, timer logic, and celebration modals. Engineered to practice immutable state management and timing queues.",
    tags: ["React", "CSS 3D Transforms", "State Management"],
    liveUrl: "https://memory-game-rouge-chi.vercel.app/",
    githubUrl: "https://github.com/GovindPanchal08",
    highlight: "3D Animations & Game Logic",
    accentBg: "bg-[#A8C5E2]/20",
    accentDot: "bg-[#A8C5E2]",
    accentText: "text-[#1A5A8A]",
    num: "04",
  },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : activeFilter === "Full-Stack"
        ? PROJECTS.filter((p) => p.category.includes("Full-Stack"))
        : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-cream flex flex-col">
      <Navbar />

      <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-5xl mx-auto">
          {/* Section badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted font-sans">
              Portfolio & Selected Work
            </span>
            <div className="flex-1 h-px bg-black/10" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] text-ink">
                Selected Works
                <br />
                <span className="italic text-ink/75">& Experiments.</span>
              </h1>
              <p className="text-[15px] sm:text-[16px] text-muted max-w-lg font-sans mt-4">
                Real-world web apps, collaboration tools, and UI engineering
                projects built with modern full-stack technologies.
              </p>
            </div>

            {/* Filter pills - fixed pill track, items scroll inside */}
            <div className="w-full sm:w-auto max-w-full overflow-hidden p-1 rounded-full bg-black/[0.04] border border-black/[0.04]">
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar font-sans">
                {["All", "Full-Stack", "Frontend"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`text-xs px-4 py-1.5 rounded-full transition-all shrink-0 whitespace-nowrap ${
                      activeFilter === filter
                        ? "bg-white text-ink font-medium shadow-sm"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {filtered.map((project) => (
              <article
                key={project.id}
                className="glass-card-strong rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 border border-black/[0.05] flex flex-col justify-between group"
              >
                <div>
                  {/* Clean editorial thumbnail */}
                  <div
                    className={`w-full h-40 rounded-2xl mb-6 border border-black/[0.06] overflow-hidden relative flex flex-col justify-between p-5 ${project.accentBg}`}
                  >
                    {/* Top row */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono tracking-widest text-ink/30 uppercase">
                        {project.num}
                      </span>
                      <span className={`text-[10px] font-semibold uppercase tracking-wider ${project.accentText} bg-white/60 border border-black/[0.06] px-2.5 py-0.5 rounded-full`}>
                        {project.highlight}
                      </span>
                    </div>

                    {/* Centre: large project title lettering */}
                    <p className="font-serif text-[22px] sm:text-[26px] leading-tight text-ink/[0.22] font-normal select-none pointer-events-none tracking-tight">
                      {project.title}
                    </p>

                    {/* Bottom row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${project.accentDot}`} />
                        <span className="text-[11px] font-sans text-ink/40 font-medium">{project.category}</span>
                      </div>
                      {project.liveUrl && (
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span className="text-[11px] font-sans text-ink/40 font-medium">Live</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-serif text-ink mb-3 group-hover:text-ink/80 transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-[14px] text-muted leading-relaxed font-sans mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-ink/65 bg-black/[0.03] border border-black/[0.04] rounded-full px-2.5 py-0.5 font-sans"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-4 border-t border-black/[0.05] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink bg-white px-4 py-2 rounded-full border border-black/[0.08] shadow-sm hover:shadow transition-all"
                      >
                        Live Demo
                        <span className="text-[10px]">↗</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-ink px-3 py-2 transition-colors font-sans"
                      >
                        View Code
                        <span className="text-[10px]">↗</span>
                      </a>
                    )}
                  </div>

                  <span className="text-xs text-lavender/80 font-bold">✦</span>
                </div>
              </article>
            ))}
          </div>

          {/* Need a custom project banner */}
          <div className="mt-20 rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-ink via-ink to-[#2D2D2D] text-cream flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_20px_60px_rgba(26,26,26,0.3)] border border-white/[0.05] relative overflow-hidden">
            {/* Subtle glow accent */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-lime/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h3 className="font-serif text-2xl text-cream">
                Have a project or freelance opportunity?
              </h3>
              <p className="text-cream/60 text-sm font-sans mt-1">
                I&apos;m always open to discussing web apps, dashboards, or
                consulting.
              </p>
            </div>
            <Link
              href="/contact"
              className="relative z-10 bg-cream text-ink text-xs font-semibold px-6 py-3 rounded-full hover:bg-white transition-all hover:shadow-lg shrink-0 inline-flex items-center gap-2"
            >
              Start a Conversation <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
