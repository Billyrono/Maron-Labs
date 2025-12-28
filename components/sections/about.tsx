import Image from "next/image"
import { Shield, Lock, FileCheck, Award } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f9f8f9]">
      <div className="max-w-6xl mx-auto">
        {/* Main About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Content */}
          <div>
            <p className="text-[#cc5500] mb-4 font-medium" style={{ fontFamily: "Yellowtail" }}>
              Who We Are
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black text-[#000000] mb-6 text-balance"
              style={{ fontFamily: "Oswald" }}
            >
              About Maron Labs
            </h2>
            <p className="text-lg text-[#161312] mb-6 leading-relaxed">
              Maron Labs is a leading digital solutions agency dedicated to crafting exceptional online experiences.
              Established in 2025, we specialize in web design, development, graphic design, SEO, content creation,
              and digital marketing services.
            </p>
            <p className="text-lg text-[#161312] mb-6 leading-relaxed">
              Our multidisciplinary team of designers, developers, and strategists collaborates closely with clients
              to deliver customized solutions tailored to their unique needs. We empower businesses by blending
              creativity with cutting-edge technology to create impactful solutions that drive success in the digital realm.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-10">
              <div className="text-center sm:text-left">
                <p className="text-4xl sm:text-5xl font-black text-[#cc5500]">50+</p>
                <p className="text-[#161312] font-medium">Projects Completed</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-4xl sm:text-5xl font-black text-[#cc5500]">30+</p>
                <p className="text-[#161312] font-medium">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/Alt About.avif"
                alt="Maron Labs - Premium Digital Solutions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-[#f9f8f9]">
                <p className="text-2xl font-bold">Premium Digital Solutions</p>
                <p className="text-sm opacity-80">Crafted with precision since 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 bg-[#ffffff] rounded-lg border-l-4 border-[#cc5500] shadow-lg">
            <h3 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
              Our Vision
            </h3>
            <p className="text-[#161312] leading-relaxed text-lg">
              To be a globally recognized digital solutions provider, renowned for creativity, innovation,
              and delivering transformative results for our clients.
            </p>
          </div>
          <div className="p-8 bg-[#ffffff] rounded-lg border-l-4 border-[#cc5500] shadow-lg">
            <h3 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
              Our Mission
            </h3>
            <p className="text-[#161312] leading-relaxed text-lg">
              To empower businesses with impactful digital solutions that combine creative excellence and
              technological innovation, helping them achieve their goals and stand out in the digital landscape.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-black text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
            Our Core Values
          </h3>
          <p className="text-[#161312]">The principles that guide everything we do</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-[#ffffff] border-2 border-[#cc5500] rounded-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-[#000000] mb-3">Innovation</h3>
            <p className="text-[#161312]">Cutting-edge technology and creative solutions to stay ahead of the curve.</p>
          </div>
          <div className="p-8 bg-[#ffffff] border-2 border-[#cc5500] rounded-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-[#000000] mb-3">Quality</h3>
            <p className="text-[#161312]">Meticulous attention to detail in every project we undertake.</p>
          </div>
          <div className="p-8 bg-[#ffffff] border-2 border-[#cc5500] rounded-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-[#000000] mb-3">Partnership</h3>
            <p className="text-[#161312]">Collaborative approach ensuring your vision becomes reality.</p>
          </div>
        </div>

        {/* Legal Compliance Badges */}
        <div className="bg-[#161312] rounded-lg p-8 text-[#f9f8f9]">
          <h3 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: "Oswald" }}>
            Legal & Compliance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#cc5500] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium">Business Compliance</p>
              <p className="text-xs text-[#979696]">Legally registered entity</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#cc5500] rounded-full flex items-center justify-center mx-auto mb-3">
                <FileCheck className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium">Clear Contracts</p>
              <p className="text-xs text-[#979696]">Detailed agreements</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#cc5500] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium">IP Protection</p>
              <p className="text-xs text-[#979696]">Full ownership retained</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#cc5500] rounded-full flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium">Data Security</p>
              <p className="text-xs text-[#979696]">Confidential & secure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
