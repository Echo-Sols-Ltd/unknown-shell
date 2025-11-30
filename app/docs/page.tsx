'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Book, Code, Terminal, Shield, Zap, Globe, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'

export default function DocsPage() {
  const router = useRouter()
  const { user, loading } = useAuth()
  const [activeTab, setActiveTab] = useState<string | null>(null)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login?redirect=/docs')
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

  const sections = [
    {
      id: 'getting-started',
      icon: Terminal,
      title: 'Getting Started',
      description: 'Quick start guide to get you up and running',
      link: '/docs/getting-started',
      resources: [
        'Next.js Documentation',
        'React Hooks Guide',
        'TypeScript Handbook',
        'Tailwind CSS Docs'
      ]
    },
    {
      id: 'api',
      icon: Code,
      title: 'API Reference',
      description: 'Complete API documentation with examples',
      link: '/docs/api',
      resources: [
        'REST API Best Practices',
        'OpenAPI Specification',
        'GraphQL Documentation',
        'Postman Collection'
      ]
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Security',
      description: 'Security best practices and authentication',
      link: '/docs/security',
      resources: [
        'OWASP Top 10',
        'JWT Best Practices',
        'OAuth 2.0 Guide',
        'Security Headers'
      ]
    },
    {
      id: 'performance',
      icon: Zap,
      title: 'Performance',
      description: 'Optimization and performance tuning',
      link: '/docs/performance',
      resources: [
        'Web Vitals Guide',
        'Lighthouse Audits',
        'CDN Optimization',
        'Caching Strategies'
      ]
    },
    {
      id: 'deployment',
      icon: Globe,
      title: 'Deployment',
      description: 'Deploy to production environments',
      link: '/docs/deployment',
      resources: [
        'Vercel Deployment',
        'Docker Best Practices',
        'CI/CD Pipelines',
        'Kubernetes Guide'
      ]
    },
    {
      id: 'guides',
      icon: Book,
      title: 'Guides',
      description: 'Step-by-step tutorials and guides',
      link: '/docs/guides',
      resources: [
        'Architecture Patterns',
        'Testing Strategies',
        'Monitoring Setup',
        'Troubleshooting'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Header */}
      <nav className="border-b border-dark-700 bg-dark-900/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-2 h-2 bg-accent rounded"></div>
                <div className="w-2 h-2 bg-dark-600 rounded"></div>
                <div className="w-2 h-2 bg-dark-600 rounded"></div>
                <div className="w-2 h-2 bg-accent rounded"></div>
              </div>
              <span className="text-white font-semibold text-sm">Unknown Shell</span>
            </Link>
            <Link href="/dashboard" className="text-dark-300 hover:text-accent flex items-center gap-2 text-sm">
              <ArrowLeft className="w-3 h-3" />
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Documentation
          </h1>
          <p className="text-base text-dark-300 max-w-2xl">
            Comprehensive guides, API references, and best practices for building with Unknown Shell
          </p>
        </div>

        {/* Documentation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section, index) => {
            const Icon = section.icon
            const isActive = activeTab === section.id
            return (
              <Link
                key={index}
                href={section.link}
                onMouseEnter={() => setActiveTab(section.id)}
                onMouseLeave={() => setActiveTab(null)}
                className={`bg-dark-800/50 backdrop-blur-lg rounded-lg p-5 border transition-all ${
                  isActive 
                    ? 'border-accent shadow-lg shadow-accent/20' 
                    : 'border-dark-700 hover:border-accent/50'
                }`}
              >
                <Icon className={`w-8 h-8 mb-3 ${isActive ? 'text-accent' : 'text-accent/80'}`} />
                <h3 className="text-base font-semibold text-white mb-1.5">{section.title}</h3>
                <p className="text-sm text-dark-300 mb-3">{section.description}</p>
                <div className="mt-3 pt-3 border-t border-dark-700">
                  <p className="text-xs text-dark-400 mb-2">Resources:</p>
                  <ul className="space-y-1">
                    {section.resources.slice(0, 2).map((resource, idx) => (
                      <li key={idx} className="text-xs text-dark-400">• {resource}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Quick Links */}
        <div className="mt-10 bg-dark-800/50 backdrop-blur-lg rounded-lg p-6 border border-dark-700">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a href="https://github.com/Echo-Sols-Ltd/unknown-shell" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-accent-light">
              GitHub Repository →
            </a>
            <a href="mailto:iamshemaleandre@gmail.com" className="text-sm text-accent hover:text-accent-light">
              Contact Support →
            </a>
            <a href="https://shemaleandre.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-accent-light">
              Developer Portfolio →
            </a>
            <Link href="/dashboard" className="text-sm text-accent hover:text-accent-light">
              Go to Dashboard →
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark-900 border-t border-dark-700 py-8 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-2 h-2 bg-accent rounded"></div>
                  <div className="w-2 h-2 bg-dark-600 rounded"></div>
                  <div className="w-2 h-2 bg-dark-600 rounded"></div>
                  <div className="w-2 h-2 bg-accent rounded"></div>
                </div>
                <span className="text-white font-semibold text-sm">Unknown Shell</span>
              </div>
              <p className="text-dark-400 text-xs">Professional Shell SaaS Platform</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3 text-sm">Resources</h4>
              <ul className="space-y-1.5">
                <li><Link href="/docs" className="text-dark-400 hover:text-accent text-xs">Documentation</Link></li>
                <li><a href="https://github.com/Echo-Sols-Ltd/unknown-shell" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-accent text-xs">GitHub</a></li>
                <li><Link href="/dashboard" className="text-dark-400 hover:text-accent text-xs">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3 text-sm">Contact</h4>
              <ul className="space-y-1.5">
                <li><a href="mailto:iamshemaleandre@gmail.com" className="text-dark-400 hover:text-accent text-xs">iamshemaleandre@gmail.com</a></li>
                <li><a href="https://shemaleandre.vercel.app" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-accent text-xs">Portfolio</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-dark-700 pt-6 text-center">
            <p className="text-dark-400 text-xs">© 2024 Unknown Shell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
