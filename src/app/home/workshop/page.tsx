"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import ChatbotToggle from "@/components/ChatbotToggle";

export default function WorkshopPage() {
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [modificationDetails, setModificationDetails] = useState({
        utensilType: "",
        designPreference: "",
        fabricType: "",
        additionalNotes: ""
    });

    // Filter products that are suitable for modification
    const modifiableProducts = [
        {
            id: "madhubanipaintings",
            name: "Madhubani Painting",
            type: "Art Form",
            origin: "Bihar, India",
            image: "/madhubaniPainting.jpg",
            description: "Traditional Madhubani painting from Bihar, known for its vibrant colors and intricate patterns.",
            modificationTypes: ["Design Pattern", "Color Scheme", "Size"]
        },
        {
            id: "kancheepuramsaree",
            name: "Kancheepuram Saree",
            type: "Fabric",
            origin: "Kanchipuram, Tamil Nadu",
            image: "/kancheepuramSilk.jpg",
            description: "Handwoven silk saree from Tamil Nadu, known for its rich fabric and zari borders.",
            modificationTypes: ["Border Design", "Color Combination", "Blouse Piece"]
        },
        {
            id: "kullushawl",
            name: "Kullu Shawl",
            type: "Fabric",
            origin: "Kullu, Himachal Pradesh",
            image: "/kulluShawl.jpg",
            description: "Handwoven woolen shawl from Himachal Pradesh, known for its bright geometric patterns.",
            modificationTypes: ["Pattern Design", "Color Variations", "Size"]
        },
        {
            id: "chanderisaree",
            name: "Chanderi Saree",
            type: "Fabric",
            origin: "Chanderi, Madhya Pradesh",
            image: "/chanderiSaree.jpg",
            description: "Lightweight saree with glossy texture and luxurious feel.",
            modificationTypes: ["Weave Pattern", "Border Design", "Blouse Piece"]
        },
        {
            id: "kulluShawl",
            name: "Kullu Shawl",
            type: "Fabric",
            origin: "Kullu, Himachal Pradesh",
            image: "/kulluShawl.jpg",
            description: "Handwoven woolen shawl with geometric patterns.",
            modificationTypes: ["Pattern Design", "Color Variations", "Size"]
        },
        {
            id: "kutchEmbroidery",
            name: "Kutch Embroidery",
            type: "Fabric",
            origin: "Kutch, Gujarat",
            image: "/kutchEmbroidery.jpg",
            description: "Vibrant embroidery with mirror work and intricate patterns.",
            modificationTypes: ["Embroidery Pattern", "Mirror Work Design", "Color Scheme"]
        },
        {
            id: "bluePottery",
            name: "Blue Pottery",
            type: "Handicraft",
            origin: "Jaipur, Rajasthan",
            image: "/bluePottery.jpg",
            description: "Blue Pottery from Jaipur is known for its distinctive cobalt-blue dye and floral motifs.",
            modificationTypes: ["Design Pattern", "Color Variations", "Shape"]
        },
        {
            id: "mugasilk",
            name: "Muga Silk",
            type: "Fabric",
            origin: "Assam, India",
            image: "/mugaSilk.jpg",
            description: "Muga Silk from Assam is a rare silk known for its natural golden luster and durability.",
            modificationTypes: ["Weave Pattern", "Border Design", "Blouse Piece"]
        },
        {
            id: "mysoresilk",
            name: "Mysore Silk",
            type: "Fabric",
            origin: "Mysuru, Karnataka",
            image: "/mysoreSilk.jpg",
            description: "Mysore Silk sarees, woven from pure mulberry silk, are among the finest in India.",
            modificationTypes: ["Weave Pattern", "Border Design", "Blouse Piece"]
        },
        {
            id: "chambaRumal",
            name: "Chamba Rumal",
            type: "Handicraft Textile",
            origin: "Chamba, Himachal Pradesh",
            image: "/chambaRumal.jpg",
            description: "The Chamba Rumal is an embroidered handkerchief from Himachal Pradesh.",
            modificationTypes: ["Embroidery Pattern", "Color Scheme", "Size"]
        },
        {
            id: "salemfabric",
            name: "Salem Fabric",
            type: "Fabric",
            origin: "Salem, Tamil Nadu",
            image: "/salemFabric.jpg",
            description: "Salem Fabric from Tamil Nadu is renowned for its fine cotton and traditional weaving methods.",
            modificationTypes: ["Weave Pattern", "Design", "Color"]
        },
        {
            id: "pashminawool",
            name: "Pashmina Wool",
            type: "Fabric",
            origin: "Kashmir, India",
            image: "/pashminaWool.jpg",
            description: "Luxurious fine wool from Kashmir, used to make world-renowned shawls and garments.",
            modificationTypes: ["Pattern Design", "Color Variations", "Size"]
        }
    ];

    const handleProductSelect = (product: any) => {
        setSelectedProduct(product);
        // Reset modification details when selecting a new product
        setModificationDetails({
            utensilType: "",
            designPreference: "",
            fabricType: "",
            additionalNotes: ""
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setModificationDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmitModification = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, this would send the modification request to the server
        alert(`Modification request submitted for ${selectedProduct.name}! Our artisans will contact you soon.`);
        console.log("Modification details:", { selectedProduct, modificationDetails });
    };

    // Featured product - Laakh Bangles
    const featuredProduct = {
        name: "Laakh Bangles",
        origin: "Jaipur, Rajasthan",
        description: "Elegant bangles crafted with traditional techniques, adorned with laakh and natural stones and colors.",
        price: "₹250-₹2000 per pair",
        material: "Laakh",
        estimatedTime: "7-10 days"
    };

    return (
        <div className="min-h-screen flex flex-col relative">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/backHome.png')" }} />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/40 via-[#16213e]/40 to-[#0f3460]/40" />
            </div>
            
            {/* Header */}
            <Header />

            <div className="flex flex-col items-center justify-center mt-5 p-4 relative z-10">
                <div className="w-full max-w-7xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">Customization Workshop</h1>
                    <p className="text-gray-200 text-center mb-8 max-w-3xl mx-auto">
                        Select a product and customize it according to your preferences. Our skilled artisans will create a unique piece just for you.
                    </p>

                    {/* Featured Product Section - Laakh Bangles */}
                    {!selectedProduct && (
                        <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 mb-8">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="md:w-1/4">
                                    <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                                        <span className="text-white text-4xl font-bold">लाख</span>
                                    </div>
                                </div>
                                <div className="md:w-1/2">
                                    <h2 className="text-2xl font-bold text-white mb-2">{featuredProduct.name}</h2>
                                    <p className="text-gray-200 mb-3">{featuredProduct.description}</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                                        <div className="flex items-center gap-2 text-gray-200">
                                            <span className="font-medium">Origin:</span>
                                            <span>{featuredProduct.origin}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-200">
                                            <span className="font-medium">Material:</span>
                                            <span>{featuredProduct.material}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-200">
                                            <span className="font-medium">Price Range:</span>
                                            <span>{featuredProduct.price}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-200">
                                            <span className="font-medium">Delivery:</span>
                                            <span>{featuredProduct.estimatedTime}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/4 flex flex-col gap-3">
                                    <button className="py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-colors font-medium">
                                        Buy Now
                                    </button>
                                    <button 
                                        className="py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-colors font-medium"
                                        onClick={() => {
                                            // For demo purposes, we'll select a similar product
                                            const bangleProduct = modifiableProducts.find(p => p.type.includes("Handicraft")) || modifiableProducts[0];
                                            handleProductSelect(bangleProduct);
                                        }}
                                    >
                                        Make Modification
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {!selectedProduct ? (
                        // Product Selection View
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6 text-center">Select a Product to Customize</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {modifiableProducts.map((product, index) => (
                                    <div 
                                        key={index} 
                                        className="transform transition-all duration-300 hover:scale-105 cursor-pointer"
                                        onClick={() => handleProductSelect(product)}
                                    >
                                        <div className="flex flex-col items-center justify-center gap-4 font-medium backdrop-blur-xl bg-white/30 border border-white/40 h-full w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                                            <div className="relative w-full aspect-square overflow-hidden rounded-xl mb-2">
                                                <Image 
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover hover:scale-110 transition-transform duration-300"
                                                    onError={(e) => {
                                                        // Handle image loading errors by setting a fallback
                                                        const target = e.target as HTMLImageElement;
                                                        target.src = '/images/placeholder.jpg';
                                                    }}
                                                />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">{product.name}</h3>
                                            <div className="w-full space-y-2">
                                                <div className="flex items-center gap-2 text-gray-200">
                                                    <span className="font-medium">Type:</span>
                                                    <span>{product.type}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-200">
                                                    <span className="font-medium">Origin:</span>
                                                    <span>{product.origin}</span>
                                                </div>
                                            </div>
                                            <div className="w-full mt-2">
                                                <button className="w-full py-2 bg-gradient-to-r from-[#4a90e2] to-[#357abd] text-white rounded-lg hover:from-[#357abd] hover:to-[#2c5aa0] transition-colors duration-300">
                                                    Customize This Product
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        // Modification Form View
                        <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 md:p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-white">Customize Your {selectedProduct.name}</h2>
                                <button 
                                    onClick={() => setSelectedProduct(null)}
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    ← Back to Products
                                </button>
                            </div>

                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Product Preview */}
                                <div className="md:w-1/3">
                                    <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
                                        <Image 
                                            src={selectedProduct.image}
                                            alt={selectedProduct.name}
                                            fill
                                            className="object-cover"
                                            onError={(e) => {
                                                // Handle image loading errors by setting a fallback
                                                const target = e.target as HTMLImageElement;
                                                target.src = '/images/placeholder.jpg';
                                            }}
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{selectedProduct.name}</h3>
                                    <p className="text-gray-200 mb-4">{selectedProduct.description}</p>
                                    <div className="bg-white/10 rounded-lg p-4">
                                        <h4 className="font-bold text-white mb-2">Available Customizations:</h4>
                                        <ul className="text-gray-200 text-sm">
                                            {selectedProduct.modificationTypes.map((type: string, index: number) => (
                                                <li key={index} className="flex items-center gap-2 mb-1">
                                                    <span className="text-green-400">✓</span>
                                                    {type}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Modification Form */}
                                <div className="md:w-2/3">
                                    <form onSubmit={handleSubmitModification} className="space-y-6">
                                        <div>
                                            <label className="block text-white font-medium mb-2">
                                                What kind of design or pattern would you like?
                                            </label>
                                            <input
                                                type="text"
                                                name="designPreference"
                                                value={modificationDetails.designPreference}
                                                onChange={handleInputChange}
                                                placeholder="Describe your design preferences..."
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-white font-medium mb-2">
                                                Preferred fabric or material (if applicable)
                                            </label>
                                            <input
                                                type="text"
                                                name="fabricType"
                                                value={modificationDetails.fabricType}
                                                onChange={handleInputChange}
                                                placeholder="e.g., Silk, Cotton, Wool..."
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-white font-medium mb-2">
                                                Utensil type (if applicable)
                                            </label>
                                            <input
                                                type="text"
                                                name="utensilType"
                                                value={modificationDetails.utensilType}
                                                onChange={handleInputChange}
                                                placeholder="e.g., Plate, Bowl, Vessel..."
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-white font-medium mb-2">
                                                Additional Notes
                                            </label>
                                            <textarea
                                                name="additionalNotes"
                                                value={modificationDetails.additionalNotes}
                                                onChange={handleInputChange}
                                                placeholder="Any other specific requirements or details..."
                                                rows={4}
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                            <button
                                                type="submit"
                                                className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-colors font-medium"
                                            >
                                                Submit Customization Request
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setSelectedProduct(null)}
                                                className="flex-1 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors font-medium"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Chatbot Components */}
            <ChatbotToggle onClick={() => setIsChatbotOpen(true)} />
            <Chatbot 
                isOpen={isChatbotOpen} 
                onClose={() => setIsChatbotOpen(false)} 
            />
        </div>
    );
}