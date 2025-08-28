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
- **Loading Timeout**: 15-second timeout with manual skip option
- **Error Handling**: Comprehensive error handling with fallback options

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
6. **`src/app/home/products/page.tsx`** - Updated products listing page

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
5. If loading takes too long, use "Skip Loading" button

### For Developers
1. **Adding New 3D Models**:
   - Place GLB file in `src/3D/` directory
   - Add mapping in `src/lib/glbMapping.ts`
   - Add product data in `src/lib/productData.ts`
   - Add to products listing in `src/app/home/products/page.tsx`
   - Run `xcopy src\3D\*.glb public\3D\ /Y` to copy to public directory

2. **Customizing Viewer**:
   - Modify `Product3DViewer.tsx` for UI changes
   - Adjust model-viewer attributes for rendering options
   - Update styling in the component

## Supported Products
Currently supports **59 products** with 3D models including:

### Food & Beverages
- **Fruits**: Alphonso Mango, Gir Kesar Mango, Lakshmanbhog Mango, Nagpur Oranges, Tezpur Litchi, Vazhakulam Pineapple, Kalampur Red Bananas, Nashik Grapes
- **Rice**: Basmati Rice, Navara Rice, Palakkad Matta Rice, Wayanad Jeerakasala Rice
- **Spices**: Coorg Green Cardamom, Malabar Pepper, Naga Mircha, Bhiwapur Chilli, Khola Chilli, Mizo Chilli
- **Sweets**: Agra Petha, Dharwad Pedha, Srivilliputtur Palkova, Tirupati Laddu, Banglar Rasagola, Sweet Delights, Tanjore Paneer
- **Beverages**: Assam Orthodox Tea, Monsooned Malabar Coffee, Traditional Tea
- **Snacks**: Bikaneri Bhujia, Ratlami Sev

### Textiles & Crafts
- **Sarees**: Banarasi Silk Saree, Chanderi Saree, Kancheepuram Silk, Traditional Saree
- **Fabrics**: Mysore Silk, Muga Silk, Salem Fabric, Pure Silk, Solapuri Chaddar
- **Embroidery**: Kutch Embroidery, Lucknow Chikankari, Chamba Rumal
- **Textiles**: Surat Zari Fabric, Pashmina Wool, Kullu Shawl

### Traditional Art Forms
- **Paintings**: Warli Paintings, Madhubani Paintings, Thanjavur Paintings, Nirmal Paintings, Shrikalasthi Kalamkari
- **Crafts**: Bidriware, Channapatna Toys, Kondapalli Toys, Etikoppaka Toys, Wooden Figurines
- **Pottery**: Jaipur Blue Pottery
- **Metal Work**: Aranmula Kannadi, Firozabad Bangles
- **Stone**: Makrana Marbles
- **Wood Carving**: Kashmir Walnut Wood Carving

### Other Products
- **Footwear**: Kolhapuri Chappal
- **Soap**: Mysore Sandal Soap
- **Scene**: General 3D scene

## Browser Compatibility
- Modern browsers with WebGL support
- Mobile devices with touch controls
- AR features require ARCore (Android) or ARKit (iOS)

## Performance Considerations
- GLB files are optimized for web delivery (ranging from 5MB to 25MB)
- Lazy loading of model-viewer script
- Progressive loading with loading indicators
- Error handling for failed model loads
- Loading timeout protection (15 seconds)
- Manual skip option for better user experience

## Loading Features
- **Progress Bar**: Shows actual loading progress (0-100%)
- **Timeout Protection**: Automatically stops loading after 15 seconds
- **Error Recovery**: Multiple options when loading fails
- **Debug Panel**: Shows loading status and model information
- **Console Logging**: Helps troubleshoot loading issues
- **Fallback Options**: Users can continue without 3D if needed

## Future Enhancements
- Model optimization and compression
- Additional camera presets
- Model annotations and information overlays
- Social sharing of 3D views
- Analytics for 3D model interactions
- Batch loading for multiple models
- Model quality selection (low/medium/high)
