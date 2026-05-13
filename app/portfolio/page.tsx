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
        link: "https://shulesite.netlify.app"
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
        link: "https://marongroup.netlify.app"
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
        title: "Savannah Trails Kenya",
        category: "Travel & Tourism",
        description: "A stunning travel and tourism website showcasing authentic Kenyan experiences — from unforgettable safaris in the Maasai Mara to pristine beaches of Diani and vibrant cultural experiences in Nairobi. The platform features tour packages, gallery, booking system, and expert local guide profiles.",
        image: "/images/savannahtrails.webp",
        tags: ["Tourism", "Travel", "Safari", "Booking"],
        link: "https://savannahtrailskenya.co.ke"
    },
    {
        title: "CareerWiz",
        category: "Education & AI",
        description: "An innovative application using Machine Learning to provide students with personalized career guidance based on their personal interests and academic performance. This platform bridges the gap of lack of personalized guidance for students seeking career direction.",
        image: "/images/careerwiz.png",
        tags: ["React.js", "Node.js", "Hono", "PostgreSQL"],
        link: "https://careerwiz-frontend.vercel.app"
    },
    {
        title: "AniRent",
        category: "Vehicle Management",
        description: "A comprehensive Vehicle Management System application that allows users to manage vehicle rentals efficiently. Features include streamlined bookings, secure payment processing, and complete fleet management capabilities for rental businesses.",
        image: "/images/anirent.png",
        tags: ["React.js", "TailwindCSS", "Redux", "TypeScript"],
        link: "https://ashy-mud-06186b40f.5.azurestaticapps.net"
    },
    {
        title: "SurgeProcure",
        category: "E-Procurement",
        description: "A collaborative e-procurement platform built to streamline the procurement process for organizations. The platform ensures efficiency and transparency throughout the entire procurement lifecycle, from requisition to payment.",
        image: "/images/surge.png",
        tags: ["React.js", "Node.js", "Hono", "PostgreSQL"],
        link: "https://www.surgeprocure.co.ke"
    },
    {
        title: "Computer Society of Kirinyaga",
        category: "Community",
        description: "The official website of the Computer Society of Kirinyaga, dedicated to promoting technology-related events and sharing resources within the Kirinyaga University Tech community. A hub for tech enthusiasts and students.",
        image: "/images/csk.png",
        tags: ["React.js", "TailwindCSS", "Node.js", "Drizzle"],
        link: "https://computersocietyofkirinyaga.tech"
    },
    {
        title: "Cyber Eyes Networks",
        category: "Cybersecurity",
        description: "A web application dedicated to showcasing cybersecurity content and resources. It offers various tools, techniques, and educational materials related to cybersecurity awareness and best practices.",
        image: "/images/cyber.png",
        tags: ["React.js", "Node.js", "Hono", "PostgreSQL"],
        link: "https://cybereyesnetworks.co.ke"
    },
    {
        title: "CodeWorld",
        category: "Developer Tools",
        description: "A platform for sharing and collaborating on code projects. Users can create, edit, and manage projects in a seamless environment designed for developers who want to work together efficiently.",
        image: "/images/code.png",
        tags: ["React.js", "Node.js", "Hono", "TailwindCSS"],
        link: "https://codeworld-frontend.vercel.app"
    },
    {
        title: "Queen's Mart",
        category: "E-Commerce",
        description: "Queens Mart is your one-stop destination for convenience, style, and quality. Combining a supermarket, boutique, café, and spare parts shop, we offer exceptional service and premium products in a welcoming atmosphere. Whether shopping for essentials, updating your wardrobe, enjoying a meal, or finding reliable spare parts.",
        image: "/images/Queens.png",
        tags: ["Retail", "Supermarket", "Boutique", "Café"],
        link: "https://queensmart.netlify.app"
    },
    {
        title: "FreshCart",
        category: "Grocery Delivery",
        description: "A revolutionary grocery shopping platform connecting communities with fresh, locally-sourced produce. Serving thousands of families across Kenya with farm-fresh groceries delivered right to their doorsteps, featuring lightning-fast delivery, quality guarantee, and 24/7 customer support.",
        image: "/images/FreshCart.png",
        tags: ["E-Commerce", "Delivery", "Local Partners", "Fresh Produce"],
        link: "https://fresh-cart-beta-hazel.vercel.app"
    },
    {
        title: "Fannoh Naturals",
        category: "E-Commerce",
        description: "A premium natural skincare brand offering products formulated with African botanicals. The website features a clean, elegant design with product showcases, customer testimonials, and a seamless shopping experience — all built to reflect the brand's commitment to clean beauty and ethical sourcing.",
        image: "/images/Fannoh.png",
        tags: ["Skincare", "E-Commerce", "Clean Beauty", "Made in Kenya"],
        link: "https://fannoh-naturals.vercel.app"
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
                    <div className="absolute inset-0 bg-linear-to-b from-[#161312]/30 to-[#161312]/30" />
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
                                        <div className="absolute inset-0 bg-linear-to-t from-[#161312] to-transparent opacity-60" />
                                        <div className="absolute bottom-4 left-4">
                                            <span className="px-3 py-1 bg-[#cc5500] text-[#f9f8f9] text-sm rounded font-medium">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-6 flex flex-col grow">
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
                                        <p className="text-[#979696] mb-4 text-sm leading-relaxed grow">{project.description}</p>

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

                        {/* Your Project Card */}
                        <FadeIn delay={projects.length * 100}>
                            <Link href="/contact" className="block h-full">
                                <div className="bg-linear-to-br from-[#161312] to-[#2a2523] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all group h-full flex flex-col min-h-[400px] cursor-pointer animate-bounce-subtle">
                                    {/* Top Section */}
                                    <div className="relative h-56 overflow-hidden bg-[#1f1c1a] flex items-center justify-center border-b-4 border-dashed border-[#cc5500]/50">
                                        <div className="absolute inset-0 opacity-10">
                                            <div className="absolute top-4 left-4 w-16 h-16 border-2 border-[#cc5500] rounded-lg rotate-12" />
                                            <div className="absolute bottom-6 right-6 w-24 h-24 border-2 border-[#cc5500] rounded-lg -rotate-6" />
                                        </div>
                                        <div className="text-center relative z-10">
                                            <div className="w-20 h-20 bg-[#cc5500] rounded-full flex items-center justify-center">
                                                <span className="text-5xl font-bold text-white">+</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col grow justify-center text-center">
                                        <p className="text-[#cc5500] text-sm mb-2" style={{ fontFamily: "Yellowtail" }}>
                                            Coming Soon
                                        </p>
                                        <h3 className="text-2xl font-bold text-[#f9f8f9] mb-3" style={{ fontFamily: "Oswald" }}>
                                            Your Project Here
                                        </h3>
                                        <p className="text-[#f9f8f9]/60 text-sm leading-relaxed">
                                            This spot is reserved for your next big idea.
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </FadeIn>
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
