"use client"

import Image from "next/image"
import { Droplet, Flame, Thermometer } from "lucide-react"
import { useEffect } from "react"

export function SpecialtiesSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("Observando:", entry.target, "isIntersecting:", entry.isIntersecting)
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          } 
        })
      },
      { threshold: 0.1 } 
    )

    const items = document.querySelectorAll(".animate-fadeUp, .animate-fadeSide")
    items.forEach((item) => observer.observe(item))

    return () => items.forEach((item) => observer.unobserve(item))
  }, [])

  const specialties = [
    {
      icon: Droplet,
      title: "Agua y cloaca",
      description: "Redes completas con materiales certificados y mantenimiento profesional",
      details: "Cumplimiento normativo IRAM y garantía de funcionamiento",
      image: "/images/agua.jpeg",
      iconColor: "text-white", 
    },
    {
      icon: Flame,
      title: "Gas",
      description: "Instalaciones bajo normativa vigente con procesos eficientes",
      details: "Certificación NAG-200 y pruebas de estanqueidad",
      image: "/images/cañoGas.jpeg", 
      iconColor: "text-white",
    },
    {
      icon: Thermometer,
      title: "Calefacción",
      description: "Radiadores y piso radiante para calor homogéneo y eficiente",
      details: "Diseño personalizado y máxima eficiencia energética",
      image: "/images/pisoRadiante.jpeg", 
      iconColor: "white",
    },
  ]

  return (
    <section id="especialidades" className="py-20 bg-muted/50 scroll-mt-0">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-5 leading-tight animate-fadeUp"
            style={{ animationDelay: "0.4s" }}
          >
            ¿En qué nos especializamos?
          </h2>
          <p 
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fadeUp" 
            style={{ animationDelay: "0.7s" }}
          >
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
                className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeSide"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}

              >
                <Image
                  src={specialty.image}
                  alt={specialty.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
                <div className="relative z-10 p-8 flex flex-col items-center text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{specialty.title}</h3>
                  <p className="text-lg leading-relaxed mb-3">{specialty.description}</p>
                  <p className="text-sm leading-relaxed italic">{specialty.details}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
