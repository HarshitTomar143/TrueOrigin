"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { giTags } from '@/lib/giTags';
import L from 'leaflet';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const GiMap = dynamic(() => import('@/components/GiMap'), {
  ssr: false, // disables server-side rendering
});

export default function TrueMapPage() {
    return (
        <div className="min-h-screen flex flex-col relative">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/backHome.png')" }} />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/40 via-[#16213e]/40 to-[#0f3460]/40" />
            </div>
            
            {/* Header */}
            <Header/>

            {/* Main content area */}
            <div className="flex flex-col items-center justify-center mt-5 p-4 relative z-10">
                <div className="w-full max-w-7xl">
                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-white mb-4">TrueMap - GI Products Distribution</h1>
                        <p className="text-lg text-gray-300">Explore Geographical Indication products across India</p>
                    </div>

                    {/* Map Container */}
                    <div className="transform transition-all duration-300 hover:scale-105">
                        <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4">
                            <div className="h-[800px] w-full rounded-xl overflow-hidden">
                                <GiMap />
                            </div>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="mt-8 text-center">
                        <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-white mb-4">About GI Tags</h3>
                            <p className="text-gray-200 mb-4">
                                Geographical Indication (GI) tags protect products that have a specific geographical origin and possess qualities or a reputation that are due to that origin.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-200">
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Cultural Heritage</h4>
                                    <p>Preserves traditional knowledge and cultural practices</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Economic Value</h4>
                                    <p>Enhances market value and protects local artisans</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Quality Assurance</h4>
                                    <p>Ensures authentic products with guaranteed quality</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}