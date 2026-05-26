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
                        
                        {/* 01. Introduction */}
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
                                </div>
                            </div>
                        </FadeIn>

                        {/* 02. Services */}
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
                                </div>
                            </div>
                        </FadeIn>

                        {/* 03. Project Terms */}
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

                        {/* 04. Payment Terms */}
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
                        
                        {/* 05. Domain, Hosting & Annual Renewals */}
                        <FadeIn delay={450}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">05</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Domain, Hosting & Renewals</h2>
                                </div>
                                <div className="space-y-6 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <p>To keep your website, applications, and professional email services running, there are ongoing third-party infrastructure costs.</p>
                                    <p>The client is solely responsible for paying all annual renewal fees for domains, web hosting, cloud infrastructure, and email services (e.g., Google Workspace, Microsoft 365). Failure to pay these annual renewals on time may result in the suspension or permanent deletion of your website, emails, and related data by the respective hosting providers.</p>
                                    <p className="p-4 border-l border-[#cc5500] bg-[#161312] text-[#f9f8f9]/70">Maron Labs will notify you in advance of these renewals, but we are not liable for any data loss, downtime, or damages resulting from unpaid infrastructure fees.</p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 06. Intellectual Property */}
                        <FadeIn delay={500}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">06</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Intellectual Property</h2>
                                </div>
                                <div className="space-y-8 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h3 className="text-[#f9f8f9] mb-2 font-medium uppercase tracking-widest text-[10px]">Client Ownership</h3>
                                            <p>Upon full payment, the client receives full ownership of all custom work created specifically for their project.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-[#f9f8f9] mb-2 font-medium uppercase tracking-widest text-[10px]">Portfolio Rights</h3>
                                            <p>Maron Labs retains the right to display completed work in our portfolio and marketing materials.</p>
                                        </div>
                                    </div>
                                    <div className="pt-6 border-t border-[#f9f8f9]/5">
                                        <h3 className="text-[#cc5500] mb-2 font-medium uppercase tracking-widest text-[10px]">Third-Party Assets</h3>
                                        <p>Third-party assets (such as stock images, premium fonts, plugins, and software licenses) remain subject to their respective creators' licenses. Clients are fully responsible for acquiring, maintaining, and renewing appropriate licenses for any third-party assets utilized in their project.</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                        
                        {/* 07. Client Responsibilities */}
                        <FadeIn delay={550}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">07</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Client Responsibilities</h2>
                                </div>
                                <div className="space-y-6 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <p>The successful delivery of any project relies heavily on the client's cooperation. The client agrees to:</p>
                                    <ul className="space-y-4 pt-2">
                                        {[
                                            "Provide all necessary content, images, and materials in a timely manner.",
                                            "Respond to communications and feedback requests within reasonable timeframes.",
                                            "Ensure all provided content does not infringe on third-party intellectual property rights.",
                                            "Provide accurate business information and project requirements.",
                                            "Maintain distinct backups of their own data and content."
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-4">
                                                <div className="w-1.5 h-1.5 bg-[#cc5500] shrink-0 mt-2" />
                                                <span className="text-[#f9f8f9]/80">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>
                        
                        {/* 08. Revisions & Amendments */}
                        <FadeIn delay={600}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">08</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Revisions & Amendments</h2>
                                </div>
                                <div className="space-y-6 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <p>Each project includes a specified number of revision rounds as strictly outlined in the initial project proposal. Additional revisions beyond the agreed number will be billed separately at our standard hourly rate.</p>
                                    <p>Major design direction changes after the approval of initial concepts may require a newly revised quote and an adjustment to the project timeline.</p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 09. Warranties & Liability */}
                        <FadeIn delay={650}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">09</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Warranties & Liability</h2>
                                </div>
                                <div className="space-y-6 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <p>
                                        We warrant that our work will be performed with reasonable skill and care. 
                                        We provide a 30-day bug-fix warranty after launch for functional defects directly attributable to our work.
                                    </p>
                                    <p className="text-[#f9f8f9]/50 font-medium">
                                        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MARON LABS' AGGREGATE LIABILITY ARISING OUT OF OR IN CONNECTION WITH OUR SERVICES SHALL NOT EXCEED THE TOTAL FEES ACTUALLY PAID BY THE CLIENT FOR THE SPECIFIC PROJECT GIVING RISE TO THE CLAIM. IN NO EVENT SHALL MARON LABS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, LOSS OF DATA, LOSS OF BUSINESS OPPORTUNITIES, OR REPUTATIONAL HARM.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                        
                        {/* 10. Confidentiality */}
                        <FadeIn delay={700}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">10</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Confidentiality</h2>
                                </div>
                                <div className="space-y-6 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <p>Both parties agree to keep strictly confidential any proprietary, sensitive, or confidential information shared during the course of the project. This includes, but is not limited to, business strategies, technical specifications, financial information, trade secrets, and any materials marked as confidential.</p>
                                    <p>This confidentiality obligation survives the termination of our business relationship indefinitely.</p>
                                </div>
                            </div>
                        </FadeIn>
                        
                        {/* 11. Termination */}
                        <FadeIn delay={750}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">11</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Termination</h2>
                                </div>
                                <div className="space-y-6 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h3 className="text-[#f9f8f9] mb-2 font-medium uppercase tracking-widest text-[10px]">Termination by Client</h3>
                                            <p>The client may terminate the project at any time with formal written notice. The initial project deposit remains non-refundable, and payment becomes immediately due for all unbilled work completed up to the date of termination.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-[#f9f8f9] mb-2 font-medium uppercase tracking-widest text-[10px]">Termination by Maron Labs</h3>
                                            <p>We may terminate the agreement effective immediately if the client fails to meet payment obligations, remains unresponsive for extended periods, or fundamentally breaches these Terms.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                        
                        {/* 12. Modification of Terms */}
                        <FadeIn delay={800}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">12</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Modification of Terms</h2>
                                </div>
                                <div className="space-y-6 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <p>Maron Labs reserves the exclusive right to modify, amend, or update these Terms of Service at any given time without prior notice. Any modifications shall become effective immediately upon being published on this page alongside an updated "Last Updated" date.</p>
                                    <p>Your continued use of our website or engagement of our services following the posting of revised Terms constitutes your legally binding acceptance of such modifications.</p>
                                </div>
                            </div>
                        </FadeIn>
                        
                        {/* 13. Governing Laws and Disputes */}
                        <FadeIn delay={850}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">13</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Governing Law & Disputes</h2>
                                </div>
                                <div className="space-y-6 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <p>These Terms shall be governed by, construed, and enforced in accordance with the laws of the Republic of Kenya, without regard to its conflict of law provisions.</p>
                                    <p className="p-4 border border-[#f9f8f9]/10 bg-[#000000] text-[#f9f8f9]/70">
                                        Any disputes, controversies, or claims arising out of or relating to these Terms, or the breach, termination, or invalidity thereof, shall first be attempted to be resolved amicably through good-faith negotiation. Should negotiation fail, the dispute shall be subject to the exclusive jurisdiction of the competent courts of Nairobi, Kenya. Each party shall bear its own legal costs unless otherwise explicitly ordered by the presiding court.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 14. Contact Us */}
                        <FadeIn delay={900}>
                            <div className="group border border-[#cc5500]/30 p-8 md:p-12 bg-[#161312]">
                                <h2 className="font-serif text-3xl font-normal text-[#f9f8f9] mb-6 tracking-tight">
                                    Contact Us
                                </h2>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-8">
                                    If you have any questions or require clarification regarding these Terms of Service, please contact us:
                                </p>
                                <div className="space-y-4 text-sm tracking-wide text-[#f9f8f9]">
                                    <p><span className="text-[#cc5500] uppercase tracking-[0.2em] text-[10px] inline-block w-24">Email</span> hello@maronlabs.com</p>
                                    <p><span className="text-[#cc5500] uppercase tracking-[0.2em] text-[10px] inline-block w-24">Phone</span> +254 700 270 670</p>
                                    <p><span className="text-[#cc5500] uppercase tracking-[0.2em] text-[10px] inline-block w-24">Location</span> Nairobi, Kenya</p>
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
