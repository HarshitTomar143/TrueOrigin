"use client";

import { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";

export default function QRScanner() {
  const videoRef = useRef(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (!videoRef.current) return;

    const qrScanner = new QrScanner(
      videoRef.current,
      (res) => {
        if (res) {
          setResult(res.data);
          console.log("QR Code Detected:", res.data);
        }
      },
      {
        highlightScanRegion: true,
        highlightCodeOutline: true,
      }
    );

    qrScanner.start();

    return () => {
      qrScanner.stop();
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <video ref={videoRef} style={{ width: "100%" }} />

      {result && (
        <div className="p-3 bg-white/20 border border-white/30 rounded-lg text-white w-full break-words">
          <strong>Scanned Result:</strong> {result}
        </div>
      )}
    </div>
  );
}
