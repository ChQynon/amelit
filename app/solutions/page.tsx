"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useAnimation } from "framer-motion"

// Animation variants for consistent animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function SolutionsPage() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f5f1]">
      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold mb-6">Solutions</h1>
              <p className="text-xl text-gray-700">Discover how Amethyst can transform your business and workflows</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Customer Service</CardTitle>
                    <CardDescription>Enhance your support experience</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Provide 24/7 customer support with Amethyst handling routine inquiries while escalating complex
                      issues to your team.
                    </p>
                    <Button asChild variant="outline" className="w-full border-purple-800 text-purple-800 hover:bg-purple-50">
                      <Link href="/solutions/customer-service">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Content Creation</CardTitle>
                    <CardDescription>Streamline your creative process</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Generate drafts, brainstorm ideas, and edit content with AI assistance that adapts to your brand
                      voice.
                    </p>
                    <Button asChild variant="outline" className="w-full border-purple-800 text-purple-800 hover:bg-purple-50">
                      <Link href="/solutions/content-creation">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Research Assistant</CardTitle>
                    <CardDescription>Accelerate knowledge discovery</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Summarize documents, extract insights, and connect information across sources to support your
                      research.
                    </p>
                    <Button asChild variant="outline" className="w-full border-purple-800 text-purple-800 hover:bg-purple-50">
                      <Link href="/solutions/research-assistant">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              className="mt-16 text-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button asChild className="bg-purple-800 text-white rounded-full px-8 py-6 text-lg hover:bg-purple-700">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
