"use client";

export default function Navbar() {
  const NAV_ITEMS = [
    { label: "Music", href: "#music" },
    { label: "Videos", href: "#videos" },
    { label: "Tour", href: "#tour" },
    { label: "Press", href: "#press" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-linear-to-b from-void/95 to-transparent px-[5vw] py-5 backdrop-blur-[2px] ">
      <a href="#top" className="font-display text-2xl tracking-wide">
        XWM YAAJ
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
        </ul>
      </nav>
    </header>
  );
}
