"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// Animation variants for consistent animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function CommitmentsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f5f1]">
      <main className="flex-1">
        <section className="container mx-auto py-20">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Our Commitments</h1>
            <p className="text-xl text-gray-700">The principles that guide our work in artificial intelligence</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-4">Safety First</h2>
                <p className="text-gray-700 mb-4">
                  We prioritize safety in all aspects of our AI development. This means rigorous testing, continuous
                  monitoring, and designing systems with robust safeguards.
                </p>
                <p className="text-gray-700">
                  Our AI systems are designed to refuse harmful requests and to operate within clear ethical boundaries.
                </p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-sm"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="h-48 flex items-center justify-center">
                  <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M50 20 L80 40 L80 70 L50 90 L20 70 L20 40 Z"
                      stroke="#6b21a8"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path d="M50 20 L50 90" stroke="#6b21a8" strokeWidth="2" fill="none" strokeDasharray="4,4" />
                    <path d="M20 40 L80 40" stroke="#6b21a8" strokeWidth="2" fill="none" strokeDasharray="4,4" />
                    <path d="M20 70 L80 70" stroke="#6b21a8" strokeWidth="2" fill="none" strokeDasharray="4,4" />
                    <circle cx="50" cy="50" r="15" fill="#9c5bff" fillOpacity="0.2" stroke="#6b21a8" strokeWidth="2" />
                    <circle cx="50" cy="50" r="5" fill="#6b21a8" />
                  </svg>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="order-2 md:order-1 bg-white p-8 rounded-lg shadow-sm"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="h-48 flex items-center justify-center">
                  <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="30" stroke="#6b21a8" strokeWidth="2" fill="none" />
                    <circle cx="50" cy="50" r="20" stroke="#6b21a8" strokeWidth="2" fill="none" />
                    <circle cx="50" cy="50" r="10" fill="#9c5bff" fillOpacity="0.2" stroke="#6b21a8" strokeWidth="2" />
                    <line x1="20" y1="50" x2="80" y2="50" stroke="#6b21a8" strokeWidth="2" />
                    <line x1="50" y1="20" x2="50" y2="80" stroke="#6b21a8" strokeWidth="2" />
                  </svg>
                </div>
              </motion.div>
              <motion.div 
                className="order-1 md:order-2"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-4">Transparency</h2>
                <p className="text-gray-700 mb-4">
                  We believe in being open about how our AI systems work, their capabilities, and their limitations. We
                  publish research and share insights about our development process.
                </p>
                <p className="text-gray-700">
                  Our goal is to demystify AI and foster informed discussions about its role in society.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-4">Human-Centered Design</h2>
                <p className="text-gray-700 mb-4">
                  We design AI to augment human capabilities, not replace them. Our systems are built to be
                  collaborative tools that respect human autonomy and enhance human potential.
                </p>
                <p className="text-gray-700">
                  We continuously gather feedback from diverse users to ensure our AI serves people's real needs.
                </p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-sm"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="h-48 flex items-center justify-center">
                  <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="40" r="10" fill="#9c5bff" fillOpacity="0.2" stroke="#6b21a8" strokeWidth="2" />
                    <circle cx="65" cy="40" r="10" fill="#9c5bff" fillOpacity="0.2" stroke="#6b21a8" strokeWidth="2" />
                    <path d="M25 60 Q50 80 75 60" stroke="#6b21a8" strokeWidth="2" fill="none" />
                    <circle cx="50" cy="30" r="20" stroke="#6b21a8" strokeWidth="2" fill="none" strokeDasharray="3,3" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
