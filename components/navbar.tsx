"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence, useScroll } from "framer-motion"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const updateScrolled = () => {
      if (scrollY.get() > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    const unsubscribe = scrollY.onChange(updateScrolled)
    return () => unsubscribe()
  }, [scrollY])

  const navItems = [
    { name: "Amethyst", href: "/amethyst" },
    { name: "Solutions", href: "/solutions" },
    { name: "Research", href: "/research" },
    { name: "Commitments", href: "/commitments" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ]

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "py-3 bg-white shadow-md" : "py-4 md:py-6 bg-[#f8f5f1]"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <motion.div
            animate={{
              scale: scrolled ? 0.9 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Link href="/" className="text-2xl md:text-3xl font-bold block relative">
              <motion.div 
                className="inline-block overflow-hidden whitespace-nowrap"
                style={{ width: "6ch", textAlign: "left" }}
              >
                <motion.span
                  animate={{
                    opacity: scrolled ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  AMELIT
                </motion.span>
                <motion.span
                  className="absolute left-0 top-0 text-purple-800"
                  animate={{
                    opacity: scrolled ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  AI
                </motion.span>
              </motion.div>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-10">
            <nav className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`text-md font-medium hover:text-gray-900 transition-colors ${
                      scrolled ? "text-gray-700" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button asChild className="bg-purple-800 text-white rounded-full px-5 py-2 text-md hover:bg-purple-700">
                <Link href="https://t.me/Amelit_bot" target="_blank" rel="noopener noreferrer">Try Amethyst</Link>
              </Button>
            </motion.div>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <Button asChild className="bg-purple-800 text-white rounded-full px-3 py-1 text-sm hover:bg-purple-700">
              <Link href="https://t.me/Amelit_bot" target="_blank" rel="noopener noreferrer">Try Amethyst</Link>
            </Button>
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${mobileMenuOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${mobileMenuOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="py-3 space-y-0">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="block px-5 py-3 text-base font-medium text-gray-700 border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
