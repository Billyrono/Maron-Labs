"use client"

import { MessageCircle } from "lucide-react"

export default function MobileCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#161312] to-transparent md:hidden z-40">
            <a
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#cc5500] text-[#f9f8f9] rounded-lg font-bold text-lg shadow-lg hover:bg-[#a83f00] transition-all"
            >
                <MessageCircle className="w-5 h-5" />
                Start Your Project
            </a>
        </div>
    )
}
