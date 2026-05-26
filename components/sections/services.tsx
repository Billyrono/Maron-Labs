"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { ChevronLeft, ChevronRight, Globe, Palette, PenTool, Search, Smartphone, ShoppingCart, Monitor, Cpu, Database, Laptop } from "lucide-react"
import { FadeIn } from "@/components/scroll-animations"

const services = [
  {
    title: "System Development",
    description: "Enterprise-grade software solutions and complete tech system management. We build robust, scalable architectures.",
    icon: Database,
    features: ["Custom Software", "Cloud Architecture", "API Development"],
  },
  {
    title: "AI Development",
    description: "Cutting-edge AI integration and corporate training programs. We help businesses leverage machine learning.",
    icon: Cpu,
    features: ["AI Integration", "Machine Learning", "Workflow Automation"],
  },
  {
    title: "Tech Products",
    description: "Premium tech hardware sourcing and deployment. From corporate laptops to specialized setups.",
    icon: Laptop,
    features: ["Corporate Laptops", "Office Setup", "Tech Procurement"],
  },
  {
    title: "Web Design & Dev",
    description: "End-to-end web solutions combining creative design with cutting-edge development. Responsive and fast.",
    icon: Globe,
    features: ["Custom Websites", "Web Applications", "Responsive Design"],
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    icon: Smartphone,
    features: ["iOS Development", "Android Development", "Cross-Platform Apps"],
  },
  {
    title: "E-Commerce",
    description: "Complete online store setup with payment integration, inventory management, and optimized checkouts.",
    icon: ShoppingCart,
    features: ["Store Setup", "Payment Gateways", "Inventory Management"],
  },
  {
    title: "Graphic Design",
    description: "Captivating visual communications that tell your brand story. From logos to complete brand identities.",
    icon: Palette,
    features: ["Logo Design", "Brand Identity", "Marketing Materials"],
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing and SEO to boost visibility. We implement comprehensive strategies to drive traffic.",
    icon: Search,
    features: ["Keyword Research", "Technical SEO", "Content Strategy"],
  },
]

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [itemsPerView, setItemsPerView] = useState(3)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  // Detect screen size and set items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 450) {
        setItemsPerView(1)
      } else if (window.innerWidth < 950) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  // Reset index when switching between mobile/desktop to prevent out-of-bounds
  useEffect(() => {
    setCurrentIndex(0)
  }, [itemsPerView])

  // Auto-scroll every 5 seconds (slower for luxury)
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }, [])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }, [])

  // Touch handlers for swipe support on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return
    const distance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      handleNext()
    } else if (distance < -minSwipeDistance) {
      handlePrevious()
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  // Calculate translateX percentage based on items per view
  const slidePercentage = 100 / itemsPerView
  const translateX = (currentIndex % services.length) * slidePercentage

  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#f9f8f9]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-4">
              What We Offer
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#161312] mb-6 tracking-tight">
              Our Services
            </h2>
            <div className="w-16 h-[1px] bg-[#cc5500] mx-auto mb-6" />
            <p className="text-base text-[#979696] max-w-2xl mx-auto leading-relaxed tracking-wide">
              Comprehensive digital solutions tailored to elevate your brand
            </p>
          </div>
        </FadeIn>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${translateX}%)` }}
            >
              {/* Render all services for smooth infinite scroll */}
              {[...services, ...services.slice(0, itemsPerView)].map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 px-4"
                    style={{ width: `${slidePercentage}%` }}
                  >
                    <div className="group p-10 bg-[#ffffff] border border-[#161312]/5 hover:border-[#cc5500]/30 transition-all duration-500 h-full hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                      <div className="w-12 h-12 border border-[#cc5500]/30 flex items-center justify-center mb-8 group-hover:bg-[#cc5500] group-hover:border-[#cc5500] transition-all duration-500">
                        <IconComponent className="w-5 h-5 text-[#cc5500] group-hover:text-[#f9f8f9] transition-colors duration-500" />
                      </div>
                      <h3 className="font-serif text-xl text-[#161312] mb-4 tracking-wide">{service.title}</h3>
                      <p className="text-sm text-[#979696] leading-[1.8] mb-6">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-[9px] uppercase tracking-widest px-3 py-1.5 bg-[#f9f8f9] border border-[#161312]/15 text-[#161312]/70 font-medium group-hover:border-[#cc5500]/40 group-hover:bg-[#cc5500]/5 group-hover:text-[#cc5500] transition-all duration-500"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation Buttons - refined */}
          <button
            onClick={handlePrevious}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 border border-[#161312]/10 hover:border-[#cc5500] hover:text-[#cc5500] text-[#161312] transition-all duration-300 z-10 bg-[#f9f8f9]"
            aria-label="Previous services"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 border border-[#161312]/10 hover:border-[#cc5500] hover:text-[#cc5500] text-[#161312] transition-all duration-300 z-10 bg-[#f9f8f9]"
            aria-label="Next services"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Elegant line indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-[2px] rounded-full transition-all duration-500 ${index === currentIndex ? "bg-[#cc5500] w-10" : "bg-[#161312]/15 w-4 hover:bg-[#cc5500]/40"
                }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Services CTA - refined */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-10 py-4 border border-[#161312] text-[#161312] text-[13px] uppercase tracking-[0.25em] font-medium hover:bg-[#161312] hover:text-[#f9f8f9] transition-all duration-500"
          >
            Discuss Your Project
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}
