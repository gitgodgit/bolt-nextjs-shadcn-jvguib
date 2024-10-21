'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    name: 'John Doe',
    role: 'Chef',
    content: 'The quality of meat from MeatMarket is unparalleled. It\'s a game-changer for my restaurant.',
  },
  {
    name: 'Jane Smith',
    role: 'Home Cook',
    content: 'I\'ve never tasted such flavorful and tender meat. MeatMarket has become my go-to for all my cooking needs.',
  },
  {
    name: 'Mike Johnson',
    role: 'BBQ Enthusiast',
    content: 'The selection and quality at MeatMarket are top-notch. My barbecues have never been better!',
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-xl mb-4">{testimonials[currentIndex].content}</p>
            <div className="font-bold">{testimonials[currentIndex].name}</div>
            <div className="text-gray-600">{testimonials[currentIndex].role}</div>
          </div>
          <Button
            variant="outline"
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}