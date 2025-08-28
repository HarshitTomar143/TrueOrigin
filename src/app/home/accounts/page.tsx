"use client";

import { useCart } from "@/context/CartContext";

export default function AccountPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <div className="p-6">Your cart is empty.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="border p-4 mb-2 rounded">
          <h2 className="font-semibold">{item.name}</h2>
          <p>Seller: {item.seller}</p>
          <p>Location: {item.sellerLocation}</p>
          <p>Quantity: {item.quantity}</p>
          <p>ETA: {item.estimatedTimeToArrive}</p>
          <button
            onClick={() => removeFromCart(item.id)}
            className="mt-2 text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={clearCart}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
      >
        Clear Cart
      </button>
    </div>
  );
}
