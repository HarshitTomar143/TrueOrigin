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

   
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Header />

            {/* Main content area */}
            <main className="flex-grow">
                {/* Welcome Section */}
                <div className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center">
                            <TeaCup />
                            <h1 className="text-3xl sm:text-4xl font-bold text-[#3A5B22] mt-6">
                                Welcome {userData?.username || "User"}!
                            </h1>
                            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                                Discover authentic products and verify their origins with TrueOrigin
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick Actions Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link href="/home/products" className="transform transition-all duration-300 hover:scale-105">
                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                                <div className="text-2xl mb-2">📦</div>
                                <h2 className="text-xl font-semibold text-[#3A5B22]">Browse Products</h2>
                                <p className="mt-2 text-gray-600">Explore our collection of authentic products</p>
                            </div>
                        </Link>

                        <Link href="/home/verify" className="transform transition-all duration-300 hover:scale-105">
                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                                <div className="text-2xl mb-2">🔐</div>
                                <h2 className="text-xl font-semibold text-[#3A5B22]">Verify Products</h2>
                                <p className="mt-2 text-gray-600">Check the authenticity of your purchases</p>
                            </div>
                        </Link>

                        <Link href="/home/truemap" className="transform transition-all duration-300 hover:scale-105">
                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                                <div className="text-2xl mb-2">🗺️</div>
                                <h2 className="text-xl font-semibold text-[#3A5B22]">TrueMap</h2>
                                <p className="mt-2 text-gray-600">Track product origins and supply chains</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Featured Products Section */}
                <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#3A5B22] text-center mb-8">
                            Featured Products
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105">
                                    <div className="relative h-48">
                                        <Image
                                            src={`/product${item}.jpg`}
                                            alt={`Featured Product ${item}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-lg text-[#3A5B22]">Featured Product {item}</h3>
                                        <p className="text-gray-600 text-sm mt-1">Discover more about this authentic product</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-[#3A5B22] text-white py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">About TrueOrigin</h3>
                            <p className="text-sm text-gray-200">
                                Your trusted partner in product authenticity and transparency.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm text-gray-200">
                                <li><Link href="/home/products" className="hover:text-white">Products</Link></li>
                                <li><Link href="/home/verify" className="hover:text-white">Verify</Link></li>
                                <li><Link href="/home/truemap" className="hover:text-white">TrueMap</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Support</h3>
                            <ul className="space-y-2 text-sm text-gray-200">
                                <li><Link href="/support" className="hover:text-white">Help Center</Link></li>
                                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-200 hover:text-white">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-200 hover:text-white">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-200">
                        <p>&copy; 2024 TrueOrigin. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}