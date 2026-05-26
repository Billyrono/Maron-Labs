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
            const timer = setTimeout(() => setIsVisible(true), 3500)
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
        <div className="fixed bottom-0 left-0 right-0 z-[99] p-0 sm:p-6 animate-slide-up">
            <div className="max-w-[1400px] mx-auto bg-[#000000]/95 backdrop-blur-2xl border-t sm:border border-[#f9f8f9]/10 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="flex items-start md:items-center gap-6">
                    <div className="hidden sm:flex w-12 h-12 border border-[#cc5500]/30 items-center justify-center shrink-0">
                        <Cookie className="w-5 h-5 text-[#cc5500]" />
                    </div>
                    <div>
                        <h3 className="font-serif text-xl text-[#f9f8f9] mb-2 tracking-tight">
                            Privacy & Cookies
                        </h3>
                        <p className="text-[#f9f8f9]/60 text-sm leading-[1.8] tracking-wide max-w-2xl">
                            We use cookies to elevate your browsing experience and analyze site traffic. By continuing to use our site, you consent to our use of cookies. Review our{" "}
                            <Link href="/cookie-policy" className="text-[#cc5500] hover:text-[#f9f8f9] transition-colors underline decoration-[#cc5500]/30 underline-offset-4">
                                Cookie Policy
                            </Link>{" "}
                            for more details.
                        </p>
                    </div>
                </div>
                
                <div className="flex flex-row gap-4 w-full md:w-auto shrink-0">
                    <button
                        onClick={handleDecline}
                        className="flex-1 md:flex-none px-6 py-3 border border-[#f9f8f9]/10 text-[#f9f8f9] text-[10px] uppercase tracking-[0.2em] font-medium hover:border-[#f9f8f9]/30 transition-all duration-500"
                    >
                        Decline
                    </button>
                    <button
                        onClick={handleAccept}
                        className="flex-1 md:flex-none px-8 py-3 bg-[#cc5500] text-[#f9f8f9] text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[#a83f00] transition-all duration-500"
                    >
                        Accept All
                    </button>
                    <button
                        onClick={handleDecline}
                        className="hidden md:flex p-3 text-[#f9f8f9]/40 hover:text-[#f9f8f9] transition-colors shrink-0"
                        aria-label="Close cookie consent"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}
