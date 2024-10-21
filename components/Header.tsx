'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-red-600">MeatMarket</Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#" className="text-gray-600 hover:text-red-600">Products</Link>
            <Link href="#" className="text-gray-600 hover:text-red-600">About Us</Link>
            <Link href="#" className="text-gray-600 hover:text-red-600">Contact</Link>
          </nav>
          <div className="hidden md:block">
            <Button variant="outline" className="mr-2">Log In</Button>
            <Button>Sign Up</Button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 p-4">
            <Link href="#" className="text-gray-600 hover:text-red-600">Products</Link>
            <Link href="#" className="text-gray-600 hover:text-red-600">About Us</Link>
            <Link href="#" className="text-gray-600 hover:text-red-600">Contact</Link>
            <Button variant="outline" className="w-full mb-2">Log In</Button>
            <Button className="w-full">Sign Up</Button>
          </nav>
        </div>
      )}
    </header>
  )
}