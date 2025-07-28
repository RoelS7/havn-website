"use client"

import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { Portfolio } from "@/components/portfolio"
import { Pricing } from "@/components/pricing"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ScrollToTop } from "@/components/scroll-to-top"
import { TrustBadges } from "@/components/trust-badges"
import { FAQSection } from "@/components/faq-section"
import { useLanguage } from "@/hooks/use-language"

export default function Home() {
  const { language, changeLanguage, isLoaded } = useLanguage()

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-gold text-2xl font-serif">Loading...</div>
      </div>
    )
  }

  return (
    <>
      <Navbar language={language} onLanguageChange={changeLanguage} />
      <ScrollToTop />
      <main>
        <section id="home">
          <Hero language={language} />
        </section>
        <TrustBadges />
        <section id="services">
          <Services language={language} />
        </section>
        <section id="portfolio">
          <Portfolio language={language} />
        </section>
        <section id="testimonials">
          <Testimonials language={language} />
        </section>
        <section id="pricing">
          <Pricing language={language} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="faq">
          <FAQSection language={language} />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer language={language} />
    </>
  )
}
