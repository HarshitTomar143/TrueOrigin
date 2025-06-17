"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import TeaCup from "@/components/TeaCup";
import { motion } from "framer-motion";

export default function HomePage() {
    const router = useRouter();
    const [userData, setUserData] = useState<{ username: string } | null>(null);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Header />

            {/* Main content area */}
            <main className="flex-grow pl-25 pr-25 mt-5">
                {/* Welcome Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-[#2C5530] to-[#1B4332]  text-white py-12 px-4 sm:px-6 lg:px-8 rounded-3xl"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Left Side - Welcome Message and Tea Logo */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="flex flex-col lg:flex-row items-center lg:items-start gap-6"
                            >
                                <motion.div 
                                    animate={floatingAnimation}
                                    className="w-24 h-24 lg:w-32 lg:h-32"
                                >
                                    <TeaCup />
                                </motion.div>
                                <div className="text-center lg:text-left">
                                    <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#B7E4C7]">
                                        Welcome, {userData?.username || "User"}!
                                    </h1>
                                    <p className="text-lg text-[#D8F3DC]">
                                        Discover authentic products and their origins
                                    </p>
                                </div>
                            </motion.div>

                            {/* Right Side - Three Icons */}
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="grid grid-cols-3 gap-4"
                            >
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-[#40916C]/20 backdrop-blur-sm rounded-xl p-6 text-center transform hover:rotate-1 transition-all duration-300 border border-[#40916C]/30"
                                >
                                    <div className="text-4xl mb-3">📦</div>
                                    <h3 className="font-semibold text-[#B7E4C7]">Products</h3>
                                    <p className="text-sm text-[#D8F3DC] mt-1">1000+ Items</p>
                                </motion.div>
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-[#2D6A4F]/20 backdrop-blur-sm rounded-xl p-6 text-center transform hover:-rotate-1 transition-all duration-300 border border-[#2D6A4F]/30"
                                >
                                    <div className="text-4xl mb-3">🔐</div>
                                    <h3 className="font-semibold text-[#B7E4C7]">Verified</h3>
                                    <p className="text-sm text-[#D8F3DC] mt-1">500+ Artisans</p>
                                </motion.div>
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-[#1B4332]/20 backdrop-blur-sm rounded-xl p-6 text-center transform hover:rotate-1 transition-all duration-300 border border-[#1B4332]/30"
                                >
                                    <div className="text-4xl mb-3">🗺️</div>
                                    <h3 className="font-semibold text-[#B7E4C7]">Regions</h3>
                                    <p className="text-sm text-[#D8F3DC] mt-1">50+ Areas</p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Quick Actions Section */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#F0F7F4]"
                >
                    {/* Hexagonal Grid Pattern */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative ">
                        <motion.div variants={itemVariants} className="relative">
                            <Link href="/home/products" className="block">
                                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#40916C] hover:text-white group relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#40916C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="text-2xl mb-2 transform transition-transform duration-300 group-hover:scale-110">📦</div>
                                    <h2 className="text-xl font-semibold text-[#2D6A4F] group-hover:text-white transition-colors">Browse Products</h2>
                                    <p className="mt-2 text-gray-600 group-hover:text-gray-200 transition-colors">Explore our collection of authentic products</p>
                                </div>
                            </Link>
                        </motion.div>

                        <motion.div variants={itemVariants} className="relative">
                            <Link href="/home/verify" className="block">
                                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#2D6A4F] hover:text-white group relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D6A4F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="text-2xl mb-2 transform transition-transform duration-300 group-hover:scale-110">🔐</div>
                                    <h2 className="text-xl font-semibold text-[#2D6A4F] group-hover:text-white transition-colors">Verify Products</h2>
                                    <p className="mt-2 text-gray-600 group-hover:text-gray-200 transition-colors">Check the authenticity of your purchases</p>
                                </div>
                            </Link>
                        </motion.div>

                        <motion.div variants={itemVariants} className="relative">
                            <Link href="/home/truemap" className="block">
                                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#1B4332] hover:text-white group relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="text-2xl mb-2 transform transition-transform duration-300 group-hover:scale-110">🗺️</div>
                                    <h2 className="text-xl font-semibold text-[#2D6A4F] group-hover:text-white transition-colors">TrueMap</h2>
                                    <p className="mt-2 text-gray-600 group-hover:text-gray-200 transition-colors">Track product origins and supply chains</p>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Featured Products Section with Masonry-like Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mb-5 rounded-3xl"
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.h2 
                            variants={itemVariants}
                            className="text-2xl sm:text-3xl font-bold text-[#3A5B22] text-center mb-8"
                        >
                            Featured Products
                        </motion.h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    href: "/home/products/madhubanipaintings",
                                    image: "/madhubaniPainting.jpg",
                                    title: "Madhubani Paintings",
                                    subtitle: "Bihar's Traditional Artform",
                                    height: "h-64"
                                },
                                {
                                    href: "/home/products/banglarasagola",
                                    image: "/banglarRasagola.jpg",
                                    title: "Banglar Rasagola",
                                    subtitle: "Bengal's Sweet Heritage",
                                    height: "h-56"
                                },
                                {
                                    href: "/home/products/darjeelingtea",
                                    image: "/darjeelingTea.jpg",
                                    title: "Darjeeling Tea",
                                    subtitle: "The Champagne of Teas",
                                    height: "h-72"
                                },
                                {
                                    href: "/home/products/feni",
                                    image: "/feni.jpg",
                                    title: "Goan Feni",
                                    subtitle: "Traditional Cashew Spirit",
                                    height: "h-64"
                                }
                            ].map((product, index) => (
                                <motion.div
                                    key={product.href}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative ${index % 2 === 0 ? 'lg:mt-8' : ''}`}
                                >
                                    <Link href={product.href} className="block">
                                        <div className="bg-white rounded-xl shadow-md overflow-hidden group">
                                            <div className={`relative ${product.height} overflow-hidden`}>
                                                <Image
                                                    src={product.image}
                                                    alt={product.title}
                                                    fill
                                                    className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                    <h3 className="text-white font-semibold text-lg">{product.title}</h3>
                                                    <p className="text-gray-200 text-sm mt-1">{product.subtitle}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Stats Section with Diagonal Grid */}
                
            </main>

            {/* Footer with Overlapping Grid */}
            <motion.footer 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="bg-[#000000ad] text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5"></div>
                <div className="max-w-7xl mx-auto relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
                        >
                            <h3 className="text-lg font-semibold mb-4">About TrueOrigin</h3>
                            <p className="text-sm text-gray-200">
                                Your trusted partner in product authenticity and transparency.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
                        >
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm text-gray-200">
                                <li><Link href="/home/products" className="hover:text-white transition-colors">Products</Link></li>
                                <li><Link href="/home/verify" className="hover:text-white transition-colors">Verify</Link></li>
                                <li><Link href="/home/truemap" className="hover:text-white transition-colors">TrueMap</Link></li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
                        >
                            <h3 className="text-lg font-semibold mb-4">Support</h3>
                            <ul className="space-y-2 text-sm text-gray-200">
                                <li><Link href="/support" className="hover:text-white transition-colors">Help Center</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.6, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
                        >
                            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                            <div className="flex space-x-4">
                                <motion.a 
                                    href="#" 
                                    className="text-gray-200 hover:text-white transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                                    </svg>
                                </motion.a>
                                <motion.a 
                                    href="#" 
                                    className="text-gray-200 hover:text-white transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                    </svg>
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8, duration: 0.5 }}
                        className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-200"
                    >
                        <p>&copy; 2024 TrueOrigin. All rights reserved.</p>
                    </motion.div>
                </div>
            </motion.footer>
        </div>
    );
}