import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "Instalaciones Sanitarias",
      description:
        "Redes completas de agua fría y caliente, desagües cloacales y pluviales. Trabajamos con materiales certificados bajo normas IRAM y realizamos mantenimiento preventivo para garantizar el correcto funcionamiento de todo el sistema.",
      features: [
        "Redes de agua fría y caliente",
        "Desagües cloacales y pluviales",
        "Materiales certificados IRAM",
        "Mantenimiento preventivo incluido",
      ],
      image: "/images/servicioAgua.jpeg",
      fit: "cover",
      cta: "Consultar proyecto sanitario",
      href: "#contacto",
    },
    {
      title: "Instalaciones de Gas",
      description:
        "Instalaciones de gas natural y envasado bajo normativa NAG-200. Utilizamos materiales certificados, realizamos pruebas de estanqueidad y garantizamos procesos eficientes con dirección técnica matriculada para máxima seguridad.",
      features: [
        "Gas natural",
        "Normativas vigentes",
        "Pruebas de hermeticidad certificadas",
        "Dirección técnica matriculada",
      ],
      image: "/images/gas.jpeg",
      fit: "cover",
      cta: "Consultar proyecto de gas",
      href: "#contacto",
    },
    {
      title: "Sistemas de Calefacción",
      description:
        "Instalación de radiadores tradicionales y sistemas de piso radiante para calor homogéneo y confort térmico. Diseñamos soluciones personalizadas con alta eficiencia energética adaptadas a cada espacio y necesidad.",
      features: [
        "Radiadores de alta eficiencia",
        "Piso radiante personalizado",
        "Calor homogéneo garantizado",
        "Ahorro energético comprobado",
      ],
      image: "/images/foto2.jpeg",
      fit: "cover",
      cta: "Diseñar tu sistema",
      href: "#contacto",
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-background scroll-mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-5 text-balance leading-tight animate-fadeUp"
            style={{ animationDelay: "0.4s" }}
          >
            Nuestros Servicios
          </h2>
          <p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fadeUp"
            style={{ animationDelay: "0.7s" }}
          >
            Soluciones integrales con ejecución profesional y resultados confiables
          </p>
        </div>

        <div className="space-y-20 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-10 lg:gap-14 items-center`}
            >
              <div className="flex-1 relative w-full min-h-[300px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`hover:scale-105 transition-transform duration-500 object-${service.fit}`}
                />
              </div>

              <div className="flex-1 space-y-6 px-6 sm:px-8 lg:px-10 text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  {service.title}
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 inline-block text-left">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-base text-muted-foreground"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center lg:justify-start">
                  <Link href={service.href}>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 mt-2"
                    >
                      {service.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
