'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Code, ExternalLink } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'

export default function APIPage() {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login?redirect=/docs/api')
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
    { name: 'REST API Best Practices', url: 'https://restfulapi.net/' },
    { name: 'OpenAPI Specification', url: 'https://swagger.io/specification/' },
    { name: 'GraphQL Documentation', url: 'https://graphql.org/learn/' },
    { name: 'Postman Collection', url: 'https://www.postman.com/' }
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
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">API Reference</h1>
        <p className="text-sm text-dark-300 mb-8">Complete API documentation with examples and endpoints</p>

        <div className="space-y-6">
          <section className="bg-dark-800/50 backdrop-blur-lg rounded-lg p-5 border border-dark-700">
            <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-accent" />
              Authentication Endpoints
            </h2>
            <div className="space-y-3">
              <div className="bg-dark-900 rounded-lg p-3 border border-dark-700">
                <div className="text-xs text-accent font-mono mb-1">POST /api/auth/signup</div>
                <p className="text-xs text-dark-300">Create a new user account</p>
              </div>
              <div className="bg-dark-900 rounded-lg p-3 border border-dark-700">
                <div className="text-xs text-accent font-mono mb-1">POST /api/auth/login</div>
                <p className="text-xs text-dark-300">Authenticate and receive JWT token</p>
              </div>
            </div>
          </section>

          <section className="bg-dark-800/50 backdrop-blur-lg rounded-lg p-5 border border-dark-700">
            <h2 className="text-lg font-semibold text-white mb-3">Shell Endpoints</h2>
            <div className="space-y-3">
              <div className="bg-dark-900 rounded-lg p-3 border border-dark-700">
                <div className="text-xs text-accent font-mono mb-1">POST /api/shell/execute</div>
                <p className="text-xs text-dark-300">Execute shell commands securely</p>
              </div>
              <div className="bg-dark-900 rounded-lg p-3 border border-dark-700">
                <div className="text-xs text-accent font-mono mb-1">GET /api/shell/history</div>
                <p className="text-xs text-dark-300">Retrieve command execution history</p>
              </div>
            </div>
          </section>

          <section className="bg-dark-800/50 backdrop-blur-lg rounded-lg p-5 border border-dark-700">
            <h2 className="text-lg font-semibold text-white mb-3">Resources</h2>
            <p className="text-sm text-dark-300 mb-3">Additional API resources and documentation:</p>
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

