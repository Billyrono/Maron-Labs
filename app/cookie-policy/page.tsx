"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import PageLoader from "@/components/page-loader"
import { FadeIn } from "@/components/scroll-animations"
import { Cookie } from "lucide-react"

export default function CookiePolicyPage() {
    const [cookieStatus, setCookieStatus] = useState<string | null>(null)

    useEffect(() => {
        // Fetch current status on mount
        const currentConsent = localStorage.getItem("maron-cookie-consent")
        setCookieStatus(currentConsent)
    }, [])

    const handleUpdate = (status: "accepted" | "declined") => {
        localStorage.setItem("maron-cookie-consent", status)
        setCookieStatus(status)
        // Optional: reload the page or trigger a toast if needed, but visual update is enough
    }

    return (
        <main className="min-h-screen bg-[#f9f8f9]">
            <PageLoader />
            <Navigation />

            {/* Header */}
            <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#161312]">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-6">
                        Legal Information
                    </p>
                    <h1 className="font-serif text-5xl sm:text-6xl font-normal text-[#f9f8f9] tracking-tight mb-8">
                        Cookie Policy
                    </h1>
                    <div className="w-16 h-[1px] bg-[#cc5500] mx-auto" />
                </div>
            </section>

            {/* Content Area */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <FadeIn>
                        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-normal prose-headings:text-[#161312] prose-p:text-[#979696] prose-p:leading-relaxed prose-p:tracking-wide">
                            <p className="text-sm text-[#161312]/60 uppercase tracking-widest mb-12">
                                Last Updated: October 2025
                            </p>

                            <h2 className="text-3xl mb-6">1. What Are Cookies?</h2>
                            <p className="mb-8">
                                Cookies are small text files that are placed on your computer or mobile device when you browse websites. 
                                They are widely used to make websites work efficiently, as well as to provide information to the owners of the site.
                                At Maron Labs, we use cookies to elevate your browsing experience and gather analytics to improve our services.
                            </p>

                            <h2 className="text-3xl mb-6">2. How We Use Cookies</h2>
                            <p className="mb-4">We use different types of cookies to run our website smoothly:</p>
                            <ul className="list-disc pl-6 mb-8 text-[#979696] space-y-2">
                                <li><strong>Essential Cookies:</strong> Required for the basic operation of our website.</li>
                                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                                <li><strong>Preference Cookies:</strong> Allow our website to remember choices you make (such as your language or region).</li>
                            </ul>

                            <h2 className="text-3xl mb-6">3. Manage Your Preferences</h2>
                            <p className="mb-8">
                                You have the right to decide whether to accept or decline non-essential cookies. You can update your preferences at any time using the controls below.
                            </p>
                            
                            {/* Cookie Management UI */}
                            <div className="bg-[#ffffff] border border-[#161312]/10 p-8 my-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 border border-[#cc5500]/30 flex items-center justify-center">
                                        <Cookie className="w-5 h-5 text-[#cc5500]" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-2xl text-[#161312] m-0">Your Current Status</h3>
                                        <p className="text-sm text-[#979696] m-0 mt-1 uppercase tracking-widest">
                                            {cookieStatus === "accepted" ? "Cookies Accepted" : cookieStatus === "declined" ? "Cookies Declined" : "No Preference Set"}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    <button 
                                        onClick={() => handleUpdate("accepted")}
                                        className={`px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-500 border ${
                                            cookieStatus === "accepted" 
                                            ? "bg-[#cc5500] border-[#cc5500] text-[#f9f8f9]" 
                                            : "bg-transparent border-[#161312]/20 text-[#161312] hover:border-[#cc5500] hover:text-[#cc5500]"
                                        }`}
                                    >
                                        Accept All Cookies
                                    </button>
                                    <button 
                                        onClick={() => handleUpdate("declined")}
                                        className={`px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-500 border ${
                                            cookieStatus === "declined" 
                                            ? "bg-[#161312] border-[#161312] text-[#f9f8f9]" 
                                            : "bg-transparent border-[#161312]/20 text-[#161312] hover:border-[#161312]"
                                        }`}
                                    >
                                        Decline Non-Essential
                                    </button>
                                </div>
                            </div>

                            <h2 className="text-3xl mb-6">4. Changes to This Policy</h2>
                            <p>
                                We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    )
}
