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

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#161312] border-b border-[#f9f8f9]/5">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-6">
                        Legal Information
                    </p>
                    <h1 className="font-serif text-5xl sm:text-6xl font-normal text-[#f9f8f9] mb-8 tracking-tight">
                        Terms of Service
                    </h1>
                    <div className="w-16 h-[1px] bg-[#cc5500] mx-auto mb-8" />
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#f9f8f9]/40">Last updated: February 2026</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#f9f8f9]">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <div className="prose prose-lg max-w-none text-[#161312]">

                            {/* Introduction */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    1. Introduction
                                </h2>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-6">
                                    Welcome to Maron Labs. These Terms of Service ("Terms") constitute a legally binding agreement
                                    between you ("Client," "you," or "your") and Maron Labs ("we," "us," or "our"). These Terms govern
                                    your access to and use of our website, services, and all related communications.
                                </p>
                                <p className="text-sm text-[#161312] font-medium leading-[1.8] tracking-wide mb-6 p-6 border-l-2 border-[#cc5500] bg-[#161312]/5">
                                    By accessing, browsing, or using our website in any manner, or by engaging our services,
                                    you acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety.
                                    If you do not agree to these Terms, you must immediately cease all use of our website and services.
                                </p>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    Maron Labs is a digital solutions agency registered and operating in Nairobi, Kenya.
                                    We provide web design, development, graphic design, SEO, content creation, and related digital services.
                                </p>
                            </div>

                            {/* Services */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    2. Services
                                </h2>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-6">
                                    Maron Labs provides the following services:
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Website Design and Development",
                                        "Graphic Design and Brand Identity",
                                        "Search Engine Optimization (SEO)",
                                        "Content Creation and Copywriting",
                                        "Mobile Application Development",
                                        "E-Commerce Solutions",
                                        "Website Maintenance and Support"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-4 text-sm text-[#979696] tracking-wide">
                                            <div className="w-1.5 h-1.5 bg-[#cc5500]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    The specific scope of work for each project will be defined in a separate project proposal or contract
                                    agreed upon by both parties before work commences.
                                </p>
                            </div>

                            {/* Project Terms */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    3. Project Terms and Agreements
                                </h2>
                                
                                <div className="space-y-10">
                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">3.1 Project Proposals</h3>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                            All projects begin with a detailed proposal outlining scope, deliverables, timeline, and pricing.
                                            The proposal becomes binding once accepted by the client in writing or via email confirmation.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">3.2 Project Changes</h3>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                            Any changes to the agreed scope of work must be requested in writing. Additional work beyond
                                            the original scope will be quoted separately and require client approval before implementation.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">3.3 Project Timeline</h3>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                            Estimated timelines are provided in good faith based on the project scope. Delays caused by
                                            client feedback, content provision, or scope changes may extend the project timeline.
                                            Maron Labs shall not be held liable for any losses arising from timeline extensions caused by client-side delays.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">3.4 Client Inactivity</h3>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                            If a client becomes unresponsive for a period exceeding 30 consecutive days without prior written notice,
                                            Maron Labs reserves the right to consider the project abandoned. In such cases, no refund shall be issued
                                            for work already completed, and any outstanding balances shall remain due and payable.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Terms */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    4. Payment Terms
                                </h2>
                                
                                <div className="space-y-10">
                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">4.1 Deposit</h3>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                            A non-refundable deposit of 50% of the total project cost is required before work begins.
                                            This deposit secures your project slot and covers initial research, planning, and design work.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">4.2 Final Payment</h3>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                            The remaining balance is due upon project completion, before final files, website access,
                                            or source code are transferred to the client.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">4.3 Payment Methods</h3>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                            We accept payments via M-Pesa, bank transfer, and other agreed-upon methods.
                                            All invoices are payable within 7 days of issue unless otherwise agreed.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">4.4 Late Payments</h3>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                            Late payments shall result in immediate suspension of all ongoing services and project work
                                            until full settlement of outstanding amounts. We reserve the right to charge interest on
                                            overdue amounts at a rate of 2% per month, compounded monthly. Persistent non-payment may
                                            result in referral to a debt collection agency, with all associated costs borne by the client.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Intellectual Property */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    5. Intellectual Property Rights
                                </h2>
                                
                                <div className="space-y-10">
                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">5.1 Client Ownership</h3>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                            Upon full payment, the client receives full ownership of all custom work created specifically
                                            for their project, including designs, code, and content created by Maron Labs.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">5.2 Portfolio Rights</h3>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                            Maron Labs retains the right to display completed work in our portfolio, website,
                                            and marketing materials unless explicitly agreed otherwise in writing.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">5.3 Third-Party Assets</h3>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                            Third-party assets (stock images, fonts, plugins) remain subject to their respective licenses.
                                            Clients are responsible for maintaining appropriate licenses for any third-party assets used.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Client Responsibilities */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    6. Client Responsibilities
                                </h2>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-6">The client agrees to:</p>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Provide all necessary content, images, and materials in a timely manner",
                                        "Respond to communications and feedback requests within reasonable timeframes",
                                        "Ensure all provided content does not infringe on third-party rights",
                                        "Provide accurate business information and requirements",
                                        "Complete review and approval processes as agreed",
                                        "Maintain backups of their own data and content"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-4 text-sm text-[#979696] tracking-wide">
                                            <div className="w-1.5 h-1.5 bg-[#cc5500] shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Revisions */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    7. Revisions and Amendments
                                </h2>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-6">
                                    Each project includes a specified number of revision rounds as outlined in the project proposal.
                                    Additional revisions beyond the agreed number will be charged at our standard hourly rate.
                                </p>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    Major design direction changes after approval of initial concepts may require a revised quote
                                    and timeline adjustment.
                                </p>
                            </div>

                            {/* Warranties */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    8. Warranties and Liability
                                </h2>
                                
                                <div className="space-y-10">
                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">8.1 Service Warranty</h3>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                            We warrant that our work will be performed with reasonable skill and care consistent
                                            with industry standards. For websites, we provide a 30-day bug-fix warranty after launch
                                            for functional defects directly attributable to our work. This warranty does not cover
                                            issues arising from client modifications, third-party integrations, hosting environment
                                            changes, or content updates made by the client after delivery.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">8.2 Limitation of Liability</h3>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-4">
                                            To the maximum extent permitted by applicable law, Maron Labs' total aggregate liability
                                            for any and all claims arising out of or in connection with our services shall not exceed
                                            the total fees actually paid by the client for the specific project giving rise to the claim.
                                        </p>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                            In no event shall Maron Labs be liable for any indirect, incidental, special, consequential,
                                            or punitive damages, including but not limited to loss of profits, loss of data, loss of
                                            business opportunities, business interruption, or reputational harm, regardless of whether
                                            such damages were foreseeable or whether Maron Labs was advised of the possibility of such damages.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Confidentiality */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    9. Confidentiality
                                </h2>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    Both parties agree to keep confidential any proprietary or sensitive information shared
                                    during the course of the project. This includes business strategies, technical specifications,
                                    pricing information, and any materials marked as confidential. This obligation survives
                                    the termination of our business relationship.
                                </p>
                            </div>

                            {/* Termination */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    10. Termination
                                </h2>
                                
                                <div className="space-y-10">
                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">10.1 Termination by Client</h3>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                            The client may terminate the project at any time with written notice.
                                            The initial deposit is non-refundable, and payment is due for all work completed to date.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">10.2 Termination by Maron Labs</h3>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                            We may terminate the agreement if the client fails to meet payment obligations,
                                            becomes unresponsive for extended periods, or breaches these Terms.
                                            Upon termination, completed work will be delivered upon settlement of outstanding payments.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Modifications to Terms */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    11. Modifications to These Terms
                                </h2>
                                <p className="text-sm text-[#161312] font-medium leading-[1.8] tracking-wide mb-6 p-6 border-l-2 border-[#cc5500] bg-[#161312]/5">
                                    Maron Labs reserves the right to modify, amend, or update these Terms of Service at any time
                                    and without prior notice. Any changes shall become effective immediately upon being posted
                                    on this page with an updated "Last updated" date.
                                </p>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    Your continued use of our website or services following the posting of revised Terms constitutes
                                    your binding acceptance of such changes. It is your sole responsibility to periodically review
                                    these Terms for any updates or modifications. If you do not agree with the revised Terms,
                                    you must immediately discontinue use of our website and services.
                                </p>
                            </div>

                            {/* Governing Law */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    12. Governing Law and Dispute Resolution
                                </h2>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-6">
                                    These Terms shall be governed by and construed in accordance with the laws of the Republic of Kenya,
                                    without regard to its conflict of law provisions.
                                </p>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    Any disputes arising out of or in connection with these Terms or our services shall first be
                                    attempted to be resolved amicably through good-faith negotiation between the parties. Should
                                    negotiation fail, the dispute shall be subject to the exclusive jurisdiction of the courts
                                    of Nairobi, Kenya. Each party shall bear its own legal costs unless otherwise ordered by the court.
                                </p>
                            </div>

                            {/* Contact */}
                            <div>
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    13. Contact Information
                                </h2>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-8">
                                    For questions about these Terms of Service, please contact us:
                                </p>
                                <div className="bg-[#161312] p-10 border border-[#161312]/10 text-[#f9f8f9]">
                                    <h3 className="font-serif text-2xl tracking-wide mb-6">Maron Labs</h3>
                                    <div className="w-12 h-[1px] bg-[#cc5500] mb-6" />
                                    <div className="space-y-4 text-sm tracking-wide text-[#f9f8f9]/70">
                                        <p><span className="text-[#f9f8f9]/40 uppercase tracking-[0.2em] text-[10px] block mb-1">Email</span> hello@maronlabs.com</p>
                                        <p><span className="text-[#f9f8f9]/40 uppercase tracking-[0.2em] text-[10px] block mb-1">Phone</span> +254 700 270 670</p>
                                        <p><span className="text-[#f9f8f9]/40 uppercase tracking-[0.2em] text-[10px] block mb-1">Location</span> Nairobi, Kenya</p>
                                    </div>
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
