"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import QRScanner from "../../../components/Scanner";

export default function VerifyPage() {
    return (
        <div className="min-h-screen flex flex-col relative">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/backHome.png')" }} />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/40 via-[#16213e]/40 to-[#0f3460]/40" />
            </div>
            {/* Header */}
            <Header />

            {/* Main content area */}
            <div className="flex flex-col items-center justify-center mt-5 p-4 relative z-10">
                <div className="w-full max-w-4xl">
                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-white mb-4">Product Verification</h1>
                        <p className="text-lg text-gray-300">Scan QR codes to verify product authenticity and origin</p>
                    </div>

                    {/* Scanner Container */}
                    <div className="transform transition-all duration-300 hover:scale-105">
                        <div className="flex flex-col items-center justify-center gap-4 font-medium backdrop-blur-xl bg-white/30 border border-white/40 h-full w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold text-white mb-2">QR Code Scanner</h2>
                                <p className="text-gray-200">Position the QR code within the scanner frame</p>
                            </div>
                            
                            {/* QR Scanner Component */}
                            <div className="w-full max-w-md">
                                <QRScanner />
                            </div>

                            {/* Instructions */}
                            <div className="w-full mt-6 space-y-3">
                                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                                    <h3 className="font-semibold text-white mb-2">How to verify:</h3>
                                    <ul className="text-sm text-gray-200 space-y-1">
                                        <li>• Point your camera at the product's QR code</li>
                                        <li>• Hold steady until the code is detected</li>
                                        <li>• View detailed product information and origin</li>
                                        <li>• Verify authenticity and supply chain details</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="w-full mt-6 space-y-3">
                                <Link href="/home/products" className="block w-full">
                                    <button className="w-full py-3 bg-gradient-to-r from-[#4a90e2] to-[#357abd] text-white rounded-lg hover:from-[#357abd] hover:to-[#2c5aa0] transition-colors duration-300 cursor-pointer font-medium">
                                        Browse Products
                                    </button>
                                </Link>
                                <Link href="/home/truemap" className="block w-full">
                                    <button className="w-full py-3 bg-gradient-to-r from-[#4a90e2] to-[#357abd] text-white rounded-lg hover:from-[#357abd] hover:to-[#2c5aa0] transition-colors duration-300 cursor-pointer font-medium">
                                        View Supply Chain Map
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 