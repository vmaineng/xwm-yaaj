import Reveal from "./Reveal";
import { discography } from "../lib/data";

export default function Discograph() {
  return (
    <section id="music" className="px-[5vw] py-28">
      <Reveal className="mb-14 max-w-xl">
        <div className="eyebrow">Discography</div>
        <h2 className="mt-2.5 font-display text-[clamp(1.8rem,4vw,2.6rem)] uppercase leading-none">
          Music
        </h2>
        <p className="mt-4 leading-relaxed text-muted">Streaming everywhere.</p>
      </Reveal>

      <Reveal className="border-t border-line">
        {discography.map((track) => (
          <div
            key={track.index}
            className="grid grid-cols-[36px_1fr] items-center gap-6 border-b border-line py-6 transition-colors hover:bg-red/[0.04] md:grid-cols-[60px_1fr_auto_auto]"
          >
            <span className="font-mono text-sm text-red">{track.index}</span>
            <span className="font-display text-xl uppercase md:col-auto">
              {track.title}
            </span>
            <span className="col-start-2 font-mono text-[0.78rem] text-muted md:col-auto">
              {track.meta}
            </span>
            <a
              href={track.href}
              className="col-start-2 w-fit border border-line px-4 py-2 text-[0.72rem] uppercase tracking-[0.12em] text-muted transition-colors hover:border-red hover:text-red md:col-auto md:w-auto"
            >
              Stream
            </a>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
