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

            {/* Cinematic Header */}
            <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#161312] overflow-hidden min-h-[60vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9f8f9_1px,transparent_1px),linear-gradient(to_bottom,#f9f8f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-5" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#161312]" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-6">
                        Data Protection
                    </p>
                    <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#f9f8f9] mb-8 tracking-tight">
                        Privacy <span className="italic text-[#cc5500]">Policy</span>
                    </h1>
                    <div className="w-16 h-[1px] bg-[#cc5500] mx-auto mb-8" />
                    <p className="text-base text-[#f9f8f9]/50 max-w-2xl mx-auto leading-relaxed tracking-wide">
                        Transparency and control over your digital footprint. Learn how we utilize and protect your data to elevate your experience at Maron Labs.
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
                                        Maron Labs ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                                        explains how we collect, use, disclose, and safeguard your information when you visit our
                                        website or engage our services.
                                    </p>
                                    <div className="p-6 border-l border-[#cc5500] bg-[#161312] text-[#f9f8f9]/70">
                                        By using our website or services, you consent to the data practices described in this policy.
                                        If you do not agree with this policy, please do not access our website or use our services.
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 02. Information We Collect */}
                        <FadeIn delay={200}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">02</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Information We Collect</h2>
                                </div>
                                <div className="space-y-8 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] text-[#f9f8f9] mb-4">Personal Information</h3>
                                        <p className="mb-4">We may collect personal information that you voluntarily provide when:</p>
                                        <ul className="space-y-3 mb-6">
                                            {[
                                                "Filling out contact forms on our website",
                                                "Requesting a quote or proposal",
                                                "Signing up for our newsletter",
                                                "Engaging our services as a client",
                                                "Communicating with us via email, phone, or WhatsApp"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#cc5500] shrink-0" />{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="w-12 h-[1px] bg-[#f9f8f9]/10" />
                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] text-[#f9f8f9] mb-4">Automatically Collected</h3>
                                        <p className="mb-4">When you visit our website, we may automatically collect:</p>
                                        <ul className="space-y-3">
                                            {[
                                                "IP address and browser type",
                                                "Operating system and device information",
                                                "Pages visited and time spent on each page",
                                                "Referring website addresses",
                                                "Geographic location (country/city level)"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#cc5500] shrink-0" />{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 03. How We Use Information */}
                        <FadeIn delay={300}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">03</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">How We Use Your Information</h2>
                                </div>
                                <div className="space-y-6 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <p>We use the information we collect to:</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            "Respond to your inquiries",
                                            "Process project requests",
                                            "Send project updates & invoices",
                                            "Send marketing communications",
                                            "Improve website services",
                                            "Analyze website usage",
                                            "Protect against fraud",
                                            "Comply with legal obligations"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-4"><div className="w-1 h-1 bg-[#cc5500]" />{item}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 04. Information Sharing */}
                        <FadeIn delay={400}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">04</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Information Sharing</h2>
                                </div>
                                <div className="space-y-8 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <p className="text-[#f9f8f9]/80 font-medium">We do not sell, trade, or rent your personal information to third parties.</p>
                                    <div className="grid gap-6">
                                        <div>
                                            <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#cc5500] mb-2">Service Providers</h3>
                                            <p>We share information with trusted third-party service providers who assist us in operating our website, processing payments, or delivering email services.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#cc5500] mb-2">Legal Requirements</h3>
                                            <p>We may disclose your information if required to do so by law or in response to valid requests by public authorities.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#cc5500] mb-2">Business Transfers</h3>
                                            <p>In the event of a merger, acquisition, or sale of assets, your personal information may be transferred as part of that transaction.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 05. Data Security */}
                        <FadeIn delay={500}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">05</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Data Security</h2>
                                </div>
                                <div className="space-y-6 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <p>We implement robust technical and organizational measures to protect your personal data from unauthorized access, loss, misuse, or alteration.</p>
                                    <p>This includes SSL/TLS encryption for data in transit, secure server infrastructure, and strict internal access protocols. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.</p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 06. Data Retention */}
                        <FadeIn delay={600}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">06</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Data Retention</h2>
                                </div>
                                <div className="space-y-8 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <p>We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, or as required by law.</p>
                                    <div className="p-6 border border-[#f9f8f9]/5 bg-[#000000]">
                                        <ul className="space-y-4">
                                            <li className="flex justify-between items-center border-b border-[#f9f8f9]/5 pb-2">
                                                <span className="text-[#cc5500]">Inquiry Data</span>
                                                <span className="text-right">2 years</span>
                                            </li>
                                            <li className="flex justify-between items-center border-b border-[#f9f8f9]/5 pb-2">
                                                <span className="text-[#cc5500]">Client Projects</span>
                                                <span className="text-right">7 years (legal/tax purposes)</span>
                                            </li>
                                            <li className="flex justify-between items-center border-b border-[#f9f8f9]/5 pb-2">
                                                <span className="text-[#cc5500]">Newsletters</span>
                                                <span className="text-right">Until you unsubscribe</span>
                                            </li>
                                            <li className="flex justify-between items-center">
                                                <span className="text-[#cc5500]">Analytics</span>
                                                <span className="text-right">26 months</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 07. Your Rights */}
                        <FadeIn delay={700}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">07</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Your Rights</h2>
                                </div>
                                <div className="space-y-6 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <p>Depending on your location and applicable data protection laws, you may have the following rights regarding your personal data:</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                        {[
                                            { t: "Access", d: "Request a copy of your data" },
                                            { t: "Correction", d: "Correct inaccurate data" },
                                            { t: "Deletion", d: "Request deletion of data" },
                                            { t: "Objection", d: "Object to marketing processing" },
                                            { t: "Portability", d: "Transfer to another provider" },
                                            { t: "Withdrawal", d: "Withdraw consent at any time" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex flex-col">
                                                <span className="text-[#f9f8f9] mb-1">{item.t}</span>
                                                <span className="text-[11px] uppercase tracking-[0.1em]">{item.d}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 08. Cookies and Tracking */}
                        <FadeIn delay={800}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">08</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Cookies & Tracking</h2>
                                </div>
                                <div className="space-y-6 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
                                    <p>For more detailed information about the cookies we use and how to manage your preferences, please review our comprehensive <a href="/cookie-policy" className="text-[#cc5500] hover:text-[#f9f8f9] transition-colors duration-300">Cookie Policy</a>.</p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 09. Third-Party Links */}
                        <FadeIn delay={900}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">09</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Third-Party Links</h2>
                                </div>
                                <div className="space-y-6 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <p>Our website may contain links to third-party websites or services that are not owned or controlled by Maron Labs.</p>
                                    <p>We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We strongly advise you to read the privacy policy of any third-party website you visit.</p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 10. Children's Privacy */}
                        <FadeIn delay={1000}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">10</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Children's Privacy</h2>
                                </div>
                                <div className="space-y-6 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <p>Our services are not intended for use by children under the age of 18.</p>
                                    <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us. If we become aware that we have collected personal data from children without verification of parental consent, we will take steps to remove that information from our servers.</p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 11. Changes to This Policy */}
                        <FadeIn delay={1100}>
                            <div className="group border border-[#f9f8f9]/5 p-8 md:p-12 hover:border-[#cc5500]/50 transition-colors duration-500 bg-[#161312]/30">
                                <div className="flex items-baseline gap-6 mb-8">
                                    <span className="font-serif text-4xl italic text-[#cc5500]">11</span>
                                    <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-[#f9f8f9]">Changes to This Policy</h2>
                                </div>
                                <div className="space-y-6 text-sm text-[#979696] leading-[1.8] tracking-wide">
                                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
                                    <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                                </div>
                            </div>
                        </FadeIn>
                        
                        {/* 12. Contact Us */}
                        <FadeIn delay={1200}>
                            <div className="group border border-[#cc5500]/30 p-8 md:p-12 bg-[#161312]">
                                <h2 className="font-serif text-3xl font-normal text-[#f9f8f9] mb-6 tracking-tight">
                                    Contact Us
                                </h2>
                                <p className="text-sm text-[#979696] leading-[1.8] tracking-wide mb-8">
                                    If you have any questions about this Privacy Policy, your data rights, or our practices, please contact us:
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
