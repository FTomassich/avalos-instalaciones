import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Ávalos Instalaciones | Agua, cloaca, gas y calefacción con ejecución profesional",
  description:
    "Con más de 30 años de trayectoria, ofrecemos instalaciones seguras y certificadas en agua, cloacas, gas y calefacción. Radiadores y piso radiante, materiales normados y atención personalizada.",
  keywords:
    "instalaciones de gas, piso radiante, radiadores, instalaciones sanitarias, agua y cloaca, soluciones técnicas, ejecución profesional, materiales certificados, obra en construcción, confort térmico",
  
 icons: { icon: "/images/favicon.ico", },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
       <body className="antialiased" style={{ fontFamily: "var(--font-montserrat), var(--font-inter), sans-serif" }} >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
