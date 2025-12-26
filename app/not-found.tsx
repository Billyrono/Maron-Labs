import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <main className="min-h-screen">
            <Navigation />

            <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#161312]">
                <div className="text-center max-w-2xl mx-auto">
                    {/* 404 Number */}
                    <h1
                        className="text-[150px] sm:text-[200px] font-black text-[#cc5500] leading-none mb-4"
                        style={{ fontFamily: "Oswald" }}
                    >
                        404
                    </h1>

                    {/* Message */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#f9f8f9] mb-4" style={{ fontFamily: "Oswald" }}>
                        Page Not Found
                    </h2>
                    <p className="text-lg text-[#979696] mb-8">
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#cc5500] text-[#f9f8f9] rounded font-bold hover:bg-[#a83f00] transition-all"
                        >
                            <Home className="w-5 h-5" />
                            Back to Home
                        </Link>
                        <button
                            onClick={() => typeof window !== 'undefined' && window.history.back()}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#f9f8f9] text-[#f9f8f9] rounded font-bold hover:bg-[#f9f8f9] hover:text-[#161312] transition-all"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Go Back
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
