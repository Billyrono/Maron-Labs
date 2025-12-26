import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import ProgressBar from "@/components/progress-bar"
import MobileCTA from "@/components/mobile-cta"
import PageLoader from "@/components/page-loader"
import { FadeIn } from "@/components/scroll-animations"
import Image from "next/image"
import { Shield, Lock, FileCheck, Award, Target, Lightbulb, Users, Heart } from "lucide-react"

export const metadata = {
    title: "About Us - Maron Labs",
    description: "Learn about Maron Labs - a premium digital solutions agency crafting exceptional online experiences since 2024."
}

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <PageLoader />
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#161312] overflow-hidden min-h-[80vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/About us.jpeg"
                        alt="About Maron Labs"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#161312]/30 to-[#161312]/30" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-[#cc5500] mb-4 text-lg" style={{ fontFamily: "Yellowtail" }}>
                        Who We Are
                    </p>
                    <h1 className="text-5xl sm:text-6xl font-black text-[#f9f8f9] mb-6" style={{ fontFamily: "Oswald" }}>
                        About <span className="text-[#cc5500]">Maron Labs</span>
                    </h1>
                    <p className="text-xl text-[#f9f8f9]/80 max-w-2xl mx-auto">
                        A premium digital solutions agency dedicated to crafting exceptional online experiences that drive business success.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f9f8f9]">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-black text-[#000000] mb-6" style={{ fontFamily: "Oswald" }}>
                                    Our Story
                                </h2>
                                <p className="text-lg text-[#161312] mb-6 leading-relaxed">
                                    Founded in 2024, Maron Labs emerged from a vision to bridge the gap between creative excellence
                                    and technical innovation. We recognized that businesses needed more than just websites – they
                                    needed digital partners who understand their unique challenges and goals.
                                </p>
                                <p className="text-lg text-[#161312] mb-6 leading-relaxed">
                                    Today, we've grown into a full-service digital agency, serving clients across Kenya and beyond.
                                    Our team of designers, developers, and strategists work collaboratively to deliver solutions
                                    that not only look stunning but also drive measurable results.
                                </p>
                                {/* <div className="flex gap-8 mt-8">
                                    <div className="text-center">
                                        <p className="text-4xl font-black text-[#cc5500]">50+</p>
                                        <p className="text-sm text-[#979696]">Projects Delivered</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-4xl font-black text-[#cc5500]">30+</p>
                                        <p className="text-sm text-[#979696]">Happy Clients</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-4xl font-black text-[#cc5500]">98%</p>
                                        <p className="text-sm text-[#979696]">Satisfaction Rate</p>
                                    </div>
                                </div> */}
                            </div>
                            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/Alt About.avif"
                                    alt="Maron Labs Team"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ffffff]">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-10 bg-gradient-to-br from-[#cc5500] to-[#a83f00] rounded-lg text-[#f9f8f9]">
                                <Target className="w-12 h-12 mb-6" />
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "Oswald" }}>
                                    Our Vision
                                </h3>
                                <p className="text-lg leading-relaxed opacity-90">
                                    To be a globally recognized digital solutions provider, renowned for creativity, innovation,
                                    and delivering transformative results for our clients. We aspire to set new standards in
                                    digital excellence across Africa and beyond.
                                </p>
                            </div>
                            <div className="p-10 bg-[#161312] rounded-lg text-[#f9f8f9]">
                                <Lightbulb className="w-12 h-12 mb-6 text-[#cc5500]" />
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "Oswald" }}>
                                    Our Mission
                                </h3>
                                <p className="text-lg leading-relaxed opacity-90">
                                    To empower businesses with impactful digital solutions that combine creative excellence and
                                    technological innovation, helping them achieve their goals and stand out in the digital landscape.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f9f8f9]">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <p className="text-[#cc5500] mb-4" style={{ fontFamily: "Yellowtail" }}>What Drives Us</p>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#000000]" style={{ fontFamily: "Oswald" }}>
                                Our Core Values
                            </h2>
                        </div>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge solutions that push boundaries" },
                            { icon: Award, title: "Excellence", desc: "Uncompromising quality in every project" },
                            { icon: Users, title: "Collaboration", desc: "True partnership with our clients" },
                            { icon: Heart, title: "Integrity", desc: "Honest, transparent relationships" },
                        ].map((value, index) => (
                            <FadeIn key={index} delay={index * 100}>
                                <div className="p-6 bg-[#ffffff] rounded-lg border-2 border-transparent hover:border-[#cc5500] transition-all group h-full">
                                    <value.icon className="w-10 h-10 text-[#cc5500] mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-xl font-bold text-[#000000] mb-2">{value.title}</h3>
                                    <p className="text-[#979696]">{value.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Legal Compliance */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#161312]">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-black text-[#f9f8f9] mb-4" style={{ fontFamily: "Oswald" }}>
                                Legal & Compliance
                            </h2>
                            <p className="text-[#979696]">Your trust and security are our priority</p>
                        </div>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <FadeIn delay={100}>
                            <a href="/terms" className="block p-8 bg-[#000000]/30 rounded-lg border border-[#979696]/20 hover:border-[#cc5500] transition-all group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 bg-[#cc5500] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <FileCheck className="w-7 h-7 text-[#f9f8f9]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#f9f8f9]">Terms of Service</h3>
                                </div>
                                <p className="text-[#979696] leading-relaxed">
                                    Read our comprehensive terms covering project agreements, payment terms, intellectual property rights, and client responsibilities.
                                </p>
                            </a>
                        </FadeIn>
                        <FadeIn delay={200}>
                            <a href="/privacy" className="block p-8 bg-[#000000]/30 rounded-lg border border-[#979696]/20 hover:border-[#cc5500] transition-all group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 bg-[#cc5500] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Lock className="w-7 h-7 text-[#f9f8f9]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#f9f8f9]">Privacy Policy</h3>
                                </div>
                                <p className="text-[#979696] leading-relaxed">
                                    Learn how we collect, use, and protect your personal information. Your data security is our commitment.
                                </p>
                            </a>
                        </FadeIn>
                    </div>
                    <FadeIn delay={300}>
                        <div className="mt-12 text-center">
                            <div className="inline-flex flex-wrap justify-center gap-6 text-sm text-[#979696]">
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-[#cc5500]" />
                                    <span>Legally Registered Entity</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Award className="w-4 h-4 text-[#cc5500]" />
                                    <span>Full IP Ownership Retained</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
            <ProgressBar />
            <MobileCTA />
        </main>
    )
}
