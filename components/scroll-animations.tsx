"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

// Hook to detect when element is in viewport
export function useInView(threshold = 0.1) {
    const ref = useRef<HTMLDivElement>(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                }
            },
            { threshold }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [threshold])

    return { ref, isInView }
}

// Animated counter component
export function AnimatedCounter({
    end,
    duration = 2000,
    suffix = ""
}: {
    end: number
    duration?: number
    suffix?: string
}) {
    const [count, setCount] = useState(0)
    const { ref, isInView } = useInView()
    const hasAnimated = useRef(false)

    useEffect(() => {
        if (isInView && !hasAnimated.current) {
            hasAnimated.current = true
            const startTime = Date.now()
            const animate = () => {
                const elapsed = Date.now() - startTime
                const progress = Math.min(elapsed / duration, 1)
                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4)
                setCount(Math.floor(easeOutQuart * end))

                if (progress < 1) {
                    requestAnimationFrame(animate)
                }
            }
            requestAnimationFrame(animate)
        }
    }, [isInView, end, duration])

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    )
}

// Fade in animation wrapper
export function FadeIn({
    children,
    delay = 0,
    direction = "up"
}: {
    children: ReactNode
    delay?: number
    direction?: "up" | "down" | "left" | "right"
}) {
    const { ref, isInView } = useInView(0.1)

    const transforms = {
        up: "translateY(40px)",
        down: "translateY(-40px)",
        left: "translateX(40px)",
        right: "translateX(-40px)"
    }

    return (
        <div
            ref={ref}
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translate(0)" : transforms[direction],
                transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`
            }}
        >
            {children}
        </div>
    )
}

// Staggered children animation
export function StaggerChildren({
    children,
    staggerDelay = 100
}: {
    children: ReactNode[]
    staggerDelay?: number
}) {
    return (
        <>
            {children.map((child, index) => (
                <FadeIn key={index} delay={index * staggerDelay}>
                    {child}
                </FadeIn>
            ))}
        </>
    )
}

// Scale on scroll
export function ScaleIn({
    children,
    delay = 0
}: {
    children: ReactNode
    delay?: number
}) {
    const { ref, isInView } = useInView(0.1)

    return (
        <div
            ref={ref}
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "scale(1)" : "scale(0.9)",
                transition: `opacity 0.5s ease-out ${delay}ms, transform 0.5s ease-out ${delay}ms`
            }}
        >
            {children}
        </div>
    )
}
