import React, { useCallback, useEffect } from "react";
import "aos/dist/aos.css";
import Layout from "../components/layout/Layout";
import axios from "axios";
import Image from "next/image";
import Webcam from "react-webcam";

import { createId } from "@paralleldrive/cuid2";

const sasToken =
  "sp=r&st=2023-09-03T23:04:08Z&se=2024-09-04T07:04:08Z&spr=https&sv=2022-11-02&sr=c&sig=ikDJXuvnWGekxgKQOzg6V971vcmTuafMJwbkD%2F%2FBIb0%3D";

function Flying() {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [webcamImage, setWebcamImage] = React.useState<File | null>(null);
  const [processedImage, setProcessedImage] = React.useState<File | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [streetImageID, setStreetImageID] = React.useState(createId());

  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const webcamRef = React.useRef<any>(null);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        // Convert base64 to Blob
        fetch(imageSrc)
          .then((res) => res.blob())
          .then((blob) => {
            const file = new File([blob], "webcam-screenshot.jpg", {
              type: "image/jpeg",
            });
            setSelectedFile(file); // or another state variable
          });
      }
    }
  }, [webcamRef]);

  useEffect(() => {
    const handleDetect = async () => {
      setLoading(true);
      const formData = new FormData();
      if (selectedFile) {
        formData.append("file", selectedFile);
      }

      try {
        const response = await axios.post(
          `http://172.174.255.171:8080/upload?street_image_id=${streetImageID}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        setProcessedImage(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to upload the file");
      } finally {
        setLoading(false); // Set loading state back to false
      }
    };

    // Call handleDetect whenever streetImageID changes
    if (selectedFile && streetImageID) {
      handleDetect();
    }
  }, [streetImageID]);

  const onDetectClick = async () => {
    if (selectedFile) {
      await setStreetImageID(createId());
    } else {
      alert("Please select an image to process");
    }
  };

  const FACING_MODE_USER = "user";
  const FACING_MODE_ENVIRONMENT = "environment";

  const videoConstraints = {
    facingMode: FACING_MODE_USER,
  };

  return (
    <Layout>
      <main className="grow">
        <div>
          <div className="m-0 text-[17px] font-bold text-mauve12">
            Upload Image
          </div>
          <div className="mb-5 mt-[10px] text-[15px] leading-normal text-slate-700">
            Make sure to fill in all the fields
          </div>
          <div className="mx-10 mt-1 flex flex-col items-center justify-around p-6 md:flex-row">
            <div className="max-h-sm mt-[25px] max-w-sm border-2 border-slate-800">
              {selectedFile ? (
                <Image
                  src={URL.createObjectURL(selectedFile)}
                  alt="Preview"
                  width={450}
                  height={300}
                  className="h-80 w-full object-cover"
                />
              ) : webcamImage ? (
                <Image
                  src={URL.createObjectURL(webcamImage)}
                  alt="Preview"
                  width={450}
                  height={300}
                  className="h-80 w-full object-cover"
                />
              ) : (
                <Webcam
                  ref={webcamRef}
                  audio={false}
                  screenshotFormat="image/jpeg"
                  videoConstraints={{
                    ...videoConstraints,
                    facingMode: FACING_MODE_ENVIRONMENT,
                  }}
                />
              )}
              <input
                type="file"
                accept="image/*"
                hidden
                ref={inputFileRef}
                onChange={(event) => {
                  setSelectedFile(event.target.files?.[0] || null);
                }}
              />
            </div>
            <div className="flex flex-col justify-center gap-6 p-6">
              <button
                className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-violet4 px-[15px] font-medium leading-none text-violet11 hover:bg-violet5 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
                onClick={() => inputFileRef.current?.click()}
              >
                Upload File (jpg)
              </button>
              <button
                className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-violet4 px-[15px] font-medium leading-none text-violet11 hover:bg-violet5 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
                onClick={() => {
                  if (selectedFile) {
                    setSelectedFile(null);
                  } else {
                    if (webcamImage) {
                      setWebcamImage(null);
                    } else {
                      capture();
                    }
                  }
                }}
              >
                {selectedFile
                  ? `Back to WebCam`
                  : webcamImage
                  ? `Retake`
                  : `Capture Image`}
              </button>
              <button
                type="button"
                className={`rounded-lg  px-10 py-2.5 text-sm font-medium text-white ${
                  selectedFile || webcamImage
                    ? "bg-green-800 hover:bg-green-700"
                    : "bg-gray-300"
                }  focus:ring-green-800`}
                onClick={async () => {
                  if (selectedFile) {
                    onDetectClick();
                  } else {
                    alert("Please select an image to process");
                  }
                }}
              >
                Detect
              </button>
            </div>
            <div className="max-h-sm mt-[25px] max-w-sm border-2 border-slate-800">
              {loading ? (
                <div>Loading...</div>
              ) : processedImage ? (
                <Image
                  src={`https://tooldetectivestorageacc.blob.core.windows.net/intel-hackathon/street_image/${streetImageID}.jpg?${sasToken}`}
                  alt="Preview"
                  width={450}
                  height={300}
                  className="h-80 w-full object-cover"
                />
              ) : (
                <div className="flex h-80 w-full text-gray-800">
                  Select an image to process
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Flying;
