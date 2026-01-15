"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = `Consulta desde la web - ${formData.projectType || "Proyecto"}`
    const body = `
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Tipo de proyecto: ${formData.projectType}
Mensaje:
${formData.message}
    `
    window.location.href = `mailto:avalossinstalaciones@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-muted/50 scroll-mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-balance leading-tight px-2 animate-fadeUp"
              style={{ animationDelay: "0.5s" }}
            >
              Contacto y presupuestos
            </h2>
            <p
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed px-2 animate-fadeUp"
              style={{ animationDelay: "0.7s" }}
            >
              Respetamos plazos y trabajamos bajo normativa vigente con dirección técnica matriculada
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 sm:space-y-8 bg-background p-6 sm:p-10 md:p-12 rounded-2xl shadow-lg overflow-visible"
          >
            <div className="space-y-3">
              <Label htmlFor="name" className="text-base">Nombre completo</Label>
              <Input
                id="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-12 text-base"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="email" className="text-base">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 text-base"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="phone" className="text-base">Teléfono</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+54 9 11 1234-5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12 text-base"
                />
              </div>
            </div>


            <div className="space-y-3 relative">
              <Label htmlFor="projectType" className="text-base">Tipo de proyecto</Label>
              <select
                id="projectType"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                required
                className="w-full h-12 text-base rounded-md border border-input bg-background px-3 pr-8 
               focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary appearance-none"
              >
                <option value="" disabled>Selecciona un tipo de proyecto</option>
                <option value="sanitarias">Instalaciones Sanitarias</option>
                <option value="gas">Instalaciones de Gas</option>
                <option value="calefaccion">Sistemas de Calefacción</option>
                <option value="mantenimiento">Mantenimiento</option>
                <option value="otro">Otro</option>
              </select>

              {/* Flechita personalizada */}
              <ChevronDown className="absolute right-3 top-[51px] w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>


            <div className="space-y-3">
              <Label htmlFor="message" className="text-base">Mensaje</Label>
              <Textarea
                id="message"
                placeholder="Contanos sobre tu proyecto..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="text-base"
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg py-7">
              Enviar consulta
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
