"use client";

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const NAV_ITEMS = [
  { label: "Music", href: "#music" },
  { label: "Videos", href: "#videos" },
  { label: "Tour", href: "#tour" },
  { label: "Press", href: "#press" },
];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-linear-to-b from-void/95 to-transparent px-[5vw] py-5 backdrop-blur-[2px] ">
      <a href="#top" className="font-display text-2xl tracking-wide">
        XY
      </a>
      <nav className="hidden md:block">
        <ul className="flex gap-9">
          {NAV_ITEMS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-[0.82rem] font-medium uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-red transition-all duration-200 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li className="flex items-center">
            <button
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="flex h-9 w-9 shrink-0 items-center justify-center border border-line text-muted transition-colors hover:border-red hover:text-red"
            >
              {theme === "dark" ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </li>
          <li>
            <a
              href="#booking"
              className="border border-red px-4 py-2 text-[0.75rem] uppercase tracking-[0.14em] transition-colors hover:bg-red"
            >
              Booking
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4 md:hidden">
        <button className="text-2xl text-ink" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full flex flex-col gap-4 border-t border-line bg-void px-[5vw] py-6 md:hidden">
          {NAV_ITEMS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.12em] text-muted hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="border border-red px-4 py-2 text-center text-sm uppercase tracking-[0.14em]"
          >
            Booking
          </a>
        </div>
      )}
    </header>
  );
}
