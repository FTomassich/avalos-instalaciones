import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="space-y-4 text-center sm:text-left">
            <Image
              src="/images/logo.png"
              alt="Ávalos Instalaciones"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
            <p className="text-sm text-background/80">
              Instalaciones seguras, soluciones duraderas
            </p>

            {/* Contact info debajo del slogan */}
            <div className="flex flex-col items-center sm:items-start gap-2 mt-2 text-xs text-background/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:avalos.instalaciones.cba@gmail.com" className="hover:text-background">
                  instalacionessavalos@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <Link href="https://instagram.com/instalaciones.avalos" target="_blank" className="hover:text-background">
                  @instalaciones.avalos
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+5493516458767" className="hover:text-background">
                  +5493516458767
                </a>
              </div>
              
            </div>
          </div>

          {/* Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#servicios" className="text-background/80 hover:text-background transition-colors">
                  Instalaciones Sanitarias
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-background/80 hover:text-background transition-colors">
                  Instalaciones de Gas
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-background/80 hover:text-background transition-colors">
                  Sistemas de Calefacción
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#nosotros" className="text-background/80 hover:text-background transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#catalogo" className="text-background/80 hover:text-background transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-background/80 hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-background/80 hover:text-background transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-background/80 hover:text-background transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/80 hover:text-background transition-colors">
                  Términos y condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 sm:pt-8 space-y-4">
          <p className="text-center text-sm text-background/60">
            © {new Date().getFullYear()} Ávalos Instalaciones. Todos los derechos reservados.
          </p>
          <p className="text-center font-semibold text-primary">
            Ejecución profesional. Resultados confiables.
          </p>
        </div>
      </div>
    </footer>
  )
}
