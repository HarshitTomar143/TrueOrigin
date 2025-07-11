'use client'

import { useEffect } from 'react'

export default function ModelIntro() {
  useEffect(() => {
    // Load model-viewer script once
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'
    script.async = true
    document.head.appendChild(script)
  }, [])

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-white font-sans overflow-hidden bg-gradient-to-br from-[#24243e] via-[#302b63] to-[#0f0c29] px-4">
      {/* Animated Stars BG */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://www.transparenttextures.com/patterns/stardust.png)',
          opacity: 0.08,
          animation: 'sparkle 30s linear infinite',
        }}
      />

      {/* Intro Text */}
      <div className="text-center z-10 animate-fadeInZoom">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#f7971e] to-[#ffd200] bg-clip-text text-transparent animate-slideInText">
          Blue Pottery of Jaipur
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-lg text-white/80 animate-slideInText delay-200">
          A unique art of Jaipur, made from quartz and colorful floral patterns. GI-tagged and globally recognized.
        </p>
      </div>

      {/* 3D Model Viewer */}
      <div className="mt-8 z-10">
        <model-viewer
          src="/models/scene.glb"
          alt="Pottery Model"
          auto-rotate
          camera-controls
          ar
          shadow-intensity="1"
          exposure="1"
          style={{
            width: '400px',
            height: '400px',
            borderRadius: '20px',
            boxShadow: '0 0 20px #00000080',
            backgroundColor: '#ffffff10',
          }}
        />
      </div>

      {/* Tailwind Animations */}
      <style jsx global>{`
        @keyframes fadeInZoom {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInText {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sparkle {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 1000px 1000px;
          }
        }

        .animate-fadeInZoom {
          animation: fadeInZoom 2.5s ease forwards;
        }

        .animate-slideInText {
          animation: slideInText 2s ease forwards;
        }

        .delay-200 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  )
}
