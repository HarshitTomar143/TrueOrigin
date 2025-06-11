"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";

export default function HomePage() {
    const router = useRouter();
    const [userData, setUserData] = useState<{ username: string } | null>(null);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios.get("/api/users/me", { withCredentials: true });
                setUserData(response.data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.error("Error fetching user data:", error.message);
                }
                router.push("/login");
            }
        };

        getUserData();
    }, [router]);

    const handleLogout = async () => {
        try {
            await axios.get("/api/users/logout");
            router.push("/login");
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error logging out:", error.message);
            }
            router.push("/login"); // Redirect to login even if logout fails on the client side
        }
    };

    return (
        <div className="min-h-screen bg-white p-8">
            <h1 className="text-3xl font-bold text-[#3A5B22]">
                Welcome {userData?.username || "User"}!
            </h1>
            <button
                onClick={handleLogout}
                className="mt-4 px-4 py-2 bg-[#3A5B22] text-white rounded-md hover:bg-opacity-90"
            >
                Logout
            </button>
        </div>
    );
}