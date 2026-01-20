"use client"

export function ValuesSection() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-16 max-w-6xl mx-auto text-left">
          <div className="space-y-4 sm:space-y-6 p-6 sm:p-8 bg-muted/30 rounded-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary">Misión</h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Transformar cada proyecto en un espacio seguro y confortable, brindando instalaciones técnicas de
              calidad que perduren en el tiempo y generen tranquilidad en nuestros clientes.
            </p>
          </div>
          <div className="space-y-4 sm:space-y-6 p-6 sm:p-8 bg-muted/30 rounded-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary">Visión</h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ser la empresa de instalaciones más confiable y recomendada de la región, reconocida por nuestra
              trayectoria, compromiso con la excelencia y trato personalizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
