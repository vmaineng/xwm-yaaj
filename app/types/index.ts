export type Stat = { value: string; label: string };
export type Track = { index: string; title: string; meta: string; href: string };
export type Video = { title: string; meta: string, youtubeId: string };

export type BookingPayload = {
  name: string;
  email: string;
  inquiry_type: "booking" | "management" | "press";
  message: string;
};