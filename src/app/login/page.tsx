"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const onLogin = async () => {
        try {
            setButtonDisabled(true);
            const response = await axios.post("/api/users/login", {
                ...user,
            });
            console.log("Login success", response.data);
            router.push("/home");
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setButtonDisabled(false);
        }
    };

    return (
        <div className="flex flex-row min-h-screen bg-white">
            {/* Left: Form */}
            <div className="flex flex-col items-center justify-center w-1/2">
                <div className="w-full max-w-md flex flex-col gap-8 font-sans">
                    {/* Logo and Name */}
                    <div className="flex flex-row items-center gap-4 self-start">
                        <Image src="/TrueOriginLogo.webp" alt="Logo" width={80} height={80} />
                        <p className="text-4xl font-bold">
                            <span className="text-[#3A5B22]">True</span>
                            <span className="text-black">Origin</span>
                        </p>
                    </div>

                    {/* Heading and Subtitle */}
                    <div className="w-full">
                        <h1 className="text-3xl font-medium w-full text-left font-sans">Welcome back!</h1>
                        <p className="text-base text-left text-black/80 mt-2">Enter your Credentials to access your account</p>
                    </div>

                    {/* Form */}
                    <form 
                        className="w-full flex flex-col gap-6"
                        onSubmit={(e) => {
                            e.preventDefault();
                            onLogin();
                        }}
                    >
                        {error && (
                            <div className="w-full p-3 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-red-600 text-sm">{error}</p>
                            </div>
                        )}
                        <div>
                            <label htmlFor="email" className="block text-[15px] font-semibold mb-2">Email address</label>
                            <input
                                type="email"
                                id="email"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                placeholder="Enter your email"
                                className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A5B22] placeholder-gray-400 text-[15px] font-normal" />
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label htmlFor="password" className="block text-[15px] font-semibold">Password</label>
                                <Link href="#" className="text-[13px] text-blue-700 font-medium hover:underline">forgot password</Link>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    placeholder="Enter your password"
                                    className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A5B22] placeholder-gray-400 text-[15px] font-normal" />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                                >
                                    {showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <input 
                                type="checkbox" 
                                id="remember" 
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-4 h-4 rounded border-gray-300" 
                            />
                            <label htmlFor="remember" className="text-[15px] font-normal">Remember for 30 days</label>
                        </div>
                        <button
                            type="submit"
                            onClick={onLogin}
                            disabled={buttonDisabled}
                            className="w-full bg-[#3A5B22] text-white font-semibold py-2.5 rounded-lg mt-2 shadow-sm hover:bg-[#2e471a] transition-colors text-[17px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                            {buttonDisabled ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    {/* Sign Up Link */}
                    <p className="w-full text-center mt-4 text-base">Don't have an account? <Link href="/signup" className="text-blue-600 font-semibold hover:underline">Sign Up</Link></p>
                </div>
            </div>
            {/* Right: Image */}
            <div className="w-1/2 h-screen relative">
                <Image
                    src="/SignupSideImg.jpg"
                    alt="SideImg"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-tl-[5%] rounded-bl-[5%]"
                    />
            </div>
        </div>
    );
}