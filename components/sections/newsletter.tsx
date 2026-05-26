"use client"

import { useState } from "react"
import { CheckCircle, Loader2 } from "lucide-react"

export default function Newsletter() {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setStatus("loading")

        // Simulate API call
        setTimeout(() => {
            setStatus("success")
            setEmail("")
            setTimeout(() => setStatus("idle"), 3000)
        }, 1000)
    }

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#cc5500]">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-[11px] uppercase tracking-[0.5em] text-[#f9f8f9]/60 mb-4">
                    Newsletter
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#f9f8f9] mb-4 tracking-tight">
                    Stay Updated
                </h2>
                <div className="w-12 h-[1px] bg-[#f9f8f9]/30 mx-auto mb-6" />
                <p className="text-sm text-[#f9f8f9]/70 mb-10 max-w-xl mx-auto leading-relaxed tracking-wide">
                    Subscribe to our newsletter for the latest insights, tips, and exclusive offers in digital solutions.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="flex-1 px-6 py-4 bg-[#f9f8f9] text-[#161312] text-sm tracking-wide placeholder:text-[#979696] focus:outline-none"
                    />
                    <button
                        type="submit"
                        disabled={status === "loading" || status === "success"}
                        className="px-8 py-4 bg-[#161312] text-[#f9f8f9] text-[13px] uppercase tracking-[0.2em] font-medium hover:bg-[#000000] transition-all duration-500 disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                        {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
                        {status === "success" && <CheckCircle className="w-4 h-4" />}
                        {status === "success" ? "Subscribed" : "Subscribe"}
                    </button>
                </form>

                {status === "success" && (
                    <p className="mt-6 text-[#f9f8f9]/80 text-sm tracking-wide">
                        Thank you for subscribing. Check your inbox for confirmation.
                    </p>
                )}
            </div>
        </section>
    )
}
