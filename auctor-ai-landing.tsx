"use client"

import CalendarioPopup from "@/components/ui/CalendarioPopup";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Settings,
  Database,
  Zap,
  TrendingUp,
  Bell,
  Shield,
  Building,
  Car,
  Heart,
  Scale,
  Instagram,
  Linkedin,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

// Custom X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function Component() {
  const [language, setLanguage] = useState<"en" | "es">("es")
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(scrollPercent)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const content = {
    en: {
      hero: {
        headline: "AI shouldn't be a luxury.",
        subheadline: "We build custom automations to help businesses grow.",
        cta: "Book a Free Consultation",
      },
      about: {
        title: "About",
        text: "At Auctor AI, we design intelligent automations tailored to your needs. Whether it's streamlining workflows or integrating systems, we help your business operate smarter and faster — without raising costs.",
      },
      services: {
        title: "What We Do",
        items: [
          {
            title: "Workflow Automation",
            description: "Streamline repetitive tasks and optimize business processes",
          },
          {
            title: "CRM Integrations",
            description: "Connect and synchronize customer data across platforms",
          },
          {
            title: "Sales Tracking Systems",
            description: "Monitor and optimize your sales pipeline performance",
          },
          {
            title: "Internal Tools",
            description: "Build custom solutions for your specific needs",
          },
          {
            title: "Lead Pipelines",
            description: "Automate lead nurturing and conversion processes",
          },
          {
            title: "Notification & Reporting",
            description: "Real-time alerts and comprehensive business insights",
          },
        ],
      },
      sectors: {
        title: "Most Requested Use Cases",
        subtitle: "Our automations adapt to nearly any industry — here are just some of the most common.",
        items: [
          {
            title: "Hotels",
            description: "Automate reservation management, customer follow-ups, and internal task coordination.",
          },
          {
            title: "Car Dealerships",
            description: "Automate lead tracking, test drive scheduling, and CRM syncing.",
          },
          {
            title: "Clinics",
            description: "Automate patient reminders, internal records, and appointment flows.",
          },
          {
            title: "Law Firms",
            description: "Automate case tracking, document workflows, and client intake forms.",
          },
        ],
      },
      privacy: {
        title: "Your Data, Protected",
        text: "We handle all client data with the highest level of confidentiality. We never disclose project details or names. Your privacy is our #1 priority.",
      },
      contact: {
        title: "Ready to automate your business?",
        subtitle: "Schedule Your Free Consultation",
        description: "Choose a time that works best for you",
        email: "Or email us directly at",
      },
      footer: {
        instagram: "Instagram",
        x: "X (Twitter)",
        linkedin: "LinkedIn",
        rights: "All rights reserved.",
      },
    },
    es: {
      hero: {
        headline: "La inteligencia artificial no debería ser un lujo.",
        subheadline: "Creamos automatizaciones personalizadas para que tu negocio crezca.",
        cta: "Agenda una consulta gratuita",
      },
      about: {
        title: "Quiénes somos",
        text: "En Auctor AI diseñamos automatizaciones inteligentes adaptadas a tus necesidades. Ya sea optimizando flujos de trabajo o integrando sistemas, te ayudamos a operar con más inteligencia, velocidad y sin aumentar costos.",
      },
      services: {
        title: "Lo que hacemos",
        items: [
          {
            title: "Automatización de procesos",
            description: "Optimizamos tareas repetitivas y procesos empresariales",
          },
          {
            title: "Integraciones CRM",
            description: "Conectamos y sincronizamos datos de clientes entre plataformas",
          },
          {
            title: "Sistemas de seguimiento de ventas",
            description: "Monitoreamos y optimizamos el rendimiento de tu pipeline",
          },
          {
            title: "Herramientas internas",
            description: "Desarrollamos soluciones personalizadas para tus necesidades",
          },
          {
            title: "Pipelines de leads",
            description: "Automatizamos el cultivo y conversión de prospectos",
          },
          {
            title: "Notificaciones e informes",
            description: "Alertas en tiempo real e insights empresariales completos",
          },
        ],
      },
      sectors: {
        title: "Sectores donde más nos consultan",
        subtitle: "Nuestras soluciones se adaptan a casi cualquier sector — estos son solo los más frecuentes.",
        items: [
          {
            title: "Hoteles",
            description:
              "Automatizamos la gestión de reservas, seguimiento de huéspedes y coordinación de tareas internas.",
          },
          {
            title: "Concesionarias",
            description: "Automatizamos el seguimiento de leads, programación de test drives y sincronización CRM.",
          },
          {
            title: "Clínicas",
            description: "Automatizamos recordatorios de pacientes, registros internos y flujos de citas.",
          },
          {
            title: "Estudios Legales",
            description:
              "Automatizamos seguimiento de casos, flujos documentales y formularios de admisión de clientes.",
          },
        ],
      },
      privacy: {
        title: "Tu privacidad es lo primero",
        text: "Manejamos los datos de nuestros clientes con el más alto nivel de confidencialidad. Nunca revelamos nombres ni detalles de proyectos. Tu privacidad es nuestra prioridad número uno.",
      },
      contact: {
        title: "¿Listo para automatizar tu negocio?",
        subtitle: "Programa tu consulta gratuita",
        description: "Elige el horario que mejor te funcione",
        email: "O escríbenos directamente a",
      },
      footer: {
        instagram: "Instagram",
        x: "X (Twitter)",
        linkedin: "LinkedIn",
        rights: "Todos los derechos reservados.",
      },
    },
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 sm:h-1.5 bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-200 ease-out z-[9999]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Language Toggle */}
      <div className="fixed top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm px-2 py-1 sm:px-3 sm:py-2">
          <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm font-medium">
            <button
              onClick={() => setLanguage("es")}
              className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full transition-all min-w-[36px] min-h-[36px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center text-xs sm:text-sm ${language === "es"
                ? "bg-gradient-to-r from-violet-500 to-blue-500 text-white"
                : "text-gray-600 hover:text-black"
                }`}
            >
              ES
            </button>
            <span className="text-gray-400 text-xs">|</span>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full transition-all min-w-[36px] min-h-[36px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center text-xs sm:text-sm ${language === "en"
                ? "bg-gradient-to-r from-violet-500 to-blue-500 text-white"
                : "text-gray-600 hover:text-black"
                }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-14 sm:pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mt-16 sm:mt-20 md:mt-24 mb-8 sm:mb-10 md:mb-12 text-center">
            <Image
              src="/auctor-logo.png"
              alt="Auctor AI"
              width={90}
              height={18}
              className="h-2 xs:h-3 sm:h-4 md:h-5 lg:h-6 xl:h-8 w-auto mx-auto"
              priority
            />
          </div>



          <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 text-center">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-2">
              {content[language].hero.headline.includes("luxury") ||
                content[language].hero.headline.includes("lujo") ? (
                <>
                  {content[language].hero.headline.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
                    {content[language].hero.headline.split(" ").slice(-1)[0]}
                  </span>
                </>
              ) : (
                content[language].hero.headline
              )}
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium px-4">
              {content[language].hero.subheadline}
            </p>

            <div className="pt-1 sm:pt-3 md:pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-base sm:text-lg md:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px] sm:min-h-[56px] min-w-[200px] sm:min-w-[240px]"
              >
                {content[language].hero.cta}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 sm:ml-3" />
              </Button>
            </div>
          </div>
        </div>
        {/* Animated Scroll Cue */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"></div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* About Section */}
      <section id="about" className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            {content[language].about.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
            {content[language].about.text}
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* What We Do Section */}
      <section id="services" className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-50/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
            {content[language].services.title}
          </h2>

          {/* Mobile-optimized 2-column grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {content[language].services.items.map((service, index) => {
              const icons = [
                <Settings key="settings" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
                <Database key="database" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
                <TrendingUp key="trendingUp" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
                <Zap key="zap" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
                <ArrowRight key="arrowRight" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
                <Bell key="bell" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
              ]
              return (
                <div key={index} className="text-center space-y-2 sm:space-y-3 md:space-y-4 p-2 sm:p-3 md:p-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 text-white mb-2 sm:mb-3 md:mb-4 mx-auto">
                    {icons[index]}
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium text-xs sm:text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* Most Requested Sectors */}
      <section id="sectors" className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
              {content[language].sectors.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed">
              {content[language].sectors.subtitle}
            </p>
          </div>

          {/* Mobile-optimized 2-column grid for sectors */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {content[language].sectors.items.map((sector, index) => {
              const icons = [
                <Building key="building" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />,
                <Car key="car" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />,
                <Heart key="heart" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />,
                <Scale key="scale" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />,
              ]
              return (
                <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6">
                    <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 text-white mx-auto">
                        {icons[index]}
                      </div>
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">{sector.title}</h3>
                      <p className="text-gray-600 leading-relaxed font-medium text-xs sm:text-sm md:text-base">
                        {sector.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* Privacy Statement */}
      <section id="privacy" className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-50/30">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 text-white mb-4 sm:mb-6">
            <Shield className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            {content[language].privacy.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
            {content[language].privacy.text}
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* Contact Section */}
      <section id="contact" className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            {content[language].contact.title.includes("automate") ||
              content[language].contact.title.includes("automatizar") ? (
              <>
                {content[language].contact.title.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
                  {content[language].contact.title.split(" ").slice(-2).join(" ")}
                </span>
              </>
            ) : (
              content[language].contact.title
            )}
          </h2>

          <div className="mt-6 sm:mt-8 md:mt-10">
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-sm border border-gray-100 max-w-full md:max-w-3xl mx-auto">
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                    {content[language].contact.subtitle}
                  </h3>
                  <p className="text-gray-600 font-medium text-sm sm:text-base md:text-lg">
                    {content[language].contact.description}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 text-center">
                  <CalendarioPopup language={language} />
                </div>
                <p className="text-xs opacity-50 text-center mt-0.5">
                  {language === "en" ? (
                    <>
                      This scheduling tool is powered by{" "}
                      <a href="https://cal.com" target="_blank" className="underline">Cal.com</a>. 
                      By continuing, you agree to their{" "}
                      <a href="https://cal.com/privacy" target="_blank" className="underline">Privacy Policy.</a> 
                    </>
                  ) : (
                    <>
                      Esta agenda funciona a través de{" "}
                      <a href="https://cal.com" target="_blank" className="underline">Cal.com</a>. 
                      Al continuar, aceptás su{" "}
                      <a href="https://cal.com/privacy" target="_blank" className="underline">política de privacidad.</a> 
                    </>
                  )}
                </p>


                <div className="text-center pt-3 sm:pt-4 border-t border-gray-100">
                  <p className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">
                    {content[language].contact.email}{" "}
                    <a
                      href="mailto:hello@auctorai.net"
                      className="text-violet-500 hover:text-violet-600 transition-colors break-all"
                    >
                      hello@auctorai.net
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* Footer */}
      <footer className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:flex-row md:justify-between md:space-y-0">
            <div className="order-2 md:order-1">
              <Image
                src="/auctor-logo.png"
                alt="Auctor AI"
                width={250}
                height={50}
                className="h-6 sm:h-8 md:h-10 w-auto opacity-100"
              />
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 order-1 md:order-2">
              <a
                href="https://instagram.com/auctorai"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-1 sm:space-y-2"
                aria-label={content[language].footer.instagram}
              >
                <div className="p-2 sm:p-3 rounded-full bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-blue-500 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 group-hover:text-violet-500 transition-colors font-medium">
                  Instagram
                </span>
              </a>

              <a
                href="https://x.com/auctorai_"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-1 sm:space-y-2"
                aria-label={content[language].footer.x}
              >
                <div className="p-2 sm:p-3 rounded-full bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-blue-500 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center">
                  <XIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 group-hover:text-violet-500 transition-colors font-medium">
                  X
                </span>
              </a>

              <a
                href="https://linkedin.com/company/auctorai"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-1 sm:space-y-2"
                aria-label={content[language].footer.linkedin}
              >
                <div className="p-2 sm:p-3 rounded-full bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-blue-500 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-violet-500 group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 group-hover:text-violet-500 transition-colors font-medium">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          <div className="text-center text-xs sm:text-sm md:text-base text-gray-500 mt-4 sm:mt-6">
            © {new Date().getFullYear()} Auctor AI. {content[language].footer.rights}
          </div>
        </div>
      </footer>
    </div>
  )
}
