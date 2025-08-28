"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import TeaCup from "@/components/TeaCup";
import { motion } from "framer-motion";
import Head from "next/head";
import Chatbot from "@/components/Chatbot";
import ChatbotToggle from "@/components/ChatbotToggle";

export default function HomePage() {
    const router = useRouter();
    const [userData, setUserData] = useState<{ username: string } | null>(null);
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

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
         <div className="min-h-screen flex flex-col font-poppins b bg-gradient-to-br from-green-800 via-beige-200 to-orange-200">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <main className="flex-grow px-6 sm:px-12 lg:px-20 py-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg p-10 sm:p-14"
        >
          <div className="">
            <h1 className="text-3xl sm:text-5xl  text-white">
              Welcome back, User!
            </h1>
            <p className="text-lg sm:text-2xl text-white/90 mt-2">
              Discover authentic products and their true origin
            </p>
            <div className="mt-6 flex flex-wrap  gap-4">
              <Link
                href="/home/products"
                className="px-8 py-5 rounded-lg bg-white/10 hover:bg-green-500 text-white  shadow-md transition"
              >
                Browse Products
              </Link>
              <Link
                href="/home/verify"
                className="px-8 py-5 rounded-lg bg-white/10  hover:bg-orange-500 text-white font-semibold shadow-md transition"
              >
                Verify items
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "📦", title: "Products", desc: "1000+ Items" },
              { icon: "🔐", title: "Verified", desc: "500+ Artisans" },
              { icon: "🗺️", title: "Regions", desc: "50+ Areas" },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-[#f5e6d37a] rounded-xl cursor-pointer  backdrop-blur-md border border-white/30 p-6 text-center shadow-md"
              >
                <div className="text-4xl mb-2">{card.icon}</div>
                <h3 className="text-black font-semibold text-lg">
                  {card.title}
                </h3>
                <p className="text-black text-sm mt-1">{card.desc}</p>
              </motion.div>
            ))},
            
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            {
              href: "/home/products",
              icon: "📦",
              title: "Browse Products",
              desc: "Explore our collection of authentic products",
            },
            {
              href: "/home/verify",
              icon: "🔐",
              title: "Verify Products",
              desc: "Check the authenticity of your purchases",
            },
            {
              href: "/home/truemap",
              icon: "🗺️",
              title: "TrueMap",
              desc: "Track product origins and supply chains",
            },
          ].map((feature, i) => (
            <Link
              key={i}
              href={feature.href}
              className="bg-[#f5e6d3c2] backdrop-blur-xl border border-white/30 rounded-xl p-6 shadow-lg hover:scale-105 transform transition"
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <h2 className="font-semibold text-lg text-black">
                {feature.title}
              </h2>
              <p className="text-sm text-black mt-1">{feature.desc}</p>
            </Link>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
        <motion.footer 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="bg-[#000000ad] text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5"></div>
                <div className="mx-[10px] relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
                        >
                            <h3 className="text-lg font-semibold mb-4">About TrueOrigin</h3>
                            <p className="text-sm text-white">
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
                            <ul className="space-y-2 text-sm text-white">
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
                            <ul className="space-y-2 text-sm text-white">
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
                                    className="text-white hover:text-white transition-colors"
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
                                    className="text-white hover:text-white transition-colors"
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
                        className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white"
                    >
                        <p>&copy; 2024 TrueOrigin. All rights reserved.</p>
                    </motion.div>
                </div>
            </motion.footer>

            {/* Chatbot Components */}
            <ChatbotToggle onClick={() => setIsChatbotOpen(true)} />
            <Chatbot 
                isOpen={isChatbotOpen} 
                onClose={() => setIsChatbotOpen(false)} 
            />


    </div>
    );
}