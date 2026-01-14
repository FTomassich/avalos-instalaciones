import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function CatalogSection() {
  const products = [
    {
      title: "Kit de piso radiante",
      description: "Sistema completo con tubos, aislación y accesorios certificados",
      image: "/images/whatsapp-20image-202026-01-06-20at-2012.jpeg",
      price: "Consultar precio",
    },
    {
      title: "Radiador de aluminio",
      description: "Alta eficiencia térmica y diseño moderno para cualquier ambiente",
      image: "/images/whatsapp-20image-202026-01-06-20at-2012.jpeg",
      price: "Desde $45.000",
    },
    {
      title: "Válvulas y accesorios certificados",
      description: "Componentes de alta calidad bajo normativa vigente",
      image: "/images/whatsapp-20image-202026-01-06-20at-2012.jpeg",
      price: "Consultar precio",
    },
  ]

  return (
    <section id="catalogo" className="py-20 sm:py-28 bg-background scroll-mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-balance leading-tight px-2 animate-fadeUp" style={{ animationDelay: "0.5s" }} >
            Productos y soluciones para tu proyecto
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 animate-fadeUp" style={{ animationDelay: "0.7s" }} >
          Meteriales certificados y componentes de primera calidad</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-border group"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xl sm:text-2xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-2">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{product.description}</p>
                <p className="text-lg sm:text-xl font-bold mt-2 text-foreground">{product.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-3 flex flex-col gap-2">
                <Button className="w-full bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-sm sm:text-base py-5 sm:py-6">
                  Consultar disponibilidad
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[#2d6a4f] text-[#2d6a4f] hover:bg-[#d8f3dc] text-sm sm:text-base py-5 sm:py-6 bg-transparent"
                >
                  Pedir cotización
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
