"use client";

import React from "react";
import Header from "@/components/Header"; // Import the new Header component

export default function SupportPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header /> {/* Use the Header component here */}

            {/* Main content area */}
            <main className="flex-grow flex items-center justify-center bg-gray-100 p-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#3A5B22] mb-4">Support</h1>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Need assistance? Our support team is here to help you with any questions or issues you might have.
                        Reach out to us through our contact form or check our FAQs for quick answers.
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