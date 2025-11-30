'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Terminal, LayoutDashboard, BarChart3, LogOut, Menu, X } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'

interface DashboardLayoutProps {
  children: React.ReactNode
  activeTab: 'overview' | 'shell' | 'insights'
  setActiveTab: (tab: 'overview' | 'shell' | 'insights') => void
}

export default function DashboardLayout({ children, activeTab, setActiveTab }: DashboardLayoutProps) {
  const router = useRouter()
  const { user, logout } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = () => {
    logout()
    router.push('/auth/login')
  }

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Mobile header */}
      <div className="lg:hidden bg-dark-800 border-b border-dark-700 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Terminal className="w-6 h-6 text-accent" />
          <span className="text-white font-bold">Unknown Shell</span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-dark-300 hover:text-white"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-dark-800 border-r border-dark-700 transition-transform duration-300 ease-in-out`}
        >
          <div className="h-full flex flex-col">
              <div className="p-6 border-b border-dark-700">
              <div className="flex items-center space-x-2">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-2 h-2 bg-accent rounded"></div>
                  <div className="w-2 h-2 bg-dark-600 rounded"></div>
                  <div className="w-2 h-2 bg-dark-600 rounded"></div>
                  <div className="w-2 h-2 bg-accent rounded"></div>
                </div>
                <span className="text-white font-bold text-xl">Unknown Shell</span>
              </div>
              <p className="text-dark-400 text-sm mt-1">SaaS Platform</p>
            </div>

            <nav className="flex-1 p-4 space-y-2">
              <button
                onClick={() => {
                  setActiveTab('overview')
                  setSidebarOpen(false)
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'overview'
                    ? 'bg-accent/20 text-accent border border-accent/30'
                    : 'text-dark-300 hover:bg-dark-700 hover:text-white'
                }`}
              >
                <LayoutDashboard className="w-5 h-5" />
                <span>Overview</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('shell')
                  setSidebarOpen(false)
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'shell'
                    ? 'bg-accent/20 text-accent border border-accent/30'
                    : 'text-dark-300 hover:bg-dark-700 hover:text-white'
                }`}
              >
                <Terminal className="w-5 h-5" />
                <span>Shell</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('insights')
                  setSidebarOpen(false)
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'insights'
                    ? 'bg-accent/20 text-accent border border-accent/30'
                    : 'text-dark-300 hover:bg-dark-700 hover:text-white'
                }`}
              >
                <BarChart3 className="w-5 h-5" />
                <span>Insights</span>
              </button>
            </nav>

            <div className="p-4 border-t border-dark-700">
              <div className="mb-4 px-4 py-2">
                <p className="text-white text-sm font-medium">{user?.name}</p>
                <p className="text-dark-400 text-xs">{user?.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-dark-300 hover:bg-dark-700 hover:text-white transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

