import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings, TrendingUp, MessageSquare, BarChart3, Lightbulb, Monitor, Palette, Share2 } from "lucide-react"
import { translations } from "@/lib/translations"

interface ServicesProps {
  language: string
}

export function Services({ language }: ServicesProps) {
  // Fallback to 'nl' if language is not valid
  const currentLang = language === "nl" || language === "en" ? language : "nl"
  const t = translations[currentLang]

  const propertyServices = [
    {
      icon: Settings,
      title: t.services.items.profileOptimization.title,
      description: t.services.items.profileOptimization.description,
    },
    {
      icon: TrendingUp,
      title: t.services.items.revenueManagement.title,
      description: t.services.items.revenueManagement.description,
    },
    {
      icon: MessageSquare,
      title: t.services.items.guestExperience.title,
      description: t.services.items.guestExperience.description,
    },
    {
      icon: BarChart3,
      title: t.services.items.analytics.title,
      description: t.services.items.analytics.description,
    },
    {
      icon: Lightbulb,
      title: t.services.items.strategicAdvice.title,
      description: t.services.items.strategicAdvice.description,
    },
  ]

  const marketingServices = [
    {
      icon: Monitor,
      title: t.services.items.webDesign.title,
      description: t.services.items.webDesign.description,
    },
    {
      icon: Palette,
      title: t.services.items.graphicDesign.title,
      description: t.services.items.graphicDesign.description,
    },
    {
      icon: TrendingUp,
      title: t.services.items.seo.title,
      description: t.services.items.seo.description,
    },
    {
      icon: Share2,
      title: t.services.items.socialMedia.title,
      description: t.services.items.socialMedia.description,
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Property Management Services */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-black mb-4">{t.services.propertyTitle}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">{t.services.propertySubtitle}</p>
        </div>

        {/* First 3 services in normal grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {propertyServices.slice(0, 3).map((service, index) => (
            <Card
              key={index}
              className="border-2 border-transparent hover:border-gold transition-all duration-300 group"
            >
              <CardHeader>
                <service.icon className="h-12 w-12 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl text-black font-medium">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Last 2 services centered */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          {propertyServices.slice(3).map((service, index) => (
            <Card
              key={index + 3}
              className="border-2 border-transparent hover:border-gold transition-all duration-300 group"
            >
              <CardHeader>
                <service.icon className="h-12 w-12 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl text-black font-medium">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Marketing Services */}
        <div id="marketing" className="text-center mb-16">
          <h2 className="text-4xl font-serif text-black mb-4">{t.services.marketingTitle}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">{t.services.marketingSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {marketingServices.map((service, index) => (
            <Card
              key={index}
              className="border-2 border-transparent hover:border-gold transition-all duration-300 group"
            >
              <CardHeader>
                <service.icon className="h-12 w-12 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl text-black font-medium">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-black text-gold hover:bg-gray-900 text-lg px-8">
            {t.services.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}
