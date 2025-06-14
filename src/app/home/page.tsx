"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import TeaCup from "@/components/TeaCup";

export default function HomePage() {
    const router = useRouter();
    const [userData, setUserData] = useState<{ username: string } | null>(null);

    
    const handleLogout = async () => {
        try {
            await axios.get("/api/users/logout");
            router.push("/login");
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error logging out:", error.message);
            }
            router.push("/login"); // Redirect to login even if logout fails on the client side
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Header />

            {/* Main content area */}
            <div className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8">
                <div className="w-full max-w-md text-center bg-white p-8 rounded-lg shadow-md">
                    <TeaCup />
                    <h1 className="text-3xl font-bold text-[#3A5B22] mb-6">
                        Welcome {userData?.username || "User"}!
                    </h1>
                </div>
            </div>

            {/* Placeholder for the green waves at the bottom, if needed */}
            <div className="relative w-full h-48 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-green-100 to-transparent transform -skew-y-3 origin-bottom-left"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-50 to-transparent transform skew-y-6 origin-bottom-right"></div>
            </div>
        </div>
    );
}