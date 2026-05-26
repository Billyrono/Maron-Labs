"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true)
    const [progress, setProgress] = useState(0)
    const [isFadingOut, setIsFadingOut] = useState(false)

    useEffect(() => {
        // Slower loading progress for a more cinematic feel
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setIsFadingOut(true)
                    setTimeout(() => setIsLoading(false), 800)
                    return 100
                }
                // Slower increment
                return prev + Math.random() * 8
            })
        }, 150)

        // Fallback: hide loader after ~3.5 seconds max
        const timeout = setTimeout(() => {
            setProgress(100)
            setIsFadingOut(true)
            setTimeout(() => setIsLoading(false), 800)
        }, 3500)

        return () => {
            clearInterval(interval)
            clearTimeout(timeout)
        }
    }, [])

    if (!isLoading) return null

    return (
        <div
            className={`fixed inset-0 z-[100] bg-[#000000] flex flex-col items-center justify-center transition-all duration-1000 ${
                isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
        >
            {/* Logo */}
            <div className={`relative flex flex-col items-center justify-center transition-transform duration-1000 ease-out ${
                isFadingOut ? "scale-105" : "scale-100"
            }`}>
                <div className="mb-6 opacity-80 animate-wave">
                    <Image
                        src="/logos/Maron Labs Black background Logo.svg"
                        alt="Maron Labs"
                        width={280}
                        height={70}
                        className="h-14 w-auto object-contain"
                        priority
                    />
                </div>
                
                {/* Minimalist Line Progress */}
                <div className="w-64 h-[1px] bg-[#f9f8f9]/10 overflow-hidden mt-4">
                    <div
                        className="h-full bg-[#cc5500] transition-all duration-300 ease-out"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                </div>
                
                {/* Percentage */}
                <p className="mt-6 text-[10px] text-[#f9f8f9]/40 uppercase tracking-[0.3em] font-medium">
                    {Math.floor(Math.min(progress, 100))}%
                </p>
            </div>
        </div>
    )
}
