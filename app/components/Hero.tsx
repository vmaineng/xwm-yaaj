"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden px-[6vw] pb-16 pt-24 md:flex-row md:items-center md:px-[8vw] md:pt-10 lg:px-[10vw]"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,.025) 0px, transparent 1px, transparent 2px)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-360 flex-col md:flex-row md:items-center">
        <div className="flex flex-col items-start text-left md:w-[55%] md:pr-10">
          <div className="eyebrow mb-6">
            Underground · Independent · Unfiltered
          </div>

          <h1 className="font-display text-[clamp(3.6rem,11vw,8.5rem)] uppercase leading-[0.86] tracking-tight">
            <span className="glitch block" data-text="XWM">
              XWM
            </span>
            <span className="glitch block" data-text="YAAJ">
              YAAJ
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base text-white/60 md:text-lg">
            New tape out now. Streaming everywhere.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#music"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-white/85"
            >
              Listen Now
            </a>
            <a
              href="#videos"
              className="text-sm font-semibold uppercase tracking-wide text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              Watch Videos
            </a>
          </div>
        </div>

        <div className="relative z-10 mt-16 h-[60vh] w-full md:mt-0 md:h-[80vh] md:w-[45%]">
          {/* Photo 1 — large anchor, top-left */}
          <div className="absolute left-0 top-[4%] z-10 h-[58%] w-[56%] -rotate-8 overflow-hidden rounded-sm shadow-2xl shadow-black/60 ring-1 ring-white/10 transition duration-500 hover:z-50 hover:rotate-0">
            <Image
              src="/xy.jpg"
              alt="XWM YAAJ"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Photo 2 — smaller, top-right */}
          <div className="absolute right-0 top-0 z-20 h-[50%] w-[58%] rotate-4 overflow-hidden rounded-sm shadow-2xl shadow-black/60 ring-1 ring-white/10 transition duration-500 hover:z-50 hover:rotate-0">
            <Image
              src="/sum.jpg"
              alt="XWM YAAJ"
              fill
              className="object-cover"
            />
          </div>

          {/* Photo 4 — small accent, tucked bottom-left, pops forward */}
          <div className="absolute bottom-[6%] left-0 z-30 h-[50%] w-[59%] rotate-8 overflow-hidden rounded-sm shadow-2xl shadow-black/70 ring-1 ring-white/10 transition duration-500 hover:z-50 hover:rotate-0">
            <Image
              src="/xyz.jpg"
              alt="XWM YAAJ"
              fill
              className="object-cover"
            />
          </div>

          {/* Photo 3 — largest of the bottom pair, front-most */}
          <div className="absolute bottom-0 right-0 z-40 h-[52%] w-[52%] -rotate-3 overflow-hidden rounded-sm shadow-2xl shadow-black/60 ring-1 ring-white/10 transition duration-500 hover:z-50 hover:rotate-0">
            <Image src="/x.jpg" alt="XWM YAAJ" fill className="object-cover" />
          </div>

          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, transparent 55%, var(--hero-gradient) 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
