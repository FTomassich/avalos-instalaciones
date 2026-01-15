"use client"

import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

export function WhatsappButton() {
  return (
    <Link
      href="https://wa.me/5493516458767"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-colors flex items-center justify-center"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </Link>
  )
}
