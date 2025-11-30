'use client'

import { useEffect, useState } from 'react'
import { Terminal, Activity, Clock, Zap } from 'lucide-react'
import axios from 'axios'

interface Stats {
  totalSessions: number
  activeSessions: number
  commandsExecuted: number
  averageResponseTime: number
}

export default function StatsCards() {
  const [stats, setStats] = useState<Stats>({
    totalSessions: 0,
    activeSessions: 0,
    commandsExecuted: 0,
    averageResponseTime: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get('/api/stats', {
          headers: { Authorization: `Bearer ${token}` },
        })
        setStats(response.data)
      } catch (error) {
        // Use mock data for development
        setStats({
          totalSessions: 1247,
          activeSessions: 8,
          commandsExecuted: 45632,
          averageResponseTime: 142,
        })
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
    const interval = setInterval(fetchStats, 30000) // Refresh every 30s
    return () => clearInterval(interval)
  }, [])

  const cards = [
    {
      title: 'Total Sessions',
      value: stats.totalSessions.toLocaleString(),
      icon: Terminal,
      color: 'primary',
      change: '+12%',
    },
    {
      title: 'Active Sessions',
      value: stats.activeSessions,
      icon: Activity,
      color: 'green',
      change: '+3',
    },
    {
      title: 'Commands Executed',
      value: stats.commandsExecuted.toLocaleString(),
      icon: Zap,
      color: 'yellow',
      change: '+8.2%',
    },
    {
      title: 'Avg Response Time',
      value: `${stats.averageResponseTime}ms`,
      icon: Clock,
      color: 'purple',
      change: '-5ms',
    },
  ]

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-dark-800 rounded-xl p-6 border border-dark-700 animate-pulse">
            <div className="h-4 w-24 bg-dark-700 rounded mb-4"></div>
            <div className="h-8 w-32 bg-dark-700 rounded"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon
        const colorClasses = {
          primary: 'bg-accent/20 text-accent border-accent/30',
          green: 'bg-green-500/20 text-green-400 border-green-500/30',
          yellow: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
          purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
        }

        return (
          <div
            key={index}
            className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-dark-600 transition-all hover:shadow-lg hover:shadow-primary-500/10"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg border ${colorClasses[card.color as keyof typeof colorClasses]}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-green-400 text-sm font-medium">{card.change}</span>
            </div>
            <h3 className="text-dark-400 text-sm font-medium mb-1">{card.title}</h3>
            <p className="text-white text-2xl font-bold">{card.value}</p>
          </div>
        )
      })}
    </div>
  )
}

