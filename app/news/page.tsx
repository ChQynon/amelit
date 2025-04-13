"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Link from "next/link"

// Animation variants for consistent animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function NewsPage() {
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
            <h1 className="text-5xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl text-gray-700">The latest from Amelit</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6, delay: 0.2 }}>
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl">Introducing Amethyst 1.0</CardTitle>
                    <span className="text-sm text-gray-500">12 апреля 2025 г.</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Today, we're excited to announce the release of Amethyst 1.0, our first AI assistant designed to be
                    helpful, harmless, and honest. After extensive testing and refinement, we're making Amethyst
                    available to the public.
                  </p>
                  <div className="flex items-center gap-4">
                    <Button asChild variant="outline" className="border-purple-800 text-purple-800 hover:bg-purple-50">
                      <Link href="/news/amethyst-release">Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              variant="outline"
              className="border-purple-800 text-purple-800 hover:bg-purple-50 rounded-full px-8 py-6 text-lg"
            >
              <Link href="/news/archive">View All News</Link>
            </Button>
          </motion.div>
        </section>
      </main>
    </div>
  )
}
