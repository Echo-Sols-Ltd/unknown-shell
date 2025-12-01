'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Terminal, Zap, BarChart3, Shield, Globe, ArrowRight, Menu, X, Search } from 'lucide-react'
import { useState } from 'react'

export default function LandingPage() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark-900/80 backdrop-blur-lg border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo-icon.svg" alt="Unknown Shell" className="w-8 h-8" />
              <span className="text-white font-bold text-xl">Unknown Shell</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-dark-300 hover:text-accent transition-colors">Features</Link>
              <Link href="#pricing" className="text-dark-300 hover:text-accent transition-colors">Pricing</Link>
              <Link href="/docs" className="text-dark-300 hover:text-accent transition-colors">Docs</Link>
              <Link href="/auth/login" className="text-dark-300 hover:text-white transition-colors">Login</Link>
              <Link href="/auth/signup" className="bg-accent text-dark-900 px-6 py-2 rounded-lg font-semibold hover:bg-accent-light transition-colors">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-dark-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-dark-700 bg-dark-900">
            <div className="px-4 py-4 space-y-4">
              <Link href="#features" className="block text-dark-300 hover:text-accent">Features</Link>
              <Link href="#pricing" className="block text-dark-300 hover:text-accent">Pricing</Link>
              <Link href="/docs" className="block text-dark-300 hover:text-accent">Docs</Link>
              <Link href="/auth/login" className="block text-dark-300 hover:text-white">Login</Link>
              <Link href="/auth/signup" className="block bg-accent text-dark-900 px-6 py-2 rounded-lg font-semibold text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Manage the <span className="text-accent">Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-dark-300 mb-4">Professional Shell SaaS Platform</p>
            <p className="text-lg text-dark-400 mb-8">From $0/mo • Start Free Today</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => router.push('/auth/signup')}
                className="bg-accent text-dark-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-light transition-all transform hover:scale-105 shadow-lg shadow-accent/50"
              >
                Order Now
              </button>
              <button
                onClick={() => router.push('/docs')}
                className="bg-dark-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-dark-600 transition-all border border-dark-600"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-dark-800/50 backdrop-blur-lg rounded-xl p-6 border border-dark-700">
                <div className="text-3xl font-bold text-accent mb-2">99%</div>
                <div className="text-dark-300">Uptime</div>
                <div className="mt-4 h-2 bg-dark-700 rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: '99%' }}></div>
                </div>
              </div>
              <div className="bg-dark-800/50 backdrop-blur-lg rounded-xl p-6 border border-dark-700">
                <div className="text-3xl font-bold text-accent mb-2">250km</div>
                <div className="text-dark-300">Range</div>
                <div className="mt-4 flex gap-1">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex-1 h-2 bg-accent rounded" style={{ height: `${20 + i * 5}px` }}></div>
                  ))}
                </div>
              </div>
              <div className="bg-dark-800/50 backdrop-blur-lg rounded-xl p-6 border border-dark-700">
                <div className="text-3xl font-bold text-accent mb-2">75 kWh</div>
                <div className="text-dark-300">Power</div>
                <div className="mt-4 flex gap-1">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 h-2 rounded"
                      style={{
                        backgroundColor: i < 15 ? '#00ff00' : '#334155',
                        height: '8px'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-dark-800/50 backdrop-blur-lg rounded-xl p-6 border border-dark-700 hover:border-accent transition-all">
              <Terminal className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Advanced Terminal</h3>
              <p className="text-dark-300">Full-featured web terminal with xterm.js, command history, and real-time execution.</p>
            </div>
            <div className="bg-dark-800/50 backdrop-blur-lg rounded-xl p-6 border border-dark-700 hover:border-accent transition-all">
              <BarChart3 className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Analytics Dashboard</h3>
              <p className="text-dark-300">Comprehensive insights, usage trends, and performance metrics at your fingertips.</p>
            </div>
            <div className="bg-dark-800/50 backdrop-blur-lg rounded-xl p-6 border border-dark-700 hover:border-accent transition-all">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-dark-300">JWT authentication, command whitelisting, and secure session management.</p>
            </div>
            <div className="bg-dark-800/50 backdrop-blur-lg rounded-xl p-6 border border-dark-700 hover:border-accent transition-all">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-dark-300">Optimized performance with real-time updates and instant command execution.</p>
            </div>
            <div className="bg-dark-800/50 backdrop-blur-lg rounded-xl p-6 border border-dark-700 hover:border-accent transition-all">
              <Globe className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Global Access</h3>
              <p className="text-dark-300">Access your shell from anywhere, anytime, on any device with responsive design.</p>
            </div>
            <div className="bg-dark-800/50 backdrop-blur-lg rounded-xl p-6 border border-dark-700 hover:border-accent transition-all">
              <Terminal className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Session Management</h3>
              <p className="text-dark-300">Track and manage multiple shell sessions with complete command history.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Simple Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark-800/50 backdrop-blur-lg rounded-xl p-8 border border-dark-700">
              <h3 className="text-2xl font-bold text-white mb-4">Free</h3>
              <div className="text-4xl font-bold text-accent mb-6">$0<span className="text-lg text-dark-300">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="text-dark-300 flex items-center"><span className="text-accent mr-2">✓</span> 10 sessions/month</li>
                <li className="text-dark-300 flex items-center"><span className="text-accent mr-2">✓</span> Basic terminal</li>
                <li className="text-dark-300 flex items-center"><span className="text-accent mr-2">✓</span> Community support</li>
              </ul>
              <button onClick={() => router.push('/auth/signup')} className="w-full bg-dark-700 text-white py-3 rounded-lg font-semibold hover:bg-dark-600 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-dark-800/50 backdrop-blur-lg rounded-xl p-8 border-2 border-accent relative">
              <div className="absolute top-0 right-0 bg-accent text-dark-900 px-4 py-1 rounded-bl-lg text-sm font-bold">Popular</div>
              <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
              <div className="text-4xl font-bold text-accent mb-6">$29<span className="text-lg text-dark-300">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="text-dark-300 flex items-center"><span className="text-accent mr-2">✓</span> Unlimited sessions</li>
                <li className="text-dark-300 flex items-center"><span className="text-accent mr-2">✓</span> Advanced analytics</li>
                <li className="text-dark-300 flex items-center"><span className="text-accent mr-2">✓</span> Priority support</li>
                <li className="text-dark-300 flex items-center"><span className="text-accent mr-2">✓</span> API access</li>
              </ul>
              <button onClick={() => router.push('/auth/signup')} className="w-full bg-accent text-dark-900 py-3 rounded-lg font-bold hover:bg-accent-light transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-dark-800/50 backdrop-blur-lg rounded-xl p-8 border border-dark-700">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-accent mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="text-dark-300 flex items-center"><span className="text-accent mr-2">✓</span> Everything in Pro</li>
                <li className="text-dark-300 flex items-center"><span className="text-accent mr-2">✓</span> Dedicated support</li>
                <li className="text-dark-300 flex items-center"><span className="text-accent mr-2">✓</span> Custom integrations</li>
                <li className="text-dark-300 flex items-center"><span className="text-accent mr-2">✓</span> SLA guarantee</li>
              </ul>
              <button onClick={() => router.push('/auth/signup')} className="w-full bg-dark-700 text-white py-3 rounded-lg font-semibold hover:bg-dark-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/20 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-dark-300 mb-8">Join thousands of developers using Unknown Shell</p>
          <button
            onClick={() => router.push('/auth/signup')}
            className="bg-accent text-dark-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-light transition-all transform hover:scale-105 shadow-lg shadow-accent/50 inline-flex items-center gap-2"
          >
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 border-t border-dark-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo-icon.svg" alt="Unknown Shell" className="w-8 h-8" />
                <span className="text-white font-bold">Unknown Shell</span>
              </div>
              <p className="text-dark-400 text-sm">Professional Shell SaaS Platform for developers worldwide.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-dark-400 hover:text-accent text-sm">Features</Link></li>
                <li><Link href="#pricing" className="text-dark-400 hover:text-accent text-sm">Pricing</Link></li>
                <li><Link href="/docs" className="text-dark-400 hover:text-accent text-sm">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-dark-400 hover:text-accent text-sm">About</Link></li>
                <li><Link href="/contact" className="text-dark-400 hover:text-accent text-sm">Contact</Link></li>
                <li><a href="https://shemaleandre.vercel.app" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-accent text-sm">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="mailto:iamshemaleandre@gmail.com" className="text-dark-400 hover:text-accent text-sm">iamshemaleandre@gmail.com</a></li>
                <li><a href="https://shemaleandre.vercel.app" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-accent text-sm">Portfolio</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-dark-700 pt-8 text-center">
            <p className="text-dark-400 text-sm">© 2024 Unknown Shell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
