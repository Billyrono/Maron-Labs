import { Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react"
import { FadeIn } from "@/components/scroll-animations"

export default function CTA() {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#161312] relative overflow-hidden">
      {/* Subtle decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#cc5500]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#fee2b2]/5 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-4">
            Get In Touch
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#f9f8f9] mb-8 tracking-tight">
            Ready to Transform Your{" "}
            <span className="italic text-[#cc5500]">Digital Vision?</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#cc5500] mx-auto mb-8" />

          <p className="text-base text-[#f9f8f9]/50 mb-14 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Let&apos;s collaborate and create something exceptional. Whether you&apos;re starting fresh or scaling up, we&apos;re here to help.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <a
              href="mailto:hello@maronlabs.com?subject=Project%20Inquiry"
              className="group px-10 py-4 bg-[#cc5500] text-[#f9f8f9] text-[13px] uppercase tracking-[0.25em] font-medium hover:bg-[#a83f00] transition-all duration-500 inline-flex items-center justify-center gap-3"
            >
              <Mail className="w-4 h-4" />
              Get Started
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
              WhatsApp Us
            </a>
          </div>
        </FadeIn>

        {/* Contact Info - refined elegant grid */}
        <div className="pt-16 border-t border-[#f9f8f9]/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <FadeIn delay={300}>
            <a
              href="tel:+254700270670"
              className="group block p-6 hover:bg-[#f9f8f9]/[0.02] transition-all duration-500"
            >
              <div className="w-10 h-10 border border-[#cc5500]/30 flex items-center justify-center mx-auto mb-5 group-hover:border-[#cc5500] transition-colors duration-500">
                <Phone className="w-4 h-4 text-[#cc5500]" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#979696] mb-2">Phone</p>
              <p className="text-sm text-[#f9f8f9] tracking-wide">+254 700 270 670</p>
            </a>
          </FadeIn>

          <FadeIn delay={400}>
            <a
              href="mailto:hello@maronlabs.com"
              className="group block p-6 hover:bg-[#f9f8f9]/[0.02] transition-all duration-500"
            >
              <div className="w-10 h-10 border border-[#cc5500]/30 flex items-center justify-center mx-auto mb-5 group-hover:border-[#cc5500] transition-colors duration-500">
                <Mail className="w-4 h-4 text-[#cc5500]" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#979696] mb-2">Email</p>
              <p className="text-sm text-[#f9f8f9] tracking-wide">hello@maronlabs.com</p>
            </a>
          </FadeIn>

          <FadeIn delay={500}>
            <a
              href="https://www.maronlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 hover:bg-[#f9f8f9]/[0.02] transition-all duration-500"
            >
              <div className="w-10 h-10 border border-[#cc5500]/30 flex items-center justify-center mx-auto mb-5 group-hover:border-[#cc5500] transition-colors duration-500">
                <Globe className="w-4 h-4 text-[#cc5500]" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#979696] mb-2">Website</p>
              <p className="text-sm text-[#f9f8f9] tracking-wide">www.maronlabs.com</p>
            </a>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="p-6">
              <div className="w-10 h-10 border border-[#cc5500]/30 flex items-center justify-center mx-auto mb-5">
                <MapPin className="w-4 h-4 text-[#cc5500]" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#979696] mb-2">Location</p>
              <p className="text-sm text-[#f9f8f9] tracking-wide">Nairobi, Kenya</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
