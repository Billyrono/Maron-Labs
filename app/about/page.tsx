import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import ProgressBar from "@/components/progress-bar"
import PageLoader from "@/components/page-loader"
import { FadeIn } from "@/components/scroll-animations"
import Image from "next/image"
import { Shield, Lock, FileCheck, Award, Target, Lightbulb, Users, Heart } from "lucide-react"

export const metadata = {
    title: "About Us - Maron Labs",
    description: "Learn about Maron Labs - a premium digital solutions agency crafting exceptional online experiences since 2025."
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
                        src="/images/about-hero.webp"
                        alt="About Maron Labs"
                        fill
                        className="object-cover opacity-15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#161312]/30 to-[#161312]/80" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-6">
                        Who We Are
                    </p>
                    <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#f9f8f9] mb-8 tracking-tight">
                        About <span className="italic text-[#cc5500]">Maron Labs</span>
                    </h1>
                    <div className="w-16 h-[1px] bg-[#cc5500] mx-auto mb-8" />
                    <p className="text-base text-[#f9f8f9]/50 max-w-2xl mx-auto leading-relaxed tracking-wide">
                        A premium digital solutions agency dedicated to crafting exceptional online experiences that drive business success.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#f9f8f9]">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-4">Our History</p>
                                <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#161312] mb-8 tracking-tight">
                                    Our Story
                                </h2>
                                <div className="w-12 h-[1px] bg-[#cc5500] mb-8" />
                                <p className="text-sm text-[#979696] mb-6 leading-[1.8] tracking-wide">
                                    Founded in 2025, Maron Labs emerged from a vision to bridge the gap between creative excellence
                                    and technical innovation. We recognized that businesses needed more than just websites – they
                                    needed digital partners who understand their unique challenges and goals.
                                </p>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    Today, we've grown into a full-service digital agency, serving clients across Kenya and beyond.
                                    Our team of designers, developers, and strategists work collaboratively to deliver solutions
                                    that not only look stunning but also drive measurable results.
                                </p>
                            </div>
                            <div className="relative h-[500px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                                <Image
                                    src="/images/alt-about.webp"
                                    alt="Maron Labs Team"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#cc5500]/10 mix-blend-multiply" />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#ffffff]">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#161312]/5">
                            <div className="p-16 bg-[#161312] text-[#f9f8f9] border-b md:border-b-0 md:border-r border-[#f9f8f9]/5">
                                <Target className="w-8 h-8 mb-8 text-[#cc5500]" />
                                <h3 className="font-serif text-3xl font-normal mb-6 tracking-wide">
                                    Our Vision
                                </h3>
                                <div className="w-8 h-[1px] bg-[#cc5500] mb-6" />
                                <p className="text-sm text-[#f9f8f9]/60 leading-[1.8] tracking-wide">
                                    To be a globally recognized digital solutions provider, renowned for creativity, innovation,
                                    and delivering transformative results for our clients. We aspire to set new standards in
                                    digital excellence across Africa and beyond.
                                </p>
                            </div>
                            <div className="p-16 bg-[#f9f8f9] text-[#161312]">
                                <Lightbulb className="w-8 h-8 mb-8 text-[#cc5500]" />
                                <h3 className="font-serif text-3xl font-normal mb-6 tracking-wide">
                                    Our Mission
                                </h3>
                                <div className="w-8 h-[1px] bg-[#cc5500] mb-6" />
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    To empower businesses with impactful digital solutions that combine creative excellence and
                                    technological innovation, helping them achieve their goals and stand out in the digital landscape.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#161312]">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-center mb-20">
                            <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-4">What Drives Us</p>
                            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#f9f8f9] tracking-tight mb-6">
                                Our Core Values
                            </h2>
                            <div className="w-16 h-[1px] bg-[#cc5500] mx-auto" />
                        </div>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge solutions that push boundaries" },
                            { icon: Award, title: "Excellence", desc: "Uncompromising quality in every project" },
                            { icon: Users, title: "Collaboration", desc: "True partnership with our clients" },
                            { icon: Heart, title: "Integrity", desc: "Honest, transparent relationships" },
                        ].map((value, index) => (
                            <FadeIn key={index} delay={index * 100}>
                                <div className="p-10 border border-[#f9f8f9]/10 hover:border-[#cc5500]/30 transition-all duration-500 h-full group bg-[#000000]/20">
                                    <div className="w-12 h-12 border border-[#cc5500]/30 flex items-center justify-center mb-8 group-hover:border-[#cc5500] transition-colors duration-500">
                                        <value.icon className="w-5 h-5 text-[#cc5500]" />
                                    </div>
                                    <h3 className="font-serif text-xl text-[#f9f8f9] mb-4 tracking-wide">{value.title}</h3>
                                    <p className="text-sm text-[#f9f8f9]/50 leading-[1.8] tracking-wide">{value.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Legal Compliance */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#000000]">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-center mb-20">
                            <h2 className="font-serif text-3xl font-normal text-[#f9f8f9] mb-6 tracking-tight">
                                Legal & Compliance
                            </h2>
                            <div className="w-16 h-[1px] bg-[#cc5500] mx-auto mb-6" />
                            <p className="text-sm uppercase tracking-[0.2em] text-[#f9f8f9]/40">Your trust and security are our priority</p>
                        </div>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <FadeIn delay={100}>
                            <a href="/terms" className="block p-10 bg-[#161312] border border-[#f9f8f9]/5 hover:border-[#cc5500]/40 transition-all duration-500 group">
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="w-12 h-12 border border-[#cc5500]/30 flex items-center justify-center group-hover:bg-[#cc5500] transition-colors duration-500">
                                        <FileCheck className="w-5 h-5 text-[#cc5500] group-hover:text-[#f9f8f9]" />
                                    </div>
                                    <h3 className="font-serif text-xl text-[#f9f8f9] tracking-wide">Terms of Service</h3>
                                </div>
                                <p className="text-sm text-[#f9f8f9]/50 leading-[1.8] tracking-wide">
                                    Read our comprehensive terms covering project agreements, payment terms, intellectual property rights, and client responsibilities.
                                </p>
                            </a>
                        </FadeIn>
                        <FadeIn delay={200}>
                            <a href="/privacy" className="block p-10 bg-[#161312] border border-[#f9f8f9]/5 hover:border-[#cc5500]/40 transition-all duration-500 group">
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="w-12 h-12 border border-[#cc5500]/30 flex items-center justify-center group-hover:bg-[#cc5500] transition-colors duration-500">
                                        <Lock className="w-5 h-5 text-[#cc5500] group-hover:text-[#f9f8f9]" />
                                    </div>
                                    <h3 className="font-serif text-xl text-[#f9f8f9] tracking-wide">Privacy Policy</h3>
                                </div>
                                <p className="text-sm text-[#f9f8f9]/50 leading-[1.8] tracking-wide">
                                    Learn how we collect, use, and protect your personal information. Your data security is our commitment.
                                </p>
                            </a>
                        </FadeIn>
                    </div>
                    <FadeIn delay={300}>
                        <div className="mt-16 text-center">
                            <div className="inline-flex flex-wrap justify-center gap-8 text-[11px] uppercase tracking-[0.2em] text-[#f9f8f9]/30">
                                <div className="flex items-center gap-3">
                                    <Shield className="w-4 h-4 text-[#cc5500]" />
                                    <span>Legally Registered Entity</span>
                                </div>
                                <div className="flex items-center gap-3">
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
        </main>
    )
}
