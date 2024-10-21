'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import Newsletter from '@/components/Newsletter'

export default function MeatMarketLanding() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="relative h-screen">
          <Image
            src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=2000&q=80"
            alt="Premium meat selection"
            layout="fill"
            objectFit="cover"
            priority
            className="transition-opacity duration-300"
            style={{ opacity: 1 - Math.min(scrollY / 500, 1) }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Premium Meat Market</h1>
              <p className="text-xl md:text-2xl mb-8">Discover our selection of high-quality, locally sourced meats</p>
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                Shop Now
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Prime Ribeye Steak', image: 'https://images.unsplash.com/photo-1607116176195-b81b1f41f536?auto=format&fit=crop&w=800&q=80' },
                { name: 'Organic Chicken Breast', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=80' },
                { name: 'Premium Ground Beef', image: 'https://images.unsplash.com/photo-1588347785102-2944e1bda76d?auto=format&fit=crop&w=800&q=80' },
              ].map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">Locally sourced, premium quality meat for your culinary delights.</p>
                    <Button variant="outline" className="w-full">Add to Cart</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialCarousel />

        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Premium Quality', description: 'We source only the finest meats from trusted local farms.' },
                { title: 'Expert Butchers', description: 'Our skilled butchers ensure perfect cuts every time.' },
                { title: 'Sustainable Practices', description: 'We\'re committed to ethical and sustainable meat production.' },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <footer className="bg-red-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 MeatMarket. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="hover:underline mx-2">Privacy Policy</a>
            <a href="#" className="hover:underline mx-2">Terms of Service</a>
            <a href="#" className="hover:underline mx-2">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}