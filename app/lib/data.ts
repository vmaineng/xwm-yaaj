import { Stat, Track, Video, TourDate } from "../types/index";

export const stats: Stat[] = [
  { value: "2.4K", label: "Monthly Listeners" },
  { value: "800", label: "Instagram / Facebook" },
  { value: "14", label: "Releases" },
  { value: "7", label: "Music Videos" },
];

export const bio = {
  heading: "The Story",
  paragraphs: [
    `Recording Artist from LA. XY writes from the space between two worlds: raised on family stories and a language most of the industry has never heard, and shaped by the block, the studio, and every late night in between. The sound is dark, direct, and built for people who want their music to mean something.`,
    `Since independently releasing debut tape "On the Block," XY has built a self-driven fanbase without a label — booking is currently open for features, sync licensing, and live dates. Full press kit (photos, stats, past coverage) available on request.`,
  ],
};

export const discography: Track[] = [
  { index: "01", title: "On the Block", meta: "EP · 2026", href: "https://www.youtube.com/watch?v=79mUwi8REo0" },
  { index: "02", title: "Don't Sweat It", meta: "Single · 2026", href: "https://www.youtube.com/watch?v=x2yM6l2EI9o" },
  { index: "03", title: "Outside", meta: "Music Video · 2025", href: "https://www.youtube.com/watch?v=mr2WFaDWIbY" },
  { index: "04", title: "1000", meta: "Single · 2024", href: "https://www.youtube.com/watch?v=zwcdt4GpRG4" },
];

export const videos: Video[] = [
  { title: "For The Gang", meta: "37K views" , youtubeId: "rWTsVnDrryU"},
  { title: "No Tomorrow", meta: "14K views", youtubeId: "_2FrzZA5hdg" },
  { title: "Any Minute", meta: "10K views", youtubeId: "xEVD9i8_wQ0" },
];

export const tourDates: TourDate[] = [
  { date: "AUG 14, 2026", city: "Los Angeles, CA", venue: "The Fonda Theatre", status: "soon" },
  { date: "SEP 02, 2026", city: "Atlanta, GA", venue: "The Masquerade", status: "on-sale" },
  { date: "SEP 20, 2026", city: "New York, NY", venue: "Irving Plaza", status: "on-sale" },
];

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/xwmyaajmusic/" },
  { label: "TikTok", href: "https://www.tiktok.com/@xwmyaajmusic" },
  { label: "YouTube", href: "https://www.youtube.com/@xwmyaajmusic" },
  { label: "Facebook", href: "https://www.facebook.com/XwmYaajMusic" },
];
