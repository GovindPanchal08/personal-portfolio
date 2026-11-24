"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-black/[0.06] bg-cream/80 backdrop-blur-sm py-12 px-6 sm:px-8 lg:px-12 mt-20">
      <div className="max-w-container mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-baseline gap-1">
          <Link href="/" className="text-ink font-medium text-[15px] font-sans">
            Hiren Panchal
          </Link>
          <span className="text-[7px] text-lavender font-bold">✦</span>
          <span className="text-muted text-[13px] ml-2 font-sans">
            Full-Stack Developer
          </span>
        </div>

        <div className="flex items-center gap-6 text-[13px] font-sans">
          <Link href="/work" className="text-muted hover:text-ink transition-colors">
            Work
          </Link>
          <Link href="/about" className="text-muted hover:text-ink transition-colors">
            About
          </Link>
          <Link href="/services" className="text-muted hover:text-ink transition-colors">
            Services & Tech
          </Link>
          <Link href="/contact" className="text-muted hover:text-ink transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-5 text-[13px] font-sans">
          <a
            href="https://github.com/GovindPanchal08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-muted/40">•</span>
          <span className="text-[12px] text-muted/60">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
