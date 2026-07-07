import { Stat, Track, Video, TourDate } from "../types/index";

export const stats: Stat[] = [
  { value: "2.4M", label: "Monthly Listeners" },
  { value: "180K", label: "Instagram / TikTok" },
  { value: "14", label: "Releases" },
  { value: "3", label: "Sync Placements" },
];

export const bio = {
  heading: "The Story",
  paragraphs: [
    `Recording Artist from LA. XY writes from the space between two worlds: raised on family stories and a language most of the industry has never heard, and shaped by the block, the studio, and every late night in between. The sound is dark, direct, and built for people who want their music to mean something.`,
    `Since independently releasing debut tape "On the Block," XY has built a self-driven fanbase without a label — booking is currently open for features, sync licensing, and live dates. Full press kit (photos, stats, past coverage) available on request.`,
  ],
};

export const discography: Track[] = [
  { index: "01", title: "Static", meta: "EP · 2026", href: "#" },
  { index: "02", title: "Red Room", meta: "Mixtape · 2025", href: "#" },
  { index: "03", title: "Midnight Dialect", meta: "Single · 2025", href: "#" },
  { index: "04", title: "No Translation", meta: "Single · 2024", href: "#" },
];

export const videos: Video[] = [
  { title: "STATIC (Official Video)", meta: "3.2M views" },
  { title: "RED ROOM (Visualizer)", meta: "1.1M views" },
  { title: "Studio Session — Ep. 1", meta: "640K views" },
];

export const tourDates: TourDate[] = [
  { date: "AUG 14, 2026", city: "Los Angeles, CA", venue: "The Fonda Theatre", status: "soon" },
  { date: "SEP 02, 2026", city: "Atlanta, GA", venue: "The Masquerade", status: "on-sale" },
  { date: "SEP 20, 2026", city: "New York, NY", venue: "Irving Plaza", status: "on-sale" },
];

export const socials = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Spotify", href: "#" },
  { label: "X", href: "#" },
];
