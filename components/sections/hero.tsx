"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowDown, MessageCircle } from "lucide-react"

const carouselImages = [
  {
    src: "/images/Image 1.svg",
    alt: "Digital Solutions"
  },
  {
    src: "/images/Image 2.svg",
    alt: "Creative Design"
  },
  {
    src: "/images/our-services.webp",
    alt: "Our Services"
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Fade in on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Auto-slide every 6 seconds (slower for luxury feel)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
              }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-[8000ms] ease-out"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Refined dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/70 via-[#000000]/50 to-[#161312]/90 z-10" />
      </div>

      {/* Subtle decorative lines */}
      <div className="absolute top-1/2 left-8 w-px h-24 bg-gradient-to-b from-transparent via-[#cc5500]/30 to-transparent z-20 hidden lg:block" />
      <div className="absolute top-1/2 right-8 w-px h-24 bg-gradient-to-b from-transparent via-[#cc5500]/30 to-transparent z-20 hidden lg:block" />

      {/* Carousel Indicators - elegant thin lines instead of dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-[2px] rounded-full transition-all duration-700 ${index === currentSlide
              ? "bg-[#cc5500] w-12"
              : "bg-[#f9f8f9]/30 w-6 hover:bg-[#f9f8f9]/60"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className={`max-w-5xl mx-auto text-center relative z-10 sm:px-6 lg:px-8 transition-all duration-[1500ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        {/* Tagline */}
        <p className="text-sm sm:text-base uppercase tracking-[0.4em] text-[#fee2b2]/80 mb-4 font-light">
          Your Vision, Our Creation
        </p>

        {/* Thin decorative line */}
        <div className="w-16 h-[1px] bg-[#cc5500] mx-auto mb-8" />

        {/* Main Heading - using serif font for luxury feel */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-normal mb-8 text-[#f9f8f9] leading-[1.1] tracking-tight">
          Transforming Ideas into{" "}
          <span className="italic text-[#cc5500]">Digital Excellence</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#f9f8f9]/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed tracking-wide font-light mb-10">
          We craft premium digital experiences for brands that demand nothing less than extraordinary.
        </p>

        {/* CTA Buttons - refined, elegant styling */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="/contact"
            className="group px-10 py-4 bg-[#cc5500] text-[#f9f8f9] text-[13px] uppercase tracking-[0.25em] font-medium hover:bg-[#a83f00] transition-all duration-500 inline-flex items-center justify-center gap-3"
          >
            Start Your Project
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
          <a
            href="https://wa.me/254700270670"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-[#f9f8f9]/20 text-[#f9f8f9] text-[13px] uppercase tracking-[0.25em] font-medium hover:border-[#f9f8f9]/60 hover:bg-[#f9f8f9]/5 transition-all duration-500 inline-flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>

      </div>

      {/* Scroll Indicator - positioned above pagination
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex justify-center">
        <a
          href="#services"
          className="flex flex-col items-center text-[#f9f8f9]/30 hover:text-[#cc5500] transition-colors duration-500 group"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] mb-3">Explore</span>
          <div className="w-px h-8 bg-current opacity-50 group-hover:h-12 transition-all duration-500" />
        </a>
      </div> */}
    </section>
  )
}
