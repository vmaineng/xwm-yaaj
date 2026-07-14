"use client";

import { socials } from "../lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line px-[5vw] pb-10 pt-16">
      <div className="flex flex-wrap items-start justify-between gap-8">
        <div className="font-display text-3xl uppercase">XWM YAAJ</div>
        <nav aria-label="Social media links" className="flex flex-wrap gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.78rem] uppercase tracking-widest text-(--text-muted) transition-colors duration-300 hover:text-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2"
            >
              {social.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
        <span>
          {" "}
          © {new Date().getFullYear()} XWM YAAJ. All rights reserved.
        </span>
        <a
          href="#top"
          className="text-[0.78rem] uppercase tracking-widest text-(--text-muted) transition-colors duration-300 hover:text-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
