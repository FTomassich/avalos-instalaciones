import Image from "next/image"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-muted/50 relative overflow-hidden scroll-mt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-17">
        <Image
          src="/images/foto1.jpeg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance leading-tight px-2">
            Aseguramos ejecución profesional. Garantizamos resultados confiables.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-muted-foreground max-w-4xl mx-auto px-2">
            Somos una empresa familiar con más de 30 años de trayectoria en instalaciones de agua, cloacas, gas y
            calefacción. Comprometidos con la calidad y la confianza, trabajamos de manera responsable y segura,
            adaptándonos a las necesidades de cada hogar, comercio o industria, con atención personalizada y
            cumplimiento estricto de plazos.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary px-2">
            Soluciones técnicas para obras que exigen cumplimiento y orden
          </p>
        </div>
      </div>
    </section>
  )
}
