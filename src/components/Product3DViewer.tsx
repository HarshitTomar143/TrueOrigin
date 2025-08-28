'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, RotateCcw, ZoomIn, ZoomOut, Play, Pause } from 'lucide-react'

interface Product3DViewerProps {
  productId: string
  productName: string
  glbPath: string
  productImage: string
  productDescription: string
}

export default function Product3DViewer({ 
  productId, 
  productName, 
  glbPath, 
  productImage, 
  productDescription 
}: Product3DViewerProps) {
  const [isModelLoaded, setIsModelLoaded] = useState(false)
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)

  useEffect(() => {
    // Load model-viewer script
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'
    script.async = true
    
    script.onload = () => {
      setIsScriptLoaded(true)
    }
    
    document.head.appendChild(script)

    return () => {
      // Cleanup script if component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const handleModelLoad = () => {
    setIsModelLoaded(true)
  }

  const handleModelError = (error: any) => {
    console.error('Error loading 3D model:', error)
    setIsModelLoaded(true) // Remove loading overlay even on error
  }

  const toggleAutoRotate = () => {
    setIsAutoRotating(!isAutoRotating)
    const modelViewer = document.querySelector('model-viewer') as any
    if (modelViewer) {
      modelViewer.autoRotate = !isAutoRotating
    }
  }

  const resetCamera = () => {
    const modelViewer = document.querySelector('model-viewer') as any
    if (modelViewer) {
      modelViewer.cameraOrbit = '0deg 75deg 105%'
      modelViewer.cameraTarget = '0m 0m 0m'
    }
  }

  const zoomIn = () => {
    const modelViewer = document.querySelector('model-viewer') as any
    if (modelViewer) {
      const currentOrbit = modelViewer.cameraOrbit
      const distance = currentOrbit.split(' ')[2]
      const newDistance = Math.max(50, parseInt(distance) - 20) + '%'
      modelViewer.cameraOrbit = `${currentOrbit.split(' ')[0]} ${currentOrbit.split(' ')[1]} ${newDistance}`
    }
  }

  const zoomOut = () => {
    const modelViewer = document.querySelector('model-viewer') as any
    if (modelViewer) {
      const currentOrbit = modelViewer.cameraOrbit
      const distance = currentOrbit.split(' ')[2]
      const newDistance = Math.min(200, parseInt(distance) + 20) + '%'
      modelViewer.cameraOrbit = `${currentOrbit.split(' ')[0]} ${currentOrbit.split(' ')[1]} ${newDistance}`
    }
  }

  if (!isScriptLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#24243e] via-[#302b63] to-[#0f0c29] flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">Loading 3D Viewer...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#24243e] via-[#302b63] to-[#0f0c29] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://www.transparenttextures.com/patterns/stardust.png)',
            opacity: 0.08,
            animation: 'sparkle 30s linear infinite',
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            href={`/home/products/${productId}`}
            className="flex items-center text-white hover:text-yellow-300 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Product
          </Link>
          
          <motion.h1 
            className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-[#f7971e] to-[#ffd200] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {productName} - 3D View
          </motion.h1>
          
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-120px)] px-6 gap-8">
        
        {/* 3D Model Viewer */}
        <motion.div 
          className="flex-1 max-w-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
                         <model-viewer
               src={glbPath}
               alt={`3D Model of ${productName}`}
               auto-rotate={isAutoRotating}
               camera-controls
               ar
               shadow-intensity="1"
               exposure="1"
               environment-image="neutral"
               loading="eager"
               onLoad={handleModelLoad}
               onError={handleModelError}
               style={{
                 width: '100%',
                 height: '500px',
                 borderRadius: '20px',
                 boxShadow: '0 0 30px rgba(0,0,0,0.5)',
                 backgroundColor: 'rgba(255,255,255,0.1)',
               }}
             />
            
            {/* Loading Overlay */}
            {!isModelLoaded && (
              <div className="absolute inset-0 bg-black/50 rounded-20px flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                  <p>Loading 3D Model...</p>
                </div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="mt-6 flex justify-center space-x-4">
            <motion.button
              onClick={toggleAutoRotate}
              className={`p-3 rounded-full ${
                isAutoRotating 
                  ? 'bg-yellow-500 text-black' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              } transition-all duration-300`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={isAutoRotating ? 'Pause Rotation' : 'Start Rotation'}
            >
              {isAutoRotating ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </motion.button>
            
            <motion.button
              onClick={resetCamera}
              className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Reset Camera"
            >
              <RotateCcw className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              onClick={zoomIn}
              className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Zoom In"
            >
              <ZoomIn className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              onClick={zoomOut}
              className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Zoom Out"
            >
              <ZoomOut className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Product Information */}
        <motion.div 
          className="flex-1 max-w-md text-white"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="mb-6">
              <img 
                src={productImage} 
                alt={productName}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{productName}</h3>
              <p className="text-white/80 leading-relaxed">{productDescription}</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-yellow-300">3D Model Features</h4>
                <ul className="text-sm text-white/80 space-y-1">
                  <li>• Interactive 3D viewing</li>
                  <li>• Camera controls (drag to rotate)</li>
                  <li>• Zoom in/out functionality</li>
                  <li>• Auto-rotation toggle</li>
                  <li>• AR viewing support</li>
                </ul>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-yellow-300">How to Use</h4>
                <ul className="text-sm text-white/80 space-y-1">
                  <li>• Drag to rotate the model</li>
                  <li>• Scroll to zoom in/out</li>
                  <li>• Use controls below the model</li>
                  <li>• Click AR button for augmented reality</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes sparkle {
          0% { background-position: 0 0; }
          100% { background-position: 1000px 1000px; }
        }
      `}</style>
    </div>
  )
}
