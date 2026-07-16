from unittest.mock import patch
from backend.models import BookingInquiry, InquiryType
from backend.notifications import send_booking_notifications

def make_payload():
    return BookingInquiry(
        name="Jane Doe",
        email="jane@example.com",
        inquiry_type=InquiryType.booking,
        message="Interested in booking for a show in October"
    )

@patch("backend.notifications.resend.Emails.send")
def test_send_booking_notification_calls_resend(mock_send):
    payload = make_payload()
    send_booking_notifications(payload)

    mock_send.assert_called_once()
    call_args = mock_send.call_args[0][0]

    assert call_args["to"] == 'xwmyaajplus@gmail.com'
    assert "Jane Doe" in call_args["subject"]
    assert "jane@example.com" in call_args["html"]
    assert "booking" in call_args["subject"]

@patch("backend.notifications.resend.Emails.send")
def test_send_booking_notification_handles_failure_gracefully(mock_send):
    mock_send.side_effect = Exception("Resend API is down")
    payload= make_payload()

    send_booking_notifications(payload)
    