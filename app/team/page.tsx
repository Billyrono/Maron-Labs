import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import ProgressBar from "@/components/progress-bar"
import MobileCTA from "@/components/mobile-cta"
import PageLoader from "@/components/page-loader"
import { FadeIn } from "@/components/scroll-animations"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter, Mail, ArrowRight, Quote } from "lucide-react"

export const metadata = {
    title: "Our Team - Maron Labs",
    description: "Meet the talented professionals behind Maron Labs - designers, developers, and strategists dedicated to your success."
}

const team = [
    {
        name: "Billy Mark Rono",
        role: "Founder & Lead Designer",
        bio: "Visionary creative director with a passion for transforming ideas into exceptional digital experiences. Billy drives the creative vision and strategic direction of Maron Labs, ensuring every project exceeds expectations.",
        expertise: ["Creative Direction", "UI/UX Design", "Brand Strategy", "Project Leadership"],
        initials: "BR",
        color: "from-[#cc5500] to-[#a83f00]",
    },
    {
        name: "Emmanuel Kibet",
        role: "Senior Web Developer",
        bio: "Full-stack developer specializing in scalable, high-performance web applications. Emmanuel brings technical excellence to every project with expertise in modern frameworks and cutting-edge development practices.",
        expertise: ["Full-Stack Development", "React & Next.js", "Database Design", "API Integration"],
        initials: "EK",
        color: "from-[#161312] to-[#000000]",
    },
    {
        name: "Tiffany Nyawira",
        role: "Senior Software Developer",
        bio: "Expert in building robust backend systems and cloud-native solutions. Tiffany ensures technical excellence and system reliability across all projects, with a focus on scalability and performance.",
        expertise: ["Backend Systems", "Cloud Solutions", "System Architecture", "DevOps"],
        initials: "TN",
        color: "from-[#cc5500] to-[#fee2b2]",
    },
]

export default function TeamPage() {
    return (
        <main className="min-h-screen">
            <PageLoader />
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#161312] overflow-hidden min-h-[80vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/Alt Image.avif"
                        alt="Our Team"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#161312]/30 to-[#161312]/30" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-[#cc5500] mb-4 text-lg" style={{ fontFamily: "Yellowtail" }}>
                        The People Behind Maron Labs
                    </p>
                    <h1 className="text-5xl sm:text-6xl font-black text-[#f9f8f9] mb-6" style={{ fontFamily: "Oswald" }}>
                        Meet Our <span className="text-[#cc5500]">Team</span>
                    </h1>
                    <p className="text-xl text-[#f9f8f9]/80 max-w-2xl mx-auto">
                        Talented professionals dedicated to your success. Our multidisciplinary team combines creativity with technical expertise.
                    </p>
                </div>
            </section>

            {/* Team Members */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f9f8f9]">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-16">
                        {team.map((member, index) => (
                            <FadeIn key={index} delay={index * 200}>
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        <div className={`bg-gradient-to-br ${member.color} aspect-square max-w-md mx-auto rounded-lg flex items-center justify-center shadow-2xl`}>
                                            <p className="text-8xl font-black text-[#f9f8f9]" style={{ fontFamily: "Oswald" }}>
                                                {member.initials}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        <p className="text-[#cc5500] font-bold mb-2">{member.role}</p>
                                        <h3 className="text-3xl font-black text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                            {member.name}
                                        </h3>
                                        <p className="text-lg text-[#161312] leading-relaxed mb-6">
                                            {member.bio}
                                        </p>
                                        <div className="mb-6">
                                            <p className="text-sm font-bold text-[#979696] mb-3">EXPERTISE</p>
                                            <div className="flex flex-wrap gap-2">
                                                {member.expertise.map((skill, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-[#fee2b2] text-[#161312] rounded text-sm"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <a
                                                href="#"
                                                className="w-10 h-10 rounded-full bg-[#ffffff] border border-[#979696]/30 flex items-center justify-center hover:bg-[#cc5500] hover:border-[#cc5500] hover:text-[#f9f8f9] text-[#161312] transition-all"
                                            >
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                            <a
                                                href="#"
                                                className="w-10 h-10 rounded-full bg-[#ffffff] border border-[#979696]/30 flex items-center justify-center hover:bg-[#cc5500] hover:border-[#cc5500] hover:text-[#f9f8f9] text-[#161312] transition-all"
                                            >
                                                <Twitter className="w-4 h-4" />
                                            </a>
                                            <a
                                                href="mailto:hello@maronlabs.com"
                                                className="w-10 h-10 rounded-full bg-[#ffffff] border border-[#979696]/30 flex items-center justify-center hover:bg-[#cc5500] hover:border-[#cc5500] hover:text-[#f9f8f9] text-[#161312] transition-all"
                                            >
                                                <Mail className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ffffff]">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-black text-[#000000]" style={{ fontFamily: "Oswald" }}>
                                Why Work With Us?
                            </h2>
                        </div>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Expert Team", desc: "Seasoned professionals with years of combined experience in digital solutions" },
                            { title: "Client-Focused", desc: "We prioritize your goals and work collaboratively to achieve them" },
                            { title: "Results-Driven", desc: "Every project is designed to deliver measurable business impact" },
                        ].map((item, index) => (
                            <FadeIn key={index} delay={index * 100}>
                                <div className="text-center p-8 bg-[#f9f8f9] rounded-lg h-full">
                                    <div className="w-16 h-16 bg-[#cc5500] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-black text-[#f9f8f9]">{index + 1}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#000000] mb-2">{item.title}</h3>
                                    <p className="text-[#979696]">{item.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#161312]">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#f9f8f9] mb-6" style={{ fontFamily: "Oswald" }}>
                            Want to Join Our Team?
                        </h2>
                        <p className="text-lg text-[#f9f8f9]/80 mb-8 max-w-2xl mx-auto">
                            We're always looking for talented individuals who share our passion for digital excellence. If you're creative, driven, and ready to make an impact, we'd love to hear from you.
                        </p>
                        <a
                            href="mailto:hello@maronlabs.com?subject=Career%20Inquiry"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#cc5500] text-[#f9f8f9] rounded font-bold hover:bg-[#a83f00] transition-all hover:scale-105"
                        >
                            <Mail className="w-5 h-5" /> Get in Touch
                        </a>
                    </FadeIn>
                </div>
            </section>

            <Footer />
            <ProgressBar />
            <MobileCTA />
        </main>
    )
}
