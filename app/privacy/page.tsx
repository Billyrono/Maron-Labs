import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import ProgressBar from "@/components/progress-bar"
import PageLoader from "@/components/page-loader"
import { FadeIn } from "@/components/scroll-animations"

export const metadata = {
    title: "Privacy Policy - Maron Labs",
    description: "Privacy Policy for Maron Labs. Learn how we collect, use, and protect your personal information."
}

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#000000]">
            <PageLoader />
            <Navigation />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#161312] border-b border-[#f9f8f9]/5">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-6">
                        Data Protection
                    </p>
                    <h1 className="font-serif text-5xl sm:text-6xl font-normal text-[#f9f8f9] mb-8 tracking-tight">
                        Privacy Policy
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
                                    Maron Labs ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                                    explains how we collect, use, disclose, and safeguard your information when you visit our
                                    website or engage our services.
                                </p>
                                <p className="text-sm text-[#161312] font-medium leading-[1.8] tracking-wide p-6 border-l-2 border-[#cc5500] bg-[#161312]/5">
                                    By using our website or services, you consent to the data practices described in this policy.
                                    If you do not agree with this policy, please do not access our website or use our services.
                                </p>
                            </div>

                            {/* Information We Collect */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    2. Information We Collect
                                </h2>

                                <div className="space-y-10">
                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">2.1 Personal Information</h3>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-6">
                                            We may collect personal information that you voluntarily provide when:
                                        </p>
                                        <ul className="space-y-4 mb-6">
                                            {[
                                                "Filling out contact forms on our website",
                                                "Requesting a quote or proposal",
                                                "Signing up for our newsletter",
                                                "Engaging our services as a client",
                                                "Communicating with us via email, phone, or WhatsApp"
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-center gap-4 text-sm text-[#979696] tracking-wide">
                                                    <div className="w-1.5 h-1.5 bg-[#cc5500]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-6">
                                            This information may include:
                                        </p>
                                        <ul className="space-y-4 mb-4">
                                            {[
                                                "Name and contact information (email, phone number)",
                                                "Company/business name",
                                                "Project requirements and preferences",
                                                "Payment information (processed securely through third-party providers)",
                                                "Any other information you choose to provide"
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-center gap-4 text-sm text-[#979696] tracking-wide">
                                                    <div className="w-1.5 h-1.5 bg-[#cc5500]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">2.2 Automatically Collected Information</h3>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-6">
                                            When you visit our website, we may automatically collect:
                                        </p>
                                        <ul className="space-y-4">
                                            {[
                                                "IP address and browser type",
                                                "Operating system and device information",
                                                "Pages visited and time spent on each page",
                                                "Referring website addresses",
                                                "Geographic location (country/city level)"
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-center gap-4 text-sm text-[#979696] tracking-wide">
                                                    <div className="w-1.5 h-1.5 bg-[#cc5500]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* How We Use Information */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    3. How We Use Your Information
                                </h2>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-6">
                                    We use the information we collect to:
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Respond to your inquiries and provide customer support",
                                        "Process project requests and deliver our services",
                                        "Send project updates, invoices, and related communications",
                                        "Send marketing communications (only with your consent)",
                                        "Improve our website and services",
                                        "Analyze website usage and optimize user experience",
                                        "Protect against fraud and unauthorized access",
                                        "Comply with legal obligations"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-4 text-sm text-[#979696] tracking-wide">
                                            <div className="w-1.5 h-1.5 bg-[#cc5500]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Information Sharing */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    4. Information Sharing and Disclosure
                                </h2>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-8">
                                    We do not sell, trade, or rent your personal information to third parties.
                                    We may share your information only in the following circumstances:
                                </p>

                                <div className="space-y-10">
                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">4.1 Service Providers</h3>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                            We may share information with trusted third-party service providers who assist us in
                                            operating our website, conducting our business, or servicing you (e.g., hosting providers,
                                            payment processors, email services).
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">4.2 Legal Requirements</h3>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                            We may disclose your information if required to do so by law or in response to valid
                                            requests by public authorities (e.g., court orders, government requests).
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">4.3 Business Transfers</h3>
                                        <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                            In the event of a merger, acquisition, or sale of all or a portion of our assets,
                                            your personal information may be transferred as part of that transaction.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Data Security */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    5. Data Security
                                </h2>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-6">
                                    We implement appropriate technical and organizational security measures to protect
                                    your personal information against unauthorized access, alteration, disclosure, or destruction.
                                    These measures include:
                                </p>
                                <ul className="space-y-4 mb-6">
                                    {[
                                        "SSL/TLS encryption for data transmission",
                                        "Secure storage of client files and project data",
                                        "Limited access to personal information on a need-to-know basis",
                                        "Regular security assessments and updates"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-4 text-sm text-[#979696] tracking-wide">
                                            <div className="w-1.5 h-1.5 bg-[#cc5500]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    However, no method of transmission over the Internet or electronic storage is 100% secure.
                                    While we strive to protect your personal information, we cannot guarantee its absolute security.
                                </p>
                            </div>

                            {/* Data Retention */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    6. Data Retention
                                </h2>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-6">
                                    We retain your personal information only for as long as necessary to fulfill the purposes
                                    outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-4 text-sm text-[#979696] tracking-wide">
                                        <div className="w-1.5 h-1.5 bg-[#cc5500]" />
                                        <span className="text-[#161312] font-medium uppercase tracking-[0.1em] text-xs">Inquiry data:</span> 2 years after last contact
                                    </li>
                                    <li className="flex items-center gap-4 text-sm text-[#979696] tracking-wide">
                                        <div className="w-1.5 h-1.5 bg-[#cc5500]" />
                                        <span className="text-[#161312] font-medium uppercase tracking-[0.1em] text-xs">Client project data:</span> 7 years after project completion (for legal/tax purposes)
                                    </li>
                                    <li className="flex items-center gap-4 text-sm text-[#979696] tracking-wide">
                                        <div className="w-1.5 h-1.5 bg-[#cc5500]" />
                                        <span className="text-[#161312] font-medium uppercase tracking-[0.1em] text-xs">Newsletter subscribers:</span> Until unsubscription
                                    </li>
                                    <li className="flex items-center gap-4 text-sm text-[#979696] tracking-wide">
                                        <div className="w-1.5 h-1.5 bg-[#cc5500]" />
                                        <span className="text-[#161312] font-medium uppercase tracking-[0.1em] text-xs">Website analytics:</span> 26 months
                                    </li>
                                </ul>
                            </div>

                            {/* Your Rights */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    7. Your Rights
                                </h2>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-6">
                                    You have the following rights regarding your personal information:
                                </p>
                                <ul className="space-y-4 mb-6">
                                    <li className="flex items-center gap-4 text-sm text-[#979696] tracking-wide">
                                        <div className="w-1.5 h-1.5 bg-[#cc5500]" />
                                        <span className="text-[#161312] font-medium uppercase tracking-[0.1em] text-xs">Access:</span> Request a copy of the personal data we hold about you
                                    </li>
                                    <li className="flex items-center gap-4 text-sm text-[#979696] tracking-wide">
                                        <div className="w-1.5 h-1.5 bg-[#cc5500]" />
                                        <span className="text-[#161312] font-medium uppercase tracking-[0.1em] text-xs">Correction:</span> Request correction of inaccurate or incomplete data
                                    </li>
                                    <li className="flex items-center gap-4 text-sm text-[#979696] tracking-wide">
                                        <div className="w-1.5 h-1.5 bg-[#cc5500]" />
                                        <span className="text-[#161312] font-medium uppercase tracking-[0.1em] text-xs">Deletion:</span> Request deletion of your personal data (subject to legal obligations)
                                    </li>
                                    <li className="flex items-center gap-4 text-sm text-[#979696] tracking-wide">
                                        <div className="w-1.5 h-1.5 bg-[#cc5500]" />
                                        <span className="text-[#161312] font-medium uppercase tracking-[0.1em] text-xs">Objection:</span> Object to processing of your data for marketing purposes
                                    </li>
                                    <li className="flex items-center gap-4 text-sm text-[#979696] tracking-wide">
                                        <div className="w-1.5 h-1.5 bg-[#cc5500]" />
                                        <span className="text-[#161312] font-medium uppercase tracking-[0.1em] text-xs">Portability:</span> Request transfer of your data to another service provider
                                    </li>
                                    <li className="flex items-center gap-4 text-sm text-[#979696] tracking-wide">
                                        <div className="w-1.5 h-1.5 bg-[#cc5500]" />
                                        <span className="text-[#161312] font-medium uppercase tracking-[0.1em] text-xs">Withdrawal:</span> Withdraw consent for data processing at any time
                                    </li>
                                </ul>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    To exercise any of these rights, please contact us using the information provided below.
                                </p>
                            </div>

                            {/* Cookies */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    8. Cookies and Tracking Technologies
                                </h2>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-6">
                                    Our website may use cookies and similar tracking technologies to enhance your browsing experience.
                                    Cookies are small data files stored on your device.
                                </p>

                                <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#161312] mb-4">Types of Cookies We Use:</h3>
                                <ul className="space-y-4 mb-6">
                                    <li className="flex items-center gap-4 text-sm text-[#979696] tracking-wide">
                                        <div className="w-1.5 h-1.5 bg-[#cc5500]" />
                                        <span className="text-[#161312] font-medium uppercase tracking-[0.1em] text-xs">Essential cookies:</span> Required for website functionality
                                    </li>
                                    <li className="flex items-center gap-4 text-sm text-[#979696] tracking-wide">
                                        <div className="w-1.5 h-1.5 bg-[#cc5500]" />
                                        <span className="text-[#161312] font-medium uppercase tracking-[0.1em] text-xs">Analytics cookies:</span> Help us understand how visitors use our site
                                    </li>
                                    <li className="flex items-center gap-4 text-sm text-[#979696] tracking-wide">
                                        <div className="w-1.5 h-1.5 bg-[#cc5500]" />
                                        <span className="text-[#161312] font-medium uppercase tracking-[0.1em] text-xs">Marketing cookies:</span> Used to deliver relevant advertisements (if applicable)
                                    </li>
                                </ul>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    You can control cookies through your browser settings. Disabling certain cookies may
                                    affect website functionality.
                                </p>
                            </div>

                            {/* Third-Party Links */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    9. Third-Party Links
                                </h2>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    Our website may contain links to third-party websites. We are not responsible for the
                                    privacy practices or content of these external sites. We encourage you to read the
                                    privacy policies of any third-party sites you visit.
                                </p>
                            </div>

                            {/* Children's Privacy */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    10. Children's Privacy
                                </h2>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    Our services are not directed to individuals under the age of 18. We do not knowingly
                                    collect personal information from children. If you believe we have inadvertently collected
                                    information from a child, please contact us immediately.
                                </p>
                            </div>

                            {/* Policy Updates */}
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    11. Changes to This Policy
                                </h2>
                                <p className="text-sm text-[#161312] font-medium leading-[1.8] tracking-wide mb-6 p-6 border-l-2 border-[#cc5500] bg-[#161312]/5">
                                    We reserve the right to update this Privacy Policy at any time and without prior notice.
                                    Any changes will be posted on this page with an updated "Last updated" date and shall become
                                    effective immediately upon posting. Your continued use of our website or services after any
                                    changes constitutes your binding acceptance of the updated policy. It is your sole responsibility
                                    to review this policy periodically for modifications.
                                </p>
                            </div>

                            {/* Contact */}
                            <div>
                                <h2 className="font-serif text-3xl font-normal text-[#161312] mb-8 tracking-tight">
                                    12. Contact Us
                                </h2>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-8">
                                    If you have any questions about this Privacy Policy or our data practices, please contact us:
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
