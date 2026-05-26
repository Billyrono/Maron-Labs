"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import ProgressBar from "@/components/progress-bar"
import PageLoader from "@/components/page-loader"
import { FadeIn } from "@/components/scroll-animations"
import Image from "next/image"
import { Phone, Mail, MapPin, Globe, MessageCircle, Send, Clock, CheckCircle } from "lucide-react"
import { ServiceDropdown } from "@/components/service-dropdown"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        agreedToTerms: false
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError("")

        try {
            const formBody = new URLSearchParams({
                "form-name": "contact",
                "name": formData.name,
                "email": formData.email,
                "phone": formData.phone,
                "service": formData.service,
                "message": formData.message
            }).toString()

            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: formBody
            })

            if (response.ok) {
                setIsSuccess(true)
                setFormData({ name: "", email: "", phone: "", service: "", message: "", agreedToTerms: false })
            } else {
                throw new Error(`Form submission failed: ${response.status}`)
            }
        } catch (err) {
            setError("Something went wrong. Please try again or contact us directly.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <main className="min-h-screen">
            <PageLoader />
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#161312] overflow-hidden min-h-[80vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/alt-contact.webp"
                        alt="Contact Us"
                        fill
                        className="object-cover opacity-15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#161312]/30 to-[#161312]/80" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-6">
                        Get in Touch
                    </p>
                    <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#f9f8f9] mb-8 tracking-tight">
                        Contact <span className="italic text-[#cc5500]">Us</span>
                    </h1>
                    <div className="w-16 h-[1px] bg-[#cc5500] mx-auto mb-8" />
                    <p className="text-base text-[#f9f8f9]/50 max-w-2xl mx-auto leading-relaxed tracking-wide">
                        Ready to transform your digital vision? Let&apos;s collaborate and create something exceptional together.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#000000]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <FadeIn>
                                <div className="bg-[#161312] border border-[#f9f8f9]/5 p-10 h-full">
                                    <h2 className="font-serif text-3xl font-normal text-[#f9f8f9] mb-8 tracking-tight">
                                        Send a Message
                                    </h2>
                                    <div className="w-12 h-[1px] bg-[#cc5500] mb-10" />
                                    {isSuccess ? (
                                        <div className="text-center py-16">
                                            <div className="w-16 h-16 border border-[#cc5500]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle className="w-8 h-8 text-[#cc5500]" />
                                            </div>
                                            <h3 className="font-serif text-2xl text-[#f9f8f9] mb-4 tracking-wide">Message Sent!</h3>
                                            <p className="text-sm text-[#f9f8f9]/50 mb-8 leading-[1.8] tracking-wide">Thank you for reaching out. We will get back to you soon.</p>
                                            <button
                                                onClick={() => setIsSuccess(false)}
                                                className="px-8 py-4 bg-transparent border border-[#cc5500] text-[#cc5500] text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-[#cc5500] hover:text-[#f9f8f9] transition-all duration-500"
                                            >
                                                Send Another Message
                                            </button>
                                        </div>
                                    ) : (
                                        <form
                                            name="contact"
                                            method="POST"
                                            data-netlify="true"
                                            netlify-honeypot="bot-field"
                                            onSubmit={handleSubmit}
                                            className="space-y-8"
                                        >
                                            <input type="hidden" name="form-name" value="contact" />
                                            <div hidden>
                                                <input name="bot-field" />
                                            </div>

                                            {error && (
                                                <div className="p-4 bg-red-900/20 border border-red-500/50 text-red-400 text-sm tracking-wide">
                                                    {error}
                                                </div>
                                            )}

                                            <div>
                                                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#f9f8f9]/50 mb-3">Your Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full px-4 py-4 bg-transparent border-b border-[#f9f8f9]/10 text-[#f9f8f9] text-sm tracking-wide focus:outline-none focus:border-[#cc5500] transition-colors duration-500 placeholder:text-[#f9f8f9]/20"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#f9f8f9]/50 mb-3">Email Address *</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        className="w-full px-4 py-4 bg-transparent border-b border-[#f9f8f9]/10 text-[#f9f8f9] text-sm tracking-wide focus:outline-none focus:border-[#cc5500] transition-colors duration-500 placeholder:text-[#f9f8f9]/20"
                                                        placeholder="john@example.com"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#f9f8f9]/50 mb-3">Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                        className="w-full px-4 py-4 bg-transparent border-b border-[#f9f8f9]/10 text-[#f9f8f9] text-sm tracking-wide focus:outline-none focus:border-[#cc5500] transition-colors duration-500 placeholder:text-[#f9f8f9]/20"
                                                        placeholder="+254 700 000 000"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#f9f8f9]/50 mb-3">Service Interested In</label>
                                                <ServiceDropdown
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={(value) => setFormData({ ...formData, service: value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#f9f8f9]/50 mb-3">Your Message *</label>
                                                <textarea
                                                    name="message"
                                                    required
                                                    rows={5}
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                    className="w-full px-4 py-4 bg-transparent border-b border-[#f9f8f9]/10 text-[#f9f8f9] text-sm tracking-wide focus:outline-none focus:border-[#cc5500] transition-colors duration-500 resize-none placeholder:text-[#f9f8f9]/20"
                                                    placeholder="Tell us about your project..."
                                                />
                                            </div>

                                            {/* ToS Agreement */}
                                            <div className="flex items-start gap-4 pt-4">
                                                <input
                                                    type="checkbox"
                                                    id="agreedToTerms"
                                                    required
                                                    checked={formData.agreedToTerms}
                                                    onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                                                    className="mt-1 w-4 h-4 accent-[#cc5500] cursor-pointer bg-transparent border-[#f9f8f9]/10"
                                                />
                                                <label htmlFor="agreedToTerms" className="text-xs text-[#f9f8f9]/50 leading-[1.8] tracking-wide cursor-pointer">
                                                    I agree to the{" "}
                                                    <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-[#cc5500] hover:text-[#f9f8f9] transition-colors">
                                                        Terms of Service
                                                    </a>{" "}
                                                    and{" "}
                                                    <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-[#cc5500] hover:text-[#f9f8f9] transition-colors">
                                                        Privacy Policy
                                                    </a>. *
                                                </label>
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting || !formData.agreedToTerms}
                                                className="w-full px-8 py-5 bg-[#cc5500] text-[#f9f8f9] text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-[#a83f00] transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="w-4 h-4 border border-[#f9f8f9] border-t-transparent rounded-full animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4" /> Send Message
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </FadeIn>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <FadeIn delay={100}>
                                <div className="bg-[#161312] border border-[#f9f8f9]/5 p-10 h-full">
                                    <h2 className="font-serif text-2xl font-normal text-[#f9f8f9] mb-8 tracking-tight">
                                        Contact Info
                                    </h2>
                                    <div className="w-12 h-[1px] bg-[#cc5500] mb-8" />
                                    
                                    <div className="space-y-8">
                                        <a href="tel:+254700270670" className="flex items-start gap-5 group">
                                            <div className="w-10 h-10 border border-[#f9f8f9]/10 rounded-full flex items-center justify-center group-hover:border-[#cc5500] transition-colors duration-500 shrink-0">
                                                <Phone className="w-4 h-4 text-[#cc5500]" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#f9f8f9]/40 mb-1">Phone</p>
                                                <p className="text-sm text-[#f9f8f9] tracking-wide">+254 700 270 670</p>
                                            </div>
                                        </a>
                                        <a href="mailto:hello@maronlabs.com" className="flex items-start gap-5 group">
                                            <div className="w-10 h-10 border border-[#f9f8f9]/10 rounded-full flex items-center justify-center group-hover:border-[#cc5500] transition-colors duration-500 shrink-0">
                                                <Mail className="w-4 h-4 text-[#cc5500]" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#f9f8f9]/40 mb-1">Email</p>
                                                <p className="text-sm text-[#f9f8f9] tracking-wide">hello@maronlabs.com</p>
                                            </div>
                                        </a>
                                        <a href="https://www.maronlabs.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 group">
                                            <div className="w-10 h-10 border border-[#f9f8f9]/10 rounded-full flex items-center justify-center group-hover:border-[#cc5500] transition-colors duration-500 shrink-0">
                                                <Globe className="w-4 h-4 text-[#cc5500]" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#f9f8f9]/40 mb-1">Website</p>
                                                <p className="text-sm text-[#f9f8f9] tracking-wide">www.maronlabs.com</p>
                                            </div>
                                        </a>
                                        <div className="flex items-start gap-5">
                                            <div className="w-10 h-10 border border-[#f9f8f9]/10 rounded-full flex items-center justify-center shrink-0">
                                                <MapPin className="w-4 h-4 text-[#cc5500]" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#f9f8f9]/40 mb-1">Location</p>
                                                <p className="text-sm text-[#f9f8f9] tracking-wide leading-[1.8]">Nairobi, Kenya</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* WhatsApp CTA */}
                            <FadeIn delay={200}>
                                <div className="border border-[#25D366]/30 bg-[#25D366]/5 p-10 flex flex-col justify-center h-full">
                                    <h3 className="font-serif text-xl text-[#f9f8f9] mb-4 tracking-wide">Prefer WhatsApp?</h3>
                                    <p className="text-sm text-[#f9f8f9]/50 leading-[1.8] tracking-wide mb-8">Get a faster response by messaging us directly on WhatsApp.</p>
                                    <a
                                        href="https://wa.me/254700270670"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-[#ffffff] text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-[#128C7E] transition-colors duration-500"
                                    >
                                        <MessageCircle className="w-4 h-4" /> Chat Now
                                    </a>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <ProgressBar />
        </main>
    )
}
