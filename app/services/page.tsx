import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import ProgressBar from "@/components/progress-bar"
import PageLoader from "@/components/page-loader"
import { FadeIn } from "@/components/scroll-animations"
import Image from "next/image"
import Link from "next/link"
import {
    Globe, Palette, PenTool, Search, Smartphone, ShoppingCart, 
    Monitor, Cpu, Database, Laptop
} from "lucide-react"

export const metadata = {
    title: "Our Services - Maron Labs",
    description: "Comprehensive tech solutions including System Development, AI Training, Tech Products, Web Development, and Digital Strategy."
}

const services = [
    {
        title: "System Development & Management",
        description: "Enterprise-grade software solutions and complete tech system management. We build robust, scalable architectures tailored to your business logic and provide ongoing management to ensure maximum uptime.",
        icon: Database,
        features: ["Custom Software", "Cloud Architecture", "Database Management", "System Integration", "API Development", "24/7 Monitoring"],
    },
    {
        title: "AI Development & Training",
        description: "Cutting-edge AI integration and corporate training programs. We help businesses leverage machine learning models and automation, and train your workforce to adapt to AI-driven workflows.",
        icon: Cpu,
        features: ["AI Integration", "Machine Learning", "Workflow Automation", "Corporate AI Training", "Data Analysis", "Chatbot Development"],
    },
    {
        title: "Tech Products & Hardware",
        description: "Premium tech hardware sourcing and deployment. From high-end corporate laptops to specialized electronic setups, we provide and configure the tech infrastructure your team needs.",
        icon: Laptop,
        features: ["Corporate Laptops", "Enterprise Hardware", "Office Setup", "Networking Gear", "Hardware Maintenance", "Tech Procurement"],
    },
    {
        title: "Web Design & Development",
        description: "End-to-end web solutions combining creative design with cutting-edge development. We create responsive, fast, and conversion-optimized websites that deliver exceptional user experiences.",
        icon: Globe,
        features: ["Custom Website Design", "E-commerce Solutions", "Web Applications", "Responsive Development", "CMS Integration", "Performance Optimization"],
    },
    {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.",
        icon: Smartphone,
        features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App UI/UX Design", "App Store Optimization", "Maintenance & Support"],
    },
    {
        title: "E-Commerce Solutions",
        description: "Complete online store setup with payment integration, inventory management, and optimized checkout experiences that convert visitors to customers.",
        icon: ShoppingCart,
        features: ["Online Store Setup", "Payment Gateway Integration", "Inventory Management", "Order Processing", "Customer Analytics", "Security Implementation"],
    },
    {
        title: "Graphic Design & Branding",
        description: "Captivating visual communications that tell your brand story. From logos to complete brand identities, we create designs that leave lasting impressions.",
        icon: Palette,
        features: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics", "Packaging Design", "Print Design"],
    },
    {
        title: "Digital Marketing & SEO",
        description: "Strategic marketing and SEO to boost visibility. We implement comprehensive strategies to ensure your website ranks where it matters and drives organic traffic.",
        icon: Search,
        features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Content Strategy", "Analytics & Reporting"],
    }
]

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#000000]">
            <PageLoader />
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#161312] overflow-hidden min-h-[80vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/our-services.webp"
                        alt="Our Services"
                        fill
                        className="object-cover opacity-15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#161312]/30 to-[#161312]/80" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-6">
                        Tech & Digital Solutions
                    </p>
                    <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#f9f8f9] mb-8 tracking-tight">
                        Our <span className="italic text-[#cc5500]">Services</span>
                    </h1>
                    <div className="w-16 h-[1px] bg-[#cc5500] mx-auto mb-8" />
                    <p className="text-base text-[#f9f8f9]/50 max-w-2xl mx-auto leading-relaxed tracking-wide">
                        Comprehensive technology solutions spanning from enterprise system development and AI integration to premium hardware and digital agency services.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#f9f8f9]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#161312]/10">
                        {services.map((service, index) => (
                            <FadeIn key={index} delay={index * 100}>
                                <div className={`bg-[#ffffff] p-12 h-full group transition-all duration-700 hover:bg-[#161312] border-b ${index % 2 === 0 ? "border-r" : ""} border-[#161312]/10`}>
                                    <div className="w-16 h-16 border border-[#cc5500]/30 flex items-center justify-center mb-8 group-hover:border-[#cc5500] group-hover:bg-[#cc5500] transition-colors duration-700">
                                        <service.icon className="w-6 h-6 text-[#cc5500] group-hover:text-[#f9f8f9] transition-colors duration-700" />
                                    </div>
                                    <h3 className="font-serif text-3xl font-normal text-[#161312] group-hover:text-[#f9f8f9] mb-6 tracking-wide transition-colors duration-700">
                                        {service.title}
                                    </h3>
                                    <div className="w-12 h-[1px] bg-[#cc5500] mb-6" />
                                    <p className="text-sm text-[#979696] group-hover:text-[#f9f8f9]/60 mb-8 leading-[1.8] tracking-wide transition-colors duration-700">
                                        {service.description}
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 bg-[#cc5500] shrink-0" />
                                                <span className="text-xs uppercase tracking-[0.1em] text-[#161312] group-hover:text-[#f9f8f9]/80 transition-colors duration-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Overview */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#161312]">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-center mb-20">
                            <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-4">How We Work</p>
                            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#f9f8f9] tracking-tight mb-6">
                                Our Process
                            </h2>
                            <div className="w-16 h-[1px] bg-[#cc5500] mx-auto" />
                        </div>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-[#f9f8f9]/10">
                        {[
                            { step: "01", title: "Discovery", desc: "We learn about your business, tech infrastructure, and vision." },
                            { step: "02", title: "Strategy", desc: "We create a tailored blueprint combining hardware, software, and design." },
                            { step: "03", title: "Execution", desc: "Our team deploys your tech solutions and builds your digital presence." },
                            { step: "04", title: "Management", desc: "We provide ongoing support, AI training, and system maintenance." },
                        ].map((item, index) => (
                            <FadeIn key={index} delay={index * 150}>
                                <div className={`p-10 border-b md:border-b-0 md:border-r border-[#f9f8f9]/10 last:border-r-0 h-full hover:bg-[#cc5500] transition-colors duration-700 group cursor-default`}>
                                    <span className="block font-serif text-4xl italic text-[#f9f8f9]/20 group-hover:text-[#f9f8f9]/60 mb-8 transition-colors duration-700">{item.step}</span>
                                    <h3 className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#f9f8f9] mb-4">{item.title}</h3>
                                    <div className="w-8 h-[1px] bg-[#cc5500] group-hover:bg-[#f9f8f9] mb-6 transition-colors duration-700" />
                                    <p className="text-sm text-[#f9f8f9]/50 group-hover:text-[#f9f8f9]/90 leading-[1.8] tracking-wide transition-colors duration-700">
                                        {item.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#000000]">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#f9f8f9] mb-6 tracking-tight">
                            Ready to Upgrade Your Business?
                        </h2>
                        <div className="w-16 h-[1px] bg-[#cc5500] mx-auto mb-8" />
                        <p className="text-base text-[#f9f8f9]/50 mb-10 max-w-2xl mx-auto leading-relaxed tracking-wide">
                            Whether you need enterprise system architecture, corporate AI training, or a complete digital rebrand, we are ready to help.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center px-10 py-4 border border-[#cc5500] relative overflow-hidden"
                        >
                            <span className="absolute inset-0 w-full h-full bg-[#cc5500] group-hover:bg-transparent transition-colors duration-500" />
                            <span className="relative text-[#f9f8f9] text-[11px] uppercase tracking-[0.25em] font-medium group-hover:text-[#cc5500] transition-colors duration-500">
                                Get Started
                            </span>
                        </Link>
                    </FadeIn>
                </div>
            </section>

            <Footer />
            <ProgressBar />
        </main>
    )
}
