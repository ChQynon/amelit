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

export default function ResearchPage() {
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
            <h1 className="text-5xl font-bold mb-6">Research</h1>
            <p className="text-xl text-gray-700">Exploring the frontiers of AI safety and capabilities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6, delay: 0.2 }}>
              <Card className="bg-white h-full">
                <CardHeader>
                  <CardTitle>Latest Publications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Link href="/research/publications/tracing-thoughts" className="block border-b border-gray-100 pb-4 hover:bg-gray-50 rounded-md transition-colors p-2 -m-2">
                    <h3 className="font-medium text-lg mb-1">Tracing the thoughts of a large language model</h3>
                    <p className="text-sm text-gray-600 mb-2">A. Johnson, M. Smith, L. Zhang</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                        Interpretability
                      </span>
                      <span className="text-xs text-gray-500">March 27, 2025</span>
                    </div>
                  </Link>
                  <Link href="/research/publications/alignment-faking" className="block border-b border-gray-100 pb-4 hover:bg-gray-50 rounded-md transition-colors p-2 -m-2">
                    <h3 className="font-medium text-lg mb-1">Alignment faking in large language models</h3>
                    <p className="text-sm text-gray-600 mb-2">S. Patel, K. Wong, T. Müller</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Alignment</span>
                      <span className="text-xs text-gray-500">December 18, 2024</span>
                    </div>
                  </Link>
                  <Link href="/research/publications/model-context-protocol" className="block hover:bg-gray-50 rounded-md transition-colors p-2 -m-2">
                    <h3 className="font-medium text-lg mb-1">Introducing the Model Context Protocol</h3>
                    <p className="text-sm text-gray-600 mb-2">R. Chen, D. Williams, E. Garcia</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">November 25, 2024</span>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6, delay: 0.3 }}>
              <Card className="bg-white h-full">
                <CardHeader>
                  <CardTitle>Research Areas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Link href="/research/areas/ai-safety" className="block border-b border-gray-100 pb-4 hover:bg-gray-50 rounded-md transition-colors p-2 -m-2">
                    <h3 className="font-medium text-lg mb-1">AI Safety</h3>
                    <p className="text-sm text-gray-600">
                      Developing techniques to ensure AI systems remain aligned with human values and intentions.
                    </p>
                  </Link>
                  <Link href="/research/areas/interpretability" className="block border-b border-gray-100 pb-4 hover:bg-gray-50 rounded-md transition-colors p-2 -m-2">
                    <h3 className="font-medium text-lg mb-1">Interpretability</h3>
                    <p className="text-sm text-gray-600">
                      Creating methods to understand the internal workings of neural networks and language models.
                    </p>
                  </Link>
                  <Link href="/research/areas/robustness" className="block border-b border-gray-100 pb-4 hover:bg-gray-50 rounded-md transition-colors p-2 -m-2">
                    <h3 className="font-medium text-lg mb-1">Robustness</h3>
                    <p className="text-sm text-gray-600">
                      Building AI systems that perform reliably even in unfamiliar or adversarial situations.
                    </p>
                  </Link>
                  <Link href="/research/areas/societal-impact" className="block hover:bg-gray-50 rounded-md transition-colors p-2 -m-2">
                    <h3 className="font-medium text-lg mb-1">Societal Impact</h3>
                    <p className="text-sm text-gray-600">
                      Studying how AI technologies affect society and developing frameworks for responsible deployment.
                    </p>
                  </Link>
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
              <Link href="/research/publications">View All Research</Link>
            </Button>
          </motion.div>
        </section>
      </main>
    </div>
  )
}
