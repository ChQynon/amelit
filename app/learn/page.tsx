import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LearnPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f5f1]">
      <main className="flex-1">
        <section className="container mx-auto py-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Learn</h1>
            <p className="text-xl text-gray-700">Resources to help you get the most out of Amethyst</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="https://t.me/Amelit_bot" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-lg hover:bg-purple-50">
                  <h3 className="font-medium">Introduction to Amethyst</h3>
                  <p className="text-sm text-gray-600">Learn the basics of interacting with Amethyst</p>
                </Link>
                <Link href="https://t.me/Amelit_bot" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-lg hover:bg-purple-50">
                  <h3 className="font-medium">Best Practices</h3>
                  <p className="text-sm text-gray-600">Tips for getting the best results</p>
                </Link>
                <Link href="https://t.me/Amelit_bot" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-lg hover:bg-purple-50">
                  <h3 className="font-medium">Capabilities & Limitations</h3>
                  <p className="text-sm text-gray-600">Understanding what Amethyst can and cannot do</p>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tutorials</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="https://t.me/Amelit_bot" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-lg hover:bg-purple-50">
                  <h3 className="font-medium">Content Creation</h3>
                  <p className="text-sm text-gray-600">How to use Amethyst for writing and editing</p>
                </Link>
                <Link href="https://t.me/Amelit_bot" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-lg hover:bg-purple-50">
                  <h3 className="font-medium">Research Assistant</h3>
                  <p className="text-sm text-gray-600">Techniques for information gathering and synthesis</p>
                </Link>
                <Link href="https://t.me/Amelit_bot" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-lg hover:bg-purple-50">
                  <h3 className="font-medium">Problem Solving</h3>
                  <p className="text-sm text-gray-600">Using Amethyst to work through complex problems</p>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="#" className="block p-3 rounded-lg hover:bg-purple-50">
                  <h3 className="font-medium">Documentation</h3>
                  <p className="text-sm text-gray-600">Comprehensive guides and reference materials</p>
                </Link>
                <Link href="#" className="block p-3 rounded-lg hover:bg-purple-50">
                  <h3 className="font-medium">Community Forum</h3>
                  <p className="text-sm text-gray-600">Connect with other Amethyst users</p>
                </Link>
                <Link href="#" className="block p-3 rounded-lg hover:bg-purple-50">
                  <h3 className="font-medium">Webinars</h3>
                  <p className="text-sm text-gray-600">Recorded sessions on various topics</p>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 p-8 bg-purple-50 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Amelit Academy</h2>
              <p className="text-lg text-gray-700">Comprehensive training programs to help you master Amethyst</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Fundamentals Course</h3>
                <p className="text-gray-700 mb-4">A beginner-friendly introduction to working with AI assistants</p>
                <Button variant="outline" className="w-full border-purple-800 text-purple-800 hover:bg-purple-50" asChild>
                  <Link href="https://t.me/Amelit_bot" target="_blank" rel="noopener noreferrer">Enroll Now</Link>
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Advanced Applications</h3>
                <p className="text-gray-700 mb-4">Learn sophisticated techniques for specialized use cases</p>
                <Button variant="outline" className="w-full border-purple-800 text-purple-800 hover:bg-purple-50" asChild>
                  <Link href="https://t.me/Amelit_bot" target="_blank" rel="noopener noreferrer">Enroll Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
