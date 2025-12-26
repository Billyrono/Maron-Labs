"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import ProgressBar from "@/components/progress-bar"
import MobileCTA from "@/components/mobile-cta"
import PageLoader from "@/components/page-loader"
import { FadeIn } from "@/components/scroll-animations"
import Image from "next/image"
import { Phone, Mail, MapPin, Globe, MessageCircle, Send, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Form submission logic - could integrate with email service
        const mailtoLink = `mailto:hello@maronlabs.com?subject=Project Inquiry from ${formData.name}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
        )}`
        window.location.href = mailtoLink
    }

    return (
        <main className="min-h-screen">
            <PageLoader />
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#161312] overflow-hidden min-h-[80vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/Alt Contact Image.avif"
                        alt="Contact Us"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#161312]/30 to-[#161312]/30" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-[#cc5500] mb-4 text-lg" style={{ fontFamily: "Yellowtail" }}>
                        Get in Touch
                    </p>
                    <h1 className="text-5xl sm:text-6xl font-black text-[#f9f8f9] mb-6" style={{ fontFamily: "Oswald" }}>
                        Contact <span className="text-[#cc5500]">Us</span>
                    </h1>
                    <p className="text-xl text-[#f9f8f9]/80 max-w-2xl mx-auto">
                        Ready to transform your digital vision? Let's collaborate and create something exceptional together.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f9f8f9]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <FadeIn>
                            <div className="bg-[#ffffff] rounded-lg p-8 shadow-lg h-full">
                                <h2 className="text-2xl font-bold text-[#000000] mb-6" style={{ fontFamily: "Oswald" }}>
                                    Send Us a Message
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-[#161312] mb-2">Your Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 border border-[#979696]/30 rounded focus:outline-none focus:border-[#cc5500] transition"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-[#161312] mb-2">Email Address *</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 border border-[#979696]/30 rounded focus:outline-none focus:border-[#cc5500] transition"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[#161312] mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 border border-[#979696]/30 rounded focus:outline-none focus:border-[#cc5500] transition"
                                                placeholder="+254 700 000 000"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#161312] mb-2">Service Interested In</label>
                                        <select
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            className="w-full px-4 py-3 border border-[#979696]/30 rounded focus:outline-none focus:border-[#cc5500] transition bg-white"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="Web Design & Development">Web Design & Development</option>
                                            <option value="Graphic Design">Graphic Design</option>
                                            <option value="Content Creation">Content Creation</option>
                                            <option value="SEO Optimization">SEO Optimization</option>
                                            <option value="Mobile App Development">Mobile App Development</option>
                                            <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#161312] mb-2">Your Message *</label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 border border-[#979696]/30 rounded focus:outline-none focus:border-[#cc5500] transition resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full px-8 py-4 bg-[#cc5500] text-[#f9f8f9] rounded font-bold hover:bg-[#a83f00] transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
                                    >
                                        <Send className="w-5 h-5" /> Send Message
                                    </button>
                                </form>
                            </div>
                        </FadeIn>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <FadeIn delay={100}>
                                <div>
                                    <h2 className="text-2xl font-bold text-[#000000] mb-6" style={{ fontFamily: "Oswald" }}>
                                        Contact Information
                                    </h2>
                                    <div className="space-y-4">
                                        <a href="tel:+254746537878" className="flex items-center gap-4 p-4 bg-[#ffffff] rounded-lg hover:shadow-lg transition group">
                                            <div className="w-12 h-12 bg-[#cc5500] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <Phone className="w-5 h-5 text-[#f9f8f9]" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-[#979696]">Phone</p>
                                                <p className="font-bold text-[#000000]">+254 746 537 878</p>
                                            </div>
                                        </a>
                                        <a href="mailto:hello@maronlabs.com" className="flex items-center gap-4 p-4 bg-[#ffffff] rounded-lg hover:shadow-lg transition group">
                                            <div className="w-12 h-12 bg-[#cc5500] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <Mail className="w-5 h-5 text-[#f9f8f9]" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-[#979696]">Email</p>
                                                <p className="font-bold text-[#000000]">hello@maronlabs.com</p>
                                            </div>
                                        </a>
                                        <a href="https://www.maronlabs.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-[#ffffff] rounded-lg hover:shadow-lg transition group">
                                            <div className="w-12 h-12 bg-[#cc5500] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <Globe className="w-5 h-5 text-[#f9f8f9]" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-[#979696]">Website</p>
                                                <p className="font-bold text-[#000000]">www.maronlabs.com</p>
                                            </div>
                                        </a>
                                        <div className="flex items-center gap-4 p-4 bg-[#ffffff] rounded-lg">
                                            <div className="w-12 h-12 bg-[#cc5500] rounded-full flex items-center justify-center">
                                                <MapPin className="w-5 h-5 text-[#f9f8f9]" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-[#979696]">Location</p>
                                                <p className="font-bold text-[#000000]">Nairobi, Kenya</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* WhatsApp CTA */}
                            <FadeIn delay={200}>
                                <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-lg p-6 text-[#ffffff]">
                                    <h3 className="text-xl font-bold mb-2">Prefer WhatsApp?</h3>
                                    <p className="opacity-90 mb-4">Get a faster response by messaging us directly on WhatsApp.</p>
                                    <a
                                        href="https://wa.me/254746537878"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffffff] text-[#25D366] rounded font-bold hover:bg-[#f9f8f9] transition hover:scale-105"
                                    >
                                        <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                                    </a>
                                </div>
                            </FadeIn>

                            {/* Response Time */}
                            <FadeIn delay={300}>
                                <div className="bg-[#161312] rounded-lg p-6 text-[#f9f8f9]">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Clock className="w-6 h-6 text-[#cc5500]" />
                                        <h3 className="text-xl font-bold">Response Time</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-[#cc5500]" />
                                            <span className="text-[#f9f8f9]/80">Email: Within 24 hours</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-[#cc5500]" />
                                            <span className="text-[#f9f8f9]/80">WhatsApp: Within 2 hours</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-[#cc5500]" />
                                            <span className="text-[#f9f8f9]/80">Phone: Immediate (Office hours)</span>
                                        </li>
                                    </ul>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <ProgressBar />
            <MobileCTA />
        </main>
    )
}
