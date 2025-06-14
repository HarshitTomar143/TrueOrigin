"use client"

import Header from "@/components/Header";
import React from "react";

export default function AccountsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-200">
            <Header/>

            <main className="flex-grow flex items-center justify-center p-4">
                <div className="text-center bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold text-[#3A5B22] mb-4">Account Settings</h1>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Manage your account details, privacy settings, and preferences here.
                        Keep your information up-to-date for a seamless TrueOrigin experience.
                    </p>
                </div>
            </main>

            <div className="relative w-full h-48 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-green-100 to-transparent transform -skew-y-3 origin-bottom-left"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-50 to-transparent transform skew-y-6 origin-bottom-right"></div>
            </div>
        </div>
    );
}