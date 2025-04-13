"use client"

import Link from "next/link"
import { motion } from "framer-motion"

// Animation variants for consistent animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="flex justify-center mb-8"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link href="/" className="flex items-center">
            <div className="text-3xl font-bold text-white">AI</div>
          </Link>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.h3 
            className="text-2xl font-semibold mb-8 text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Frequently Asked Questions
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-[#14161f] p-6 rounded-lg"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h4 className="text-lg font-medium mb-3">What makes Amethyst different?</h4>
              <p className="text-gray-300">Amethyst is built from the ground up with safety and human values at its core, designed to be helpful, harmless, and honest.</p>
            </motion.div>
            <motion.div 
              className="bg-[#14161f] p-6 rounded-lg"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h4 className="text-lg font-medium mb-3">When was Amethyst released?</h4>
              <p className="text-gray-300">Amethyst 1.0 was officially released on April 12, 2025, after extensive testing and refinement.</p>
            </motion.div>
            <motion.div 
              className="bg-[#14161f] p-6 rounded-lg"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h4 className="text-lg font-medium mb-3">How can I try Amethyst?</h4>
              <p className="text-gray-300">You can try Amethyst for free by clicking the "Try Amethyst" button at the top of this page.</p>
            </motion.div>
            <motion.div 
              className="bg-[#14161f] p-6 rounded-lg"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h4 className="text-lg font-medium mb-3">Is Amethyst safe?</h4>
              <p className="text-gray-300">Yes, we've built Amethyst with robust safeguards to prevent harmful outputs and ensure it aligns with human values.</p>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-gray-400 text-xs mb-4 md:mb-0">© 2025 Amelit. All rights reserved.</p>
          
          <div className="flex items-center space-x-6">
            <Link href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
            
            <a href="https://t.me/amelit_chat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#27A6E6] transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                className="w-5 h-5 fill-current"
                aria-label="Telegram"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.97 8.07l-1.87 8.97c-.14.66-.5.82-1.02.51l-2.81-2.07-1.35 1.31c-.15.15-.28.28-.57.28l.2-2.85 5.18-4.67c.23-.2-.05-.31-.35-.12l-6.4 4.04-2.76-.87c-.6-.18-.61-.6.13-.88l10.79-4.14c.55-.23 1.01.13.83.89z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
