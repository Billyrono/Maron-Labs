"use client"

import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#000000]">
            <Navigation />

            <section className="min-h-[100vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#161312] border-b border-[#f9f8f9]/5 pt-24">
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-6">
                        Error 404
                    </p>

                    {/* 404 Number */}
                    <h1
                        className="font-serif text-[120px] sm:text-[150px] font-normal text-[#f9f8f9]/10 leading-none mb-8 tracking-tighter"
                    >

                    </h1>

                    {/* Message */}
                    <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#f9f8f9] mb-8 tracking-tight">
                        Page Not Found
                    </h2>

                    <div className="w-16 h-[1px] bg-[#cc5500] mx-auto mb-8" />

                    <p className="text-sm text-[#f9f8f9]/50 mb-12 max-w-lg mx-auto leading-[1.8] tracking-wide">
                        The page you are looking for does not exist, has been moved, or is temporarily unavailable.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
                        <button
                            onClick={() => typeof window !== 'undefined' && window.history.back()}
                            className="group flex items-center gap-3 px-8 py-4 border border-[#f9f8f9]/20 text-[#f9f8f9] text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-[#f9f8f9] hover:text-[#161312] transition-all duration-500"
                        >
                            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-300" />
                            Go Back
                        </button>
                        <Link
                            href="/"
                            className="group flex items-center gap-3 px-8 py-4 bg-[#cc5500] text-[#f9f8f9] text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-[#a83f00] transition-all duration-500"
                        >
                            Return Home
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
