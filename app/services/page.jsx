"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../Compo/Navbar";


// Service card SVG icons — clean, stroke-based, professional
const SERVICE_ICONS = {
  fullstack: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1 14h18" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="17.5" r="1" fill="currentColor" />
      <path d="M6 5.5l-2.5 2 2.5 2M14 5.5l2.5 2-2.5 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 4.5l-3 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  realtime: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 7.5h7M6.5 10h5M6.5 12.5h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="15.5" cy="4.5" r="2.5" fill="currentColor" />
    </svg>
  ),
  frontend: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="16" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 7h16" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="4.5" cy="5" r="0.8" fill="currentColor" />
      <circle cx="7" cy="5" r="0.8" fill="currentColor" />
      <circle cx="9.5" cy="5" r="0.8" fill="currentColor" />
      <rect x="5" y="10" width="10" height="1.5" rx="0.75" fill="currentColor" fillOpacity="0.5" />
      <rect x="7" y="13" width="6" height="1.5" rx="0.75" fill="currentColor" fillOpacity="0.5" />
    </svg>
  ),
  backend: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="10" cy="5.5" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 5.5v4c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 9.5v4c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
};

const SERVICES = [
  {
    iconKey: "fullstack",
    tag: "Core Offering",
    accent: "#C8E972",
    accentText: "#3A5A00",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web apps crafted from database schema to responsive, micro-animated user interfaces. Clean modular architectures built with React, Next.js, and Node.js.",
    deliverables: [
      "Custom Web Applications",
      "Dynamic Dashboards & Portals",
      "Component-Driven Architecture",
      "SEO & Performance Optimization",
    ],
  },
  {
    iconKey: "realtime",
    tag: "Specialty",
    accent: "#C4B5FD",
    accentText: "#4B2EA0",
    title: "Real-Time & Collaboration Apps",
    description:
      "Multi-user interactive web experiences using Socket.io and WebSockets. Live synchronized state, presence tracking, real-time messaging, and shared collaborative canvases.",
    deliverables: [
      "Live Chat & Messaging",
      "Collaborative Code & Canvas Tools",
      "Instant Notifications",
      "WebSocket State Synchronization",
    ],
  },
  {
    iconKey: "frontend",
    tag: "Aesthetics",
    accent: "#F4A261",
    accentText: "#7A3B00",
    title: "Frontend Engineering & UI/UX",
    description:
      "Modern, minimalist interfaces inspired by editorial luxury. Fluid glassmorphism, responsive layouts, accessible typography, and delightful micro-interactions.",
    deliverables: [
      "Responsive Desktop & Mobile Layouts",
      "Design Systems & Reusable Components",
      "Smooth CSS & Keyframe Animations",
      "Figma to Pixel-Perfect Code",
    ],
  },
  {
    iconKey: "backend",
    tag: "Backend & Systems",
    accent: "#A8C5E2",
    accentText: "#1A4A6E",
    title: "Backend APIs & Database Design",
    description:
      "Secure, scalable server-side systems with Node.js and Express. RESTful API endpoints, MongoDB data models, authentication flows, and third-party integrations.",
    deliverables: [
      "RESTful API Development",
      "MongoDB Schema Design & Querying",
      "User Authentication & JWT",
      "Cloud Deployment & Hosting Setup",
    ],
  },
];

const TECH_CATEGORIES = [
  {
    category: "Frontend",
    badgeColor: "bg-lime/20 text-ink border-lime/30",
    skills: [
      { name: "React.js", level: "Advanced", desc: "Hooks, Context, Custom Architectures" },
      { name: "Next.js", level: "Proficient", desc: "App Router, SSR, Server Components" },
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "Async/Await, DOM, Modern Standards" },
      { name: "Tailwind CSS", level: "Advanced", desc: "Design systems, Custom Utility configs" },
      { name: "HTML5 & CSS3", level: "Advanced", desc: "Semantic markup, Responsive Grid/Flex" },
      { name: "Redux / State", level: "Intermediate", desc: "Global State Management" },
    ],
  },
  {
    category: "Backend & Real-Time",
    badgeColor: "bg-lavender/25 text-ink border-lavender/40",
    skills: [
      { name: "Node.js", level: "Proficient", desc: "Runtime, Event Loop, Server execution" },
      { name: "Express.js", level: "Proficient", desc: "REST APIs, Middleware, Routing" },
      { name: "Socket.io", level: "Advanced", desc: "Real-time bi-directional events" },
      { name: "WebSockets", level: "Proficient", desc: "Low-latency streaming connections" },
      { name: "REST APIs", level: "Advanced", desc: "CRUD, Authentication, Status conventions" },
    ],
  },
  {
    category: "Database & Cloud",
    badgeColor: "bg-peach/20 text-ink border-peach/30",
    skills: [
      { name: "MongoDB", level: "Proficient", desc: "Document collections, Aggregations" },
      { name: "Mongoose", level: "Proficient", desc: "Schema validation & ORM modeling" },
      { name: "Render", level: "Proficient", desc: "Backend web services deployment" },
      { name: "Vercel", level: "Advanced", desc: "Frontend CI/CD & edge deployments" },
    ],
  },
  {
    category: "Developer Tools",
    badgeColor: "bg-black/[0.04] text-ink border-black/[0.08]",
    skills: [
      { name: "Git & GitHub", level: "Advanced", desc: "Version control, branching, PRs" },
      { name: "Postman", level: "Advanced", desc: "API testing, collections & mock requests" },
      { name: "VS Code", level: "Advanced", desc: "Productive dev environment & extensions" },
      { name: "npm / Yarn", level: "Advanced", desc: "Package management & build pipelines" },
    ],
  },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCategories =
    activeCategory === "All"
      ? TECH_CATEGORIES
      : TECH_CATEGORIES.filter((c) => c.category === activeCategory);

  return (
    <main className="min-h-screen bg-cream flex flex-col">
      <Navbar />

      <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-5xl mx-auto">
          {/* Section badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted font-sans">
              Services & Technology
            </span>
            <div className="flex-1 h-px bg-black/10" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] text-ink mb-6">
            What I bring to<br />
            <span className="italic text-ink/75">your project.</span>
          </h1>

          <p className="text-[15px] sm:text-[16px] text-muted max-w-xl font-sans mb-14">
            From technical architecture to final deployment, here are the services I offer along with the exact tech stack powering them.
          </p>

          {/* ═══════════════════════════════════════════════
              SERVICES GRID
              ═══════════════════════════════════════════════ */}
          <div className="grid md:grid-cols-2 gap-6 mb-24">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="glass-card-strong rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 border border-black/[0.05] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: service.accent, color: service.accentText }}
                    >
                      {SERVICE_ICONS[service.iconKey]}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-muted font-sans px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.04]">
                      {service.tag}
                    </span>
                  </div>

                  <h2 className="text-xl font-serif text-ink mb-3">
                    {service.title}
                  </h2>
                  <p className="text-[14px] text-muted leading-relaxed font-sans mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-black/[0.05]">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-ink/50 font-sans mb-2.5">
                    What you get
                  </p>
                  <ul className="space-y-1.5 font-sans">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="text-[13px] text-ink/80 flex items-center gap-2"
                      >
                        <span className="text-lavender font-bold text-xs">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* ═══════════════════════════════════════════════
              TECH STACK SECTION ("in this keep tech stack")
              ═══════════════════════════════════════════════ */}
          <div className="pt-12 border-t border-black/[0.08]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted font-sans">
                  The Toolkit
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl text-ink mt-2">
                  My Tech Stack
                </h2>
                <p className="text-[14px] text-muted font-sans mt-2 max-w-md">
                  Technologies, frameworks, and developer tools I use daily to build modern web applications.
                </p>
              </div>

              {/* Filter tabs - container stays fixed within layout, items scroll cleanly inside */}
              <div className="w-full sm:w-auto max-w-full overflow-hidden p-1 rounded-full bg-black/[0.04] border border-black/[0.04]">
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar font-sans">
                  {["All", "Frontend", "Backend & Real-Time", "Database & Cloud", "Developer Tools"].map(
                    (tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveCategory(tab)}
                        className={`text-xs px-3.5 py-1.5 rounded-full transition-all shrink-0 whitespace-nowrap ${
                          activeCategory === tab
                            ? "bg-white text-ink font-medium shadow-sm"
                            : "text-muted hover:text-ink"
                        }`}
                      >
                        {tab === "Backend & Real-Time" ? "Backend" : tab === "Database & Cloud" ? "Database" : tab === "Developer Tools" ? "Tools" : tab}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Categorized Tech Cards */}
            <div className="space-y-8">
              {filteredCategories.map((group) => (
                <div key={group.category}>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-muted font-sans mb-3 flex items-center gap-2">
                    <span>{group.category}</span>
                    <span className="h-px flex-1 bg-black/[0.05]" />
                  </h3>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group p-4 rounded-2xl bg-white/60 hover:bg-white border border-black/[0.05] hover:border-black/[0.12] transition-all duration-200 hover:shadow-sm"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-[15px] font-medium text-ink font-sans">
                            {skill.name}
                          </h4>
                          <span
                            className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${group.badgeColor}`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[12px] text-muted font-sans">
                          {skill.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-ink via-ink to-[#2D2D2D] text-cream flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_20px_60px_rgba(26,26,26,0.3)] border border-white/[0.05] relative overflow-hidden">
            {/* Subtle glow accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-lavender/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h3 className="font-serif text-2xl sm:text-3xl text-cream">
                Ready to bring your idea to life?
              </h3>
              <p className="text-cream/60 text-sm font-sans mt-2 max-w-md">
                Let&apos;s discuss your requirements, tech stack preferences, and delivery timeline.
              </p>
            </div>
            <Link
              href="/contact"
              className="relative z-10 bg-cream text-ink text-sm font-semibold px-7 py-3 rounded-full hover:bg-white transition-all hover:shadow-lg shrink-0 inline-flex items-center gap-2"
            >
              Get in Touch <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
