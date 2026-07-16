import uuid
from datetime import datetime, timezone
from fastapi import APIRouter

from backend.config import BOOKING_FILE
from backend.models import BookingInquiry
from backend.notifications import send_booking_notifications

router = APIRouter(prefix="/api", tags=["booking"])

@router.post("/booking", status_code=201)
def submit_booking(payload: BookingInquiry):
    send_booking_notifications(payload)
    return {"message": "Inquiry received."}