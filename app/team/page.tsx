import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import ProgressBar from "@/components/progress-bar"
import PageLoader from "@/components/page-loader"
import { FadeIn } from "@/components/scroll-animations"
import Image from "next/image"
import TouchImage from "@/components/touch-image"
import { Linkedin, Mail, Github } from "lucide-react"

export const metadata = {
    title: "Our Team - Maron Labs",
    description: "Meet the talented professionals behind Maron Labs - designers, developers, and strategists dedicated to your success."
}

const team = [
    {
        name: "Billy Mark Rono",
        role: "Founder & Creative Developer",
        bio: "Blending design sensibility with technical expertise to craft seamless digital experiences. Billy transforms concepts into polished, user-friendly products through clean code and thoughtful design.",
        expertise: ["Full Stack Development", "UI/UX Design", "React & Next.js", "Django & Python"],
        initials: "BR",
        image: "/images/billy.webp",
        color: "from-[#cc5500] to-[#a83f00]",
        socials: {
            linkedin: "https://www.linkedin.com/in/billy-rono-9b3984374",
            github: "https://github.com/Billyrono",
            email: "Billyrono46@gmail.com"
        }
    },
    {
        name: "Emmanuel Kibet",
        role: "Software Developer",
        bio: "Fullstack developer with expertise in building modern, scalable web applications. Emmanuel combines proficiency in React, Node.js, and PostgreSQL to create innovative solutions that empower users across the continent.",
        expertise: ["React & Node.js", "PostgreSQL", "Express & Hono", "Redux Toolkit"],
        initials: "EK",
        image: "/images/kibet.webp",
        color: "from-[#161312] to-[#000000]",
        socials: {
            linkedin: "https://www.linkedin.com/in/emmanuel-kibet-592a4a259",
            email: "hello@maronlabs.com"
        }
    },
    {
        name: "Tiffany Nyawira",
        role: "Software Engineer",
        bio: "A passionate Fullstack Developer and Python enthusiast with a robust background in software development, web programming, and data science. Tiffany brings a diverse skill set and strong drive for innovation to every project, continuously seeking new challenges while mentoring others in the field of technology.",
        expertise: ["Fullstack Development", "Python", "Web Programming", "Machine Learning"],
        initials: "TN",
        image: "/images/tiffany.webp",
        color: "from-[#cc5500] to-[#fee2b2]",
        socials: {
            linkedin: "https://www.linkedin.com/in/mwaniki-tifany",
            github: "https://github.com/RivoltaAlpha",
            email: "mwanikitiffany25@gmail.com"
        }
    },
    {
        name: "Enock Kipkoech",
        role: "Full Stack Developer",
        bio: "Passionate Full Stack Developer with 3+ years of experience building modern, scalable web applications. Enock specializes in React, Supabase, and Tailwind CSS, delivering fast, functional digital solutions with seamless payment integrations including Stripe, PayPal, and M-Pesa.",
        expertise: ["React & Supabase", "SEO & Performance", "Payment Integrations", "Branding & UI"],
        initials: "EK",
        image: "/images/enock.webp",
        color: "from-[#161312] to-[#cc5500]",
        socials: {
            linkedin: "https://www.linkedin.com/",
            github: "https://github.com/",
            email: "kipkoech.int@gmail.com"
        }
    },
]

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-[#000000]">
            <PageLoader />
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#161312] overflow-hidden min-h-[80vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/team-hero.webp"
                        alt="Our Team"
                        fill
                        className="object-cover opacity-15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#161312]/30 to-[#161312]/80" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-6">
                        The People Behind Maron Labs
                    </p>
                    <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#f9f8f9] mb-8 tracking-tight">
                        Meet Our <span className="italic text-[#cc5500]">Team</span>
                    </h1>
                    <div className="w-16 h-[1px] bg-[#cc5500] mx-auto mb-8" />
                    <p className="text-base text-[#f9f8f9]/50 max-w-2xl mx-auto leading-relaxed tracking-wide">
                        Talented professionals dedicated to your success. Our multidisciplinary team combines creativity with technical expertise.
                    </p>
                </div>
            </section>

            {/* Team Members */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#f9f8f9]">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-32">
                        {team.map((member, index) => (
                            <FadeIn key={index} delay={index * 100}>
                                <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
                                    {/* Photo Container */}
                                    <div className="w-full lg:w-1/2">
                                        <div className="relative aspect-[4/5] group overflow-hidden border border-[#161312]/10 bg-[#161312]">
                                            {member.image ? (
                                                <TouchImage
                                                    src={member.image}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#161312] to-[#000000]">
                                                    <p className="font-serif text-8xl text-[#f9f8f9]/20 font-normal">
                                                        {member.initials}
                                                    </p>
                                                </div>
                                            )}
                                            {/* Decorative overlay corner */}
                                            <div className="absolute bottom-0 right-0 w-24 h-24 border-t border-l border-[#cc5500] bg-[#f9f8f9] flex items-center justify-center transform translate-x-1/2 translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                                                <span className="font-serif text-2xl text-[#cc5500] transform -translate-x-4 -translate-y-4">
                                                    {member.initials}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Content Container */}
                                    <div className="w-full lg:w-1/2">
                                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#cc5500] mb-4">{member.role}</p>
                                        <h3 className="font-serif text-4xl font-normal text-[#161312] mb-8 tracking-tight">
                                            {member.name}
                                        </h3>
                                        <div className="w-12 h-[1px] bg-[#cc5500] mb-8" />
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-10">
                                            {member.bio}
                                        </p>
                                        <div className="mb-10">
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#161312] mb-4">Core Expertise</p>
                                            <div className="flex flex-wrap gap-3">
                                                {member.expertise.map((skill, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-4 py-2 border border-[#161312]/10 text-[#161312] text-xs uppercase tracking-[0.1em]"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            {member.socials.linkedin && (
                                                <a
                                                    href={member.socials.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-12 h-12 border border-[#161312]/10 flex items-center justify-center hover:bg-[#cc5500] hover:border-[#cc5500] hover:text-[#f9f8f9] text-[#161312] transition-colors duration-500"
                                                >
                                                    <Linkedin className="w-4 h-4" />
                                                </a>
                                            )}
                                            {member.socials.github && (
                                                <a
                                                    href={member.socials.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-12 h-12 border border-[#161312]/10 flex items-center justify-center hover:bg-[#cc5500] hover:border-[#cc5500] hover:text-[#f9f8f9] text-[#161312] transition-colors duration-500"
                                                >
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            )}

                                            {member.socials.email && (
                                                <a
                                                    href={`mailto:${member.socials.email}`}
                                                    className="w-12 h-12 border border-[#161312]/10 flex items-center justify-center hover:bg-[#cc5500] hover:border-[#cc5500] hover:text-[#f9f8f9] text-[#161312] transition-colors duration-500"
                                                >
                                                    <Mail className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#161312]">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-center mb-20">
                            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#f9f8f9] tracking-tight mb-6">
                                Why Work With Us?
                            </h2>
                            <div className="w-16 h-[1px] bg-[#cc5500] mx-auto" />
                        </div>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#f9f8f9]/10">
                        {[
                            { title: "Expert Team", desc: "Seasoned professionals with years of combined experience in digital solutions" },
                            { title: "Client-Focused", desc: "We prioritize your goals and work collaboratively to achieve them" },
                            { title: "Results-Driven", desc: "Every project is designed to deliver measurable business impact" },
                        ].map((item, index) => (
                            <FadeIn key={index} delay={index * 100}>
                                <div className="p-12 border-b md:border-b-0 md:border-r border-[#f9f8f9]/10 last:border-r-0 h-full group hover:bg-[#cc5500] transition-colors duration-700">
                                    <div className="w-16 h-16 border border-[#cc5500]/30 flex items-center justify-center mb-8 group-hover:border-[#f9f8f9]/30 transition-colors duration-700">
                                        <span className="font-serif text-2xl font-normal text-[#cc5500] group-hover:text-[#f9f8f9] transition-colors duration-700">0{index + 1}</span>
                                    </div>
                                    <h3 className="font-serif text-2xl text-[#f9f8f9] mb-4">{item.title}</h3>
                                    <p className="text-sm text-[#f9f8f9]/50 group-hover:text-[#f9f8f9]/90 leading-[1.8] tracking-wide transition-colors duration-700">{item.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#000000]">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-6">Careers</p>
                        <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#f9f8f9] mb-8 tracking-tight">
                            Want to Join Our Team?
                        </h2>
                        <div className="w-16 h-[1px] bg-[#cc5500] mx-auto mb-8" />
                        <p className="text-sm text-[#f9f8f9]/50 mb-12 max-w-2xl mx-auto leading-[1.8] tracking-wide">
                            We're always looking for talented individuals who share our passion for digital excellence. If you're creative, driven, and ready to make an impact, we'd love to hear from you.
                        </p>
                        <a
                            href="mailto:hello@maronlabs.com?subject=Career%20Inquiry"
                            className="group inline-flex items-center gap-3 px-10 py-4 bg-[#cc5500] text-[#f9f8f9] text-[13px] uppercase tracking-[0.25em] font-medium hover:bg-[#a83f00] transition-all duration-500"
                        >
                            <Mail className="w-4 h-4" /> Get in Touch
                        </a>
                    </FadeIn>
                </div>
            </section>

            <Footer />
            <ProgressBar />
        </main>
    )
}
