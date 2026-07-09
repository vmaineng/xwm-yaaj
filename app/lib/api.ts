import { BookingPayload } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

async function post<T>(path:string, body:T) {
    const res = await fetch(`${API_URL}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    if (!res.ok) { 
        const err = await res.json().catch(() => ({}))
        throw new Error(err.message || "An error occurred while submitting the form.");
    }
    return res.json();
}

export const submitBookingInquiry = (payload: BookingPayload) => 
    post("/api/booking", payload);