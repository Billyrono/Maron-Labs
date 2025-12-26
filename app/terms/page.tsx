import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import ProgressBar from "@/components/progress-bar"
import MobileCTA from "@/components/mobile-cta"
import PageLoader from "@/components/page-loader"
import { FadeIn } from "@/components/scroll-animations"

export const metadata = {
    title: "Terms of Service - Maron Labs",
    description: "Terms and conditions for using Maron Labs services. Read our terms of service before engaging our digital solutions."
}

export default function TermsPage() {
    return (
        <main className="min-h-screen">
            <PageLoader />
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#161312]">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-black text-[#f9f8f9] mb-4" style={{ fontFamily: "Oswald" }}>
                        Terms of Service
                    </h1>
                    <p className="text-[#979696]">Last updated: December 2024</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f9f8f9]">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <div className="prose prose-lg max-w-none">

                            {/* Introduction */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    1. Introduction
                                </h2>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    Welcome to Maron Labs. These Terms of Service ("Terms") govern your use of our website and services.
                                    By accessing our website or engaging our services, you agree to be bound by these Terms.
                                </p>
                                <p className="text-[#161312] leading-relaxed">
                                    Maron Labs is a digital solutions agency registered and operating in Nairobi, Kenya.
                                    We provide web design, development, graphic design, SEO, content creation, and related digital services.
                                </p>
                            </div>

                            {/* Services */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    2. Services
                                </h2>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    Maron Labs provides the following services:
                                </p>
                                <ul className="list-disc pl-6 text-[#161312] space-y-2 mb-4">
                                    <li>Website Design and Development</li>
                                    <li>Graphic Design and Brand Identity</li>
                                    <li>Search Engine Optimization (SEO)</li>
                                    <li>Content Creation and Copywriting</li>
                                    <li>Mobile Application Development</li>
                                    <li>E-Commerce Solutions</li>
                                    <li>Website Maintenance and Support</li>
                                </ul>
                                <p className="text-[#161312] leading-relaxed">
                                    The specific scope of work for each project will be defined in a separate project proposal or contract
                                    agreed upon by both parties before work commences.
                                </p>
                            </div>

                            {/* Project Terms */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    3. Project Terms and Agreements
                                </h2>
                                <h3 className="text-xl font-bold text-[#161312] mb-3">3.1 Project Proposals</h3>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    All projects begin with a detailed proposal outlining scope, deliverables, timeline, and pricing.
                                    The proposal becomes binding once accepted by the client in writing or via email confirmation.
                                </p>

                                <h3 className="text-xl font-bold text-[#161312] mb-3">3.2 Project Changes</h3>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    Any changes to the agreed scope of work must be requested in writing. Additional work beyond
                                    the original scope will be quoted separately and require client approval before implementation.
                                </p>

                                <h3 className="text-xl font-bold text-[#161312] mb-3">3.3 Project Timeline</h3>
                                <p className="text-[#161312] leading-relaxed">
                                    Estimated timelines are provided in good faith based on the project scope. Delays caused by
                                    client feedback, content provision, or scope changes may extend the project timeline.
                                </p>
                            </div>

                            {/* Payment Terms */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    4. Payment Terms
                                </h2>
                                <h3 className="text-xl font-bold text-[#161312] mb-3">4.1 Deposit</h3>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    A non-refundable deposit of 50% of the total project cost is required before work begins.
                                    This deposit secures your project slot and covers initial research, planning, and design work.
                                </p>

                                <h3 className="text-xl font-bold text-[#161312] mb-3">4.2 Final Payment</h3>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    The remaining balance is due upon project completion, before final files, website access,
                                    or source code are transferred to the client.
                                </p>

                                <h3 className="text-xl font-bold text-[#161312] mb-3">4.3 Payment Methods</h3>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    We accept payments via M-Pesa, bank transfer, and other agreed-upon methods.
                                    All invoices are payable within 7 days of issue unless otherwise agreed.
                                </p>

                                <h3 className="text-xl font-bold text-[#161312] mb-3">4.4 Late Payments</h3>
                                <p className="text-[#161312] leading-relaxed">
                                    Late payments may result in project delays or suspension of services.
                                    We reserve the right to charge interest on overdue amounts at 2% per month.
                                </p>
                            </div>

                            {/* Intellectual Property */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    5. Intellectual Property Rights
                                </h2>
                                <h3 className="text-xl font-bold text-[#161312] mb-3">5.1 Client Ownership</h3>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    Upon full payment, the client receives full ownership of all custom work created specifically
                                    for their project, including designs, code, and content created by Maron Labs.
                                </p>

                                <h3 className="text-xl font-bold text-[#161312] mb-3">5.2 Portfolio Rights</h3>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    Maron Labs retains the right to display completed work in our portfolio, website,
                                    and marketing materials unless explicitly agreed otherwise in writing.
                                </p>

                                <h3 className="text-xl font-bold text-[#161312] mb-3">5.3 Third-Party Assets</h3>
                                <p className="text-[#161312] leading-relaxed">
                                    Third-party assets (stock images, fonts, plugins) remain subject to their respective licenses.
                                    Clients are responsible for maintaining appropriate licenses for any third-party assets used.
                                </p>
                            </div>

                            {/* Client Responsibilities */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    6. Client Responsibilities
                                </h2>
                                <p className="text-[#161312] leading-relaxed mb-4">The client agrees to:</p>
                                <ul className="list-disc pl-6 text-[#161312] space-y-2">
                                    <li>Provide all necessary content, images, and materials in a timely manner</li>
                                    <li>Respond to communications and feedback requests within reasonable timeframes</li>
                                    <li>Ensure all provided content does not infringe on third-party rights</li>
                                    <li>Provide accurate business information and requirements</li>
                                    <li>Complete review and approval processes as agreed</li>
                                    <li>Maintain backups of their own data and content</li>
                                </ul>
                            </div>

                            {/* Revisions */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    7. Revisions and Amendments
                                </h2>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    Each project includes a specified number of revision rounds as outlined in the project proposal.
                                    Additional revisions beyond the agreed number will be charged at our standard hourly rate.
                                </p>
                                <p className="text-[#161312] leading-relaxed">
                                    Major design direction changes after approval of initial concepts may require a revised quote
                                    and timeline adjustment.
                                </p>
                            </div>

                            {/* Warranties */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    8. Warranties and Liability
                                </h2>
                                <h3 className="text-xl font-bold text-[#161312] mb-3">8.1 Service Warranty</h3>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    We warrant that our work will be performed with reasonable skill and care.
                                    For websites, we provide a 30-day bug-fix warranty after launch for issues related to our work.
                                </p>

                                <h3 className="text-xl font-bold text-[#161312] mb-3">8.2 Limitation of Liability</h3>
                                <p className="text-[#161312] leading-relaxed">
                                    Maron Labs' total liability shall not exceed the total fees paid for the specific project.
                                    We are not liable for indirect, consequential, or incidental damages, loss of data,
                                    or lost business opportunities.
                                </p>
                            </div>

                            {/* Confidentiality */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    9. Confidentiality
                                </h2>
                                <p className="text-[#161312] leading-relaxed">
                                    Both parties agree to keep confidential any proprietary or sensitive information shared
                                    during the course of the project. This includes business strategies, technical specifications,
                                    pricing information, and any materials marked as confidential. This obligation survives
                                    the termination of our business relationship.
                                </p>
                            </div>

                            {/* Termination */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    10. Termination
                                </h2>
                                <h3 className="text-xl font-bold text-[#161312] mb-3">10.1 Termination by Client</h3>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    The client may terminate the project at any time with written notice.
                                    The initial deposit is non-refundable, and payment is due for all work completed to date.
                                </p>

                                <h3 className="text-xl font-bold text-[#161312] mb-3">10.2 Termination by Maron Labs</h3>
                                <p className="text-[#161312] leading-relaxed">
                                    We may terminate the agreement if the client fails to meet payment obligations,
                                    becomes unresponsive for extended periods, or breaches these Terms.
                                    Upon termination, completed work will be delivered upon settlement of outstanding payments.
                                </p>
                            </div>

                            {/* Governing Law */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    11. Governing Law
                                </h2>
                                <p className="text-[#161312] leading-relaxed">
                                    These Terms shall be governed by and construed in accordance with the laws of Kenya.
                                    Any disputes arising from these Terms or our services shall be subject to the
                                    exclusive jurisdiction of the courts of Kenya.
                                </p>
                            </div>

                            {/* Contact */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    12. Contact Information
                                </h2>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    For questions about these Terms of Service, please contact us:
                                </p>
                                <div className="bg-[#ffffff] p-6 rounded-lg border border-[#979696]/20">
                                    <p className="text-[#161312] mb-2"><strong>Maron Labs</strong></p>
                                    <p className="text-[#161312] mb-2">Email: hello@maronlabs.com</p>
                                    <p className="text-[#161312] mb-2">Phone: +254 746 537 878</p>
                                    <p className="text-[#161312]">Location: Nairobi, Kenya</p>
                                </div>
                            </div>

                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
            <ProgressBar />
            <MobileCTA />
        </main>
    )
}
