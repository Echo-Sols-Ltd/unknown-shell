'use client'

export const dynamic = 'force-dynamic'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import DashboardLayout from '@/components/DashboardLayout'
import StatsCards from '@/components/dashboard/StatsCards'
import dynamic from 'next/dynamic'

const ShellTerminal = dynamic(() => import('@/components/shell/ShellTerminal'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div></div>
})
import InsightsChart from '@/components/dashboard/InsightsChart'
import RecentActivity from '@/components/dashboard/RecentActivity'
import SystemMetrics from '@/components/dashboard/SystemMetrics'

export default function DashboardPage() {
  const router = useRouter()
  const { user, loading } = useAuth()
  const [activeTab, setActiveTab] = useState<'overview' | 'shell' | 'insights'>('overview')

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {user.name}!</h1>
            <p className="text-dark-400">Here's what's happening with your shell sessions</p>
          </div>
          
          <StatsCards />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InsightsChart />
            <SystemMetrics />
          </div>
          
          <RecentActivity />
        </div>
      )}
      
      {activeTab === 'shell' && (
        <div className="h-full">
          <ShellTerminal />
        </div>
      )}
      
      {activeTab === 'insights' && (
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Analytics & Insights</h1>
            <p className="text-dark-400">Deep dive into your shell usage patterns</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InsightsChart />
            <SystemMetrics />
          </div>
          
          <RecentActivity />
        </div>
      )}
    </DashboardLayout>
  )
}

