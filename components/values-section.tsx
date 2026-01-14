"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import { MessageCircle, Shield, Ear, Zap, Eye, Award } from "lucide-react"

export function ValuesSection() {
  const values = [
    { icon: MessageCircle, title: "Diálogo", description: "Comunicación constante y transparente en cada etapa del proyecto" },
    { icon: Shield, title: "Honestidad", description: "Asesoramiento genuino basado en las necesidades reales" },
    { icon: Ear, title: "Escucha activa", description: "Entendemos tus necesidades para ofrecer la mejor solución" },
    { icon: Zap, title: "Agilidad", description: "Respuestas rápidas y cumplimiento de plazos acordados" },
    { icon: Eye, title: "Atención al detalle", description: "Precisión y cuidado en cada instalación realizada" },
    { icon: Award, title: "Calidad certificada", description: "Materiales normados y procesos bajo estándares vigentes" },
  ]

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 leading-tight px-2 animate-fadeUp"
    style={{ animationDelay: "0.5s" }}>
            Misión, Visión y Valores
          </h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-16 max-w-6xl mx-auto mb-16 sm:mb-20 text-left">
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
<div className="text-center mb-10">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight px-2 animate-fadeUp" style={{ animationDelay: "0.5s" }} >
    Valores que nos identifican
  </h2>
  <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mt-4 animate-fadeUp" style={{ animationDelay: "0.7s" }} >
    Principios que guían nuestro trabajo y reflejan nuestra identidad
  </p>
</div>

        {/* Carrusel infinito y constante */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000} // velocidad constante
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 }, // tablet
            1024: { slidesPerView: 3, spaceBetween: 32 }, // desktop
          }}
          className="max-w-7xl mx-auto"
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <SwiperSlide key={index}>
                <div className="text-center space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-xl transition-colors hover:bg-muted/30">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">{value.title}</h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
