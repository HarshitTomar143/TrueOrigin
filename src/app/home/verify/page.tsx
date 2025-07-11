"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import QRScanner from "../../../components/Scanner";


export default function VerifyPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Header */}
           <Header/>

            {/* Main content area */}

            <main className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
                <QRScanner />
            </main>


            {/* Green waves at the bottom */}
            <div className="relative w-full h-48 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-green-100 to-transparent transform -skew-y-3 origin-bottom-left"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-50 to-transparent transform skew-y-6 origin-bottom-right"></div>
            </div>
        </div>
    );
} 