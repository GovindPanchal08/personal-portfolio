"use client";

import React, { useState } from "react";
import Navbar from "../Compo/Navbar";


export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Development",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("hirenpanchal08@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <main className="min-h-screen bg-cream flex flex-col">
      <Navbar />

      <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-4xl mx-auto">
          {/* Section badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted font-sans">
              Contact & Inquiries
            </span>
            <div className="flex-1 h-px bg-black/10" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] text-ink mb-6">
            Let&apos;s build something<br />
            <span className="italic text-ink/75">great together.</span>
          </h1>

          <p className="text-[15px] sm:text-[16px] text-muted max-w-xl font-sans mb-14">
            Have a project in mind, need a full-stack engineer, or just want to say hi? I’m currently open to freelance projects and full-time opportunities.
          </p>

          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Contact Form (7 cols) */}
            <div className="md:col-span-7">
              <div className="glass-card-strong rounded-3xl p-7 sm:p-9 border border-black/[0.05] shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-lime/30 text-ink text-2xl flex items-center justify-center mx-auto">
                      ✓
                    </div>
                    <h3 className="font-serif text-2xl text-ink">
                      Thank you for reaching out!
                    </h3>
                    <p className="text-muted text-sm font-sans max-w-sm mx-auto">
                      Your message has been logged. You can also email me directly at{" "}
                      <span className="text-ink font-medium">hirenpanchal08@gmail.com</span>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-xs font-semibold text-ink bg-white px-5 py-2.5 rounded-full border border-black/[0.1] hover:shadow transition-all"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-ink/70 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-black/[0.08] focus:border-ink/50 focus:bg-white outline-none text-sm text-ink transition-all placeholder:text-muted/60"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-ink/70 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-black/[0.08] focus:border-ink/50 focus:bg-white outline-none text-sm text-ink transition-all placeholder:text-muted/60"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-ink/70 mb-2">
                        Project Type
                      </label>
                      <select
                        value={formState.projectType}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            projectType: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-black/[0.08] focus:border-ink/50 focus:bg-white outline-none text-sm text-ink transition-all"
                      >
                        <option>Full-Stack Web App</option>
                        <option>Frontend Development</option>
                        <option>Real-Time Application</option>
                        <option>Freelance Contract</option>
                        <option>Full-Time Role</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-ink/70 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell me a bit about your timeline, ideas, or requirements..."
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-black/[0.08] focus:border-ink/50 focus:bg-white outline-none text-sm text-ink transition-all placeholder:text-muted/60 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-ink text-white font-medium text-sm py-3.5 rounded-full hover:bg-ink/90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                    >
                      <span>Send Message</span>
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Direct Channels & Details (5 cols) */}
            <div className="md:col-span-5 space-y-5 font-sans">
              {/* Email direct card */}
              <div className="glass-card-strong rounded-3xl p-6 sm:p-7 border border-black/[0.05]">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-muted mb-4">
                  Direct Email
                </h3>

                <p className="text-lg font-serif text-ink mb-1">
                  hirenpanchal08@gmail.com
                </p>
                <p className="text-xs text-muted mb-5">
                  Typically reply within 24 hours.
                </p>

                <div className="flex items-center gap-2.5">
                  <a
                    href="mailto:hirenpanchal08@gmail.com"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-ink px-4 py-2.5 rounded-full hover:bg-ink/90 transition-all shadow-sm"
                  >
                    Open Mail Client <span>↗</span>
                  </a>
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-ink bg-white px-3.5 py-2.5 rounded-full border border-black/[0.08] hover:bg-cream transition-all"
                  >
                    {copied ? "✓ Copied!" : "Copy Email"}
                  </button>
                </div>
              </div>

              {/* Status & Location */}
              <div className="rounded-3xl p-6 bg-white/50 border border-black/[0.05] backdrop-blur-sm space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-ink">
                      Currently Available
                    </h4>
                    <p className="text-xs text-muted leading-relaxed mt-0.5">
                      Accepting freelance projects, consulting, and full-time software engineering roles.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-black/[0.05] flex items-center justify-between text-xs text-muted">
                  <span>Location</span>
                  <span className="font-medium text-ink">India (UTC +5:30)</span>
                </div>
                <div className="flex items-center justify-between text-xs text-muted">
                  <span>Work Style</span>
                  <span className="font-medium text-ink">Remote Friendly</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="glass-card-strong rounded-3xl p-6 border border-black/[0.05]">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-muted mb-4">
                  Find Me Online
                </h3>
                <div className="space-y-2.5 text-sm">
                  <a
                    href="https://github.com/GovindPanchal08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-black/[0.03] transition-colors text-ink/80 hover:text-ink"
                  >
                    <span className="font-medium">GitHub</span>
                    <span className="text-xs text-muted">@GovindPanchal08 ↗</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-black/[0.03] transition-colors text-ink/80 hover:text-ink"
                  >
                    <span className="font-medium">LinkedIn</span>
                    <span className="text-xs text-muted">Hiren Panchal ↗</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-black/[0.03] transition-colors text-ink/80 hover:text-ink"
                  >
                    <span className="font-medium">Instagram</span>
                    <span className="text-xs text-muted">Follow ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
