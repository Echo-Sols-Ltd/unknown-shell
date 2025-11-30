'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Check, ExternalLink } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'

export default function GettingStartedPage() {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login?redirect=/docs/getting-started')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-dark-900">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const resources = [
    { name: 'Next.js Documentation', url: 'https://nextjs.org/docs' },
    { name: 'React Hooks Guide', url: 'https://react.dev/reference/react' },
    { name: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/' },
    { name: 'Tailwind CSS Docs', url: 'https://tailwindcss.com/docs' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <nav className="border-b border-dark-700 bg-dark-900/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link href="/docs" className="text-dark-300 hover:text-accent flex items-center gap-2 text-sm">
            <ArrowLeft className="w-3 h-3" />
            Back to Documentation
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Getting Started</h1>
        <p className="text-sm text-dark-300 mb-8">Get up and running with Unknown Shell in minutes</p>

        <div className="space-y-6">
          <section className="bg-dark-800/50 backdrop-blur-lg rounded-lg p-5 border border-dark-700">
            <h2 className="text-lg font-semibold text-white mb-3">1. Create an Account</h2>
            <p className="text-sm text-dark-300 mb-3">Sign up for a free account to get started:</p>
            <ol className="list-decimal list-inside space-y-1.5 text-sm text-dark-300 ml-2">
              <li>Visit the <Link href="/auth/signup" className="text-accent hover:text-accent-light">signup page</Link></li>
              <li>Enter your email and create a password</li>
              <li>Verify your email address</li>
              <li>Start using Unknown Shell!</li>
            </ol>
          </section>

          <section className="bg-dark-800/50 backdrop-blur-lg rounded-lg p-5 border border-dark-700">
            <h2 className="text-lg font-semibold text-white mb-3">2. Your First Session</h2>
            <p className="text-sm text-dark-300 mb-3">Once logged in, you can start using the terminal:</p>
            <div className="bg-dark-900 rounded-lg p-3 font-mono text-xs border border-dark-700">
              <div className="text-accent">$ ls -la</div>
              <div className="text-dark-300 mt-1">README.md  package.json  src/</div>
            </div>
          </section>

          <section className="bg-dark-800/50 backdrop-blur-lg rounded-lg p-5 border border-dark-700">
            <h2 className="text-lg font-semibold text-white mb-3">3. Explore Features</h2>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-dark-300"><Check className="w-4 h-4 text-accent mr-2 flex-shrink-0" /> Terminal interface with command execution</li>
              <li className="flex items-center text-sm text-dark-300"><Check className="w-4 h-4 text-accent mr-2 flex-shrink-0" /> Real-time analytics dashboard</li>
              <li className="flex items-center text-sm text-dark-300"><Check className="w-4 h-4 text-accent mr-2 flex-shrink-0" /> Session management</li>
              <li className="flex items-center text-sm text-dark-300"><Check className="w-4 h-4 text-accent mr-2 flex-shrink-0" /> Command history</li>
            </ul>
          </section>

          <section className="bg-dark-800/50 backdrop-blur-lg rounded-lg p-5 border border-dark-700">
            <h2 className="text-lg font-semibold text-white mb-3">Resources</h2>
            <p className="text-sm text-dark-300 mb-3">Additional resources to help you get started:</p>
            <ul className="space-y-2">
              {resources.map((resource, idx) => (
                <li key={idx}>
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:text-accent-light flex items-center gap-1"
                  >
                    {resource.name} <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
