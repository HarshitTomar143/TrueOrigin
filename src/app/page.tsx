"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Try to verify the token by making a request to a protected endpoint
                const response = await axios.get("/api/users/verify");
                if (response.data.success) {
                    router.push("/home");
                } else {
                    router.push("/login");
                }
            } catch {
                // If there's any error (including token expiration), redirect to login
                router.push("/login");
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, [router]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3A5B22]"></div>
            </div>
        );
    }

    return null;
}
