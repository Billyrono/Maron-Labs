import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import ProgressBar from "@/components/progress-bar"
import PageLoader from "@/components/page-loader"
import { FadeIn } from "@/components/scroll-animations"

export const metadata = {
    title: "Terms of Service - Maron Labs",
    description: "Terms and conditions for using Maron Labs services. Read our terms of service before engaging our digital solutions."
}

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#000000]">
            <PageLoader />
            <Navigation />

            {/* Cinematic Header */}
            <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#161312] overflow-hidden min-h-[60vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9f8f9_1px,transparent_1px),linear-gradient(to_bottom,#f9f8f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-5" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#161312]" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-6">
                        Legal Information
                    </p>
                    <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#f9f8f9] mb-8 tracking-tight">
                        Terms of <span className="italic text-[#cc5500]">Service</span>
                    </h1>
                    <div className="w-16 h-[1px] bg-[#cc5500] mx-auto mb-8" />
                    <p className="text-base text-[#f9f8f9]/50 max-w-2xl mx-auto leading-relaxed tracking-wide">
                        The foundation of our partnership. Read the terms and conditions that govern our collaboration and digital solutions.
                    </p>
                </div>
            </section>

            {/* Content Area */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#000000]">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <div className="flex items-center gap-4 mb-20">
                            <div className="h-[1px] flex-1 bg-[#f9f8f9]/10" />
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f9f8f9]/40">Last Updated: February 2026</p>
                            <div className="h-[1px] flex-1 bg-[#f9f8f9]/10" />
                        </div>
                    </FadeIn>

                    <div className="space-y-12">
                        
                        {/* 1. Introduction */}
                        <FadeIn delay={100}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">01</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Introduction</h2>
                                </div>
                                <div className="space-y-6 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <p>
                                        Welcome to Maron Labs. These Terms of Service ("Terms") constitute a legally binding agreement
                                        between you ("Client," "you," or "your") and Maron Labs ("we," "us," or "our"). These Terms govern
                                        your access to and use of our website, services, and all related communications.
                                    </p>
                                    <div className="p-6 border-l border-[#cc5500] bg-[#161312] text-[#f9f8f9]/70">
                                        By accessing, browsing, or using our website in any manner, or by engaging our services,
                                        you acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety.
                                    </div>
                                    <p>
                                        Maron Labs is a digital solutions agency registered and operating in Nairobi, Kenya.
                                        We provide web design, development, graphic design, SEO, content creation, and related digital services.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 2. Services */}
                        <FadeIn delay={200}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">02</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Services</h2>
                                </div>
                                <div className="space-y-6 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <p>Maron Labs provides the following core services:</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            "Website Design & Development",
                                            "Graphic Design & Branding",
                                            "Search Engine Optimization",
                                            "Content Creation",
                                            "Mobile App Development",
                                            "E-Commerce Solutions",
                                            "System Architecture",
                                            "AI Integration & Training"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-4"><div className="w-1 h-1 bg-[#cc5500]" />{item}</div>
                                        ))}
                                    </div>
                                    <p className="pt-4 border-t border-[#f9f8f9]/5">
                                        The specific scope of work for each project will be defined in a separate proposal or contract.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 3. Project Terms */}
                        <FadeIn delay={300}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">03</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Project Terms</h2>
                                </div>
                                <div className="space-y-8 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <div className="grid gap-6">
                                        <div>
                                            <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#cc5500] mb-2">Proposals</h3>
                                            <p>All projects begin with a detailed proposal. The proposal becomes binding once accepted by the client in writing.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#cc5500] mb-2">Scope Changes</h3>
                                            <p>Changes beyond the original scope will be quoted separately and require client approval before implementation.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#cc5500] mb-2">Client Inactivity</h3>
                                            <p>If a client becomes unresponsive for over 30 days without notice, we reserve the right to consider the project abandoned without refund.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 4. Payment Terms */}
                        <FadeIn delay={400}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">04</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Payment Terms</h2>
                                </div>
                                <div className="space-y-8 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <div className="p-6 border border-[#f9f8f9]/5 bg-[#000000]">
                                        <ul className="space-y-4">
                                            <li className="flex justify-between items-center border-b border-[#f9f8f9]/5 pb-2">
                                                <span className="text-[#cc5500]">Deposit</span>
                                                <span className="text-right">50% required before work begins</span>
                                            </li>
                                            <li className="flex justify-between items-center border-b border-[#f9f8f9]/5 pb-2">
                                                <span className="text-[#cc5500]">Final Payment</span>
                                                <span className="text-right">Due prior to final hand-off</span>
                                            </li>
                                            <li className="flex justify-between items-center">
                                                <span className="text-[#cc5500]">Late Fee</span>
                                                <span className="text-right">2% monthly on overdue invoices</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <p>We accept payments via M-Pesa, bank transfer, and other agreed-upon methods. All invoices are payable within 7 days of issue.</p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 5. Intellectual Property */}
                        <FadeIn delay={500}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">05</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Intellectual Property</h2>
                                </div>
                                <div className="space-y-6 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h3 className="text-[#f9f8f9] mb-2 font-medium">Client Ownership</h3>
                                            <p>Upon full payment, the client receives full ownership of all custom work created specifically for their project.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-[#f9f8f9] mb-2 font-medium">Portfolio Rights</h3>
                                            <p>Maron Labs retains the right to display completed work in our portfolio and marketing materials.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 6. Warranties */}
                        <FadeIn delay={600}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">06</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Warranties & Liability</h2>
                                </div>
                                <div className="space-y-6 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <p>
                                        We warrant that our work will be performed with reasonable skill and care. 
                                        We provide a 30-day bug-fix warranty after launch for functional defects directly attributable to our work.
                                    </p>
                                    <p className="text-[11px] uppercase tracking-[0.1em] text-[#f9f8f9]/50">
                                        To the maximum extent permitted by law, Maron Labs' aggregate liability shall not exceed the total fees paid by the client. We shall not be liable for any indirect, consequential, or punitive damages.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 7. Contact Us */}
                        <FadeIn delay={700}>
                            <div className="group border border-[#cc5500]/30 p-8 md:p-12 bg-[#161312]">
                                <h2 className="font-serif text-3xl font-normal text-[#f9f8f9] mb-6 tracking-tight">
                                    Questions?
                                </h2>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-8">
                                    If you have any questions about these Terms, please contact us:
                                </p>
                                <div className="space-y-4 text-sm tracking-wide text-[#f9f8f9]">
                                    <p><span className="text-[#cc5500] uppercase tracking-[0.2em] text-[10px] inline-block w-24">Email</span> hello@maronlabs.com</p>
                                    <p><span className="text-[#cc5500] uppercase tracking-[0.2em] text-[10px] inline-block w-24">Phone</span> +254 700 270 670</p>
                                </div>
                            </div>
                        </FadeIn>

                    </div>
                </div>
            </section>

            <Footer />
            <ProgressBar />
        </main>
    )
}
