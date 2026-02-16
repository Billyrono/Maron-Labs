"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie, X } from "lucide-react"

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Check if user has already accepted/declined cookies
        const cookieConsent = localStorage.getItem("maron-cookie-consent")
        if (!cookieConsent) {
            // Small delay so it doesn't appear instantly with the page loader
            const timer = setTimeout(() => setIsVisible(true), 2000)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem("maron-cookie-consent", "accepted")
        setIsVisible(false)
    }

    const handleDecline = () => {
        localStorage.setItem("maron-cookie-consent", "declined")
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-9999 p-4 sm:p-6 animate-slide-up">
            <div className="max-w-4xl mx-auto bg-[#161312] border border-[#979696]/20 rounded-xl shadow-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="hidden sm:flex w-12 h-12 bg-[#cc5500] rounded-full items-center justify-center shrink-0">
                        <Cookie className="w-6 h-6 text-[#f9f8f9]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold text-[#f9f8f9]" style={{ fontFamily: "Oswald" }}>
                                We Value Your Privacy
                            </h3>
                            <button
                                onClick={handleDecline}
                                className="text-[#979696] hover:text-[#f9f8f9] transition p-1"
                                aria-label="Close cookie consent"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-[#f9f8f9]/70 text-sm leading-relaxed mb-4">
                            We use cookies and similar technologies to enhance your browsing experience, analyze site traffic,
                            and understand where our visitors come from. By continuing to use our site, you consent to our use of cookies.
                            Read our{" "}
                            <Link href="/privacy" className="text-[#cc5500] underline hover:text-[#ff7a1a] transition">
                                Privacy Policy
                            </Link>{" "}
                            and{" "}
                            <Link href="/terms" className="text-[#cc5500] underline hover:text-[#ff7a1a] transition">
                                Terms of Service
                            </Link>{" "}
                            to learn more.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <button
                                onClick={handleAccept}
                                className="px-6 py-2.5 bg-[#cc5500] text-[#f9f8f9] rounded font-bold hover:bg-[#a83f00] transition-all hover:scale-105 text-sm"
                            >
                                Accept All
                            </button>
                            <button
                                onClick={handleDecline}
                                className="px-6 py-2.5 border border-[#979696]/40 text-[#f9f8f9] rounded font-bold hover:border-[#cc5500] hover:text-[#cc5500] transition-all text-sm"
                            >
                                Decline
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
