"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Globe, Palette, PenTool, Search, BookOpen, Settings, Smartphone, ShoppingCart, Mail } from "lucide-react"
import { FadeIn } from "@/components/scroll-animations"

const services = [
  {
    title: "Web Dev & Design",
    description:
      "End-to-end web solutions combining creative design with cutting-edge development. Responsive, fast, and optimized for conversions across all devices.",
    icon: Globe,
    features: ["Custom Websites", "E-commerce", "Web Applications", "Responsive Design"],
  },
  {
    title: "Graphic Design",
    description:
      "Captivating visual communications from logos to marketing materials. Every design reflects your unique identity and vision with meticulous attention to detail.",
    icon: Palette,
    features: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics"],
  },
  {
    title: "Content Creation",
    description:
      "Engaging content that connects with your audience. From blogs to social media, we tell your story effectively with compelling narratives.",
    icon: PenTool,
    features: ["Blog Writing", "Copywriting", "Social Media", "Email Campaigns"],
  },
  {
    title: "SEO Optimization",
    description:
      "Strategic SEO to boost visibility and drive organic traffic. We implement comprehensive strategies to ensure your website reaches its full potential.",
    icon: Search,
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics"],
  },
  {
    title: "Digital Publications",
    description:
      "Professional e-books, whitepapers, and brochures. Visually appealing and optimized for digital consumption with proper formatting.",
    icon: BookOpen,
    features: ["E-books", "Whitepapers", "Brochures", "Reports"],
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing care for your digital assets. Updates, monitoring, security, and backup solutions to keep you running smoothly 24/7.",
    icon: Settings,
    features: ["Updates", "Security", "Backups", "Monitoring"],
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.",
    icon: Smartphone,
    features: ["iOS Apps", "Android Apps", "Cross-Platform", "App Maintenance"],
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Complete online store setup with payment integration, inventory management, and optimized checkout experiences.",
    icon: ShoppingCart,
    features: ["Online Stores", "Payment Integration", "Inventory", "Analytics"],
  },
  {
    title: "Email Marketing",
    description:
      "Strategic email campaigns that engage your audience, nurture leads, and drive conversions with personalized messaging.",
    icon: Mail,
    features: ["Campaigns", "Automation", "Newsletters", "A/B Testing"],
  },
]

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const visibleServices = []
  for (let i = 0; i < itemsPerPage; i++) {
    visibleServices.push(services[(currentIndex + i) % services.length])
  }

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-[#cc5500] mb-4 font-medium" style={{ fontFamily: "Yellowtail" }}>
              What We Offer
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black text-[#000000] mb-4 text-balance"
              style={{ fontFamily: "Oswald" }}
            >
              Our Services
            </h2>
            <p className="text-lg text-[#161312] max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
        </FadeIn>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={`${currentIndex}-${index}`}
                  className="group p-8 bg-[#f9f8f9] border-2 border-transparent hover:border-[#cc5500] rounded-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-14 h-14 bg-[#cc5500] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7 text-[#f9f8f9]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#000000] mb-3">{service.title}</h3>
                  <p className="text-[#161312] leading-relaxed mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-[#fee2b2] text-[#161312] rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 p-3 bg-[#f9f8f9] hover:bg-[#fee2b2] rounded-full transition shadow-lg border border-[#979696]/20"
            aria-label="Previous services"
          >
            <ChevronLeft className="w-5 h-5 text-[#cc5500]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 p-3 bg-[#f9f8f9] hover:bg-[#fee2b2] rounded-full transition shadow-lg border border-[#979696]/20"
            aria-label="Next services"
          >
            <ChevronRight className="w-5 h-5 text-[#cc5500]" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[#cc5500] w-6" : "bg-[#979696]/50 hover:bg-[#cc5500]/50"
                }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#cc5500] text-[#f9f8f9] rounded font-bold hover:bg-[#a83f00] transition"
          >
            Discuss Your Project
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
