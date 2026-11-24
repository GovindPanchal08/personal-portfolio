"use client";

import React from "react";

/* ──────────────────────────────────────────────────────────
   Sections — About, Projects, Services, Contact
   Scroll targets for the navbar links.
   ────────────────────────────────────────────────────────── */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ABOUT SECTION
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export const AboutSection = () => (
  <section
    id="about"
    className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    aria-label="About"
  >
    <div className="max-w-3xl mx-auto">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted font-sans">
          About
        </span>
        <div className="flex-1 h-px bg-black/10" />
      </div>

      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.02em] text-ink mb-8">
        I craft digital experiences
        <br />
        <span className="italic text-ink/70">that people love to use.</span>
      </h2>

      <div className="grid sm:grid-cols-2 gap-8 mt-12">
        <div>
          <p className="text-[15px] text-muted leading-relaxed font-sans">
            I&apos;m Hiren Panchal, a Full-Stack Developer based in India. I
            specialize in building real-time applications, management tools, and
            client websites using React, Node.js, and MongoDB.
          </p>
        </div>
        <div>
          <p className="text-[15px] text-muted leading-relaxed font-sans">
            I believe great software is invisible — it just works. My approach
            combines clean code with thoughtful design to create experiences
            that feel effortless and look beautiful.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-black/[0.06]">
        {[
          { number: "20+", label: "Clients served" },
          { number: "50+", label: "Projects completed" },
          { number: "3+", label: "Years experience" },
        ].map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="text-2xl sm:text-3xl font-serif text-ink">
              {stat.number}
            </p>
            <p className="text-[13px] text-muted mt-1 font-sans">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PROJECTS SECTION
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const PROJECTS = [
  {
    title: "Real-Time Chat App",
    description:
      "Full-stack messaging app with WebSockets, user auth, and real-time notifications.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "#",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "Admin panel with analytics, inventory management, and order tracking.",
    tags: ["Next.js", "Tailwind CSS", "REST API"],
    link: "#",
  },
  {
    title: "Portfolio & Blog",
    description:
      "Personal website with CMS-powered blog, dark mode, and smooth animations.",
    tags: ["React", "Framer Motion", "MDX"],
    link: "#",
  },
  {
    title: "Task Management Tool",
    description:
      "Kanban-style project manager with drag-and-drop, labels, and team collaboration.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
];

export const ProjectsSection = () => (
  <section
    id="projects"
    className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    aria-label="Projects"
  >
    <div className="max-w-5xl mx-auto">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted font-sans">
          Work
        </span>
        <div className="flex-1 h-px bg-black/10" />
      </div>

      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.02em] text-ink mb-4">
        Selected projects
      </h2>
      <p className="text-[15px] text-muted max-w-md font-sans">
        A few things I&apos;ve built recently — from real-time apps to
        full-stack dashboards.
      </p>

      {/* Project grid */}
      <div className="grid sm:grid-cols-2 gap-5 mt-14">
        {PROJECTS.map((project, i) => (
          <a
            key={project.title}
            href={project.link}
            className="group glass-card-strong rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
          >
            {/* Placeholder for project image */}
            <div className="w-full aspect-[16/10] rounded-xl bg-gradient-to-br from-black/[0.03] to-black/[0.06] mb-5 overflow-hidden flex items-center justify-center">
              <span className="text-[11px] text-muted/50 font-sans uppercase tracking-widest">
                Project {i + 1}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-ink font-sans group-hover:text-ink/80 transition-colors">
              {project.title}
            </h3>
            <p className="text-[13px] text-muted mt-2 leading-relaxed font-sans">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium text-ink/50 bg-black/[0.04] rounded-full px-2.5 py-0.5 font-sans"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SERVICES SECTION
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const SERVICES = [
  {
    icon: "🎨",
    title: "UI / UX Design",
    description:
      "Clean, intuitive interfaces designed with your users in mind.",
  },
  {
    icon: "⚡",
    title: "Frontend Development",
    description:
      "Fast, responsive websites built with React, Next.js, and modern CSS.",
  },
  {
    icon: "🔧",
    title: "Backend & APIs",
    description:
      "Scalable server-side solutions with Node.js, Express, and MongoDB.",
  },
  {
    icon: "🚀",
    title: "Full-Stack Apps",
    description:
      "End-to-end development from concept to deployment and beyond.",
  },
];

export const ServicesSection = () => (
  <section
    id="services"
    className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    aria-label="Services"
  >
    <div className="max-w-4xl mx-auto">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted font-sans">
          Services
        </span>
        <div className="flex-1 h-px bg-black/10" />
      </div>

      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.02em] text-ink mb-4">
        What I can do
        <br />
        <span className="italic text-ink/70">for you.</span>
      </h2>

      <div className="grid sm:grid-cols-2 gap-5 mt-14">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="glass-card-strong rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
          >
            <span className="text-2xl block mb-4">{service.icon}</span>
            <h3 className="text-[17px] font-semibold text-ink font-sans">
              {service.title}
            </h3>
            <p className="text-[14px] text-muted mt-2 leading-relaxed font-sans">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CONTACT SECTION
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export const ContactSection = () => (
  <section
    id="contact"
    className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    aria-label="Contact"
  >
    <div className="max-w-2xl mx-auto text-center">
      {/* Section label */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="w-8 h-px bg-black/10" />
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted font-sans">
          Contact
        </span>
        <div className="w-8 h-px bg-black/10" />
      </div>

      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.02em] text-ink mb-6">
        Let&apos;s build something
        <br />
        <span className="italic text-ink/70">great together.</span>
      </h2>

      <p className="text-[15px] text-muted leading-relaxed font-sans max-w-md mx-auto mb-10">
        Have a project in mind? I&apos;m available for freelance work and
        full-time opportunities. Drop me a message and let&apos;s talk.
      </p>

      {/* CTA */}
      <a
        href="mailto:your.email@example.com"
        className="inline-flex items-center gap-2.5 bg-ink text-white rounded-full px-8 py-3.5 text-[15px] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
      >
        Say Hello
        <span className="text-sm">→</span>
      </a>

      {/* Social links */}
      <div className="flex items-center justify-center gap-6 mt-12">
        {[
          { name: "GitHub", href: "https://github.com" },
          { name: "LinkedIn", href: "https://linkedin.com" },
          { name: "Instagram", href: "https://instagram.com" },
          { name: "Email", href: "mailto:your.email@example.com" },
        ].map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-muted hover:text-ink transition-colors font-sans"
            aria-label={link.name}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Footer */}
      <p className="text-[12px] text-muted/50 mt-16 font-sans">
        © {new Date().getFullYear()} Hiren Panchal. All rights reserved.
      </p>
    </div>
  </section>
);
