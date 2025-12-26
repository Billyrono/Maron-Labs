"use client"

import { useState } from "react"
import { Mail, CheckCircle, Loader2 } from "lucide-react"

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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#cc5500] to-[#a83f00]">
            <div className="max-w-4xl mx-auto text-center">
                <Mail className="w-12 h-12 text-[#f9f8f9] mx-auto mb-4" />
                <h2 className="text-2xl sm:text-3xl font-black text-[#f9f8f9] mb-4" style={{ fontFamily: "Oswald" }}>
                    Stay Updated
                </h2>
                <p className="text-[#f9f8f9]/90 mb-8 max-w-xl mx-auto">
                    Subscribe to our newsletter for the latest insights, tips, and exclusive offers in digital solutions.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="flex-1 px-4 py-3 rounded bg-[#f9f8f9] text-[#161312] placeholder:text-[#979696] focus:outline-none focus:ring-2 focus:ring-[#fee2b2]"
                    />
                    <button
                        type="submit"
                        disabled={status === "loading" || status === "success"}
                        className="px-6 py-3 bg-[#161312] text-[#f9f8f9] rounded font-bold hover:bg-[#000000] transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                        {status === "loading" && <Loader2 className="w-5 h-5 animate-spin" />}
                        {status === "success" && <CheckCircle className="w-5 h-5" />}
                        {status === "success" ? "Subscribed!" : "Subscribe"}
                    </button>
                </form>

                {status === "success" && (
                    <p className="mt-4 text-[#fee2b2] text-sm">
                        Thank you for subscribing! Check your inbox for confirmation.
                    </p>
                )}
            </div>
        </section>
    )
}
