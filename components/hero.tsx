import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, BarChart3 } from "lucide-react"
import Image from "next/image"
import { translations } from "@/lib/translations"

interface HeroProps {
  language: string
}

export function Hero({ language }: HeroProps) {
  // Fallback to 'nl' if language is not valid
  const currentLang = language === "nl" || language === "en" ? language : "nl"
  const t = translations[currentLang]

  return (
    <section id="home" className="min-h-screen bg-black text-white flex items-center">
      <div className="container mx-auto px-4 py-20">
        {/* Titel over de gehele breedte */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-serif font-medium leading-tight">
            {t.hero.title}
            <span className="text-gold block">{t.hero.subtitle}</span>
            {t.hero.description}
          </h1>
        </div>

        {/* Inhoud eronder: tekst, knoppen, statistieken links; afbeelding rechts */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-xl text-gray-300 leading-relaxed font-light">{t.hero.text}</p>{" "}
            {/* Beschrijvende tekst verplaatst */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold text-black hover:bg-gold/90 text-lg px-8">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-black text-lg px-8 bg-transparent"
              >
                {t.hero.services}
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-gold mx-auto mb-2" />
                <div className="text-2xl font-medium text-gold">+30%</div>
                <div className="text-sm text-gray-400 font-light">{t.hero.stats.revenue}</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-gold mx-auto mb-2" />
                <div className="text-2xl font-medium text-gold">24/7</div>
                <div className="text-sm text-gray-400 font-light">{t.hero.stats.support}</div>
              </div>
              <div className="text-center">
                <BarChart3 className="h-8 w-8 text-gold mx-auto mb-2" />
                <div className="text-2xl font-medium text-gold">100%</div>
                <div className="text-sm text-gray-400 font-light">{t.hero.stats.optimization}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/home-pic-1.webp" // Nieuwe afbeelding voor de hero sectie
                alt="Modern bedroom with peach walls and bed"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl object-cover w-full h-full"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gold/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
