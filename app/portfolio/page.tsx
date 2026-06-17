import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import ProgressBar from "@/components/progress-bar"
import PageLoader from "@/components/page-loader"
import Image from "next/image"
import TouchImage from "@/components/touch-image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
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
        title: "Fannoh Naturals",
        category: "E-Commerce",
        description: "A premium natural skincare brand offering products formulated with African botanicals. The website features a clean, elegant design with product showcases, customer testimonials, and a seamless shopping experience — all built to reflect the brand's commitment to clean beauty and ethical sourcing.",
        image: "/images/Fannoh.png",
        tags: ["Skincare", "E-Commerce", "Clean Beauty", "Made in Kenya"],
        link: "https://fannohnaturals.com"
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
        title: "Ricom Care Services",
        category: "Professional Services",
        description: "A clean, professional website for a leading cleaning and care services company in Kenya. We built a platform that effectively communicates their range of services, builds trust through testimonials, and makes it easy for potential clients to request quotes and book services online.",
        image: "/images/ricomcare.webp",
        tags: ["Services", "Corporate", "Lead Generation", "Responsive"],
        link: "https://ricomcareservices.co.ke"
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
        title: "FreshCart",
        category: "Grocery Delivery",
        description: "A revolutionary grocery shopping platform connecting communities with fresh, locally-sourced produce. Serving thousands of families across Kenya with farm-fresh groceries delivered right to their doorsteps, featuring lightning-fast delivery, quality guarantee, and 24/7 customer support.",
        image: "/images/FreshCart.png",
        tags: ["E-Commerce", "Delivery", "Local Partners", "Fresh Produce"],
        link: "https://fresh-cart-beta-hazel.vercel.app"
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
        title: "Maron Group Realtors",
        category: "Real Estate",
        description: "A professional real estate platform built for showcasing premium properties across Kenya. The website features an intuitive property listing system, advanced filtering options, and dedicated pages for sales, rentals, and investment opportunities. Modern design meets powerful functionality.",
        image: "/images/marongroup.webp",
        tags: ["Real Estate", "Property Listings", "Web Development", "SEO"],
        link: "https://marongroup.netlify.app"
    },
    {
        title: "Savannah Trails Kenya",
        category: "Travel & Tourism",
        description: "A stunning travel and tourism website showcasing authentic Kenyan experiences — from unforgettable safaris in the Maasai Mara to pristine beaches of Diani and vibrant cultural experiences in Nairobi. The platform features tour packages, gallery, booking system, and expert local guide profiles.",
        image: "/images/savannahtrails.webp",
        tags: ["Tourism", "Travel", "Safari", "Booking"],
        link: "https://savannahtrails.vercel.app"
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
        title: "Kenya High School",
        category: "Education",
        description: "A comprehensive, modern website for one of Kenya's prestigious high schools. We created a responsive platform that elegantly showcases academics, extracurricular activities, admissions processes, and school events. The clean UI and intuitive navigation make it easy for parents and students to find information.",
        image: "/images/shulesite.webp",
        tags: ["Education", "Web Design", "Responsive", "CMS"],
        link: "https://shulesite.netlify.app"
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
        title: "Moonarts",
        category: "E-Commerce",
        description: "A luxury leather atelier website showcasing handcrafted, premium leather bags and bespoke upholstery in Nairobi. It features an elegant, dark-themed design highlighting their bespoke commissions.",
        image: "/images/Moonarts.webp",
        tags: ["E-Commerce", "Leather Goods", "Luxury", "UI/UX"],
        link: "https://moonarts.vercel.app"
    }
]

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-[#000000]">
            <PageLoader />
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#161312] overflow-hidden min-h-[80vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/Image 1.svg"
                        alt="Our Portfolio"
                        fill
                        className="object-cover opacity-15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#161312]/30 to-[#161312]/80" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-6">
                        Our Work
                    </p>
                    <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#f9f8f9] mb-8 tracking-tight">
                        Portfolio
                    </h1>
                    <div className="w-16 h-[1px] bg-[#cc5500] mx-auto mb-8" />
                    <p className="text-base text-[#f9f8f9]/50 max-w-2xl mx-auto leading-relaxed tracking-wide">
                        Explore our collection of successful projects showcasing our expertise in web design, development, and digital solutions for clients across Kenya and beyond.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#f9f8f9]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#161312]/10">
                        {projects.map((project, index) => (
                            <FadeIn key={index} delay={index * 100}>
                                <div className="bg-[#ffffff] group h-full flex flex-col border-b border-r border-[#161312]/10 hover:bg-[#161312] transition-colors duration-700">
                                    {/* Project Image */}
                                    <div className="relative h-64 overflow-hidden bg-[#161312]">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <TouchImage
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                                            />
                                        </a>
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="px-4 py-1.5 bg-[#cc5500] text-[#f9f8f9] text-[10px] uppercase tracking-[0.2em] font-medium">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-10 flex flex-col grow">
                                        <div className="flex items-start justify-between mb-6">
                                            <h3 className="font-serif text-2xl font-normal text-[#161312] group-hover:text-[#f9f8f9] tracking-tight transition-colors duration-700">
                                                {project.title}
                                            </h3>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 border border-[#161312]/10 group-hover:border-[#f9f8f9]/20 flex items-center justify-center hover:bg-[#cc5500] hover:!border-[#cc5500] hover:text-[#f9f8f9] text-[#161312] group-hover:text-[#f9f8f9] transition-all duration-500 shrink-0"
                                            >
                                                <ArrowUpRight className="w-4 h-4" />
                                            </a>
                                        </div>
                                        <div className="w-8 h-[1px] bg-[#cc5500] mb-6" />
                                        <p className="text-[#979696] group-hover:text-[#f9f8f9]/60 text-sm leading-[1.8] tracking-wide grow mb-8 transition-colors duration-700">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tags.map((tag, idx) => (
                                                <span key={idx} className="px-3 py-1.5 border border-[#161312]/10 group-hover:border-[#f9f8f9]/10 text-[#161312] group-hover:text-[#f9f8f9]/80 text-[10px] uppercase tracking-[0.1em] transition-colors duration-700">
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
                                <div className="bg-[#cc5500] group h-full flex flex-col border-b border-r border-[#161312]/10 hover:bg-[#a83f00] transition-colors duration-700 cursor-pointer min-h-[500px]">
                                    <div className="p-10 flex flex-col items-center justify-center grow text-center">
                                        <div className="w-20 h-20 border border-[#f9f8f9]/30 flex items-center justify-center mb-8 group-hover:border-[#f9f8f9] transition-colors duration-500">
                                            <span className="text-3xl font-light text-[#f9f8f9]">+</span>
                                        </div>
                                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#f9f8f9]/80 mb-4">
                                            Coming Soon
                                        </p>
                                        <h3 className="font-serif text-3xl font-normal text-[#f9f8f9] mb-6 tracking-tight">
                                            Your Project Here
                                        </h3>
                                        <div className="w-12 h-[1px] bg-[#f9f8f9]/50 mx-auto mb-6" />
                                        <p className="text-[#f9f8f9]/80 text-sm leading-[1.8] tracking-wide">
                                            This spot is reserved for your next big idea. Let's create something extraordinary together.
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#000000]">
                <FadeIn>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#f9f8f9] mb-6 tracking-tight">
                            Ready to Start Your Project?
                        </h2>
                        <div className="w-16 h-[1px] bg-[#cc5500] mx-auto mb-8" />
                        <p className="text-base text-[#f9f8f9]/50 mb-10 tracking-wide leading-relaxed max-w-2xl mx-auto">
                            Let&apos;s create something amazing together. Get in touch to discuss your next digital project.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-3 px-10 py-4 bg-[#cc5500] text-[#f9f8f9] text-[13px] uppercase tracking-[0.25em] font-medium hover:bg-[#a83f00] transition-all duration-500"
                        >
                            Get Started
                        </Link>
                    </div>
                </FadeIn>
            </section>

            <Footer />
            <ProgressBar />
        </main>
    )
}
