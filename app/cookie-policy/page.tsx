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
        const currentConsent = localStorage.getItem("maron-cookie-consent")
        setCookieStatus(currentConsent)
    }, [])

    const handleUpdate = (status: "accepted" | "declined") => {
        localStorage.setItem("maron-cookie-consent", status)
        setCookieStatus(status)
    }

    return (
        <main className="min-h-screen bg-[#000000]">
            <PageLoader />
            <Navigation />

            {/* Cinematic Header */}
            <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#161312] overflow-hidden min-h-[60vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9f8f9_1px,transparent_1px),linear-gradient(to_bottom,#f9f8f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-5" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#161312]" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-6">
                        Legal & Compliance
                    </p>
                    <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#f9f8f9] mb-8 tracking-tight">
                        Cookie <span className="italic text-[#cc5500]">Policy</span>
                    </h1>
                    <div className="w-16 h-[1px] bg-[#cc5500] mx-auto mb-8" />
                    <p className="text-base text-[#f9f8f9]/50 max-w-2xl mx-auto leading-relaxed tracking-wide">
                        Transparency and control over your digital footprint. Learn how we utilize cookies to elevate your browsing experience at Maron Labs.
                    </p>
                </div>
            </section>

            {/* Luxury Grid Content */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#f9f8f9]">
                <div className="max-w-5xl mx-auto">
                    <FadeIn>
                        <div className="flex items-center gap-4 mb-16">
                            <div className="h-[1px] flex-1 bg-[#161312]/10" />
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#161312]/40">Last Updated: October 2025</p>
                            <div className="h-[1px] flex-1 bg-[#161312]/10" />
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#161312]/10 bg-[#ffffff]">
                        <FadeIn delay={100}>
                            <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-[#161312]/10 h-full group hover:bg-[#161312] transition-colors duration-700">
                                <span className="font-serif text-5xl italic text-[#161312]/10 group-hover:text-[#f9f8f9]/20 mb-8 block transition-colors duration-700">01</span>
                                <h2 className="text-[13px] uppercase tracking-[0.2em] font-medium text-[#161312] group-hover:text-[#f9f8f9] mb-4 transition-colors duration-700">What Are Cookies?</h2>
                                <div className="w-8 h-[1px] bg-[#cc5500] mb-6" />
                                <p className="text-sm text-[#979696] group-hover:text-[#f9f8f9]/60 leading-[1.8] tracking-wide transition-colors duration-700">
                                    Cookies are small text files placed on your device to ensure peak performance. They act as the underlying architecture that allows our platform to remember your preferences and deliver a seamless, high-end experience.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <div className="p-12 md:p-16 h-full group hover:bg-[#161312] transition-colors duration-700 border-b border-[#161312]/10 md:border-b-0">
                                <span className="font-serif text-5xl italic text-[#161312]/10 group-hover:text-[#f9f8f9]/20 mb-8 block transition-colors duration-700">02</span>
                                <h2 className="text-[13px] uppercase tracking-[0.2em] font-medium text-[#161312] group-hover:text-[#f9f8f9] mb-4 transition-colors duration-700">How We Use Them</h2>
                                <div className="w-8 h-[1px] bg-[#cc5500] mb-6" />
                                <ul className="text-sm text-[#979696] group-hover:text-[#f9f8f9]/60 leading-[1.8] tracking-wide space-y-4 transition-colors duration-700">
                                    <li className="flex gap-3"><span className="text-[#cc5500] mt-1">✦</span> <strong>Essential:</strong> Required for fundamental site architecture.</li>
                                    <li className="flex gap-3"><span className="text-[#cc5500] mt-1">✦</span> <strong>Analytics:</strong> Anonymous metrics to refine our digital presence.</li>
                                    <li className="flex gap-3"><span className="text-[#cc5500] mt-1">✦</span> <strong>Preferences:</strong> Tailoring the environment to your specific settings.</li>
                                </ul>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Interactive Preference Control */}
                    <FadeIn delay={300}>
                        <div className="mt-20 border border-[#161312]/10 bg-[#ffffff] p-10 md:p-16 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[#161312] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.645,0.045,0.355,1)]" />
                            
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 border border-[#cc5500]/30 flex items-center justify-center shrink-0">
                                        <Cookie className="w-6 h-6 text-[#cc5500]" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-3xl text-[#161312] group-hover:text-[#f9f8f9] transition-colors duration-700 mb-2">
                                            Control Preferences
                                        </h3>
                                        <p className="text-[11px] uppercase tracking-[0.2em] text-[#cc5500]">
                                            Status: {cookieStatus === "accepted" ? "All Permitted" : cookieStatus === "declined" ? "Strictly Necessary Only" : "Unset"}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                                    <button 
                                        onClick={() => handleUpdate("declined")}
                                        className={`px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-500 border ${
                                            cookieStatus === "declined" 
                                            ? "bg-[#cc5500] border-[#cc5500] text-[#f9f8f9]" 
                                            : "border-[#161312]/20 text-[#161312] group-hover:border-[#f9f8f9]/20 group-hover:text-[#f9f8f9] hover:border-[#cc5500] hover:text-[#cc5500]"
                                        }`}
                                    >
                                        Decline Non-Essential
                                    </button>
                                    <button 
                                        onClick={() => handleUpdate("accepted")}
                                        className={`px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-500 border ${
                                            cookieStatus === "accepted" 
                                            ? "bg-[#cc5500] border-[#cc5500] text-[#f9f8f9]" 
                                            : "bg-[#161312] border-[#161312] text-[#f9f8f9] group-hover:bg-[#f9f8f9] group-hover:text-[#161312] group-hover:border-[#f9f8f9]"
                                        }`}
                                    >
                                        Accept All Cookies
                                    </button>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    )
}
