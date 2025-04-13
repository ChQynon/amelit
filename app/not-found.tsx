"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f5f1]">
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <motion.div 
          className="max-w-3xl w-full text-center space-y-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-8">
            <div className="text-5xl font-bold text-purple-800">AI</div>
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mt-2">Page Not Found</h2>
          
          <p className="text-lg text-gray-600 max-w-md mx-auto mt-4">
            We couldn't find the page you were looking for. It might have been moved or doesn't exist.
          </p>
          
          <div className="mt-8 flex justify-center space-x-4">
            <Button asChild className="bg-purple-800 text-white hover:bg-purple-700">
              <Link href="/">Go Back Home</Link>
            </Button>
            <Button asChild variant="outline" className="border-purple-800 text-purple-800 hover:bg-purple-50">
              <Link href="/amethyst">Try Amethyst</Link>
            </Button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-200 text-gray-500">
            <p>
              Looking for something specific? Contact our <Link href="/contact" className="text-purple-800 hover:underline">support team</Link>.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  )
} 