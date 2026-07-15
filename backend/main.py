from dotenv import load_dotenv
load_dotenv()

import os
from datetime import datetime, timezone
from enum import Enum
from pathlib import Path
import json
import logging
import uuid

import resend
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

logger = logging.getLogger("uvicorn.error")

app = FastAPI(title="XWM YAAJ API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://xwmyaaj.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

resend.api_key = os.environ["RESEND_API_KEY"]

DATA_DIR = Path(__file__).parent / "data"
DATA_DIR.mkdir(exist_ok=True)

BOOKING_FILE = DATA_DIR / "booking.json"


class InquiryType(str, Enum):
    booking = "booking"
    management = "management"
    press = "press"


class BookingInquiry(BaseModel):
    name: str = Field(..., min_length=1)
    email: EmailStr
    inquiry_type: InquiryType
    message: str = Field(..., min_length=1)


def _append(file_path: Path, record: dict):
    records = []
    if file_path.exists():
        try:
            records = json.loads(file_path.read_text())
        except json.JSONDecodeError:
            records = []
    records.append(record)
    file_path.write_text(json.dumps(records, indent=2))


@app.post("/api/booking", status_code=201)
def submit_booking(payload: BookingInquiry):
    _append(
        BOOKING_FILE,
        {
            "id": str(uuid.uuid4()),
            "name": payload.name,
            "email": payload.email,
            "inquiry_type": payload.inquiry_type.value,
            "message": payload.message,
            "submitted_at": datetime.now(timezone.utc).isoformat(),
        },
    )

    try:
        resend.Emails.send({
            "from": "bookings@xwmyaaj.com",
            "to": "xwmyaajplus@gmail.com",
            "subject": f"New {payload.inquiry_type.value} inquiry from {payload.name}",
            "html": (
                f"<p><b>Name:</b> {payload.name}</p>"
                f"<p><b>Email:</b> {payload.email}</p>"
                f"<p><b>Type:</b> {payload.inquiry_type.value}</p>"
                f"<p><b>Message:</b> {payload.message}</p>"
            ),
        })
    except Exception:
        logger.exception("Failed to send booking notification email")

    return {"message": "Inquiry received."}
