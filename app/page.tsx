import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import Process from "@/components/sections/process"
import Testimonials from "@/components/sections/testimonials"
import Newsletter from "@/components/sections/newsletter"
import CTA from "@/components/sections/cta"
import Footer from "@/components/sections/footer"
import Navigation from "@/components/navigation"
import ProgressBar from "@/components/progress-bar"
import MobileCTA from "@/components/mobile-cta"
import PageLoader from "@/components/page-loader"

export default function Home() {
  return (
    <main className="min-h-screen">
      <PageLoader />
      <Navigation />
      <ProgressBar />
      <Hero />
      <Services />
      <Testimonials />
      <Process />
      <Newsletter />
      <CTA />
      <Footer />
      <MobileCTA />
    </main>
  )
}
