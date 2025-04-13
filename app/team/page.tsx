"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Animation variants for consistent animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Chief Executive Officer",
      bio: "Alex leads Amelit with over 15 years of experience in AI research and entrepreneurship. Previously at Google Brain and DeepMind, Alex founded Amelit to build AI systems that prioritize human values and safety.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Maria Chen",
      role: "Chief Research Officer",
      bio: "With a PhD in Computer Science from Stanford, Maria oversees our research initiatives. Her groundbreaking work on interpretable AI has been published in top journals and has shaped our approach to building transparent systems.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "David Williams",
      role: "Head of Engineering",
      bio: "David brings 12 years of software engineering expertise from companies like Apple and Amazon. He leads our engineering team in building robust and scalable AI systems that meet our high standards for safety and performance.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Sophia Rodriguez",
      role: "Ethics & Policy Director",
      bio: "Sophia has a background in philosophy and law, specializing in the ethical implications of AI. She ensures that our products align with our core values and comply with emerging regulations in the AI space.",
      image: "/placeholder-user.jpg",
    },
  ]

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
              <h1 className="text-5xl font-bold mb-6">Our Team</h1>
              <p className="text-xl text-gray-700">
                Meet the passionate minds behind Amelit working to make AI safer and more helpful for everyone
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <Card className="h-full flex flex-col">
                    <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <CardContent className="flex-1 flex flex-col p-6">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <h4 className="text-purple-800 font-medium mb-4">{member.role}</h4>
                      <p className="text-gray-600 mb-6 flex-1">{member.bio}</p>
                      <Button variant="outline" asChild className="mt-auto border-purple-800 text-purple-800 hover:bg-purple-50">
                        <Link href={`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`}>View Profile</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="max-w-3xl mx-auto mt-20"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-3xl font-bold mb-6 text-center">Join Our Team</h2>
                <p className="text-lg text-gray-700 mb-8 text-center">
                  We're looking for passionate individuals who share our mission of building AI that's safe, 
                  helpful, and aligned with human values. Check out our open positions or reach out directly.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button asChild className="bg-purple-800 text-white hover:bg-purple-700 rounded-full px-6 py-6">
                    <Link href="/careers">See Open Positions</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-purple-800 text-purple-800 hover:bg-purple-50 rounded-full px-6 py-6">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
} 