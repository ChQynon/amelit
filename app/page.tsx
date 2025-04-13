"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion, useInView, useAnimation } from "framer-motion"

const MotionCard = motion(Card)

// Animation variants for consistent animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Home() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f5f1]">
      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <motion.h1
                  className="text-5xl md:text-6xl font-bold leading-tight tracking-tighter"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  AI <span className="underline decoration-purple-500 decoration-4">research</span> and{" "}
                  <span className="underline decoration-purple-500 decoration-4">products</span> that prioritize safety
                  and innovation
                </motion.h1>

                <motion.div
                  className="grid grid-cols-1 gap-6"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <MotionCard className="p-8 bg-white rounded-xl shadow-sm">
                    <div className="space-y-4">
                      <div className="uppercase text-sm font-semibold text-purple-800">AMETHYST.AI</div>
                      <h3 className="text-2xl font-bold">Meet Amethyst 1.0</h3>
                      <p className="text-gray-700">
                        Amethyst 1.0, featuring 24 billion parameters with advanced multimodal capabilities, is now
                        available. Experience the future of responsible AI technology.
                      </p>
                      <Button className="bg-black text-white hover:bg-gray-800 mt-4 w-full" asChild>
                        <Link href="https://t.me/Amelit_bot" target="_blank" rel="noopener noreferrer">Talk to Amethyst</Link>
                      </Button>
                    </div>
                  </MotionCard>
                </motion.div>
              </div>

              <div className="relative h-[500px] hidden lg:block">
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <NetworkGraph />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-gray-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-4xl font-bold mb-6">
                  At Amelit, we create AI systems that enhance human potential and well-being.
                </h2>
              </motion.div>
              <motion.div
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="text-lg">
                  The future of AI is being shaped today through the decisions we make. We believe that powerful
                  technologies require both innovation and careful consideration of their impacts. That's why we've
                  built Amethyst with human benefit as its foundation.
                </p>
                <p className="text-lg">
                  Through rigorous research, thoughtful policy development, and innovative product design, we
                  demonstrate what responsible AI development can achieve in practice.
                </p>
              </motion.div>
            </div>

            <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="p-8 bg-[#f0e9df] rounded-xl h-full">
                  <div className="h-32 flex items-center justify-center mb-6">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="40" r="20" stroke="#6b21a8" strokeWidth="2" fill="none" />
                      <path d="M30 60 Q50 80 70 60" stroke="#6b21a8" strokeWidth="2" fill="none" />
                      <circle cx="50" cy="40" r="5" fill="#9c5bff" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Principles of AI Safety</h3>
                  <p className="text-gray-700">
                    Our comprehensive approach to building AI systems that align with human values and intentions.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="p-8 bg-[#dfeae7] rounded-xl h-full">
                  <div className="h-32 flex items-center justify-center mb-6">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="30" y="30" width="40" height="40" stroke="#6b21a8" strokeWidth="2" fill="none" />
                      <line x1="30" y1="45" x2="70" y2="45" stroke="#6b21a8" strokeWidth="2" />
                      <line x1="30" y1="60" x2="70" y2="60" stroke="#6b21a8" strokeWidth="2" />
                      <circle cx="50" cy="37.5" r="3" fill="#9c5bff" />
                      <circle cx="50" cy="52.5" r="3" fill="#9c5bff" />
                      <circle cx="50" cy="67.5" r="3" fill="#9c5bff" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Amelit's Development Framework</h3>
                  <p className="text-gray-700">
                    How we ensure our AI development proceeds at a responsible pace with appropriate safeguards.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card className="p-8 bg-[#e5e1ee] rounded-xl h-full">
                  <div className="h-32 flex items-center justify-center mb-6">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 70 L50 30 L70 70" stroke="#6b21a8" strokeWidth="2" fill="none" />
                      <rect x="40" y="50" width="20" height="20" stroke="#6b21a8" strokeWidth="2" fill="none" />
                      <circle cx="50" cy="30" r="5" fill="#9c5bff" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Amelit Academy: Master Amethyst</h3>
                  <p className="text-gray-700">
                    Comprehensive educational resources to help you maximize the potential of our AI systems.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-gray-200">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-bold">Featured</h3>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                className="flex flex-col md:flex-row justify-between py-4 border-t border-gray-200"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex-1">
                  <Link href="/news/amethyst-release" className="text-lg font-medium hover:underline">
                    Amethyst 1.0 Release
                  </Link>
                </div>
                <div className="flex items-center space-x-12 mt-2 md:mt-0">
                  <span className="text-sm text-gray-500">12 апреля 2025 г.</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Amethyst Technical Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#f8f5f1] p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Model Architecture</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-800 mr-2">•</span>
                      <span>24 billion parameters</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-800 mr-2">•</span>
                      <span>Advanced multimodal capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-800 mr-2">•</span>
                      <span>State-of-the-art performance in text-based reasoning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-800 mr-2">•</span>
                      <span>Extensive 128k token context window</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#f8f5f1] p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Capabilities</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-800 mr-2">•</span>
                      <span>Image analysis and vision tasks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-800 mr-2">•</span>
                      <span>Programming and mathematical reasoning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-800 mr-2">•</span>
                      <span>Multilingual support across dozens of languages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-800 mr-2">•</span>
                      <span>Optimized for efficient local inference</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 bg-[#f8f5f1] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Use Cases</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-purple-800 mr-2">•</span>
                    <span>Conversational agents</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-800 mr-2">•</span>
                    <span>Function calling</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-800 mr-2">•</span>
                    <span>Long-document comprehension</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-800 mr-2">•</span>
                    <span>Privacy-sensitive deployments</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

function NetworkGraph() {
  // Optimized to reduce lag
  return (
    <svg viewBox="0 0 500 500" className="w-full h-full">
      <defs>
        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9c5bff" />
          <stop offset="100%" stopColor="#6b21a8" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <g transform="translate(250, 250)">
        {/* Main node */}
        <motion.circle
          cx="0"
          cy="0"
          r="40"
          fill="url(#purpleGradient)"
          filter="url(#glow)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* Connected nodes with animations */}
        <motion.circle
          cx="-100"
          cy="-80"
          r="25"
          fill="url(#purpleGradient)"
          filter="url(#glow)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        />
        <motion.circle
          cx="120"
          cy="-60"
          r="30"
          fill="url(#purpleGradient)"
          filter="url(#glow)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />
        <motion.circle
          cx="80"
          cy="100"
          r="20"
          fill="url(#purpleGradient)"
          filter="url(#glow)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        />
        <motion.circle
          cx="-90"
          cy="90"
          r="25"
          fill="url(#purpleGradient)"
          filter="url(#glow)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        />
        <motion.circle
          cx="-40"
          cy="-120"
          r="15"
          fill="url(#purpleGradient)"
          filter="url(#glow)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        />

        {/* Connections with animations */}
        <motion.path
          d="M0,0 L-100,-80"
          stroke="#9c5bff"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
        <motion.path
          d="M0,0 L120,-60"
          stroke="#9c5bff"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <motion.path
          d="M0,0 L80,100"
          stroke="#9c5bff"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />
        <motion.path
          d="M0,0 L-90,90"
          stroke="#9c5bff"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
        />
        <motion.path
          d="M0,0 L-40,-120"
          stroke="#9c5bff"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        />

        {/* Decorative curved lines - simplified for performance */}
        <motion.path
          d="M120,-60 C200,0 150,100 80,100"
          stroke="#6b21a8"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        />
        <motion.path
          d="M-100,-80 C-150,-20 -120,50 -90,90"
          stroke="#6b21a8"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 1.3 }}
        />
      </g>
    </svg>
  )
}
