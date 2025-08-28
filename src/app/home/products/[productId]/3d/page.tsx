"use client";

import { useParams } from "next/navigation";
import { productData } from "@/lib/productData";
import { has3DModel, getGlbPath } from "@/lib/glbMapping";
import Product3DViewer from "@/components/Product3DViewer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Product3DPage() {
  const params = useParams();
  const productId = params.productId as string;
  const product = productData[productId as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#24243e] via-[#302b63] to-[#0f0c29] flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you're looking for doesn't exist.</p>
          <Link 
            href="/home/products" 
            className="inline-flex items-center bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  if (!has3DModel(productId)) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#24243e] via-[#302b63] to-[#0f0c29] flex items-center justify-center">
        <div className="text-center text-white max-w-md mx-auto px-6">
          <div className="text-6xl mb-6">🎭</div>
          <h1 className="text-3xl font-bold mb-4">3D Model Not Available</h1>
          <p className="mb-6 text-white/80">
            Sorry, {product.name} doesn't have a 3D model available yet. We're working on adding more 3D models for our products.
          </p>
          <div className="space-y-4">
            <Link 
              href={`/home/products/${productId}`}
              className="inline-flex items-center bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Product
            </Link>
            <div className="block">
              <Link 
                href="/home/products"
                className="inline-flex items-center bg-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors duration-300"
              >
                Browse Other Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const glbPath = getGlbPath(productId);
  
  if (!glbPath) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#24243e] via-[#302b63] to-[#0f0c29] flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold mb-4">Error Loading 3D Model</h1>
          <p className="mb-6">There was an error loading the 3D model for this product.</p>
          <Link 
            href={`/home/products/${productId}`}
            className="inline-flex items-center bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Product
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Product3DViewer
      productId={productId}
      productName={product.name}
      glbPath={glbPath}
      productImage={product.image}
      productDescription={product.shortDescription}
    />
  );
}
