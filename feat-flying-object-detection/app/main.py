import torch
from PIL import Image
import io
import numpy as np
import os

import uvicorn
from azure.storage.blob import BlobServiceClient, ContentSettings
from fastapi import FastAPI, Query, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from io import BytesIO
from app.detect import main as detect_func
from dotenv import load_dotenv

app = FastAPI(title="Tool Detective API", version="0.1.0")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:8000",
        "http://localhost:8080",
        "https://intel-hackathon-yuriachermann.vercel.app",
        "*",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load .env file
load_dotenv()
connect_str = os.environ.get("CONNECT_STR")


@app.get("/healthcheck")
def healthcheck():
    """
    Healthcheck endpoint
    """
    return {"CHECK": "Uvicorn server running"}


@app.post("/upload")
async def upload(
    street_image_id: str = Query(description="Street Image ID"),
    file: UploadFile = File(...),
):
    """
    Uploads an image to file storage.
    Args:
        street_image_id (str): Street Image ID
        file (UploadFile): File to upload
    """

    # CONNECT TO THE RAW IMAGES CONTAINER

    # Create the BlobServiceClient object
    blob_service_client = BlobServiceClient.from_connection_string(connect_str)
    # Get the container client
    container_name = "intel-hackathon"
    container_client = blob_service_client.get_container_client(
        container=container_name
    )

    print("#1: Connecting to raw images container")

    print("#2: Start Processing Image")

    image = Image.open(BytesIO(await file.read()))
    image = np.array(image)
    image = detect_func(image=image)
    image = Image.fromarray(image, "RGB")

    print("#2: End Processing Image")

    processed_image_byte_stream = io.BytesIO()
    image.save(processed_image_byte_stream, format="JPEG")
    processed_image_byte_stream.seek(0)

    blob = f"street_image/{street_image_id}.jpg"
    # Upload the image
    container_client.upload_blob(
        name=blob,
        data=processed_image_byte_stream,
        overwrite=True,
        content_settings=ContentSettings(content_type="image/jpeg"),
    )

    print("#2: Loading the image")

    return {"url": 200}


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8080)
