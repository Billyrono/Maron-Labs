import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import ProgressBar from "@/components/progress-bar"
import MobileCTA from "@/components/mobile-cta"
import PageLoader from "@/components/page-loader"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import { FadeIn } from "@/components/scroll-animations"

export const metadata = {
    title: "Our Portfolio - Maron Labs",
    description: "View our portfolio of successful projects including websites, apps, and digital solutions we've created for our clients in Kenya and beyond."
}

const projects = [
    {
        title: "Cartier Carter Realtors",
        category: "Real Estate",
        description: "A premium luxury real estate platform for one of Nairobi's leading agencies. We designed and developed a sophisticated website showcasing high-end property sales, exclusive rentals, and strategic investment opportunities. Features include advanced property search, virtual tours, and seamless inquiry systems.",
        image: "/images/cartiercarter.webp",
        tags: ["Web Design", "Development", "Real Estate", "UX/UI"],
        link: "https://cartiercarter.com"
    },
    {
        title: "Kenya High School",
        category: "Education",
        description: "A comprehensive, modern website for one of Kenya's prestigious high schools. We created a responsive platform that elegantly showcases academics, extracurricular activities, admissions processes, and school events. The clean UI and intuitive navigation make it easy for parents and students to find information.",
        image: "/images/shulesite.webp",
        tags: ["Education", "Web Design", "Responsive", "CMS"],
        link: "https://shulesite.netlify.app/"
    },
    {
        title: "Eagles Nest Villa",
        category: "Hospitality",
        description: "A stunning website for a luxury villa escape in Olkalou, Kenya. The site showcases the property's 4 bedrooms, breathtaking Aberdare mountain views, gourmet kitchen facilities, and premium amenities including Wi-Fi and 24/7 concierge support. We focused on immersive imagery and seamless booking experiences.",
        image: "/images/eaglesnest.webp",
        tags: ["Hospitality", "Booking System", "Luxury", "Photography"],
        link: "https://eaglesnest.co.ke"
    },
    {
        title: "Maron Group Realtors",
        category: "Real Estate",
        description: "A professional real estate platform built for showcasing premium properties across Kenya. The website features an intuitive property listing system, advanced filtering options, and dedicated pages for sales, rentals, and investment opportunities. Modern design meets powerful functionality.",
        image: "/images/marongroup.webp",
        tags: ["Real Estate", "Property Listings", "Web Development", "SEO"],
        link: "https://marongroup.netlify.app/"
    },
    {
        title: "Ricom Care Services",
        category: "Professional Services",
        description: "A clean, professional website for a leading cleaning and care services company in Kenya. We built a platform that effectively communicates their range of services, builds trust through testimonials, and makes it easy for potential clients to request quotes and book services online.",
        image: "/images/ricomcare.webp",
        tags: ["Services", "Corporate", "Lead Generation", "Responsive"],
        link: "https://ricomcareservices.co.ke"
    },
    {
        title: "Go Green Initiative",
        category: "Environmental",
        description: "An impactful website for an environmental sustainability initiative promoting eco-friendly practices and green solutions in Kenya. The platform features educational content, campaign information, and community engagement tools to inspire positive environmental action.",
        image: "/images/gogreen.webp",
        tags: ["Non-Profit", "Environment", "Community", "Awareness"],
        link: "#"
    }
]

export default function PortfolioPage() {
    return (
        <main className="min-h-screen">
            <PageLoader />
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#161312] overflow-hidden min-h-[80vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/Image 1.svg"
                        alt="Our Portfolio"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#161312]/30 to-[#161312]/30" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-[#cc5500] mb-4 text-lg" style={{ fontFamily: "Yellowtail" }}>
                        Our Work
                    </p>
                    <h1 className="text-5xl sm:text-6xl font-black text-[#f9f8f9] mb-6" style={{ fontFamily: "Oswald" }}>
                        Portfolio
                    </h1>
                    <p className="text-xl text-[#f9f8f9]/80 max-w-2xl mx-auto">
                        Explore our collection of successful projects showcasing our expertise in web design, development, and digital solutions for clients across Kenya and beyond.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f9f8f9]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <FadeIn key={index} delay={index * 100}>
                                <div className="bg-[#ffffff] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all group h-full flex flex-col">
                                    {/* Project Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </a>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#161312] to-transparent opacity-60" />
                                        <div className="absolute bottom-4 left-4">
                                            <span className="px-3 py-1 bg-[#cc5500] text-[#f9f8f9] text-sm rounded font-medium">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-xl font-bold text-[#000000]">{project.title}</h3>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-full bg-[#f9f8f9] hover:bg-[#cc5500] hover:text-[#f9f8f9] text-[#161312] transition-all"
                                            >
                                                <ArrowUpRight className="w-4 h-4" />
                                            </a>
                                        </div>
                                        <p className="text-[#979696] mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tags.map((tag, idx) => (
                                                <span key={idx} className="px-2 py-1 bg-[#fee2b2] text-[#161312] text-xs rounded font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#161312]">
                <FadeIn>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-black text-[#f9f8f9] mb-6" style={{ fontFamily: "Oswald" }}>
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-lg text-[#f9f8f9]/80 mb-8">
                            Let's create something amazing together. Get in touch to discuss your next digital project.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#cc5500] text-[#f9f8f9] rounded font-bold hover:bg-[#a83f00] transition-all hover:scale-105"
                        >
                            Get Started
                        </Link>
                    </div>
                </FadeIn>
            </section>

            <Footer />
            <ProgressBar />
            <MobileCTA />
        </main>
    )
}
