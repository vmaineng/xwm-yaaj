# XWM YAAJ

Portfolio site for the artist XWM YAAJ, with a booking/inquiry system for booking, management, and press requests.

## Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS v4
- **Backend:** FastAPI (Python), Resend for email notifications

## Hosting

- **Frontend:** [Vercel](https://vercel.com)
- **Backend:** [Render](https://render.com) — live at `https://xwm-yaaj.onrender.com`

## What it does

Visitors submit a booking, management, or press inquiry through a form on the site. The backend validates the submission, saves it, and sends an email notification via Resend so inquiries don't get missed.

## One thing I learned

Python's module resolution depends entirely on *where* you run a command from, not just how your files are organized on disk. Absolute imports like `from backend.config import ...` only resolve if the parent of `backend/` is on `sys.path` — which changes depending on whether you run `uvicorn` directly, `python -m uvicorn`, or from inside vs. outside the `backend/` folder. The same issue showed up locally, in tests, and again on Render, each time needing the working directory and the entrypoint (`backend.main:app` vs. `main:app`) to agree with each other.

## One thing I hope to add next time

Right now, submitted inquiries are stored in a local `data/booking.json` file. On Render's free tier, that file gets wiped on every redeploy since the filesystem is ephemeral — so real submissions could silently disappear. Next, I want to migrate storage to Render's free PostgreSQL database so inquiry data actually persists.