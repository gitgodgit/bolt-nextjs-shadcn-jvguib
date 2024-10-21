'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup logic here
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <section className="bg-red-600 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
        <p className="text-xl mb-8 text-white">Subscribe to our newsletter for exclusive offers and recipes</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow mr-2"
            required
          />
          <Button type="submit" className="bg-white text-red-600 hover:bg-gray-100">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}