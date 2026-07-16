import logging
import resend
from backend.config import RESEND_API_KEY, FROM_EMAIL, NOTIFY_EMAIL
from backend.models import BookingInquiry

resend.api_key = RESEND_API_KEY

logger = logging.getLogger("uvicorn.error")

def send_booking_notifications(payload:BookingInquiry): 
    try:
        resend.Emails.send({
            "from": "onboarding@resend.dev",
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
