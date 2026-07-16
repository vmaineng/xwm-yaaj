from enum import Enum
from pydantic import BaseModel, EmailStr, Field

class InquiryType(str, Enum):
    booking = "booking"
    management = "management"
    press = "press"


class BookingInquiry(BaseModel):
    name: str = Field(..., min_length=1)
    email: EmailStr
    inquiry_type: InquiryType
    message: str = Field(..., min_length=1)
