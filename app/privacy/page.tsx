import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import ProgressBar from "@/components/progress-bar"
import MobileCTA from "@/components/mobile-cta"
import PageLoader from "@/components/page-loader"
import { FadeIn } from "@/components/scroll-animations"

export const metadata = {
    title: "Privacy Policy - Maron Labs",
    description: "Privacy Policy for Maron Labs. Learn how we collect, use, and protect your personal information."
}

export default function PrivacyPage() {
    return (
        <main className="min-h-screen">
            <PageLoader />
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#161312]">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-black text-[#f9f8f9] mb-4" style={{ fontFamily: "Oswald" }}>
                        Privacy Policy
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
                                    Maron Labs ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                                    explains how we collect, use, disclose, and safeguard your information when you visit our
                                    website or engage our services.
                                </p>
                                <p className="text-[#161312] leading-relaxed">
                                    By using our website or services, you consent to the data practices described in this policy.
                                    If you do not agree with this policy, please do not access our website or use our services.
                                </p>
                            </div>

                            {/* Information We Collect */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    2. Information We Collect
                                </h2>

                                <h3 className="text-xl font-bold text-[#161312] mb-3">2.1 Personal Information</h3>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    We may collect personal information that you voluntarily provide when:
                                </p>
                                <ul className="list-disc pl-6 text-[#161312] space-y-2 mb-4">
                                    <li>Filling out contact forms on our website</li>
                                    <li>Requesting a quote or proposal</li>
                                    <li>Signing up for our newsletter</li>
                                    <li>Engaging our services as a client</li>
                                    <li>Communicating with us via email, phone, or WhatsApp</li>
                                </ul>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    This information may include:
                                </p>
                                <ul className="list-disc pl-6 text-[#161312] space-y-2 mb-6">
                                    <li>Name and contact information (email, phone number)</li>
                                    <li>Company/business name</li>
                                    <li>Project requirements and preferences</li>
                                    <li>Payment information (processed securely through third-party providers)</li>
                                    <li>Any other information you choose to provide</li>
                                </ul>

                                <h3 className="text-xl font-bold text-[#161312] mb-3">2.2 Automatically Collected Information</h3>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    When you visit our website, we may automatically collect:
                                </p>
                                <ul className="list-disc pl-6 text-[#161312] space-y-2">
                                    <li>IP address and browser type</li>
                                    <li>Operating system and device information</li>
                                    <li>Pages visited and time spent on each page</li>
                                    <li>Referring website addresses</li>
                                    <li>Geographic location (country/city level)</li>
                                </ul>
                            </div>

                            {/* How We Use Information */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    3. How We Use Your Information
                                </h2>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    We use the information we collect to:
                                </p>
                                <ul className="list-disc pl-6 text-[#161312] space-y-2">
                                    <li>Respond to your inquiries and provide customer support</li>
                                    <li>Process project requests and deliver our services</li>
                                    <li>Send project updates, invoices, and related communications</li>
                                    <li>Send marketing communications (only with your consent)</li>
                                    <li>Improve our website and services</li>
                                    <li>Analyze website usage and optimize user experience</li>
                                    <li>Protect against fraud and unauthorized access</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                            </div>

                            {/* Information Sharing */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    4. Information Sharing and Disclosure
                                </h2>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    We do not sell, trade, or rent your personal information to third parties.
                                    We may share your information only in the following circumstances:
                                </p>

                                <h3 className="text-xl font-bold text-[#161312] mb-3">4.1 Service Providers</h3>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    We may share information with trusted third-party service providers who assist us in
                                    operating our website, conducting our business, or servicing you (e.g., hosting providers,
                                    payment processors, email services).
                                </p>

                                <h3 className="text-xl font-bold text-[#161312] mb-3">4.2 Legal Requirements</h3>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    We may disclose your information if required to do so by law or in response to valid
                                    requests by public authorities (e.g., court orders, government requests).
                                </p>

                                <h3 className="text-xl font-bold text-[#161312] mb-3">4.3 Business Transfers</h3>
                                <p className="text-[#161312] leading-relaxed">
                                    In the event of a merger, acquisition, or sale of all or a portion of our assets,
                                    your personal information may be transferred as part of that transaction.
                                </p>
                            </div>

                            {/* Data Security */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    5. Data Security
                                </h2>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    We implement appropriate technical and organizational security measures to protect
                                    your personal information against unauthorized access, alteration, disclosure, or destruction.
                                    These measures include:
                                </p>
                                <ul className="list-disc pl-6 text-[#161312] space-y-2 mb-4">
                                    <li>SSL/TLS encryption for data transmission</li>
                                    <li>Secure storage of client files and project data</li>
                                    <li>Limited access to personal information on a need-to-know basis</li>
                                    <li>Regular security assessments and updates</li>
                                </ul>
                                <p className="text-[#161312] leading-relaxed">
                                    However, no method of transmission over the Internet or electronic storage is 100% secure.
                                    While we strive to protect your personal information, we cannot guarantee its absolute security.
                                </p>
                            </div>

                            {/* Data Retention */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    6. Data Retention
                                </h2>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    We retain your personal information only for as long as necessary to fulfill the purposes
                                    outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                                </p>
                                <ul className="list-disc pl-6 text-[#161312] space-y-2">
                                    <li><strong>Inquiry data:</strong> 2 years after last contact</li>
                                    <li><strong>Client project data:</strong> 7 years after project completion (for legal/tax purposes)</li>
                                    <li><strong>Newsletter subscribers:</strong> Until unsubscription</li>
                                    <li><strong>Website analytics:</strong> 26 months</li>
                                </ul>
                            </div>

                            {/* Your Rights */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    7. Your Rights
                                </h2>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    You have the following rights regarding your personal information:
                                </p>
                                <ul className="list-disc pl-6 text-[#161312] space-y-2 mb-4">
                                    <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                                    <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations)</li>
                                    <li><strong>Objection:</strong> Object to processing of your data for marketing purposes</li>
                                    <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                                    <li><strong>Withdrawal:</strong> Withdraw consent for data processing at any time</li>
                                </ul>
                                <p className="text-[#161312] leading-relaxed">
                                    To exercise any of these rights, please contact us using the information provided below.
                                </p>
                            </div>

                            {/* Cookies */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    8. Cookies and Tracking Technologies
                                </h2>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    Our website may use cookies and similar tracking technologies to enhance your browsing experience.
                                    Cookies are small data files stored on your device.
                                </p>

                                <h3 className="text-xl font-bold text-[#161312] mb-3">Types of Cookies We Use:</h3>
                                <ul className="list-disc pl-6 text-[#161312] space-y-2 mb-4">
                                    <li><strong>Essential cookies:</strong> Required for website functionality</li>
                                    <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
                                    <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements (if applicable)</li>
                                </ul>
                                <p className="text-[#161312] leading-relaxed">
                                    You can control cookies through your browser settings. Disabling certain cookies may
                                    affect website functionality.
                                </p>
                            </div>

                            {/* Third-Party Links */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    9. Third-Party Links
                                </h2>
                                <p className="text-[#161312] leading-relaxed">
                                    Our website may contain links to third-party websites. We are not responsible for the
                                    privacy practices or content of these external sites. We encourage you to read the
                                    privacy policies of any third-party sites you visit.
                                </p>
                            </div>

                            {/* Children's Privacy */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    10. Children's Privacy
                                </h2>
                                <p className="text-[#161312] leading-relaxed">
                                    Our services are not directed to individuals under the age of 18. We do not knowingly
                                    collect personal information from children. If you believe we have inadvertently collected
                                    information from a child, please contact us immediately.
                                </p>
                            </div>

                            {/* Policy Updates */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    11. Changes to This Policy
                                </h2>
                                <p className="text-[#161312] leading-relaxed">
                                    We may update this Privacy Policy from time to time. Any changes will be posted on this page
                                    with an updated "Last updated" date. We encourage you to review this policy periodically.
                                    Continued use of our website or services after any changes constitutes acceptance of the updated policy.
                                </p>
                            </div>

                            {/* Contact */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#000000] mb-4" style={{ fontFamily: "Oswald" }}>
                                    12. Contact Us
                                </h2>
                                <p className="text-[#161312] leading-relaxed mb-4">
                                    If you have any questions about this Privacy Policy or our data practices, please contact us:
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
