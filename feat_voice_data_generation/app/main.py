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
from inference import main as generate_func
from dotenv import load_dotenv

app = FastAPI(title="Flying API", version="0.1.0")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "*",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load .env file
load_dotenv()
connect_str = os.environ.get("CONNECT_STR")

print(connect_str)


@app.get("/healthcheck")
def healthcheck():
    """
    Healthcheck endpoint
    """
    return {"CHECK": "Uvicorn server running" + connect_str}


@app.post("/predict")
async def predict(
    delivery_voice_id: str = Query(description="delivery_voice_id"),
    user: str = Query(description="user"),
    food: str = Query(description="food"),
):
    """Prediction Endpoint
    This endpoint process raw data and detects the objects in the image provided
    
    Args:
        delivery_voice_id (str): delivery_voice_id
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

    savepath = generate_func(f"Hi, {user} your {food} has arrived!")

    blob = f"delivery_voice/{delivery_voice_id}.wav"
    # Upload the image
    container_client.upload_blob(
        name=blob,
        data=savepath,
        overwrite=True,
        content_settings=ContentSettings(content_type="audio/wav"),
    )

    print("#2: Loading the audio file")

    return {"url": 200}


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=5004)
