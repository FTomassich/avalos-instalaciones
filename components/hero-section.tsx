import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-32 pb-16 px-4 sm:px-6">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/foto2.jpeg"
          alt="Industrial Piping System"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/65" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight px-2">
            Instalamos confianza, construimos confort
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-5 font-medium text-pretty leading-relaxed px-2">
            Soluciones técnicas para obras que exigen cumplimiento y orden
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-3xl mx-auto px-2">
            Con más de 30 años de trayectoria, brindamos instalaciones seguras, eficientes y duraderas en agua, cloacas,
            gas y calefacción. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mb-8">
            <Link href="#servicios">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 w-full sm:w-auto"
              >
                Conocé nuestros servicios
              </Button>
            </Link>
            <Link href="#contacto">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black transition-colors text-lg px-8 py-6 w-full sm:w-auto bg-transparent"
              >
                Pedí tu presupuesto
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
