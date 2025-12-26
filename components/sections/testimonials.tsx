"use client"

import Image from "next/image"
import { Quote } from "lucide-react"
import { FadeIn } from "@/components/scroll-animations"

const testimonials = [
    {
        quote: "Maron Labs transformed our online presence completely. Their attention to detail and creative vision exceeded our expectations.",
        author: "Sarah Mwangi",
        role: "Business Owner",
        avatar: "SM"
    },
    {
        quote: "Working with the team was a seamless experience. They delivered a stunning website that perfectly represents our brand.",
        author: "James Ochieng",
        role: "Entrepreneur",
        avatar: "JO"
    },
    {
        quote: "The best investment we made for our business. Our new website has significantly increased our customer engagement.",
        author: "Grace Wanjiku",
        role: "Managing Director",
        avatar: "GW"
    }
]

export default function Testimonials() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#161312]">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <FadeIn>
                    <div className="text-center mb-16">
                        <p className="text-[#cc5500] mb-4 text-lg" style={{ fontFamily: "Yellowtail" }}>
                            What Our Clients Say
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#f9f8f9]" style={{ fontFamily: "Oswald" }}>
                            Client Testimonials
                        </h2>
                    </div>
                </FadeIn>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <FadeIn key={index} delay={index * 150}>
                            <div className="bg-[#1f1d1c] rounded-lg p-8 relative group hover:bg-[#2a2726] transition-all duration-300">
                                {/* Quote Icon */}
                                <Quote className="w-10 h-10 text-[#cc5500] mb-6 opacity-50" />

                                {/* Quote Text */}
                                <p className="text-[#f9f8f9]/80 mb-8 leading-relaxed italic">
                                    "{testimonial.quote}"
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-4">
                                    {/* Avatar */}
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#cc5500] to-[#a83f00] flex items-center justify-center">
                                        <span className="text-[#f9f8f9] font-bold text-sm">
                                            {testimonial.avatar}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#f9f8f9]">{testimonial.author}</p>
                                        <p className="text-sm text-[#979696]">{testimonial.role}</p>
                                    </div>
                                </div>

                                {/* Decorative Border */}
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#cc5500] group-hover:w-full transition-all duration-500 rounded-b-lg" />
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
