# 3D Viewer Implementation

## Overview
This implementation adds 3D viewing capabilities to products that have GLB model files available. Users can now view products in interactive 3D format with camera controls, zoom, and rotation features.

## Features

### 3D Viewer Component
- **Interactive 3D Model Display**: Uses Google's model-viewer web component
- **Camera Controls**: Drag to rotate, scroll to zoom
- **Control Panel**: 
  - Play/Pause auto-rotation
  - Reset camera position
  - Zoom in/out buttons
- **AR Support**: Augmented reality viewing capability
- **Loading States**: Smooth loading experience with progress indicators

### Product Integration
- **Smart Button Display**: "View in 3D" button only appears for products with available 3D models
- **Visual Indicators**: Green badge showing "3D Model Available" for supported products
- **Seamless Navigation**: Direct links from product pages to 3D viewer

## Technical Implementation

### Files Created/Modified
1. **`src/lib/glbMapping.ts`** - Maps product IDs to their GLB file paths
2. **`src/lib/productData.ts`** - Product information database
3. **`src/components/Product3DViewer.tsx`** - Main 3D viewer component
4. **`src/app/home/products/[productId]/3d/page.tsx`** - 3D viewer page
5. **`src/app/home/products/[productId]/page.tsx`** - Updated product page with 3D button

### Dependencies
- `lucide-react` - For UI icons
- `framer-motion` - For animations
- `@google/model-viewer` - For 3D model rendering (loaded dynamically)

### GLB File Management
- GLB files are stored in `public/3D/` directory
- Files are automatically copied from `src/3D/` during setup
- Web-accessible paths for model loading

## Usage

### For Users
1. Navigate to any product page
2. Look for the "View in 3D" button (only visible for products with 3D models)
3. Click to open the 3D viewer
4. Use mouse/touch to interact with the 3D model:
   - Drag to rotate
   - Scroll to zoom
   - Use control buttons for additional features

### For Developers
1. **Adding New 3D Models**:
   - Place GLB file in `src/3D/` directory
   - Add mapping in `src/lib/glbMapping.ts`
   - Add product data in `src/lib/productData.ts`
   - Run `xcopy src\3D\*.glb public\3D\ /Y` to copy to public directory

2. **Customizing Viewer**:
   - Modify `Product3DViewer.tsx` for UI changes
   - Adjust model-viewer attributes for rendering options
   - Update styling in the component

## Supported Products
Currently supports 39 products with 3D models including:
- Food & Beverages (mangoes, rice, spices, sweets)
- Textiles & Crafts (sarees, embroidery, paintings)
- Traditional Art Forms (Warli, Kalamkari, Phulkari)

## Browser Compatibility
- Modern browsers with WebGL support
- Mobile devices with touch controls
- AR features require ARCore (Android) or ARKit (iOS)

## Performance Considerations
- GLB files are optimized for web delivery
- Lazy loading of model-viewer script
- Progressive loading with loading indicators
- Error handling for failed model loads

## Future Enhancements
- Model optimization and compression
- Additional camera presets
- Model annotations and information overlays
- Social sharing of 3D views
- Analytics for 3D model interactions
