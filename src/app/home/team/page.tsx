"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { motion } from "framer-motion";

// Team member data
const teamMembers = [
    {
        id: 1,
        name: "Rahul Sharma",
        role: "Project Lead",
        image: "/Logo.jpg",
        discImage: "/darjeelingTea.jpg",
        description: "Experienced full-stack developer with expertise in React, Node.js, and blockchain technology. Led the development of TrueOrigin's core verification system.",
        skills: ["React", "Node.js", "Blockchain", "Team Leadership"],
        experience: "5+ years"
    },
    {
        id: 2,
        name: "Priya Patel",
        role: "UI/UX Designer",
        image: "/Logo.jpg",
        discImage: "/mysoreSilk.jpg",
        description: "Creative designer passionate about user experience and visual storytelling. Designed the intuitive interface for TrueOrigin's product verification system.",
        skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "User Research"],
        experience: "4+ years"
    },
    {
        id: 3,
        name: "Amit Kumar",
        role: "Backend Developer",
        image: "/Logo.jpg",
        discImage: "/banarasiSilkSaree.jpg",
        description: "Backend specialist with deep knowledge of database design and API development. Built the robust backend infrastructure for TrueOrigin.",
        skills: ["Python", "Django", "PostgreSQL", "AWS"],
        experience: "6+ years"
    },
    {
        id: 4,
        name: "Neha Singh",
        role: "Data Analyst",
        image: "/Logo.jpg",
        discImage: "/alphonsoMango.jpg",
        description: "Data-driven analyst with expertise in machine learning and statistical analysis. Developed the AI-powered verification algorithms for TrueOrigin.",
        skills: ["Machine Learning", "Python", "Data Analysis", "Statistics"],
        experience: "3+ years"
    }
];

// Music letters for animation
const musicLetters = ['♪', '♫', '♬', '♩', '♭', '♮', '♯', '♪', '♫', '♬'];

export default function TeamPage() {
    const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/teamBack.png')" }} />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/40 via-[#16213e]/40 to-[#0f3460]/40" />
            </div>
            
            {/* Header */}
            <Header/>

            {/* Flowing Music Letters */}
            {isClient && (
                <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                    {musicLetters.map((letter, index) => (
                        <motion.div
                            key={index}
                            className="absolute text-white/30 text-2xl font-bold"
                            initial={{ x: -100, y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600) }}
                            animate={{ 
                                x: (typeof window !== 'undefined' ? window.innerWidth : 1200) + 100,
                                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600)
                            }}
                            transition={{
                                duration: 8 + Math.random() * 4,
                                repeat: Infinity,
                                ease: "linear",
                                delay: index * 0.5
                            }}
                        >
                            {letter}
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Main content area */}
            <div className="flex-grow flex relative z-20 p-8">
                {/* Left Side - Music Discs */}
                <div className="w-1/2 flex flex-col items-center justify-center space-y-8">
                    <motion.h1 
                        className="text-4xl font-bold text-white mb-8 text-center"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Team
                    </motion.h1>
                    
                    <div className="grid grid-cols-2 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.id}
                                className="relative cursor-pointer group"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ scale: 1.05 }}
                                onClick={() => setSelectedMember(member)}
                            >
                                {/* Music Disc */}
                                <div className="relative w-32 h-32">
                                    {/* Black Disc Background */}
                                    <div className="absolute inset-0 bg-black rounded-full border-4 border-gray-800 shadow-2xl">
                                        {/* Spinning Animation */}
                                        <motion.div
                                            className="absolute inset-2 bg-gradient-to-br from-gray-900 to-black rounded-full"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        >
                                            {/* Center Hole */}
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gray-800 rounded-full"></div>
                                        </motion.div>
                                        
                                        {/* Member Image on Disc */}
                                        <div className="absolute inset-4 rounded-full overflow-hidden">
                                            <Image
                                                src={member.discImage}
                                                alt={member.name}
                                                width={96}
                                                height={96}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = "/Logo.jpg";
                                                }}
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                </div>
                                
                                {/* Member Name */}
                                <div className="text-center mt-4">
                                    <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                                    <p className="text-gray-300 text-sm">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Popup Information */}
                <div className="w-1/2 flex items-center justify-center">
                    {selectedMember ? (
                        <motion.div
                            className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl shadow-xl p-8 max-w-md"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-center">
                                {/* Member Image */}
                                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/30">
                                    <Image
                                        src={selectedMember.image}
                                        alt={selectedMember.name}
                                        width={96}
                                        height={96}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "/Logo.jpg";
                                        }}
                                    />
                                </div>
                                
                                {/* Member Info */}
                                <h2 className="text-2xl font-bold text-white mb-2">{selectedMember.name}</h2>
                                <p className="text-blue-300 font-semibold mb-4">{selectedMember.role}</p>
                                <p className="text-gray-200 mb-6 leading-relaxed">{selectedMember.description}</p>
                                
                                {/* Skills */}
                                <div className="mb-6">
                                    <h4 className="text-white font-semibold mb-3">Skills</h4>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {selectedMember.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-white/20 text-white text-sm rounded-full border border-white/30"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Experience */}
                                <div className="text-gray-300">
                                    <span className="font-semibold">Experience:</span> {selectedMember.experience}
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            className="text-center text-white/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-6xl mb-4">♪</div>
                            <h3 className="text-xl font-semibold mb-2">Click on a disc</h3>
                            <p className="text-sm">to learn more about our team members</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}