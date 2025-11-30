'use client'

import Link from 'next/link'
import { ArrowLeft, Check } from 'lucide-react'

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <nav className="border-b border-dark-700 bg-dark-900/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/docs" className="text-dark-300 hover:text-accent flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Documentation
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-4">Getting Started</h1>
        <p className="text-xl text-dark-300 mb-8">Get up and running with Unknown Shell in minutes</p>

        <div className="space-y-8">
          <section className="bg-dark-800/50 backdrop-blur-lg rounded-xl p-6 border border-dark-700">
            <h2 className="text-2xl font-bold text-white mb-4">1. Create an Account</h2>
            <p className="text-dark-300 mb-4">Sign up for a free account to get started:</p>
            <ol className="list-decimal list-inside space-y-2 text-dark-300">
              <li>Visit the <Link href="/auth/signup" className="text-accent hover:text-accent-light">signup page</Link></li>
              <li>Enter your email and create a password</li>
              <li>Verify your email address</li>
              <li>Start using Unknown Shell!</li>
            </ol>
          </section>

          <section className="bg-dark-800/50 backdrop-blur-lg rounded-xl p-6 border border-dark-700">
            <h2 className="text-2xl font-bold text-white mb-4">2. Your First Session</h2>
            <p className="text-dark-300 mb-4">Once logged in, you can start using the terminal:</p>
            <div className="bg-dark-900 rounded-lg p-4 font-mono text-sm">
              <div className="text-accent">$ ls -la</div>
              <div className="text-dark-300 mt-2">README.md  package.json  src/</div>
            </div>
          </section>

          <section className="bg-dark-800/50 backdrop-blur-lg rounded-xl p-6 border border-dark-700">
            <h2 className="text-2xl font-bold text-white mb-4">3. Explore Features</h2>
            <ul className="space-y-2">
              <li className="flex items-center text-dark-300"><Check className="w-5 h-5 text-accent mr-2" /> Terminal interface with command execution</li>
              <li className="flex items-center text-dark-300"><Check className="w-5 h-5 text-accent mr-2" /> Real-time analytics dashboard</li>
              <li className="flex items-center text-dark-300"><Check className="w-5 h-5 text-accent mr-2" /> Session management</li>
              <li className="flex items-center text-dark-300"><Check className="w-5 h-5 text-accent mr-2" /> Command history</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

