"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useAnimation } from "framer-motion"

// Animation variants for consistent animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function AmethystPage() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f5f1]">
      <main className="flex-1">
        <section className="py-24 md:py-32 bg-gradient-to-b from-[#f8f5f1] to-[#f0e9df]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
              >
                Meet Amethyst 1.0
              </motion.h1>
              <motion.p
                className="text-xl text-gray-700 mb-12"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our first AI assistant designed to be helpful, harmless, and honest.
              </motion.p>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button className="bg-black text-white rounded-full px-8 py-6 text-lg hover:bg-gray-800" asChild>
                  <a href="https://t.me/Amelit_bot" target="_blank" rel="noopener noreferrer">Try Amethyst</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2
                className="text-3xl font-bold mb-4"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                What makes Amethyst different
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Amethyst is built from the ground up with safety and human values at its core.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Helpful</CardTitle>
                    <CardDescription>Designed to assist, not replace</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Amethyst is designed to be a helpful assistant that augments human capabilities rather than
                      replacing human judgment. It provides information, suggestions, and assistance while leaving the
                      final decisions to you.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Harmless</CardTitle>
                    <CardDescription>Safety by design</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      We've built Amethyst with robust safeguards to prevent harmful outputs. It refuses to generate
                      content that could be used to harm others and avoids reinforcing harmful stereotypes or biases.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Honest</CardTitle>
                    <CardDescription>Transparent about limitations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Amethyst is designed to be honest about what it knows and doesn't know. It will acknowledge
                      uncertainty, avoid making up facts, and clearly communicate its limitations to users.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#e5e1ee]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2
                  className="text-3xl font-bold mb-6"
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Technical specifications
                </motion.h2>
                <motion.div
                  className="space-y-4"
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                      <span className="text-purple-800 text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-medium">175B parameter model</h3>
                      <p className="text-sm text-gray-700">
                        Amethyst 1.0 is built on a 175 billion parameter neural network, allowing it to understand and
                        generate human language with remarkable fluency.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                      <span className="text-purple-800 text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Extensive training data</h3>
                      <p className="text-sm text-gray-700">
                        Trained on a diverse corpus of text from the internet, books, and academic papers, Amethyst has
                        been exposed to a wide range of knowledge, enabling it to assist with various topics and tasks.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                      <span className="text-purple-800 text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Context window</h3>
                      <p className="text-sm text-gray-700">
                        Amethyst 1.0 features a 32k token context window, allowing it to maintain coherent conversations
                        and process lengthy documents while keeping track of the discussion history.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                      <span className="text-purple-800 text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Multimodal capabilities</h3>
                      <p className="text-sm text-gray-700">
                        While primarily focused on text, Amethyst 1.0 can understand and discuss images, making it
                        versatile for a variety of use cases.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                className="relative h-[400px]"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-12 bg-gray-100 flex items-center px-4 border-b">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto text-sm text-gray-500">Amethyst Chat</div>
                  </div>
                  <div className="p-4 h-[calc(400px-3rem)] overflow-y-auto">
                    <div className="mb-4">
                      <div className="font-medium mb-1">User</div>
                      <div className="bg-gray-100 rounded-lg p-3">
                        Can you explain how neural networks work in simple terms?
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="font-medium mb-1">Amethyst</div>
                      <div className="bg-purple-50 rounded-lg p-3">
                        <p>Think of a neural network like a team of people passing notes to each other.</p>
                        <p className="mt-2">
                          Each person (or "neuron") gets information, decides how important different parts are, and
                          passes along a new note with their conclusions.
                        </p>
                        <p className="mt-2">
                          The team gets better by practicing on examples where they know the right answer. When they
                          make a mistake, they adjust how they evaluate information.
                        </p>
                        <p className="mt-2">
                          After lots of practice, the team gets really good at specific tasks like recognizing images or
                          understanding language - even though no single person understands the whole process!
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">User</div>
                      <div className="bg-gray-100 rounded-lg p-3">That's a great explanation, thanks!</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2
                className="text-3xl font-bold mb-4"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Release Information
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Amethyst 1.0 was officially released on April 12, 2025, after extensive testing and refinement.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f0e9df]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">Ready to experience Amethyst?</h2>
                <p className="text-lg text-gray-700">Start a conversation with our first AI assistant today.</p>
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row justify-center gap-4"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button className="bg-black text-white rounded-full px-8 py-6 text-lg hover:bg-gray-800">
                  Try Amethyst for free
                </Button>
                <Button
                  variant="outline"
                  className="border-black text-black rounded-full px-8 py-6 text-lg hover:bg-gray-100"
                >
                  View pricing plans
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
