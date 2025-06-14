"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setError("");

        try {
            const response = await axios.post("/api/users/forgotpassword", { email });
            setMessage(response.data.message);
        } catch (err: any) {
            setError(err.response?.data?.error || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/forgotPassImg.jpg" // Assuming image is in public directory
                    alt="Forgot Password Background"
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            <div className="relative bg-white p-4 sm:p-8 rounded-lg shadow-md w-full max-w-md z-10">
                <h1 className="text-2xl font-bold mb-6 text-center text-[#3A5B22]">Forgot Password</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {message && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                            {message}
                        </div>
                    )}
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            {error}
                        </div>
                    )}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3A5B22] focus:border-[#3A5B22] sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#3A5B22] hover:bg-[#2e471a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3A5B22] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Sending..." : "Send Reset Email"}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <Link href="/login" className="text-sm text-blue-600 hover:underline">
                        Remembered your password? Log in
                    </Link>
                </div>
            </div>
        </div>
    );
} 