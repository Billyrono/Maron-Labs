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

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  return (
    <section className="h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#000000]/60 z-10" />
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
              ? "bg-[#cc5500] w-8"
              : "bg-[#f9f8f9]/50 hover:bg-[#f9f8f9]/80"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-[#fee2b2] mb-8" style={{ fontFamily: "Yellowtail", fontStyle: "italic" }}>
          Your Vision, Our Creation
        </p>

        {/* Main Heading */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 text-[#f9f8f9] leading-tight text-balance"
          style={{ fontFamily: "Oswald" }}
        >
          Transforming Ideas into <span className="text-[#cc5500]">Digital Excellence</span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href="/contact"
            className="px-8 py-4 bg-[#cc5500] text-[#f9f8f9] rounded font-bold hover:bg-[#a83f00] transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </a>
          <a
            href="https://wa.me/254700270670"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-[#f9f8f9] text-[#f9f8f9] rounded font-bold hover:bg-[#f9f8f9] hover:text-[#161312] transition-all inline-flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#services"
            className="flex flex-col items-center text-[#f9f8f9] hover:text-[#cc5500] transition animate-bounce"
          >
            <span className="text-sm mb-2">Explore Our Services</span>
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
