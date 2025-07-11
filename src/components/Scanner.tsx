// components/QRScanner.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function QRScanner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Error accessing camera:", err);
      });
  }, []);

  const captureAndSend = async () => {
    if (!canvasRef.current || !videoRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    ctx.drawImage(videoRef.current, 0, 0);

    const blob: Blob = await new Promise((resolve) =>
      canvas.toBlob((b) => b && resolve(b), "image/jpeg")
    );

    const formData = new FormData();
    formData.append("image", blob, "capture.jpg");

    setLoading(true);
    try {
      const res = await fetch("https://scannerbackend-production-db76.up.railway.app/scan", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data.result || "No result found");
    } catch (err) {
      setResult("Error scanning QR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <video ref={videoRef} autoPlay className="rounded-xl shadow w-full max-w-md" />
      <canvas ref={canvasRef} className="hidden" />
      <button
        onClick={captureAndSend}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
      >
        {loading ? "Scanning..." : "Scan QR Code"}
      </button>
      {result && <p className="mt-4 text-lg text-center">📄 Result: {result}</p>}
    </div>
  );
}
