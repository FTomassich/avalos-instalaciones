import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function WhyChooseSection() {
  const reasons = [
    "Dirección técnica matriculada en todas las obras",
    "Atención personalizada y asesoramiento constante",
    "Cumplimiento estricto de normativas vigentes",
    "Respeto por los plazos acordados",
    "Garantía en todos nuestros trabajos",
    "Materiales certificados",
  ]

  return (
    <section className="py-20 sm:py-28 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance leading-tight px-2 animate-fadeUp"
            style={{ animationDelay: "0.5s" }}>
            ¿Por qué elegir Ávalos Instalaciones?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto px-2 animate-fadeUp"
            style={{ animationDelay: "0.7s" }}>
            Con más de 30 años de experiencia, combinamos trayectoria con compromiso genuino hacia la calidad y la
            seguridad.
          </p>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 text-left pt-6 sm:pt-8 max-w-4xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-background rounded-xl hover:shadow-md transition-shadow"
              >
                <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base sm:text-lg leading-relaxed">{reason}</span>
              </div>
            ))}
          </div>

          <div className="pt-8 sm:pt-12 px-4">
            <Link href="#contacto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-10 py-7">
                Hablemos de tu obra
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
