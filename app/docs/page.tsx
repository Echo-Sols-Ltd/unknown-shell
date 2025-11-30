'use client'

import { Book, Code, Terminal, Shield, Zap, Globe, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function DocsPage() {
  const sections = [
    {
      icon: Terminal,
      title: 'Getting Started',
      description: 'Quick start guide to get you up and running',
      link: '/docs/getting-started'
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Complete API documentation with examples',
      link: '/docs/api'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Security best practices and authentication',
      link: '/docs/security'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimization and performance tuning',
      link: '/docs/performance'
    },
    {
      icon: Globe,
      title: 'Deployment',
      description: 'Deploy to production environments',
      link: '/docs/deployment'
    },
    {
      icon: Book,
      title: 'Guides',
      description: 'Step-by-step tutorials and guides',
      link: '/docs/guides'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Header */}
      <nav className="border-b border-dark-700 bg-dark-900/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-3 h-3 bg-accent rounded"></div>
                <div className="w-3 h-3 bg-dark-600 rounded"></div>
                <div className="w-3 h-3 bg-dark-600 rounded"></div>
                <div className="w-3 h-3 bg-accent rounded"></div>
              </div>
              <span className="text-white font-bold">Unknown Shell</span>
            </Link>
            <Link href="/" className="text-dark-300 hover:text-accent flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Documentation
          </h1>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Comprehensive guides, API references, and best practices for building with Unknown Shell
          </p>
        </div>

        {/* Documentation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <Link
                key={index}
                href={section.link}
                className="bg-dark-800/50 backdrop-blur-lg rounded-xl p-6 border border-dark-700 hover:border-accent transition-all hover:transform hover:scale-105"
              >
                <Icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
                <p className="text-dark-300">{section.description}</p>
              </Link>
            )
          })}
        </div>

        {/* Quick Links */}
        <div className="mt-16 bg-dark-800/50 backdrop-blur-lg rounded-xl p-8 border border-dark-700">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://github.com/Echo-Sols-Ltd/unknown-shell" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-light">
              GitHub Repository →
            </a>
            <a href="mailto:iamshemaleandre@gmail.com" className="text-accent hover:text-accent-light">
              Contact Support →
            </a>
            <a href="https://shemaleandre.vercel.app" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-light">
              Developer Portfolio →
            </a>
            <Link href="/auth/signup" className="text-accent hover:text-accent-light">
              Get Started →
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark-900 border-t border-dark-700 py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-3 h-3 bg-accent rounded"></div>
                  <div className="w-3 h-3 bg-dark-600 rounded"></div>
                  <div className="w-3 h-3 bg-dark-600 rounded"></div>
                  <div className="w-3 h-3 bg-accent rounded"></div>
                </div>
                <span className="text-white font-bold">Unknown Shell</span>
              </div>
              <p className="text-dark-400 text-sm">Professional Shell SaaS Platform</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/docs" className="text-dark-400 hover:text-accent text-sm">Documentation</Link></li>
                <li><a href="https://github.com/Echo-Sols-Ltd/unknown-shell" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-accent text-sm">GitHub</a></li>
                <li><Link href="/auth/signup" className="text-dark-400 hover:text-accent text-sm">Get Started</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="mailto:iamshemaleandre@gmail.com" className="text-dark-400 hover:text-accent text-sm">iamshemaleandre@gmail.com</a></li>
                <li><a href="https://shemaleandre.vercel.app" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-accent text-sm">Portfolio</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-dark-700 pt-8 text-center">
            <p className="text-dark-400 text-sm">© 2024 Unknown Shell. Built for Rwanda 🇷🇼</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

