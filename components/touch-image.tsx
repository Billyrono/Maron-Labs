"use client"

import Image, { ImageProps } from "next/image"
import { useState, useRef, useEffect } from "react"

export default function TouchImage({ className, ...props }: ImageProps) {
    const [isTouched, setIsTouched] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const handleTouch = () => {
        setIsTouched(true)
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
            setIsTouched(false)
        }, 2000)
    }

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [])

    return (
        <Image 
            {...props}
            onTouchStart={handleTouch}
            className={`${className} ${isTouched ? '!grayscale-0 !scale-105 !opacity-100' : ''}`}
        />
    )
}
