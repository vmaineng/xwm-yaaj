"use client";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-[5vw] pb-20 pt-10 text-center"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,.025) 0px, transparent 1px, transparent 2px)",
        }}
      />
      <div className="eyebrow mb-6">Underground · Independent · Unfiltered</div>
      <h1 className="font-display text-[clamp(3.2rem,14vw,9.5rem)] uppercase leading-[0.92]">
        <span className="glitch" data-text="XWM YAAJ">
          XWM YAAJ
        </span>
      </h1>
      <p className="mx-auto mt-7 max-w-130 text-base leading-relaxed text-muted">
        Street-forged bars over cinematic production. New EP{" "}
        <strong className="text-ink">&ldquo;STATIC&rdquo;</strong> out now —
        replace with your latest release messaging.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a href="#music" className="btn btn-primary">
          Listen Now
        </a>
        <a href="#booking" className="btn btn-outline">
          Booking Inquiries
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[0.68rem] tracking-[0.2em] text-muted">
        <span className="h-9 w-px animate-pulse2 bg-linear-to-b from-red to-transparent" />
        SCROLL
      </div>
    </section>
  );
}
