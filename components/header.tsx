"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

<Image
  src="/logo.png"
  alt="Wellness Gym logo"
  width={32}
  height={32}
  className="rounded-full"
/>

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8  rounded-full"></div>
            <span className="text-xl font-bold text-white">Wellness Gym</span>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-gray-300 hover:text-green-400 transition">
              Xizmatlar
            </a>
            <a href="#amenities" className="text-gray-300 hover:text-green-400 transition">
              Imkoniyatlar
            </a>
            <a href="#contact" className="text-gray-300 hover:text-green-400 transition">
              Bog'lanish
            </a>
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#features" className="text-gray-300 hover:text-green-400">
              Xizmatlar
            </a>
            <a href="#amenities" className="text-gray-300 hover:text-green-400">
              Imkoniyatlar
            </a>
            <a href="#contact" className="text-gray-300 hover:text-green-400">
              Bog'lanish
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
