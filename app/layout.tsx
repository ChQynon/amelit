import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Amelit - AI Research and Products",
  description: "Experience Amethyst AI - our intelligent assistant available on Telegram. Chat, create content, and get assistance instantly.",
  generator: 'Amelit',
  icons: {
    icon: [
      { url: '/images/amelit-logo.png' }
    ],
    apple: [
      { url: '/images/amelit-logo.png' }
    ]
  },
  openGraph: {
    title: "Amelit - Experience Amethyst AI",
    description: "Chat with our intelligent assistant on Telegram. Get help with writing, research, and more.",
    type: "website",
    images: [{ url: '/images/amelit-logo.png' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amelit - AI Assistant on Telegram",
    description: "Experience the power of Amethyst AI on Telegram. Available 24/7 to assist you.",
    images: [{ url: '/images/amelit-logo.png' }],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/amelit-logo.png" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}