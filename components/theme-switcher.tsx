"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon, Monitor } from "lucide-react"

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="flex items-center gap-1 p-1 bg-[#161312]/10 dark:bg-[#f9f8f9]/10 rounded-lg">
            <button
                onClick={() => setTheme("light")}
                className={`p-2 rounded transition-all ${theme === "light"
                        ? "bg-[#cc5500] text-[#f9f8f9]"
                        : "text-[#979696] hover:text-[#cc5500]"
                    }`}
                aria-label="Light mode"
            >
                <Sun className="w-4 h-4" />
            </button>
            <button
                onClick={() => setTheme("dark")}
                className={`p-2 rounded transition-all ${theme === "dark"
                        ? "bg-[#cc5500] text-[#f9f8f9]"
                        : "text-[#979696] hover:text-[#cc5500]"
                    }`}
                aria-label="Dark mode"
            >
                <Moon className="w-4 h-4" />
            </button>
            <button
                onClick={() => setTheme("system")}
                className={`p-2 rounded transition-all ${theme === "system"
                        ? "bg-[#cc5500] text-[#f9f8f9]"
                        : "text-[#979696] hover:text-[#cc5500]"
                    }`}
                aria-label="System theme"
            >
                <Monitor className="w-4 h-4" />
            </button>
        </div>
    )
}
