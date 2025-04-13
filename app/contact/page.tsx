"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Animation variants for consistent animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ContactPage() {
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
              <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-gray-700">
                We'd love to hear from you. Get in touch with our team for inquiries, support, or partnership opportunities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <h2 className="text-2xl font-bold mb-6">Support</h2>
                <p className="text-gray-700 mb-6">
                  Need help with Amethyst or have technical questions? Our support team is ready to assist you.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="https://t.me/amelit_chat" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 p-4 bg-[#27A6E6] text-white rounded-lg hover:bg-[#2291c8] transition-colors"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      className="w-6 h-6 fill-current"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.97 8.07l-1.87 8.97c-.14.66-.5.82-1.02.51l-2.81-2.07-1.35 1.31c-.15.15-.28.28-.57.28l.2-2.85 5.18-4.67c.23-.2-.05-.31-.35-.12l-6.4 4.04-2.76-.87c-.6-.18-.61-.6.13-.88l10.79-4.14c.55-.23 1.01.13.83.89z"/>
                    </svg>
                    <span className="font-medium">Join our Telegram Chat</span>
                  </a>
                  
                  <a 
                    href="mailto:qynon@mail.ru" 
                    className="flex items-center gap-3 p-4 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-6 h-6"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span className="font-medium">Email Support</span>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#f0e9df] p-8 rounded-xl"
              >
                <h2 className="text-2xl font-bold mb-6">Business Inquiries</h2>
                <p className="text-gray-700 mb-6">
                  Interested in partnering with us or exploring enterprise solutions? Get in touch with our business team.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+77016748460" 
                    className="flex items-center gap-3 p-4 bg-[#1a1a1a] text-white rounded-lg hover:bg-black transition-colors"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-6 h-6"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span className="font-medium">+7 701 674 8460</span>
                  </a>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-300">
                  <h3 className="font-bold mb-4">Contact Information</h3>
                  <div className="text-gray-700">
                    <p>Email: qynon@mail.ru</p>
                    <p>Phone: +7 701 674 8460</p>
                  </div>
                </div>
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
                <Link href="/faq">Visit our FAQ</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
} 