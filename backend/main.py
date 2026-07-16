from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.config import CORS_ORIGINS
from backend.routers import booking

app = FastAPI(title="XWM YAAJ API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# def _append(file_path: Path, record: dict):
#     records = []
#     if file_path.exists():
#         try:
#             records = json.loads(file_path.read_text())
#         except json.JSONDecodeError:
#             records = []
#     records.append(record)
#     file_path.write_text(json.dumps(records, indent=2))


app.include_router(booking.router)
