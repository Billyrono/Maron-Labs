"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import PageLoader from "@/components/page-loader"
import { FadeIn } from "@/components/scroll-animations"
import Image from "next/image"
import { registerAffiliate } from "@/app/actions/affiliate"

export default function AffiliatesPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [result, setResult] = useState<{ success: boolean; message: string; affiliateCode?: string } | null>(null)

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsSubmitting(true)
        setResult(null)

        try {
            const formData = new FormData(event.currentTarget)
            const response = await registerAffiliate(formData)
            setResult(response)
            if (response.success) {
                event.currentTarget.reset()
            }
        } catch (error) {
            setResult({ success: false, message: "An unexpected error occurred." })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <main className="min-h-screen bg-[#000000]">
            <PageLoader />
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#161312] overflow-hidden min-h-[70vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9f8f9_1px,transparent_1px),linear-gradient(to_bottom,#f9f8f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-5" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#161312]" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-6">
                        Partner With Us
                    </p>
                    <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#f9f8f9] mb-8 tracking-tight">
                        Affiliate <span className="italic text-[#cc5500]">Program</span>
                    </h1>
                    <div className="w-16 h-[1px] bg-[#cc5500] mx-auto mb-8" />
                    <p className="text-base text-[#f9f8f9]/50 max-w-2xl mx-auto leading-relaxed tracking-wide">
                        Join our exclusive network of partners. Refer clients for our premium tech products, system development, and AI solutions, and earn substantial commissions on every successful project.
                    </p>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#f9f8f9]">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="text-center mb-20">
                            <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-4">The Process</p>
                            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#161312] tracking-tight mb-6">
                                How It Works
                            </h2>
                            <div className="w-16 h-[1px] bg-[#cc5500] mx-auto" />
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#161312]/10">
                        {[
                            {
                                step: "01",
                                title: "Register & Get Your Code",
                                desc: "Fill out the application form below. Upon instant approval, you will receive a unique alphanumeric Affiliate Code (e.g., ML-A8F2) directly on your screen."
                            },
                            {
                                step: "02",
                                title: "Refer Clients via DM",
                                desc: "Recommend Maron Labs to your network. When your client is ready, simply DM our company directly with your unique Affiliate Code and the client's information."
                            },
                            {
                                step: "03",
                                title: "Earn Your Commission",
                                desc: "Once the client finalizes their payment for our services or tech products, your referral is verified and you instantly receive your percentage commission."
                            }
                        ].map((item, index) => (
                            <FadeIn key={index} delay={index * 150}>
                                <div className={`p-12 border-b md:border-b-0 md:border-r border-[#161312]/10 last:border-r-0 h-full hover:bg-[#161312] hover:text-[#f9f8f9] transition-colors duration-700 group flex flex-col`}>
                                    <span className="font-serif text-5xl italic text-[#161312]/10 group-hover:text-[#f9f8f9]/20 mb-8 block transition-colors duration-700">
                                        {item.step}
                                    </span>
                                    <h3 className="text-[13px] uppercase tracking-[0.2em] font-medium text-[#161312] group-hover:text-[#f9f8f9] mb-4 transition-colors duration-700">
                                        {item.title}
                                    </h3>
                                    <div className="w-8 h-[1px] bg-[#cc5500] mb-6" />
                                    <p className="text-sm text-[#979696] group-hover:text-[#f9f8f9]/60 leading-[1.8] tracking-wide transition-colors duration-700">
                                        {item.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Registration Form Section */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#161312] relative overflow-hidden">
                <div className="max-w-3xl mx-auto relative z-10">
                    <FadeIn>
                        <div className="bg-[#000000] border border-[#f9f8f9]/10 p-10 sm:p-16">
                            <div className="text-center mb-12">
                                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#f9f8f9] mb-4 tracking-tight">
                                    Become an Affiliate
                                </h2>
                                <p className="text-sm text-[#f9f8f9]/50 tracking-wide">
                                    Register now to generate your unique referral code.
                                </p>
                            </div>

                            {result?.success ? (
                                <div className="text-center py-12 border border-[#cc5500]/30 bg-[#cc5500]/5 animate-in fade-in duration-700">
                                    <div className="w-16 h-16 rounded-full bg-[#cc5500]/20 flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-8 h-8 text-[#cc5500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <h3 className="font-serif text-2xl text-[#f9f8f9] mb-4">Registration Successful</h3>
                                    <p className="text-[#f9f8f9]/60 text-sm mb-8 tracking-wide max-w-sm mx-auto">
                                        Save your unique affiliate code. Use this code when DMing us your referrals to claim your commission.
                                    </p>
                                    <div className="inline-block border border-[#cc5500] px-8 py-4 bg-[#cc5500]/10">
                                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#cc5500] mb-2">Your Affiliate Code</p>
                                        <p className="font-mono text-3xl text-[#f9f8f9] tracking-wider">{result.affiliateCode}</p>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={onSubmit} className="space-y-8">
                                    <div className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.2em] text-[#f9f8f9]/40 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                className="w-full bg-transparent border-b border-[#f9f8f9]/20 pb-2 text-[#f9f8f9] text-sm focus:outline-none focus:border-[#cc5500] transition-colors rounded-none"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.2em] text-[#f9f8f9]/40 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full bg-transparent border-b border-[#f9f8f9]/20 pb-2 text-[#f9f8f9] text-sm focus:outline-none focus:border-[#cc5500] transition-colors rounded-none"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-[10px] uppercase tracking-[0.2em] text-[#f9f8f9]/40 mb-2">Phone Number / WhatsApp</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                className="w-full bg-transparent border-b border-[#f9f8f9]/20 pb-2 text-[#f9f8f9] text-sm focus:outline-none focus:border-[#cc5500] transition-colors rounded-none"
                                                placeholder="+254 700 000 000"
                                            />
                                        </div>
                                    </div>

                                    {result && !result.success && (
                                        <p className="text-red-500 text-sm">{result.message}</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full group relative px-8 py-4 overflow-hidden flex items-center justify-center border border-[#cc5500] disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                                    >
                                        <span className="absolute inset-0 w-full h-full bg-[#cc5500] group-hover:bg-transparent transition-colors duration-500" />
                                        <span className="relative text-[11px] uppercase tracking-[0.2em] font-medium text-[#f9f8f9] group-hover:text-[#cc5500] transition-colors duration-500 flex items-center gap-2">
                                            {isSubmitting ? "Processing..." : "Generate My Code"}
                                        </span>
                                    </button>
                                </form>
                            )}
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    )
}
