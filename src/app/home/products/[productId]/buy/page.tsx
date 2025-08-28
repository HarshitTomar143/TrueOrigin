"use client";

import { use } from "react";
import productData  from "@/data/productData";

interface BuyProductPageProps {
  params: Promise<{ productId: string }>;
}

export default function BuyProductPage({ params }: BuyProductPageProps) {
  const { productId } = use(params);

  const product = (productData as any)[productId]; // lookup directly by key

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p>Seller: {product.seller_name}</p>
      <p>Location: {product.seller_location}</p>
      <p>Cost: ₹{product.cost}</p>
    </div>
  );
}
