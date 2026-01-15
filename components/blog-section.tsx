import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function BlogSection() {
  const posts = [
    {
      title: "Cómo detectar fugas de agua en casa",
      excerpt: "Aprendé a identificar los signos tempranos de fugas de agua y evitá daños mayores en tu propiedad.",
      date: "Enero 2026",
    },
    {
      title: "Mantenimiento de radiadores y piso radiante",
      excerpt: "Consejos profesionales para mantener tu sistema de calefacción en óptimas condiciones.",
      date: "Diciembre 2025",
    },
    {
      title: "Seguridad en instalaciones de gas",
      excerpt: "Todo lo que necesitás saber sobre las normativas y medidas de seguridad en instalaciones de gas.",
      date: "Noviembre 2025",
    },
  ]

  return (
    <section id="blog" className="py-16 sm:py-20 bg-muted/50 scroll-mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-balance px-2">
            Consejos y mantenimiento de instalaciones
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Información útil para el cuidado de tus instalaciones
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-sm text-primary font-medium mb-2">{post.date}</div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group">
                  Leer más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
