"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function ResetPasswordPage() {
    const router = useRouter();
    const [token, setToken] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post("/api/users/resetpassword", { token, password });
            setMessage(response.data.message);
            setTimeout(() => {
                router.push("/login");
            }, 3000);
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
                    alt="Reset Password Background"
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            <div className="relative bg-white p-4 sm:p-8 rounded-lg shadow-md w-full max-w-md z-10">
                <h1 className="text-2xl font-bold mb-6 text-center text-[#3A5B22]">Reset Password</h1>
                {token === "" ? (
                    <div className="text-center text-red-500">No token found. Please use the link from your email.</div>
                ) : (
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
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter new password"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3A5B22] focus:border-[#3A5B22] sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm new password"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3A5B22] focus:border-[#3A5B22] sm:text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#3A5B22] hover:bg-[#2e471a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3A5B22] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Resetting..." : "Reset Password"}
                        </button>
                    </form>
                )}
                <div className="mt-4 text-center">
                    <Link href="/login" className="text-sm text-blue-600 hover:underline">
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
} 