"use client"

import Image from "next/image"
import { Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"


export function CatalogSection() {
  const products = [
    { title: "Kit de piso radiante", description: "Sistema completo con tubos, aislación y accesorios certificados", image: "/images/kitRadiante.jpeg", price: "Desde $860.000" },
    { title: "Radiadores térmicos", description: "Alta eficiencia y diseño moderno para tus ambiente", image: "/images/radiador.jpeg", price: "Desde $345.000" },
    { title: "Grifería Premium", description: "Componentes de calidad para los ambientes de tu casa", image: "/images/griferia2.jpg", price: "Kit desde $390.000" },
    { title: "Paneles solares", description: "Componentes de alta calidad bajo normativa vigente", image: "/images/panel.jpg", price: "Desde $370.000" },
    { title: "Accesorios certificados", description: "Componentes de alta calidad bajo normativa vigente", image: "/images/doble.jpeg", price: "Items desde $90.000" },
  ]

  return (
    <section id="catalogo" className="py-20 sm:py-28 bg-background scroll-mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight px-2 animate-fadeUp" style={{ animationDelay: "0.5s" }}>
            Productos y soluciones para tu proyecto
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 animate-fadeUp" style={{ animationDelay: "0.7s" }}>
            Materiales certificados y componentes de primera calidad
          </p>
        </div>

        {/* Carrusel con botones Swiper nativos */}
        <div className="relative max-w-9xl mx-auto px-8 overflow-visible">
          {/* Botones nativos de Swiper */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>

          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-muted rounded-xl group">
                  <div className="relative h-52 sm:h-60 w-full overflow-hidden flex items-center justify-center bg-white">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-contain scale-95 group-hover:scale-100 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader className="p-3 pb-1">
                    <CardTitle className="text-lg sm:text-xl">{product.title}</CardTitle>
                    <div className="flex gap-1 mt-2 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.287-3.967z" />
                        </svg>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="px-3 pb-2">
                    <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                    <p className="text-base font-bold mt-2 text-foreground">{product.price}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                      <Truck className="w-5 h-5 text-primary" />
                      <span>Envíos a todo el país</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-3 pt-2 flex flex-col gap-2">
                    <Button className="w-full bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-sm py-4">Disponible</Button>
                    <Button variant="outline" className="w-full border-[#2d6a4f] text-[#2d6a4f] hover:bg-[#d8f3dc] text-sm py-4 bg-transparent">
                      Pedir cotización
                    </Button>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

       <style jsx global>{` .swiper-button-next, 
       .swiper-button-prev { color: #6b7280; z-index: 9999 !important; width: 24px !important; height: 24px !important; }
      .swiper-button-next::after, .swiper-button-prev::after { font-size: 14px !important; } 
      .swiper-button-next { right: -40px !important; } .swiper-button-prev { left: -40px !important; } 
      @media (max-width: 640px) { .swiper-button-next { right: -10px !important; } 
       .swiper-button-prev { left: -10px !important; } } `}</style>

    </section>
  )
}
