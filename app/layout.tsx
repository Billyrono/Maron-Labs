import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, League_Spartan, Yellowtail, Oswald } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _leagueSpartan = League_Spartan({ subsets: ["latin"], variable: "--font-league-spartan" })
const _yellowtail = Yellowtail({ weight: "400", subsets: ["latin"], variable: "--font-yellowtail" })
const _oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" })

export const metadata: Metadata = {
  metadataBase: new URL("https://maronlabs.com"),
  title: {
    default: "Maron Labs - Premium Digital Solutions Agency | Web Design & Development",
    template: "%s | Maron Labs"
  },
  description: "Maron Labs is a premium digital solutions agency in Nairobi, Kenya. We specialize in web design, development, graphic design, SEO, and digital marketing. Transform your vision into digital excellence.",
  keywords: [
    "web design Kenya",
    "web development Nairobi",
    "digital agency Kenya",
    "web design agency",
    "graphic design Kenya",
    "SEO services Kenya",
    "digital marketing Nairobi",
    "mobile app development",
    "e-commerce solutions",
    "Maron Labs",
    "premium web design",
    "responsive web design"
  ],
  authors: [{ name: "Maron Labs", url: "https://maronlabs.com" }],
  creator: "Maron Labs",
  publisher: "Maron Labs",
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
    title: "Maron Labs - Premium Digital Solutions Agency",
    description: "Transform your vision into digital excellence. Premium web design, development, and digital marketing solutions in Kenya.",
    images: [
      {
        url: "https://maron-labs.netlify.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maron Labs - Digital Solutions Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maron Labs - Premium Digital Solutions Agency",
    description: "Transform your vision into digital excellence. Premium web design and development in Kenya.",
    images: ["https://maron-labs.netlify.app/images/og-image.png"],
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
      <body className={`font-sans antialiased overflow-x-hidden ${_leagueSpartan.variable} ${_yellowtail.variable} ${_oswald.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
