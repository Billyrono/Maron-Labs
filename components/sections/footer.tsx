"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter, Instagram, MessageCircle, ArrowUp, Phone, Mail, Globe, MapPin } from "lucide-react"
import { FadeIn } from "@/components/scroll-animations"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#000000] text-[#f9f8f9] pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Top: Logo & Tagline centered */}
        <FadeIn>
          <div className="text-center mb-20">
            <Image
              src="/logos/Maron Labs Black background Logo.svg"
              alt="Maron Labs"
              width={400}
              height={120}
              className="h-24 w-auto mx-auto mb-8"
            />
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#979696]">
              Your Vision, Our Creation
            </p>
          </div>
        </FadeIn>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#f9f8f9]/5 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          {/* About */}
          <FadeIn delay={0}>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#f9f8f9]/40 mb-6">About</h4>
              <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                Premium digital solutions agency crafting exceptional online experiences since 2025.
              </p>
            </div>
          </FadeIn>

          {/* Services */}
          <FadeIn delay={100}>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#f9f8f9]/40 mb-6">Services</h4>
              <ul className="space-y-3">
                {["Web Design & Dev", "Graphic Design", "SEO Optimization", "Content Creation", "Mobile Apps"].map((item) => (
                  <li key={item}>
                    <Link href="/services" className="text-sm text-[#979696] hover:text-[#f9f8f9] transition-colors duration-300 tracking-wide">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Company */}
          <FadeIn delay={200}>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#f9f8f9]/40 mb-6">Company</h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Our Team", href: "/team" },
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Contact", href: "/contact" },
                  { label: "Affiliates", href: "/affiliates" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-[#979696] hover:text-[#f9f8f9] transition-colors duration-300 tracking-wide">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Legal */}
          <FadeIn delay={250}>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#f9f8f9]/40 mb-6">Legal</h4>
              <ul className="space-y-3">
                {[
                  { label: "Terms of Service", href: "/terms" },
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Cookie Policy", href: "/cookie-policy" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-[#979696] hover:text-[#f9f8f9] transition-colors duration-300 tracking-wide">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Contact */}
          <FadeIn delay={300}>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#f9f8f9]/40 mb-6">Connect</h4>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+254700270670" className="text-sm text-[#979696] hover:text-[#f9f8f9] transition-colors duration-300 flex items-center gap-3 tracking-wide">
                    <Phone className="w-3.5 h-3.5 text-[#cc5500]" /> +254 700 270 670
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@maronlabs.com" className="text-sm text-[#979696] hover:text-[#f9f8f9] transition-colors duration-300 flex items-center gap-3 tracking-wide">
                    <Mail className="w-3.5 h-3.5 text-[#cc5500]" /> hello@maronlabs.com
                  </a>
                </li>
                <li className="text-sm text-[#979696] flex items-center gap-3 tracking-wide">
                  <MapPin className="w-3.5 h-3.5 text-[#cc5500]" /> Nairobi, Kenya
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex gap-4 mt-8">
                {[
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-[#f9f8f9]/10 flex items-center justify-center text-[#979696] hover:border-[#cc5500] hover:text-[#cc5500] transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#f9f8f9]/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#f9f8f9]/20">
            © {new Date().getFullYear()} Maron Labs. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#f9f8f9]/20">
            Designed & Developed by <span className="text-[#cc5500]/60">Maron Labs</span>
          </p>
        </div>
      </div>

      {/* Back to Top Button - refined */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-10 h-10 border border-[#f9f8f9]/10 bg-[#161312] text-[#f9f8f9]/50 hover:border-[#cc5500] hover:text-[#cc5500] transition-all duration-300 flex items-center justify-center z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  )
}
