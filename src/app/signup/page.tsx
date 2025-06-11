"use client";

import Link from "next/link";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPasswordInfo, setShowPasswordInfo] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const validatePassword = (password: string) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const isLongEnough = password.length >= 8;

        if (!isLongEnough) {
            return "Password must be at least 8 characters long";
        }
        if (!hasUpperCase) {
            return "Password must contain at least one uppercase letter";
        }
        if (!hasLowerCase) {
            return "Password must contain at least one lowercase letter";
        }
        if (!hasNumber) {
            return "Password must contain at least one number";
        }
        return "";
    };

    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0 && user.username.length>0){
            const passwordValidationError = validatePassword(user.password);
            setPasswordError(passwordValidationError);
            setIsLoading(passwordValidationError !== "");
        } else {
            setIsLoading(true);
        }
    },[user]);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get("/api/users/me", { withCredentials: true });
                if (response.data) {
                    router.push("/home");
                }
            } catch (error) {
                // If there's an error, it means user is not authenticated, which is fine
                console.log("User not authenticated");
            }
        };
        checkAuth();
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user.username || !user.email || !user.password) {
            setError("All fields are required");
            return;
        }
        try {
            setIsLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup successful:", response.data);
            router.push("/login");
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-white">
            {/* Left: Form */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4 lg:p-8">
                <div className="w-full max-w-md flex flex-col items-center gap-8 font-sans">
                    {/* Logo and Name */}
                    <div className="flex flex-row items-center gap-4 self-start">
                        <Image src="/TrueOriginLogo.webp" alt="Logo" width={80} height={80} />
                        <p className="text-4xl font-bold">
                            <span className="text-[#3A5B22]">True</span>
                            <span className="text-black">Origin</span>
                        </p>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl font-medium w-full text-left font-sans">Get Started Now</h1>

                    {/* Form */}
                    <form 
                        className="w-full flex flex-col gap-6"
                        onSubmit={handleSubmit}
                    >
                        {error && (
                            <div className="w-full p-3 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-red-600 text-sm">{error}</p>
                            </div>
                        )}
                        <div>
                            <label htmlFor="username" className="block text-[15px] font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                id="username"
                                value={user.username}
                                onChange={(e)=> setUser({...user, username:e.target.value})}
                                placeholder="Enter your name"
                                className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A5B22] placeholder-gray-400 text-[15px] font-normal" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-[15px] font-semibold mb-2">Email address</label>
                            <input
                                type="email"
                                id="email"
                                value={user.email}
                                onChange={(e)=> setUser({...user, email:e.target.value})}
                                placeholder="Enter your email"
                                className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A5B22] placeholder-gray-400 text-[15px] font-normal" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-[15px] font-semibold mb-2">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={user.password}
                                    onChange={(e)=> setUser({...user, password:e.target.value})}
                                    placeholder="Enter your password"
                                    className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A5B22] placeholder-gray-400 text-[15px] font-normal" />
                                <button
                                    type="button"
                                    onClick={() => setShowPasswordInfo(!showPasswordInfo)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </button>
                                {showPasswordInfo && (
                                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-10">
                                        <div className="text-sm text-gray-600">
                                            <p className="font-semibold mb-2">Password Requirements:</p>
                                            <ul className="space-y-1">
                                                <li className="flex items-center">
                                                    <span className={`w-2 h-2 rounded-full mr-2 ${user.password.length >= 8 ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                                                    At least 8 characters
                                                </li>
                                                <li className="flex items-center">
                                                    <span className={`w-2 h-2 rounded-full mr-2 ${/[A-Z]/.test(user.password) ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                                                    One uppercase letter
                                                </li>
                                                <li className="flex items-center">
                                                    <span className={`w-2 h-2 rounded-full mr-2 ${/[a-z]/.test(user.password) ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                                                    One lowercase letter
                                                </li>
                                                <li className="flex items-center">
                                                    <span className={`w-2 h-2 rounded-full mr-2 ${/[0-9]/.test(user.password) ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                                                    One number
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {passwordError && (
                                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#3A5B22] text-white font-semibold py-2.5 rounded-lg mt-2 shadow-sm hover:bg-[#2e471a] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                            {isLoading ? "Can't sign up!" : "Signup"}
                        </button>

                        <p className="w-full text-center mt-4 text-base">Have an account? <Link href="/login" className="text-blue-600 font-semibold hover:underline">Log In</Link></p>
                    </form>
                </div>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block lg:w-1/2 h-screen relative">
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



