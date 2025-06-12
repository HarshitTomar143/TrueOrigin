"use client";

import axios from "axios";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import Image from "next/image";

export default function VerifyEmailPage(){
    const[token, setToken]= useState("");
    const[verified, setVerified]= useState(false);
    const[error, setError]= useState(false);

    const verifyUserEmail= async()=>{
        try {
            
            await axios.post('/api/users/verifyemail',{token})
            setVerified(true);
            setError(false); // Clear error if verification is successful

        } catch (error:any) {
            setError(true);
            console.log(error.response.data)
        }
    }

    useEffect(()=>{
        const urlToken= window.location.search.split("=")[1];
        setToken(urlToken|| "");
    }, []); // Add empty dependency array to run only once

    useEffect(()=>{
        if(token.length>0){
            verifyUserEmail();
        }
    },[token]);

    return(
        <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/teaGarden.jpg" // Using the same image for consistency
                    alt="Verification Background"
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            <div className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center z-10">
                <h1 className="text-2xl font-bold mb-6 text-[#3A5B22]">Email Verification</h1>

                {token === "" ? (
                    <div className="text-red-500 mb-4">
                        No token found. Please use the verification link from your email.
                    </div>
                ) : null}

                {verified && (
                    <div>
                        <p className="text-green-600 text-lg mb-4">Email Verified Successfully!</p>
                        <Link href={"/login"}>
                            <button
                                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#3A5B22] hover:bg-[#2e471a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3A5B22]"
                            >
                                Login Now
                            </button>
                        </Link>
                    </div>
                )}

                {error && (
                    <div>
                        <p className="text-red-600 text-lg mb-4">Verification Failed!</p>
                        <p className="text-gray-700 text-sm mb-4">An error occurred during email verification. Please try again or contact support.</p>
                        <Link href={"/signup"}>
                             <button
                                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Sign Up Again
                            </button>
                        </Link>
                    </div>
                )}

                {!verified && !error && token !== "" && (
                    <p className="text-gray-700 text-lg mb-4">Verifying your email...</p>
                )}
            </div>
        </div>
    )
}