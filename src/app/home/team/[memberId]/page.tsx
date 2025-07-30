"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { getTeamMember, teamMembers, type TeamMember } from "@/lib/teamData";

export default function TeamMemberPage() {
    const params = useParams();
    const router = useRouter();
    const [member, setMember] = useState<typeof teamMembers[0] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const memberId = params.memberId as string;
        const foundMember = getTeamMember(memberId);
        
        if (foundMember) {
            setMember(foundMember);
        } else {
            // Redirect to team page if member not found
            router.push('/home/team');
        }
        setIsLoading(false);
    }, [params.memberId, router]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
                <div className="text-white text-xl">Loading...</div>
            </div>
        );
    }

    if (!member) {
        return null;
    }

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/teamBack.png')" }} />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/40 via-[#16213e]/40 to-[#0f3460]/40" />
            </div>
            
            {/* Header */}
            <Header/>

            {/* Main content */}
            <div className="flex-grow flex relative z-20 p-8">
                <div className="w-full max-w-6xl mx-auto">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <Link 
                            href="/home/team"
                            className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-200"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Team
                        </Link>
                    </motion.div>

                    {/* Member Profile Card */}
                    <motion.div
                        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Header Section */}
                        <div className="relative h-80 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
                            <div className="relative h-full flex items-center justify-center">
                                <motion.div
                                    className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={192}
                                        height={192}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "/Logo.jpg";
                                        }}
                                    />
                                </motion.div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Left Column - Basic Info */}
                                <div className="lg:col-span-1">
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        <h1 className="text-3xl font-bold text-white mb-2">{member.name}</h1>
                                        <p className="text-blue-300 font-semibold text-lg mb-4">{member.role}</p>
                                        <p className="text-gray-300 mb-6">{member.description}</p>

                                        {/* Contact Information */}
                                        <div className="space-y-4">
                                            <div className="flex items-center text-gray-300">
                                                <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <a href={`mailto:${member.email}`} className="hover:text-blue-400 transition-colors">
                                                    {member.email}
                                                </a>
                                            </div>
                                            <div className="flex items-center text-gray-300">
                                                <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {member.location}
                                            </div>
                                        </div>

                                        {/* Social Links */}
                                        <div className="flex space-x-4 mt-6">
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200"
                                            >
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                </svg>
                                            </a>
                                            {member.github && (
                                                <a
                                                    href={member.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-900 rounded-full transition-colors duration-200"
                                                >
                                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Right Column - Detailed Info */}
                                <div className="lg:col-span-2">
                                    <motion.div
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        className="space-y-6"
                                    >
                                        {/* Education & Experience */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                                                <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
                                                <div className="space-y-3">
                                                    <div>
                                                        <p className="text-blue-300 font-medium">{member.education}</p>
                                                        <p className="text-gray-300 text-sm">{member.branch}</p>
                                                        <p className="text-gray-400 text-sm">Graduated {member.year}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                                                <h3 className="text-xl font-semibold text-white mb-4">Experience</h3>
                                                <div className="space-y-3">
                                                    <div>
                                                        
                                                        <p className="text-gray-300 text-sm">{member.field}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Skills */}
                                        <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                                            <h3 className="text-xl font-semibold text-white mb-4">Skills & Technologies</h3>
                                            <div className="flex flex-wrap gap-3">
                                                {member.skills.map((skill:any, index:any) => (
                                                    <motion.span
                                                        key={index}
                                                        className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white text-sm rounded-full border border-white/30"
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                                    >
                                                        {skill}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Achievements */}
                                        <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                                            <h3 className="text-xl font-semibold text-white mb-4">Key Achievements</h3>
                                            <ul className="space-y-3">
                                                {member.achievements.map((achievement:any, index:any) => (
                                                    <motion.li
                                                        key={index}
                                                        className="flex items-start text-gray-300"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                                                    >
                                                        <svg className="w-5 h-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        {achievement}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
} 