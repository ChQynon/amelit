"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

// Animation variants for consistent animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function AmethystReleasePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f5f1]">
      <main className="flex-1">
        <article className="container mx-auto py-20">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="mb-8"
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
                Back to News
              </Link>
              
              <h1 className="text-5xl font-bold mb-6">Introducing Amethyst 1.0</h1>
              <div className="flex items-center text-gray-500 mb-8">
                <time dateTime="2025-04-12">12 апреля 2025 г.</time>
              </div>
            </motion.div>
            
            <motion.div
              className="prose prose-lg max-w-none space-y-6 text-gray-700"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                Today, we're excited to announce the release of Amethyst 1.0, our first AI assistant designed to be helpful, harmless, and honest. After extensive testing and refinement, we're making Amethyst available to the public.
              </p>
              
              <p>
                Amethyst represents a milestone in our journey to create AI systems that prioritize human values and safety. Building on years of research into alignment, interpretability, and robustness, we've developed an AI assistant that not only provides useful capabilities but does so in a way that's transparent, reliable, and aligned with human intentions.
              </p>
              
              <h2 className="text-3xl font-bold mt-10 mb-4">What makes Amethyst different?</h2>
              
              <p>
                While many AI assistants focus primarily on capabilities, Amethyst has been designed from the ground up with safety and human values at its core. We've taken a comprehensive approach to ensure that Amethyst is:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li><strong>Helpful</strong>: Amethyst augments human capabilities rather than replacing human judgment.</li>
                <li><strong>Harmless</strong>: Our robust safety systems prevent harmful outputs and minimize risks.</li>
                <li><strong>Honest</strong>: Amethyst is transparent about its limitations and doesn't fabricate information.</li>
              </ul>
              
              <p>
                This approach reflects our belief that AI systems should be designed to complement human abilities and respect human autonomy, rather than becoming black boxes that make decisions for us.
              </p>
              
              <h2 className="text-3xl font-bold mt-10 mb-4">Technical specifications</h2>
              
              <p>
                Amethyst 1.0 is built on a state-of-the-art language model with 24 billion parameters. Key features include:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Advanced multimodal capabilities for understanding text and images</li>
                <li>Extensive 128k token context window for handling complex conversations</li>
                <li>Optimized for efficient local inference on consumer hardware</li>
                <li>Multilingual support across dozens of languages</li>
              </ul>
              
              <h2 className="text-3xl font-bold mt-10 mb-4">Getting started with Amethyst</h2>
              
              <p>
                Amethyst is now available to try through our web interface. In the coming weeks, we'll also be releasing desktop applications for Windows, macOS, and Linux, as well as mobile apps for iOS and Android.
              </p>
              
              <p>
                We invite you to experience Amethyst for yourself and join us on our mission to build AI that's aligned with human values and beneficial to humanity.
              </p>
              
              <div className="mt-12 flex justify-center">
                <Button asChild className="bg-purple-800 text-white rounded-full px-8 py-6 text-lg hover:bg-purple-700">
                  <Link href="/amethyst">Try Amethyst Now</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </article>
      </main>
    </div>
  )
} 