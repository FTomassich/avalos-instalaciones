import { Droplet, Flame, Thermometer } from "lucide-react"

export function SpecialtiesSection() {
  const specialties = [
    {
      icon: Droplet,
      title: "Agua y cloaca",
      description: "Redes completas con materiales certificados y mantenimiento profesional",
      details: "Cumplimiento normativo IRAM y garantía de funcionamiento",
    },
    {
      icon: Flame,
      title: "Gas",
      description: "Instalaciones bajo normativa vigente con procesos eficientes",
      details: "Certificación NAG-200 y pruebas de estanqueidad",
    },
    {
      icon: Thermometer,
      title: "Calefacción",
      description: "Radiadores y piso radiante para calor homogéneo y eficiente",
      details: "Diseño personalizado y máxima eficiencia energética",
    },
  ]

  return (
    <section id="especialidades" className="py-20 bg-muted/50 scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-balance leading-tight">
            ¿En qué nos especializamos?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Instalaciones técnicas para obras en construcción y espacios en funcionamiento. Ejecutamos bajo normativa
            vigente y dirección técnica matriculada, con materiales certificados y procesos eficientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon
            return (
              <div
                key={index}
                className="bg-background p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">{specialty.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed text-center mb-3">
                  {specialty.description}
                </p>
                <p className="text-sm text-muted-foreground/70 leading-relaxed text-center italic">
                  {specialty.details}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
