"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ──────────────────────────────────────────────────────────
   Navbar — Premium floating nav with refined aesthetics
   Pill nav shows at ≥768px, hamburger below.
   ────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Navbar = ({ insideBox = false }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={
          insideBox
            ? `sticky top-0 z-50 w-full transition-all duration-300 ${
                isScrolled
                  ? "py-3 px-5 sm:px-8 lg:px-10 bg-[#F6F4EF]/95 backdrop-blur-md border-b border-black/[0.06] shadow-sm rounded-t-[28px]"
                  : "pt-5 sm:pt-6 lg:pt-7 pb-2 px-5 sm:px-8 lg:px-10"
              }`
            : `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
                isScrolled ? "py-2.5" : "py-4 lg:py-5"
              }`
        }
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Background blur strip that sticks to the top (only for fixed mode) */}
        {!insideBox && (
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              isScrolled
                ? "opacity-100 shadow-[0_1px_12px_rgba(0,0,0,0.05)]"
                : "opacity-60"
            }`}
            style={{
              background: isScrolled
                ? "rgba(246, 244, 239, 0.95)"
                : "rgba(246, 244, 239, 0.75)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
            }}
          />
        )}

        <div className={`relative ${insideBox ? "w-full" : "max-w-container mx-auto px-5 sm:px-6 lg:px-10"} flex items-center justify-between`}>
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-1.5 group z-50"
            aria-label="Hiren Panchal homepage"
          >
            <span className="text-ink font-semibold text-[16px] tracking-[-0.02em] font-sans">
              Hiren Panchal
            </span>
            <span className="text-[7px] text-lavender font-bold group-hover:text-peach transition-colors duration-300">
              ✦
            </span>
            <span className="hidden sm:inline text-[12px] text-muted font-sans font-normal ml-0.5">
              Developer
            </span>
          </Link>

          {/* ── Center pill nav (≥768px) ── */}
          <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
            <div
              className="flex items-center gap-0.5 rounded-full px-1.5 py-1 border border-black/[0.06]"
              style={{
                background: "rgba(255, 255, 255, 0.65)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 1px 10px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.5)",
              }}
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-white text-ink shadow-[0_1px_6px_rgba(0,0,0,0.08)]"
                        : "text-ink/45 hover:text-ink/75"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-lavender/60 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ── CTA (≥768px) ── */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-1.5 bg-ink text-cream rounded-full px-5 py-2 text-[13px] font-medium z-50 transition-all duration-300 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(0,0,0,0.18)] group"
            aria-label="Contact Hiren Panchal"
          >
            Let&apos;s Talk
            <svg
              className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 12 12"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                d="M2 10L10 2M10 2H4M10 2v6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* ── Hamburger (mobile <768px) ── */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-full hover:bg-black/[0.04] transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block h-[1.5px] bg-ink/80 transition-all duration-300 origin-center ${
                isMenuOpen ? "w-5 rotate-45 translate-y-[3.5px]" : "w-5"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-ink/80 transition-all duration-300 origin-center ${
                isMenuOpen ? "w-5 -rotate-45 -translate-y-[3.5px]" : "w-4 self-end"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-5 transition-all duration-400 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(246, 244, 239, 0.98)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Home link */}
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className={`text-[28px] font-serif font-normal transition-all duration-300 ${
            pathname === "/" ? "text-ink" : "text-ink/50 hover:text-ink"
          }`}
          style={{
            opacity: isMenuOpen ? 1 : 0,
            transform: isMenuOpen ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.4s ease-out",
            transitionDelay: isMenuOpen ? "80ms" : "0ms",
          }}
        >
          Home
          {pathname === "/" && (
            <span className="ml-2 text-[8px] text-lavender font-bold align-middle">●</span>
          )}
        </Link>

        {NAV_LINKS.map((link, i) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-[28px] font-serif font-normal transition-all duration-300 ${
                isActive ? "text-ink" : "text-ink/50 hover:text-ink"
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${120 + i * 50}ms` : "0ms",
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? "translateY(0)" : "translateY(16px)",
              }}
            >
              {link.label}
              {isActive && (
                <span className="ml-2 text-[8px] text-lavender font-bold align-middle">●</span>
              )}
            </Link>
          );
        })}

        {/* CTA Button */}
        <div
          className="mt-6"
          style={{
            transitionDelay: isMenuOpen ? "360ms" : "0ms",
            opacity: isMenuOpen ? 1 : 0,
            transform: isMenuOpen ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.4s ease-out",
          }}
        >
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex items-center gap-2 bg-ink text-cream rounded-full px-7 py-3 text-[15px] font-medium hover:shadow-lg transition-all"
          >
            Let&apos;s Talk
            <span className="text-[11px]">↗</span>
          </Link>
        </div>

        {/* Social links */}
        <div
          className="flex items-center gap-6 mt-4 text-[13px] font-sans"
          style={{
            transitionDelay: isMenuOpen ? "440ms" : "0ms",
            opacity: isMenuOpen ? 0.5 : 0,
            transition: "opacity 0.4s ease-out",
          }}
        >
          <a
            href="https://github.com/GovindPanchal08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/50 hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/50 hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hirenpanchal08@gmail.com"
            className="text-ink/50 hover:text-ink transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
