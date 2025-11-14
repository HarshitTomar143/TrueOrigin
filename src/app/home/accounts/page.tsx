"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function AccountPage() {
  const { cart } = useCart();
  const [activeTab, setActiveTab] = useState("profile");

  // Static user data
  const user = {
    username: "Harshit Tomar",
    email: "Harshit@gmail.com",
    phone: "+1 (555) 123-4567",
    dob: "2003-05-14"
  };

  // Static orders data
  const orders = [
    {
      id: "ORD-001",
      date: "2023-05-15",
      total: 89.99,
      status: "Delivered",
      items: 3
    },
    {
      id: "ORD-002",
      date: "2023-06-22",
      total: 124.50,
      status: "Processing",
      items: 2
    },
    {
      id: "ORD-003",
      date: "2023-07-10",
      total: 56.75,
      status: "Shipped",
      items: 1
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Account</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center mb-6">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h2 className="font-bold text-lg">{user.username}</h2>
                <p className="text-gray-600 text-sm">{user.email}</p>
              </div>
            </div>
            
            <nav>
              <button 
                onClick={() => setActiveTab("profile")}
                className={`w-full text-left px-4 py-2 rounded-md mb-2 ${activeTab === "profile" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`}
              >
                Profile Information
              </button>
              <button 
                onClick={() => setActiveTab("orders")}
                className={`w-full text-left px-4 py-2 rounded-md mb-2 ${activeTab === "orders" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`}
              >
                My Orders
              </button>
              <button 
                onClick={() => setActiveTab("wishlist")}
                className={`w-full text-left px-4 py-2 rounded-md mb-2 ${activeTab === "wishlist" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`}
              >
                Wishlist
              </button>
              <button 
                onClick={() => setActiveTab("addresses")}
                className={`w-full text-left px-4 py-2 rounded-md mb-2 ${activeTab === "addresses" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`}
              >
                Address Book
              </button>
              <button 
                onClick={() => setActiveTab("payment")}
                className={`w-full text-left px-4 py-2 rounded-md mb-2 ${activeTab === "payment" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`}
              >
                Payment Methods
              </button>
              <button 
                onClick={() => setActiveTab("cart")}
                className={`w-full text-left px-4 py-2 rounded-md mb-2 ${activeTab === "cart" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`}
              >
                My Cart ({cart.length})
              </button>
            </nav>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow p-6">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div>
                <h2 className="text-xl font-bold mb-4">Profile Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      defaultValue={user.username}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      defaultValue={user.email}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      defaultValue={user.phone}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Date of Birth</label>
                    <input 
                      type="date" 
                      defaultValue={user.dob}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Save Changes
                  </button>
                </div>
              </div>
            )}
            
            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div>
                <h2 className="text-xl font-bold mb-4">My Orders</h2>
                {orders.length > 0 ? (
                  <div className="space-y-4">
                    {orders.map(order => (
                      <div key={order.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <h3 className="font-bold">Order #{order.id}</h3>
                            <p className="text-gray-600 text-sm">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">${order.total.toFixed(2)}</p>
                            <span className={`px-2 py-1 rounded text-xs ${
                              order.status === "Delivered" 
                                ? "bg-green-100 text-green-800" 
                                : order.status === "Shipped"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                        <p>{order.items} items</p>
                        <div className="mt-3">
                          <button className="text-blue-600 hover:text-blue-800 mr-4">
                            View Details
                          </button>
                          <button className="text-gray-600 hover:text-gray-800">
                            Track Order
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>You haven&apos;t placed any orders yet.</p>
                )}
              </div>
            )}
            
            {/* Wishlist Tab */}
            {activeTab === "wishlist" && (
              <div>
                <h2 className="text-xl font-bold mb-4">My Wishlist</h2>
                <p>Your wishlist is empty.</p>
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Continue Shopping
                </button>
              </div>
            )}
            
            {/* Addresses Tab */}
            {activeTab === "addresses" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Address Book</h2>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Add New Address
                  </button>
                </div>
                <p>You haven&apos;t added any addresses yet.</p>
              </div>
            )}
            
            {/* Payment Methods Tab */}
            {activeTab === "payment" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Payment Methods</h2>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Add Payment Method
                  </button>
                </div>
                <p>You haven&apos;t added any payment methods yet.</p>
              </div>
            )}
            
            {/* Cart Tab */}
            {activeTab === "cart" && (
              <div>
                <h2 className="text-xl font-bold mb-4">My Cart ({cart.length} items)</h2>
                {cart.length === 0 ? (
                  <div>
                    <p>Your cart is empty.</p>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div>
                    {cart.map((item) => (
                      <div key={item.id} className="border p-4 mb-2 rounded">
                        <h2 className="font-semibold">{item.name}</h2>
                        <p>Seller: {item.seller}</p>
                        <p>Location: {item.sellerLocation}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>ETA: {item.estimatedTimeToArrive}</p>
                      </div>
                    ))}
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Proceed to Checkout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}