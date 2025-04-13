"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

// Animation variants for consistent animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function CustomerServicePage() {
  const features = [
    "24/7 AI-powered customer support",
    "Seamless escalation to human agents",
    "Multilingual support across dozens of languages",
    "Context-aware conversations with continuous learning",
    "Integration with existing CRM and support tools",
    "Custom knowledge base adaptation",
    "Sentiment analysis for better customer understanding",
    "Detailed analytics and insights dashboard",
  ]

  const benefits = [
    {
      title: "Reduce Response Times",
      description: "Amethyst responds instantly to customer inquiries, decreasing wait times by up to 85%.",
    },
    {
      title: "Scale Support Operations",
      description: "Handle increasing support volumes without proportional increases in staffing.",
    },
    {
      title: "Improve Customer Satisfaction",
      description: "Consistent, helpful responses lead to better customer experiences and higher CSAT scores.",
    },
    {
      title: "Lower Support Costs",
      description: "Automation of routine inquiries allows human agents to focus on complex issues.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f5f1]">
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-[#f8f5f1] to-[#f0e9df]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                className="mb-12 text-center"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
              >
                <Link
                  href="/solutions"
                  className="text-purple-800 hover:underline inline-flex items-center mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to Solutions
                </Link>
                <h1 className="text-5xl font-bold mb-6">Customer Service Solution</h1>
                <p className="text-xl text-gray-700">
                  Transform your customer support with AI that's always available, consistently helpful, and seamlessly integrated with your human team.
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                        className="flex items-start"
                      >
                        <CheckCircle className="h-5 w-5 text-purple-800 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#f0e9df] p-8 rounded-xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-6">Demo Access</h2>
                    <p className="mb-6 text-gray-700">
                      See how Amethyst can transform your customer service experience with a personalized demo.
                    </p>
                    <div className="space-y-4">
                      <Button asChild className="w-full bg-purple-800 text-white hover:bg-purple-700">
                        <Link href="/demo">Request Live Demo</Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full border-purple-800 text-purple-800 hover:bg-purple-50">
                        <Link href="/case-studies">View Case Studies</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 opacity-10">
                    <svg
                      width="180"
                      height="180"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="10" stroke="#6b21a8" strokeWidth="2" />
                      <path
                        d="M8 12.5L10.5 15L16 9"
                        stroke="#6b21a8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="mb-16"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-center">Business Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeIn}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-lg shadow-sm"
                    >
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="text-center bg-white p-8 rounded-xl shadow-sm"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Customer Service?</h2>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  Join leading companies that have improved customer satisfaction while reducing support costs with Amethyst.
                </p>
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                  <Button asChild className="bg-purple-800 text-white rounded-full px-8 py-6 text-lg hover:bg-purple-700">
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-purple-800 text-purple-800 hover:bg-purple-50 rounded-full px-8 py-6 text-lg">
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 