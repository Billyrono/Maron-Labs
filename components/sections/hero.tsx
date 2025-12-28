"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowDown, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatedCounter } from "@/components/scroll-animations"

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

      {/* Carousel Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-[#f9f8f9]/20 hover:bg-[#cc5500] rounded-full transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-[#f9f8f9]" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-[#f9f8f9]/20 hover:bg-[#cc5500] rounded-full transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-[#f9f8f9]" />
      </button>

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

        {/* Subheading - uncomment when ready */}
        {/* <p className="text-lg sm:text-xl text-[#f9f8f9]/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Maron Labs is a premium digital solutions agency crafting exceptional online experiences through web design,
          development, and strategic marketing. We blend creativity with cutting-edge technology to create impactful
          solutions that drive success.
        </p> */}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href="/contact"
            className="px-8 py-4 bg-[#cc5500] text-[#f9f8f9] rounded font-bold hover:bg-[#a83f00] transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </a>
          <a
            href="https://wa.me/254746537878"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-[#f9f8f9] text-[#f9f8f9] rounded font-bold hover:bg-[#f9f8f9] hover:text-[#161312] transition-all inline-flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Quick Stats with Animated Counters */}
        {/* <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-black text-[#cc5500]">
              <AnimatedCounter end={50} suffix="+" />
            </p>
            <p className="text-sm text-[#f9f8f9]/70">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-black text-[#cc5500]">
              <AnimatedCounter end={30} suffix="+" />
            </p>
            <p className="text-sm text-[#f9f8f9]/70">Clients</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-black text-[#cc5500]">
              <AnimatedCounter end={2024} duration={1500} />
            </p>
            <p className="text-sm text-[#f9f8f9]/70">Established</p>
          </div>
        </div> */}

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
