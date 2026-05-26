"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

// Minimalist, high-tracking link component
function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      className="relative group text-[10px] uppercase tracking-[0.25em] text-[#f9f8f9]/60 hover:text-[#f9f8f9] transition-colors duration-500 py-4 flex items-center"
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute left-0 bottom-3 w-0 h-[1px] bg-[#cc5500] group-hover:w-full transition-all duration-700 ease-out" />
    </Link>
  )
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // The navbar starts transparent but has a very faint border. 
  // On scroll or hover, it gains a dark glassmorphism background.
  const isScrolled = scrollY > 50
  const isActive = isScrolled || isHovered || isOpen

  return (
    <nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 w-full z-50 transition-all duration-700 border-b ${
        isActive 
          ? "bg-[#000000]/80 backdrop-blur-xl border-[#f9f8f9]/10 py-2" 
          : "bg-transparent border-[#f9f8f9]/5 py-4"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 group">
            <div className="relative overflow-hidden">
                <Image
                src="/logos/Maron Labs Black background Logo.svg"
                alt="Maron Labs"
                width={280}
                height={70}
                className={`w-auto transition-all duration-700 ${isActive ? 'h-10' : 'h-12'} group-hover:opacity-80`}
                priority
                />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/team">Team</NavLink>
            <NavLink href="/affiliates">Affiliates</NavLink>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              href="/contact"
              className="text-[10px] uppercase tracking-[0.25em] text-[#f9f8f9] hover:text-[#cc5500] transition-colors duration-500"
            >
              Contact
            </Link>
            
            <div className="w-[1px] h-4 bg-[#f9f8f9]/20" />
            
            <a
              href="https://wa.me/254700270670"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-2.5 overflow-hidden flex items-center justify-center border border-[#cc5500]"
            >
              <span className="absolute inset-0 w-full h-full bg-[#cc5500] group-hover:bg-transparent transition-colors duration-500" />
              <span className="relative text-[10px] uppercase tracking-[0.2em] font-medium text-[#f9f8f9] group-hover:text-[#cc5500] transition-colors duration-500">
                Let's Talk
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#f9f8f9]/70 hover:text-[#f9f8f9] transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 stroke-[1]" /> : <Menu className="w-6 h-6 stroke-[1]" />}
          </button>
        </div>
      </div>

      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-[#000000]/95 backdrop-blur-2xl border-b border-[#f9f8f9]/10 transition-all duration-700 ${
            isOpen ? "max-h-[calc(100vh-4rem)] overflow-y-auto opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/team", label: "Team" },
            { href: "/affiliates", label: "Affiliates" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }, index) => (
            <div key={href} className="overflow-hidden">
                <Link
                href={href}
                className="block text-2xl font-serif text-[#f9f8f9] hover:text-[#cc5500] transition-colors duration-500"
                onClick={() => setIsOpen(false)}
                style={{
                    transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
                    transition: `transform 500ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 50}ms`
                }}
                >
                {label}
                </Link>
            </div>
          ))}
          <div className="mt-4 pt-8 border-t border-[#f9f8f9]/10">
            <a
              href="https://wa.me/254700270670"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-4 bg-[#cc5500] text-[#f9f8f9] text-[11px] uppercase tracking-[0.2em] font-medium"
            >
              Let's Talk on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
