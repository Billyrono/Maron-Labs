"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(() => setIsLoading(false), 300)
                    return 100
                }
                return prev + Math.random() * 30
            })
        }, 100)

        // Fallback: hide loader after 2 seconds max
        const timeout = setTimeout(() => {
            setProgress(100)
            setTimeout(() => setIsLoading(false), 300)
        }, 2000)

        return () => {
            clearInterval(interval)
            clearTimeout(timeout)
        }
    }, [])

    if (!isLoading) return null

    return (
        <div
            className={`fixed inset-0 z-[100] bg-[#161312] flex flex-col items-center justify-center transition-opacity duration-500 ${progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            {/* Logo */}
            <div className="mb-8 animate-pulse">
                <Image
                    src="/logos/Maron Labs Black background Logo.svg"
                    alt="Maron Labs"
                    width={200}
                    height={60}
                    className="h-16 w-auto"
                    priority
                />
            </div>

            {/* Progress Bar */}
            <div className="w-48 h-1 bg-[#979696]/30 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-[#cc5500] to-[#fee2b2] transition-all duration-300"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                />
            </div>

            {/* Loading Text */}
            <p className="mt-4 text-[#979696] text-sm">Loading...</p>
        </div>
    )
}
