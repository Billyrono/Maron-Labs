"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, Globe, Palette, PenTool, TrendingUp, Smartphone, ShoppingCart, Lightbulb, Check } from "lucide-react"

interface ServiceOption {
    value: string
    label: string
    icon: React.ReactNode
}

const services: ServiceOption[] = [
    { value: "Web Design & Development", label: "Web Design & Development", icon: <Globe className="w-4 h-4" /> },
    { value: "Graphic Design", label: "Graphic Design", icon: <Palette className="w-4 h-4" /> },
    { value: "Content Creation", label: "Content Creation", icon: <PenTool className="w-4 h-4" /> },
    { value: "SEO Optimization", label: "SEO Optimization", icon: <TrendingUp className="w-4 h-4" /> },
    { value: "Mobile App Development", label: "Mobile App Development", icon: <Smartphone className="w-4 h-4" /> },
    { value: "E-Commerce Solutions", label: "E-Commerce Solutions", icon: <ShoppingCart className="w-4 h-4" /> },
    { value: "Other", label: "Other", icon: <Lightbulb className="w-4 h-4" /> },
]

interface ServiceDropdownProps {
    value: string
    onChange: (value: string) => void
    name: string
}

export function ServiceDropdown({ value, onChange, name }: ServiceDropdownProps) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Close on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const selectedService = services.find(s => s.value === value)

    return (
        <div ref={dropdownRef} className="relative">
            {/* Hidden input for form submission */}
            <input type="hidden" name={name} value={value} />

            {/* Trigger button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full px-4 py-3 border border-[#979696]/30 rounded-lg flex items-center justify-between transition-all duration-200 bg-white text-left
                    ${isOpen ? 'border-[#cc5500] ring-2 ring-[#cc5500]/20' : 'hover:border-[#cc5500]/50'}
                    ${value ? 'text-[#161312]' : 'text-[#979696]'}`}
            >
                <span className="flex items-center gap-3">
                    {selectedService ? (
                        <>
                            <span className="text-[#cc5500]">{selectedService.icon}</span>
                            <span className="font-medium">{selectedService.label}</span>
                        </>
                    ) : (
                        "Select a service"
                    )}
                </span>
                <ChevronDown className={`w-5 h-5 text-[#cc5500] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown options */}
            {isOpen && (
                <div className="absolute z-50 w-full mt-2 bg-white border border-[#979696]/20 rounded-lg shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    {services.map((service) => (
                        <button
                            key={service.value}
                            type="button"
                            onClick={() => {
                                onChange(service.value)
                                setIsOpen(false)
                            }}
                            className={`w-full px-4 py-3 flex items-center gap-3 text-left transition-colors duration-150
                                ${value === service.value
                                    ? 'bg-[#fee2b2] text-[#161312]'
                                    : 'hover:bg-[#fee2b2]/50 text-[#161312]'}`}
                        >
                            <span className={value === service.value ? 'text-[#cc5500]' : 'text-[#979696]'}>
                                {service.icon}
                            </span>
                            <span className="flex-1 font-medium">{service.label}</span>
                            {value === service.value && (
                                <Check className="w-4 h-4 text-[#cc5500]" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
