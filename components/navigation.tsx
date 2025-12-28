"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

// Letter-by-letter rolling animation component
function RollingLink({ href, children, onClick, isScrolled }: { href: string; children: string; onClick?: () => void; isScrolled: boolean }) {
  const letters = children.split("")

  return (
    <Link
      href={href}
      className="relative overflow-hidden group flex"
      onClick={onClick}
    >
      {letters.map((letter, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden h-6"
        >
          <span
            className="flex flex-col transition-transform duration-300 group-hover:-translate-y-6"
            style={{ transitionDelay: `${index * 30}ms` }}
          >
            <span className={`text-sm font-medium h-6 flex items-center ${isScrolled ? "text-[#f9f8f9]" : "text-[#f9f8f9]"}`}>
              {letter === " " ? "\u00A0" : letter}
            </span>
            <span className="text-sm font-medium h-6 flex items-center text-[#cc5500]">
              {letter === " " ? "\u00A0" : letter}
            </span>
          </span>
        </span>
      ))}
    </Link>
  )
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine navbar state based on scroll position
  const isTransparent = scrollY < 50
  const isBlurred = scrollY >= 50 && scrollY < 150
  const isSolid = scrollY >= 150

  // Get navbar background classes - blur stays consistent when scrolled
  const getNavbarClasses = () => {
    if (isTransparent) {
      return "bg-transparent"
    } else {
      // Once scrolled, always show blurred state
      return "bg-[#161312]/60 backdrop-blur-md border-b border-[#f9f8f9]/10"
    }
  }

  // Content stays light colored since background is dark/transparent
  const showLightContent = true

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${getNavbarClasses()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - always use dark background logo since navbar is always dark/transparent */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/Maron Labs Black background Logo.svg"
              alt="Maron Labs"
              width={220}
              height={64}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <RollingLink href="/" isScrolled={showLightContent}>Home</RollingLink>
            <RollingLink href="/about" isScrolled={showLightContent}>About</RollingLink>
            <RollingLink href="/services" isScrolled={showLightContent}>Services</RollingLink>
            <RollingLink href="/portfolio" isScrolled={showLightContent}>Portfolio</RollingLink>
            <RollingLink href="/team" isScrolled={showLightContent}>Team</RollingLink>
            <RollingLink href="/contact" isScrolled={showLightContent}>Contact</RollingLink>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/254700270670"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-2 bg-[#cc5500] text-[#f9f8f9] rounded font-medium transition-all hover:scale-105 hover:bg-[#a83f00] text-sm"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 text-[#f9f8f9]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-[#f9f8f9]/10 bg-[#161312]/95 backdrop-blur-md animate-in slide-in-from-top duration-200">
            <Link
              href="/"
              className="block py-3 text-[#f9f8f9] hover:text-[#cc5500] transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-3 text-[#f9f8f9] hover:text-[#cc5500] transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block py-3 text-[#f9f8f9] hover:text-[#cc5500] transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="block py-3 text-[#f9f8f9] hover:text-[#cc5500] transition"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/team"
              className="block py-3 text-[#f9f8f9] hover:text-[#cc5500] transition"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="block py-3 text-[#f9f8f9] hover:text-[#cc5500] transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://wa.me/254700270670"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-6 py-3 bg-[#cc5500] text-[#f9f8f9] rounded text-center font-medium hover:bg-[#a83f00] transition"
            >
              Let's Talk on WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
