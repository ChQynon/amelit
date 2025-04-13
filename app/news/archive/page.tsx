"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Animation variants for consistent animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function NewsArchivePage() {
  const newsItems = [
    {
      id: "amethyst-release",
      title: "Introducing Amethyst 1.0",
      date: "12 апреля 2025 г.",
      excerpt: "Today, we're excited to announce the release of Amethyst 1.0, our first AI assistant designed to be helpful, harmless, and honest.",
    },
    {
      id: "interpretability-research",
      title: "New Research Paper on Neural Network Interpretability",
      date: "27 марта 2025 г.",
      excerpt: "Our research team has published a groundbreaking paper on tracing the thoughts of large language models, contributing to the field of AI interpretability.",
    },
    {
      id: "alignment-workshop",
      title: "Amelit Hosts AI Alignment Workshop",
      date: "15 февраля 2025 г.",
      excerpt: "We recently hosted a workshop bringing together researchers from around the world to discuss challenges and solutions in AI alignment.",
    },
    {
      id: "safety-framework",
      title: "Introducing Our AI Safety Framework",
      date: "20 января 2025 г.",
      excerpt: "We're sharing our comprehensive approach to developing safe AI systems, including our testing methodologies and safety criteria.",
    },
    {
      id: "funding-announcement",
      title: "Amelit Secures $50M in Funding",
      date: "5 декабря 2024 г.",
      excerpt: "We're excited to announce a new round of funding that will accelerate our research into safe and beneficial AI systems.",
    },
  ]

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
            <Link
              href="/news"
              className="text-purple-800 hover:underline inline-flex items-center mb-6"
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
              Back to Latest News
            </Link>
            <h1 className="text-5xl font-bold mb-6">News Archive</h1>
            <p className="text-xl text-gray-700">
              Browse all news and updates from Amelit
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {newsItems.map((item, index) => (
              <motion.div 
                key={item.id}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{item.excerpt}</p>
                    <div className="flex items-center gap-4">
                      <Button asChild variant="outline" className="border-purple-800 text-purple-800 hover:bg-purple-50">
                        <Link href={`/news/${item.id}`}>Read More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
} 