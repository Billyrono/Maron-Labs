import { Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react"
import { FadeIn, ScaleIn } from "@/components/scroll-animations"

export default function CTA() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#161312] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#cc5500]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#fee2b2]/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeIn>
          <p className="text-[#cc5500] mb-4 font-medium" style={{ fontFamily: "Yellowtail" }}>
            Ready to Get Started?
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#f9f8f9] mb-6 text-balance"
            style={{ fontFamily: "Oswald" }}
          >
            Ready to Transform Your <span className="text-[#cc5500]">Digital Vision?</span>
          </h2>

          <p className="text-lg text-[#fee2b2] mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's collaborate and create something exceptional. Whether you're starting fresh or scaling up, we're here to
            help. We'd love to hear from you!
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="mailto:hello@maronlabs.com?subject=Project%20Inquiry"
              className="px-8 py-4 bg-[#cc5500] text-[#f9f8f9] rounded font-bold hover:bg-[#fee2b2] hover:text-[#161312] transition text-lg inline-flex items-center justify-center gap-2 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Get Started
            </a>
            <a
              href="https://wa.me/254700270670"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#cc5500] text-[#cc5500] rounded font-bold hover:bg-[#cc5500] hover:text-[#f9f8f9] transition text-lg inline-flex items-center justify-center gap-2 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </FadeIn>

        {/* Contact Info */}
        <div className="pt-12 border-t border-[#979696]/30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ScaleIn delay={300}>
            <a
              href="tel:+254700270670"
              className="group block p-6 rounded-lg hover:bg-[#000000]/30 transition"
            >
              <div className="w-12 h-12 bg-[#cc5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-[#f9f8f9]" />
              </div>
              <p className="text-[#979696] text-sm mb-1">Phone</p>
              <p className="text-[#f9f8f9] font-bold">+254 700 270 670</p>
            </a>
          </ScaleIn>

          <ScaleIn delay={400}>
            <a
              href="mailto:hello@maronlabs.com"
              className="group block p-6 rounded-lg hover:bg-[#000000]/30 transition"
            >
              <div className="w-12 h-12 bg-[#cc5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-[#f9f8f9]" />
              </div>
              <p className="text-[#979696] text-sm mb-1">Email</p>
              <p className="text-[#f9f8f9] font-bold">hello@maronlabs.com</p>
            </a>
          </ScaleIn>

          <ScaleIn delay={500}>
            <a
              href="https://www.maronlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-lg hover:bg-[#000000]/30 transition"
            >
              <div className="w-12 h-12 bg-[#cc5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-5 h-5 text-[#f9f8f9]" />
              </div>
              <p className="text-[#979696] text-sm mb-1">Website</p>
              <p className="text-[#f9f8f9] font-bold">www.maronlabs.com</p>
            </a>
          </ScaleIn>

          <ScaleIn delay={600}>
            <div className="p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#cc5500] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-5 h-5 text-[#f9f8f9]" />
              </div>
              <p className="text-[#979696] text-sm mb-1">Location</p>
              <p className="text-[#f9f8f9] font-bold">Nairobi, Kenya</p>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  )
}
