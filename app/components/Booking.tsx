"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { submitBookingInquiry } from "../lib/api";
import { BookingPayload } from "../types/index";

const contacts: {
  label: string;
  email: string;
  role: string;
  type: BookingPayload["inquiry_type"];
}[] = [
  {
    label: "Booking /Live",
    email: "xwmyaajplus@gmail.com",
    role: "Live shows, festivals, tour support",
    type: "booking",
  },
  {
    label: "Management",
    email: "xwmyaajplus@gmail.com",
    role: "Deals, partnerships, general inquiries",
    type: "management",
  },
  {
    label: "Press",
    email: "xwmyaajplus@gmail.com",
    role: "Interviews, features, press kit requests",
    type: "press",
  },
];

export default function Booking() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState<string | null>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const payload: BookingPayload = {
      name: form.get("name") as string,
      email: form.get("email") as string,
      inquiry_type: form.get("inquiry_type") as BookingPayload["inquiry_type"],
      message: form.get("message") as string,
    };
    setStatus("sending");
    try {
      await submitBookingInquiry(payload);
      setStatus("sent");
      formEl.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMsg("There was an error sending your message. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section
      id="booking"
      className="border-y border-line px-[5vw] py-28 text-center"
      style={{
        background: "var(--booking-gradient)",
      }}
    >
      <Reveal>
        <div className="eyebrow"> Get In Touch</div>
        <h2 className="mt-2 font-display text-[clamp(2.4rem,6vw,4.2rem)] uppercase leading-none">
          Let&apos;s Work
        </h2>
        <p className="mx-auto mt-5 max-w-130 leading-relaxed text-muted">
          Open to features, brand partnerships, sync licensing, and live
          bookings. Management responds within 48 hours.
        </p>
      </Reveal>

      <Reveal className="mt-14 grid grid-cols-1 gap-px border border-line bg-line text-left md:grid-cols-3">
        {contacts.map((contact) => (
          <div key={contact.label} className="bg-void p-8">
            <div className="eyebrow mb-2.5"> {contact.label}</div>
            <a
              href={`mailto:${contact.email}`}
              className="text-[0.95rem] text-ink"
            >
              {contact.email}
            </a>
            <p className="mt-1 text-sm text-muted">{contact.role}</p>
          </div>
        ))}
      </Reveal>

      <Reveal className="mx-auto mt-16 max-w-xl text-left">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 border border-line bg-void/60 p-8 md:grid-cols-2"
        >
          <input
            name="name"
            required
            placeholder="Your name"
            className="border border-line bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-red"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your email"
            className="border border-line bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-red"
          />
          <select
            name="inquiry_type"
            defaultValue="management"
            className="border border-line bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-red"
          >
            <option value="booking">Live / Booking</option>
            <option value="management">Deals / Management</option>
            <option value="press">Press</option>
          </select>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Tell us about your opportunity..."
            className="border border-line bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-red"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="col-span-full mt-2 rounded bg-red px-6 py-3 text-sm font-semibold uppercase tracking-wide text-void transition-colors hover:bg-red/90 disabled:cursor-not-allowed disabled:bg-red/50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "sent" && (
            <p className="col-span-full mt-2 text-sm text-green-500">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="col-span-full mt-2 text-sm text-red-500">
              {errorMsg}
            </p>
          )}
        </form>
      </Reveal>
    </section>
  );
}
