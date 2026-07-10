import Reveal from "./Reveal";
import { videos } from "../lib/data";
import Image from "next/image";

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
          <a
            key={vid.title}
            href={`https://www.youtube.com/watch?v=${vid.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-line bg-surface"
          >
            <div className="relative aspect-video overflow-hidden bg-linear-to-br from-surface-2 to-void">
              <Image
                src={`https://img.youtube.com/vi/${vid.youtubeId}/maxresdefault.jpg`}
                alt={vid.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-void/20 transition-colors group-hover:bg-void/40">
                <div className="flex h-13 w-13 items-center justify-center rounded-full border border-red bg-void/60 transition-colors group-hover:bg-red">
                  <div className="ml-1 h-0 w-0 border-y-[7px] border-l-12 border-y-transparent border-l-red group-hover:border-l-void" />
                </div>
              </div>
            </div>

            <div className="px-4.5 py-4">
              <div className="text-[0.95rem] font-semibold">{vid.title}</div>
              <div className="mt-1 font-mono text-[0.72rem] text-muted">
                {vid.meta}
              </div>
            </div>
          </a>
        ))}
      </Reveal>
    </section>
  );
}
