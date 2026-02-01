"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm transition-all duration-300 ${
        scrolled ? "h-22" : "h-24"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center flex-shrink-0 gap-2">
            <Image
              src="/images/avalos-20instalaciones-01.jpg"
              alt="Ávalos Instalaciones"
              width={240}
              height={85}
              className={`transition-all duration-300 ${ scrolled ? "h-16" : "h-18 sm:h-20" } w-auto`}
            />
            <div className="flex flex-col  leading-tight">
              <span
                className={`transition-all duration-300 font-bold text-gray-900 ${
                  scrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
                }`}
              >
                Ávalos
              </span>
              <span
                className={`transition-all duration-300 text-gray-700 ${
                  scrolled ? "text-sm sm:text-base font-medium" : "text-base sm:text-lg font-normal"
                }`}
              >
                Instalaciones
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="#especialidades" className="text-base font-medium hover:text-primary transition-colors">
              Especialidades
            </Link>
            <Link href="#servicios" className="text-base font-medium hover:text-primary transition-colors">
              Servicios
            </Link>
            <Link href="#nosotros" className="text-base font-medium hover:text-primary transition-colors">
              Nosotros
            </Link>
           
            {/* <Link href="#blog" className="text-base font-medium hover:text-primary transition-colors">
              Blog
            </Link> */}
            <Link href="#contacto">
              <Button className="bg-primary hover:bg-primary/90 px-8 py-6">Contacto</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
     
<div
  className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
    isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
  } bg-white w-full absolute left-0 right-0`}
>
  <nav className="py-4 space-y-4 border-t border-border px-4">
    <Link href="#especialidades" className="block text-base font-medium hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
      Especialidades
    </Link>
    <Link href="#servicios" className="block text-base font-medium hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
      Servicios
    </Link>
    <Link href="#nosotros" className="block text-base font-medium hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
      Nosotros
    </Link>
    
    <Link href="#blog" className="block text-base font-medium hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
      Blog
    </Link>
    <Link href="#contacto" onClick={() => setIsMenuOpen(false)}>
      <Button className="w-full bg-primary hover:bg-primary/90 py-6 mt-2">Contacto</Button>
    </Link>
  </nav>
</div>

      </div>
    </header>
  )
}
