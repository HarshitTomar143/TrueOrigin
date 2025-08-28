'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, RotateCcw, ZoomIn, ZoomOut, Play, Pause } from 'lucide-react'


export default function Product3DViewer({ 
  productId, 
  productName, 
  glbPath, 
  productImage, 
  productDescription 
} ) {
  const [isModelLoaded, setIsModelLoaded] = useState(false)
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)
  const [loadingError, setLoadingError] = useState(null)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    console.log('Starting to load 3D viewer...')
    
    // Load model-viewer script
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'
    script.async = true
    
    script.onload = () => {
      console.log('3D viewer script loaded successfully')
      setIsScriptLoaded(true)
      
      // Wait a bit for the custom element to be defined
      setTimeout(() => {
        if (customElements.get('model-viewer')) {
          console.log('Model-viewer custom element is now defined')
        }
      }, 100)
    }
    
    script.onerror = () => {
      console.error('Failed to load 3D viewer script')
      setLoadingError('Failed to load 3D viewer. Please check your internet connection.')
    }
    
    document.head.appendChild(script)

    // Set a timeout to prevent infinite loading
    const timeoutId = setTimeout(() => {
      if (!isModelLoaded) {
        console.warn('Model loading timeout reached')
        setLoadingError('Model is taking too long to load. Please try refreshing the page.')
        setIsModelLoaded(true)
      }
    }, 15000) // 15 seconds timeout - reduced for better UX

    return () => {
      // Cleanup script if component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
      clearTimeout(timeoutId)
    }
  }, [isModelLoaded])

  const handleModelLoad = () => {
    console.log('3D Model loaded successfully')
    setIsModelLoaded(true)
    setLoadingError(null)
    
    // Check if the model-viewer element is working
    const modelViewer = document.querySelector('model-viewer')
    if (modelViewer) {
      console.log('Model viewer element found:', modelViewer)
      console.log('Model src:', modelViewer.src)
      console.log('Model ready state:', modelViewer.readyState)
    }
  }

  // Alternative loading detection using readyState
  useEffect(() => {
    if (!isScriptLoaded) return

    const checkModelReady = () => {
      const modelViewer = document.querySelector('model-viewer')
      if (modelViewer) {
        // Check multiple conditions for model readiness
        if (modelViewer.readyState === 4) { // 4 = COMPLETE
          console.log('Model ready state detected as complete')
          setIsModelLoaded(true)
          setLoadingError(null)
          return
        }
        
        // Check if model has loaded and is visible
        if (modelViewer.model && modelViewer.model.modelUri) {
          console.log('Model object detected, considering loaded')
          setIsModelLoaded(true)
          setLoadingError(null)
          return
        }
        
        // Check if the model-viewer has any content
        const canvas = modelViewer.shadowRoot?.querySelector('canvas')
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          console.log('Canvas detected with dimensions, considering loaded')
          setIsModelLoaded(true)
          setLoadingError(null)
          return
        }
      }
    }

    // Check immediately
    checkModelReady()

    // Set up interval to check periodically
    const intervalId = setInterval(checkModelReady, 500) // Check more frequently

    // Also check when the model-viewer element changes
    const observer = new MutationObserver(checkModelReady)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      clearInterval(intervalId)
      observer.disconnect()
    }
  }, [isScriptLoaded])

  const handleModelError = (error) => {
    console.error('Error loading 3D model:', error)
    setLoadingError('Failed to load 3D model. Please try refreshing the page.')
    setIsModelLoaded(true) // Remove loading overlay even on error
  }

  const handleModelProgress = (event) => {
    if (event.detail.totalProgress !== undefined) {
      const progress = Math.round(event.detail.totalProgress * 100)
      setLoadingProgress(progress)
      console.log(`Loading progress: ${progress}%`)
    }
  }

  const toggleAutoRotate = () => {
    setIsAutoRotating(!isAutoRotating)
    const modelViewer = document.querySelector('model-viewer') 
    if (modelViewer) {
      modelViewer.autoRotate = !isAutoRotating
    }
  }

  const resetCamera = () => {
    const modelViewer = document.querySelector('model-viewer')
    if (modelViewer) {
      modelViewer.cameraOrbit = '0deg 75deg 105%'
      modelViewer.cameraTarget = '0m 0m 0m'
    }
  }

  const zoomIn = () => {
    const modelViewer = document.querySelector('model-viewer') 
    if (modelViewer) {
      const currentOrbit = modelViewer.cameraOrbit
      const distance = currentOrbit.split(' ')[2]
      const newDistance = Math.max(50, parseInt(distance) - 20) + '%'
      modelViewer.cameraOrbit = `${currentOrbit.split(' ')[0]} ${currentOrbit.split(' ')[1]} ${newDistance}`
    }
  }

  const zoomOut = () => {
    const modelViewer = document.querySelector('model-viewer') 
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
          <p className="text-sm text-yellow-300 mt-2">This may take a few seconds</p>
        </div>
      </div>
    )
  }

  // Check if model-viewer custom element is defined
  if (typeof window !== 'undefined' && !customElements.get('model-viewer')) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#24243e] via-[#302b63] to-[#0f0c29] flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-4xl mb-4">⚠️</div>
          <h3 className="text-xl font-semibold mb-4">3D Viewer Not Available</h3>
          <p className="text-sm mb-4">The 3D viewer component failed to load properly.</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Refresh Page
          </button>
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
               reveal="auto"
               onLoad={handleModelLoad}
               onError={handleModelError}
               onProgress={handleModelProgress}
               onModelVisibility={() => {
                 console.log('Model visibility changed')
                 // If the model becomes visible, consider it loaded
                 setTimeout(() => setIsModelLoaded(true), 1000)
               }}
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
                   <p className="mb-2">Loading 3D Model...</p>
                   <div className="w-48 bg-white/20 rounded-full h-2 mb-2">
                     <div 
                       className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                       style={{ width: `${loadingProgress}%` }}
                     ></div>
                   </div>
                   <p className="text-sm text-yellow-300">{loadingProgress}%</p>
                   
                                       {/* Loading Tips */}
                    {loadingProgress === 0 && (
                      <div className="mt-4 text-xs text-yellow-200 max-w-xs">
                        <p>💡 Tip: Large models may take a few minutes to load on slower connections</p>
                        <p className="mt-1">⏱️ Loading timeout: 15 seconds</p>
                      </div>
                    )}
                    
                    {/* Timeout Warning */}
                    {loadingProgress > 0 && loadingProgress < 50 && (
                      <div className="mt-2 text-xs text-orange-300">
                        <p>Loading in progress... Please wait</p>
                      </div>
                    )}

                    {/* Manual Skip Button */}
                    <div className="mt-4">
                      <button 
                        onClick={() => {
                          console.log('Manual skip loading clicked')
                          setIsModelLoaded(true)
                          setLoadingError(null)
                        }}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors text-sm"
                      >
                        Skip Loading (if model is visible)
                      </button>
                      
                      {/* Model Detection Status */}
                      <div className="mt-2 text-xs text-blue-300">
                        <p>🔍 Detecting model automatically...</p>
                        <p>If you can see the model moving, click "Skip Loading" above</p>
                      </div>
                    </div>
                 </div>
               </div>
             )}

             {/* Error Display */}
             {loadingError && (
               <div className="absolute inset-0 bg-black/50 rounded-20px flex items-center justify-center">
                 <div className="text-center text-white bg-red-900/80 p-6 rounded-xl max-w-md mx-4">
                   <div className="text-4xl mb-4">⚠️</div>
                   <h3 className="text-lg font-semibold mb-2">Loading Error</h3>
                   <p className="text-sm mb-4">{loadingError}</p>
                   <div className="space-y-2">
                     <button 
                       onClick={() => window.location.reload()}
                       className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors mr-2"
                     >
                       Refresh Page
                     </button>
                     <button 
                       onClick={() => {
                         setLoadingError(null)
                         setIsModelLoaded(true)
                       }}
                       className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                     >
                       Continue Without 3D
                     </button>
                   </div>
                 </div>
               </div>
             )}

             {/* Fallback Image when 3D fails */}
             {loadingError && (
               <div className="mt-4 text-center">
                 <p className="text-white/60 text-sm mb-2">Showing product image instead:</p>
                 <img 
                   src={productImage} 
                   alt={productName}
                   className="w-32 h-32 object-cover rounded-lg mx-auto"
                 />
               </div>
             )}
          </div>

                     {/* Model Status */}
           {isModelLoaded && !loadingError && (
             <div className="text-center mb-4">
               <p className="text-green-400 text-sm">✓ 3D Model Loaded Successfully</p>
             </div>
           )}

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

               {/* Debug Info */}
               <div className="bg-white/10 rounded-lg p-4">
                 <h4 className="font-semibold mb-2 text-yellow-300">Debug Info</h4>
                 <div className="text-xs text-white/60 space-y-1">
                   <p>Model Path: {glbPath}</p>
                   <p>Script Loaded: {isScriptLoaded ? 'Yes' : 'No'}</p>
                   <p>Model Loaded: {isModelLoaded ? 'Yes' : 'No'}</p>
                   <p>Loading Progress: {loadingProgress}%</p>
                   {loadingError && <p className="text-red-400">Error: {loadingError}</p>}
                 </div>
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
