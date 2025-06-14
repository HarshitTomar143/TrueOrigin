"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function TrueMapPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Header */}
            <Header/>

            {/* Main content area */}
            <main className="flex-grow flex items-center justify-center p-4">
                <div className="text-center bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold text-[#3A5B22] mb-4">TrueMap</h1>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Visualize the journey of your products with TrueMap. Our interactive mapping tool
                        provides real-time insights into supply chains and origin data.
                    </p>
                </div>
            </main>

            {/* Green waves at the bottom */}
            <div className="relative w-full h-48 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-green-100 to-transparent transform -skew-y-3 origin-bottom-left"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-50 to-transparent transform skew-y-6 origin-bottom-right"></div>
            </div>
        </div>
    );
}