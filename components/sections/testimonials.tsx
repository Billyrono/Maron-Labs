"use client"

import Image from "next/image"
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
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#161312]">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <FadeIn>
                    <div className="text-center mb-20">
                        <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-4">
                            Testimonials
                        </p>
                        <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#f9f8f9] tracking-tight mb-6">
                            What Our Clients Say
                        </h2>
                        <div className="w-16 h-[1px] bg-[#cc5500] mx-auto" />
                    </div>
                </FadeIn>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <FadeIn key={index} delay={index * 150}>
                            <div className="relative p-10 border border-[#f9f8f9]/5 hover:border-[#cc5500]/20 transition-all duration-700 group">
                                {/* Thin accent line at top */}
                                <div className="absolute top-0 left-8 w-8 h-[1px] bg-[#cc5500]" />

                                {/* Quote Text */}
                                <p className="font-serif text-[#f9f8f9]/70 mb-10 leading-[1.9] italic text-lg tracking-wide">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-4">
                                    {/* Avatar - simple elegant circle */}
                                    <div className="w-10 h-10 border border-[#cc5500]/40 flex items-center justify-center">
                                        <span className="text-[#cc5500] text-[11px] font-medium tracking-wider">
                                            {testimonial.avatar}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-[12px] uppercase tracking-[0.2em] text-[#f9f8f9] font-medium">{testimonial.author}</p>
                                        <p className="text-[11px] uppercase tracking-[0.15em] text-[#979696] mt-0.5">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
