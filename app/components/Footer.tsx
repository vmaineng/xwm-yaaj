"use client";
import { useState } from "react";
import { socials } from "../lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line px-[5vw] pb-10 pt-16">
      <div className="mb-12 flex flex-wrap items-start justify-between gap-8">
        <div>
          <div className="font-display text-3xl uppercase">XY</div>
          <div className="mt-4 flex flex-wrap gap-5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-[0.78rem] uppercase tracking-widest text-muted hover:text-red"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="text-xs tracking-wide text-(--text-muted) sm:text-right transition-colors duration-300">
          <span> © {new Date().getFullYear()} XY. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
