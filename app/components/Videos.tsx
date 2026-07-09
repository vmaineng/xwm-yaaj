import Reveal from "./Reveal";
import { videos } from "../lib/data";

export default function Videos() {
  return (
    <section id="videos" className="px-[5vw] py-28">
      <Reveal className="mb-14 max-w-xl">
        <div className="eyebrow">Videos</div>
        <h2 className="mt-2.5 font-display text-[clamp(1.8rem,4vw,2.6rem)] uppercase leading-none">
          Music Videos
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Streaming everywhere. Replace links below with your live YouTube /
          Vimeo URLs.
        </p>
      </Reveal>

      <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {videos.map((vid) => (
          <div key={vid.title} className="group border border-line bg-surface">
            <div className="relative flex aspect-video items-center justify-center bg-linear-to-br from-surface-2 to-void">
              <div className="flex h-13 w-13 items-center justify-center rounded-full border border-red transition-colors group-hover:bg-red">
                <div className="ml-1 h-0 w-0 border-y-[7px] border-l-12 border-y-transparent border-l-red group-hover:border-l-void" />
              </div>
            </div>
            <div className="px-4.5 py-4">
              <div className="text-[0.95rem] font-semibold">{vid.title}</div>
              <div className="mt-1 font-mono text-[0.72rem] text-muted">
                {vid.meta}
              </div>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
