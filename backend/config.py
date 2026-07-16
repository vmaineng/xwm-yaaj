import os
from pathlib import Path
from dotenv import load_dotenv
import resend

load_dotenv()

RESEND_API_KEY = os.environ["RESEND_API_KEY"]
resend.api_key = RESEND_API_KEY
NOTIFY_EMAIL = "xwmyaajplus@gmail.com"
FROM_EMAIL = "onboarding@resend.dev"

DATA_DIR = Path(__file__).parent / "data"
DATA_DIR.mkdir(exist_ok=True)

BOOKING_FILE = DATA_DIR / "booking.json"

CORS_ORIGINS = [
    "http://localhost:3000",
    "https://xwmyaaj.com",
]