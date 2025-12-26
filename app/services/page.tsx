import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import ProgressBar from "@/components/progress-bar"
import MobileCTA from "@/components/mobile-cta"
import PageLoader from "@/components/page-loader"
import { FadeIn } from "@/components/scroll-animations"
import Image from "next/image"
import Link from "next/link"
import {
    Globe, Palette, PenTool, Search, BookOpen, Settings,
    Smartphone, ShoppingCart, Mail, CheckCircle, ArrowRight
} from "lucide-react"

export const metadata = {
    title: "Our Services - Maron Labs",
    description: "Comprehensive digital solutions including web design, development, graphic design, SEO, content creation, and mobile app development."
}

const services = [
    {
        title: "Web Design & Development",
        description: "End-to-end web solutions combining creative design with cutting-edge development. We create responsive, fast, and conversion-optimized websites that deliver exceptional user experiences.",
        icon: Globe,
        features: ["Custom Website Design", "E-commerce Solutions", "Web Applications", "Responsive Development", "CMS Integration", "Performance Optimization"],
        color: "from-[#cc5500] to-[#a83f00]"
    },
    {
        title: "Graphic Design",
        description: "Captivating visual communications that tell your brand story. From logos to complete brand identities, we create designs that leave lasting impressions.",
        icon: Palette,
        features: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics", "Packaging Design", "Print Design"],
        color: "from-[#161312] to-[#000000]"
    },
    {
        title: "Content Creation",
        description: "Engaging content that connects with your audience and drives action. We craft compelling narratives across all digital platforms.",
        icon: PenTool,
        features: ["Blog Writing", "Copywriting", "Social Media Content", "Email Campaigns", "Video Scripts", "Product Descriptions"],
        color: "from-[#cc5500] to-[#fee2b2]"
    },
    {
        title: "SEO Optimization",
        description: "Strategic SEO to boost visibility and drive organic traffic. We implement comprehensive strategies to ensure your website ranks where it matters.",
        icon: Search,
        features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Local SEO", "Analytics & Reporting"],
        color: "from-[#a83f00] to-[#cc5500]"
    },
    {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.",
        icon: Smartphone,
        features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App UI/UX Design", "App Store Optimization", "Maintenance & Support"],
        color: "from-[#161312] to-[#979696]"
    },
    {
        title: "E-Commerce Solutions",
        description: "Complete online store setup with payment integration, inventory management, and optimized checkout experiences that convert visitors to customers.",
        icon: ShoppingCart,
        features: ["Online Store Setup", "Payment Gateway Integration", "Inventory Management", "Order Processing", "Customer Analytics", "Security Implementation"],
        color: "from-[#cc5500] to-[#a83f00]"
    },
]

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            <PageLoader />
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#161312] overflow-hidden min-h-[80vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/Our Services.avif"
                        alt="Our Services"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#161312]/30 to-[#161312]/30" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-[#cc5500] mb-4 text-lg" style={{ fontFamily: "Yellowtail" }}>
                        What We Offer
                    </p>
                    <h1 className="text-5xl sm:text-6xl font-black text-[#f9f8f9] mb-6" style={{ fontFamily: "Oswald" }}>
                        Our <span className="text-[#cc5500]">Services</span>
                    </h1>
                    <p className="text-xl text-[#f9f8f9]/80 max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to elevate your business and drive meaningful results.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f9f8f9]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <FadeIn key={index} delay={index * 100}>
                                <div className="bg-[#ffffff] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all group h-full">
                                    <div className={`bg-gradient-to-r ${service.color} p-6`}>
                                        <service.icon className="w-12 h-12 text-[#f9f8f9]" />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-[#000000] mb-4">{service.title}</h3>
                                        <p className="text-[#161312] mb-6 leading-relaxed">{service.description}</p>
                                        <div className="grid grid-cols-2 gap-3">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#cc5500] flex-shrink-0" />
                                                    <span className="text-sm text-[#979696]">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Overview */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ffffff]">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <p className="text-[#cc5500] mb-4" style={{ fontFamily: "Yellowtail" }}>How We Work</p>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#000000]" style={{ fontFamily: "Oswald" }}>
                                Our Process
                            </h2>
                        </div>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "We learn about your business, goals, and vision" },
                            { step: "02", title: "Strategy", desc: "We create a tailored plan to achieve your objectives" },
                            { step: "03", title: "Execution", desc: "Our team brings your project to life with precision" },
                            { step: "04", title: "Launch", desc: "We deploy, test, and optimize for success" },
                        ].map((item, index) => (
                            <FadeIn key={index} delay={index * 150}>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-[#cc5500] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-black text-[#f9f8f9]">{item.step}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#000000] mb-2">{item.title}</h3>
                                    <p className="text-[#979696]">{item.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#161312]">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#f9f8f9] mb-6" style={{ fontFamily: "Oswald" }}>
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-lg text-[#f9f8f9]/80 mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can help transform your digital presence and achieve your business goals.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#cc5500] text-[#f9f8f9] rounded font-bold hover:bg-[#a83f00] transition-all hover:scale-105"
                        >
                            Get Started <ArrowRight className="w-5 h-5" />
                        </Link>
                    </FadeIn>
                </div>
            </section>

            <Footer />
            <ProgressBar />
            <MobileCTA />
        </main>
    )
}
