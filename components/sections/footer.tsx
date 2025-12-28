"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter, Instagram, MessageCircle, ArrowUp, Phone, Mail, Globe, MapPin } from "lucide-react"
import { FadeIn, ScaleIn } from "@/components/scroll-animations"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#000000] text-[#f9f8f9] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <FadeIn delay={0} direction="up">
            <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex justify-center md:justify-start w-full">
                <Image
                  src="/logos/Maron Labs Black background Logo.svg"
                  alt="Maron Labs"
                  width={260}
                  height={80}
                  className="h-20 w-auto mb-4"
                />
              </div>
              <p className="text-[#979696] text-sm mb-4">Your Vision, Our Creation</p>
              <p className="text-[#979696] text-sm leading-relaxed">
                Premium digital solutions agency crafting exceptional online experiences since 2025.
              </p>
            </div>
          </FadeIn>

          {/* Services */}
          <FadeIn delay={100} direction="up">
            <div>
              <h4 className="font-bold text-[#f9f8f9] mb-4">Services</h4>
              <ul className="space-y-2 text-[#979696] text-sm">
                <li>
                  <Link href="/services" className="hover:text-[#cc5500] transition hover:translate-x-1 inline-block">
                    Web Design & Dev
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#cc5500] transition hover:translate-x-1 inline-block">
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#cc5500] transition hover:translate-x-1 inline-block">
                    SEO Optimization
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#cc5500] transition hover:translate-x-1 inline-block">
                    Content Creation
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#cc5500] transition hover:translate-x-1 inline-block">
                    Mobile App Development
                  </Link>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Company */}
          <FadeIn delay={200} direction="up">
            <div>
              <h4 className="font-bold text-[#f9f8f9] mb-4">Company</h4>
              <ul className="space-y-2 text-[#979696] text-sm">
                <li>
                  <Link href="/about" className="hover:text-[#cc5500] transition hover:translate-x-1 inline-block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-[#cc5500] transition hover:translate-x-1 inline-block">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-[#cc5500] transition hover:translate-x-1 inline-block">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#cc5500] transition hover:translate-x-1 inline-block">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-[#cc5500] transition hover:translate-x-1 inline-block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#cc5500] transition hover:translate-x-1 inline-block">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Contact */}
          <FadeIn delay={300} direction="up">
            <div>
              <h4 className="font-bold text-[#f9f8f9] mb-4">Contact Us</h4>
              <ul className="space-y-3 text-[#979696] text-sm">
                <li>
                  <a href="tel:+254700270670" className="hover:text-[#cc5500] transition flex items-center gap-3 group">
                    <Phone className="w-4 h-4 text-[#cc5500] group-hover:scale-110 transition-transform" /> +254 700 270 670
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@maronlabs.com" className="hover:text-[#cc5500] transition flex items-center gap-3 group">
                    <Mail className="w-4 h-4 text-[#cc5500] group-hover:scale-110 transition-transform" /> hello@maronlabs.com
                  </a>
                </li>
                <li>
                  <a href="https://www.maronlabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#cc5500] transition flex items-center gap-3 group">
                    <Globe className="w-4 h-4 text-[#cc5500] group-hover:scale-110 transition-transform" /> www.maronlabs.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#cc5500]" /> Nairobi, Kenya
                </li>
              </ul>

              {/* WhatsApp Quick Contact */}
              <a
                href="https://wa.me/254700270670"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-[#ffffff] rounded text-sm font-medium hover:bg-[#128C7E] transition hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Divider */}
        <FadeIn delay={400} direction="up">
          <div className="border-t border-[#979696]/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#979696] text-sm">
                © {new Date().getFullYear()} Maron Labs. All rights reserved. Crafted with precision in Kenya.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#161312] flex items-center justify-center text-[#979696] hover:bg-[#cc5500] hover:text-[#f9f8f9] transition-all hover:scale-110 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#161312] flex items-center justify-center text-[#979696] hover:bg-[#cc5500] hover:text-[#f9f8f9] transition-all hover:scale-110 hover:-translate-y-1"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#161312] flex items-center justify-center text-[#979696] hover:bg-[#cc5500] hover:text-[#f9f8f9] transition-all hover:scale-110 hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Credits */}
        <ScaleIn delay={500}>
          <div className="text-center mt-8 pt-4 border-t border-[#979696]/10">
            <p className="text-[#979696]/50 text-xs">
              Designed & Developed by <span className="text-[#cc5500]">Maron Labs</span>
            </p>
          </div>
        </ScaleIn>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#cc5500] text-[#f9f8f9] rounded-full shadow-lg hover:bg-[#a83f00] transition-all hover:scale-110 flex items-center justify-center z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}
