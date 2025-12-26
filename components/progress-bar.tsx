"use client"

import { useState, useEffect } from "react"

export default function ProgressBar() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
            setProgress(scrollProgress)
        }

        window.addEventListener("scroll", updateProgress)
        return () => window.removeEventListener("scroll", updateProgress)
    }, [])

    return (
        <div className="fixed top-20 left-0 w-full h-1 bg-transparent z-40">
            <div
                className="h-full bg-gradient-to-r from-[#cc5500] to-[#fee2b2] transition-all duration-150"
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}
