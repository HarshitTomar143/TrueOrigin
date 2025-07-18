"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";

interface HeaderProps {
  // You can add props here if the header needs to be dynamic
}

export default function Header(props: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error logging out:", error.message);
      }
      router.push("/login");
    }
  };

  const navLinks = [
    { name: "Products", href: "/home/products" },
    { name: "Marketplace", href: "/home/marketplace" },
    { name: "Verify", href: "/home/verify" },
    { name: "TrueMap", href: "/home/truemap" },
    { name: "Team", href: "/home/team" },
  ];

  return (
    <header className="flex items-center justify-between mx-[10px] p-4 relative backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg z-30 m-4 border-2 rounded-xl min-h-[72px]">
      {/* Honey drops */}
      <div className="honey-drop honey-drop-1"></div>
      <div className="honey-drop honey-drop-2"></div>
      <div className="honey-drop honey-drop-3"></div>

      <Link href="/home" className="flex items-center cursor-pointer relative z-20 min-w-[180px]">
        <Image
          src="/Logo.jpg"
          alt="TrueOrigin Logo"
          width={60}
          height={60}
          className="mr-2 rounded-full"
        />
        <span className="text-3xl font-bold bg-gradient-to-r from-[#b993f4] to-[#8ca6db] bg-clip-text text-transparent">TrueOrigin</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center bg-white/10 backdrop-blur-xl border border-white/20 shadow-md rounded-lg py-2 px-6 space-x-6 relative z-20 min-w-[500px] justify-center">
        <nav className="flex space-x-6 flex-nowrap items-center">
          <Link href="/home/products" className={`flex items-center h-10 px-4 text-white hover:text-[#b993f4] font-medium transition-transform transform ${pathname === '/home/products' ? "scale-105 text-[#b993f4] border-b-2 border-[#b993f4]" : ""}`}>Products📦</Link>
          <Link href="/home/verify" className={`flex items-center h-10 px-4 text-white hover:text-[#b993f4] font-medium transition-transform transform ${pathname === '/home/verify' ? "scale-105 text-[#b993f4] border-b-2 border-[#b993f4]" : ""}`}>Verify🔐</Link>
          <Link href="/home/truemap" className={`flex items-center h-10 px-4 text-white hover:text-[#b993f4] font-medium transition-transform transform ${pathname === '/home/truemap' ? "scale-105 text-[#b993f4] border-b-2 border-[#b993f4]" : ""}`}>TrueMap🗺️</Link>
          <Link href="/home/team" className={`flex items-center h-10 px-4 text-white hover:text-[#b993f4] font-medium transition-transform transform ${pathname === '/home/team' ? "scale-105 text-[#b993f4] border-b-2 border-[#b993f4]" : ""}`}>Team🤝</Link>
          <Link href="/home/accounts" className={`flex items-center h-10 px-4 text-white hover:text-[#b993f4] font-medium transition-transform transform ${pathname === '/home/accounts' ? "scale-105 text-[#b993f4] border-b-2 border-[#b993f4]" : ""}`}>Account🏦</Link>
        </nav>
        <button
          onClick={handleSignOut}
          className="flex items-center h-10 px-6 bg-gradient-to-r from-[#b993f4] to-[#8ca6db] text-white rounded-md hover:from-[#8ca6db] hover:to-[#b993f4] transition-colors shadow cursor-pointer ml-6 border border-white/20"
        >
          Sign Out
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-4 relative z-20">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
        >
          <svg
            className="h-6 w-6 text-gray-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[88px] left-0 right-0 bg-white shadow-lg z-50">
          <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-700 hover:text-[#3A5B22] font-medium px-4 py-2 rounded-md ${
                  pathname === link.href ? "bg-[#D1E7D1] text-[#2e471a]" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                handleSignOut();
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-gray-700 hover:text-[#3A5B22] font-medium"
            >
              Sign Out
            </button>
          </nav>
        </div>
      )}
    </header>
  );
} 