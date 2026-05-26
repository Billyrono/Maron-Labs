import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const _montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export const metadata: Metadata = {
  metadataBase: new URL("https://maron-labs.netlify.app"),
  title: {
    default: "Maron Labs - Premium Tech & Digital Solutions",
    template: "%s | Maron Labs"
  },
  description: "Maron Labs is a premium digital solutions agency in Nairobi, Kenya. We specialize in enterprise systems, AI development, web design, and digital marketing. Transform your vision into digital excellence.",
  keywords: [
    "web design Kenya",
    "web development Nairobi",
    "digital agency Kenya",
    "software development",
    "AI integration",
    "SEO services Kenya",
    "digital marketing Nairobi",
    "Maron Labs",
    "premium web design"
  ],
  authors: [{ name: "Maron Labs", url: "https://maron-labs.netlify.app" }],
  creator: "Maron Labs",
  publisher: "Maron Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maron-labs.netlify.app",
    siteName: "Maron Labs",
    title: "Maron Labs - Premium Tech & Digital Solutions",
    description: "Transform your vision into digital excellence. Premium enterprise systems, AI development, and digital marketing solutions.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Maron Labs - Premium Tech & Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maron Labs - Premium Tech & Digital Solutions",
    description: "Transform your vision into digital excellence. Premium enterprise systems, AI development, and digital marketing solutions.",
    creator: "@maronlabs",
    images: ["/opengraph-image"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://maron-labs.netlify.app",
  },
  icons: {
    icon: [
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
}

import CookieConsent from "@/components/cookie-consent"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload carousel images for faster LCP */}
        <link rel="preload" href="/images/Image 1.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/images/Image 2.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/images/our-services.webp" as="image" type="image/webp" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans antialiased overflow-x-hidden ${_playfair.variable} ${_montserrat.variable}`}>
        <div className="relative overflow-x-hidden w-full max-w-[100vw] min-h-screen flex flex-col">
          {children}
        </div>
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
