import Reveal from "./Reveal";
import { stats, bio } from "../lib/data";
import Image from "next/image";

export default function StatsEpk() {
  return (
    <section
      id="press"
      className="border-y border-line bg-surface px-[5vw] py-28"
    >
      <Reveal>
        <div className="grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-void px-6 py-9 text-center">
              <b className="font-display text-[clamp(1.8rem,4vw,3rem)]">
                {s.value}
              </b>
              <small className="mt-2 block text-[0.72rem] uppercase tracking-[0.14em] text-muted">
                {s.label}
              </small>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-14 grid grid-cols-1 items-start gap-16 md:grid-cols-[1fr_1.3fr]">
        <div className="relative flex aspect-4/5 items-center justify-center overflow-hidden border border-line bg-linear-to-br from-surface-2 to-void">
          <Image
            src="/xy.jpg"
            height={800}
            width={800}
            alt="XY"
            className="h-auto w-full object-cover"
          />

          <div className="scan-line absolute" />
        </div>
        <div>
          <div className="eyebrow mb-3">Press Kit</div>
          <h2 className="mb-6 font-display text-[clamp(1.8rem,4vw,2.6rem)] uppercase">
            {bio.heading}
          </h2>
          {bio.paragraphs.map((p, i) => (
            <p key={i} className="mb-5 text-[0.98rem] leading-[1.8] text-muted">
              {p}
            </p>
          ))}
          <a
            href="#booking"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-red px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-void shadow-[0_0_24px_-6px_var(--red-glow)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-glow hover:shadow-[0_0_32px_-4px_var(--red-glow)]"
          >
            Book / Contact today!
          </a>
        </div>
      </Reveal>
    </section>
  );
}
