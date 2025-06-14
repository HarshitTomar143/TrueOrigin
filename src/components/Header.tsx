"use client";

import React from "react";
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
    <header className="flex items-center justify-between w-full p-4 relative overflow-hidden">
      {/* Honey drops */}
      <div className="honey-drop honey-drop-1"></div>
      <div className="honey-drop honey-drop-2"></div>
      <div className="honey-drop honey-drop-3"></div>

      <Link href="/home" className="flex items-center cursor-pointer relative z-10">
        <Image
          src="/Logo.jpg"
          alt="TrueOrigin Logo"
          width={60}
          height={60}
          className="mr-2 rounded-full"
        />
        <span className="text-3xl font-bold text-[#3A5B22]">TrueOrigin</span>
      </Link>
      <div className="flex items-center bg-[#D1E7D1] shadow-md rounded-lg py-2 px-6 space-x-6 relative z-10">
        <nav className="flex space-x-6 flex-nowrap">
          <Link href="/home/products" className={`text-gray-700 hover:text-[#3A5B22] font-medium transition-transform transform ${pathname === '/home/products' ? "scale-105 text-[#2e471a] border-b-2 border-[#2e471a]" : ""}`}>
            Products📦
          </Link>
          
          <Link href="/home/verify" className={`text-gray-700 hover:text-[#3A5B22] font-medium transition-transform transform ${pathname === '/home/verify' ? "scale-105 text-[#2e471a] border-b-2 border-[#2e471a]" : ""}`}>
            Verify🔐
          </Link>
          <Link href="/home/truemap" className={`text-gray-700 hover:text-[#3A5B22] font-medium transition-transform transform ${pathname === '/home/truemap' ? "scale-105 text-[#2e471a] border-b-2 border-[#2e471a]" : ""}`}>
            TrueMap🗺️
          </Link>
          <Link href="/home/team" className={`text-gray-700 hover:text-[#3A5B22] font-medium transition-transform transform ${pathname === '/home/team' ? "scale-105 text-[#2e471a] border-b-2 border-[#2e471a]" : ""}`}>
            Team🤝
          </Link>
          <Link href="/home/accounts" className={`text-gray-700 hover:text-[#3A5B22] font-medium transition-transform transform ${pathname === '/home/accounts' ? "scale-105 text-[#2e471a] border-b-2 border-[#2e471a]" : ""}`}>
            Account🏦
          </Link>
        </nav>
        <button
          onClick={handleSignOut}
          className="px-6 py-2 bg-[#3A5B22] text-white rounded-md hover:bg-opacity-90 transition-colors shadow cursor-pointer ml-6"
        >
          Sign Out
        </button>
      </div>
      {/* Swiggly lines */}
      {/* <div className="swiggly-line swiggly-line-1"></div> */}
      {/* <div className="swiggly-line swiggly-line-2"></div> */}
      {/* <div className="swiggly-line swiggly-line-3"></div> */}
      <div className="sine-wave-bottom"></div>
    </header>
  );
} 