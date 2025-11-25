import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated background grid effect */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      {/* Radial gradient overlays for depth */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[128px] pointer-events-none animate-pulse" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none animate-pulse delay-1000" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Services />
        <Testimonials />
        <Pricing />
        <ContactForm />
        <Footer />
      </div>
    </main>
  )
}
