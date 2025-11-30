'use client'

import { useEffect, useState } from 'react'
import { Cpu, HardDrive, MemoryStick, Network } from 'lucide-react'

interface Metrics {
  cpu: number
  memory: number
  disk: number
  network: number
}

export default function SystemMetrics() {
  const [metrics, setMetrics] = useState<Metrics>({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
  })

  useEffect(() => {
    // Simulate real-time metrics
    const updateMetrics = () => {
      setMetrics({
        cpu: Math.random() * 100,
        memory: 30 + Math.random() * 50,
        disk: 40 + Math.random() * 30,
        network: Math.random() * 100,
      })
    }

    updateMetrics()
    const interval = setInterval(updateMetrics, 2000)
    return () => clearInterval(interval)
  }, [])

  const metricItems = [
    { label: 'CPU Usage', value: metrics.cpu, icon: Cpu, color: 'primary' },
    { label: 'Memory', value: metrics.memory, icon: MemoryStick, color: 'green' },
    { label: 'Disk Usage', value: metrics.disk, icon: HardDrive, color: 'yellow' },
    { label: 'Network', value: metrics.network, icon: Network, color: 'purple' },
  ]

  const getColorClass = (color: string) => {
    const colors = {
      primary: 'bg-primary-500',
      green: 'bg-green-500',
      yellow: 'bg-yellow-500',
      purple: 'bg-purple-500',
    }
    return colors[color as keyof typeof colors] || 'bg-primary-500'
  }

  return (
    <div className="bg-dark-800 rounded-xl p-6 border border-dark-700">
      <div className="mb-6">
        <h2 className="text-white text-xl font-bold mb-2">System Metrics</h2>
        <p className="text-dark-400 text-sm">Real-time system performance</p>
      </div>
      <div className="space-y-6">
        {metricItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Icon className="w-4 h-4 text-dark-400" />
                  <span className="text-dark-300 text-sm font-medium">{item.label}</span>
                </div>
                <span className="text-white text-sm font-bold">{item.value.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-dark-700 rounded-full h-2">
                <div
                  className={`${getColorClass(item.color)} h-2 rounded-full transition-all duration-300`}
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

