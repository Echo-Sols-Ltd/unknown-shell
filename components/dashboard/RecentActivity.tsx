'use client'

import { useEffect, useState } from 'react'
import { Terminal, Clock, CheckCircle2, XCircle } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

interface Activity {
  id: string
  command: string
  status: 'success' | 'error'
  timestamp: Date
  duration: number
}

export default function RecentActivity() {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    // Mock data - in production, fetch from API
    const mockActivities: Activity[] = [
      {
        id: '1',
        command: 'ls -la',
        status: 'success',
        timestamp: new Date(Date.now() - 1000 * 60 * 5),
        duration: 45,
      },
      {
        id: '2',
        command: 'npm install',
        status: 'success',
        timestamp: new Date(Date.now() - 1000 * 60 * 15),
        duration: 3200,
      },
      {
        id: '3',
        command: 'git push origin main',
        status: 'error',
        timestamp: new Date(Date.now() - 1000 * 60 * 30),
        duration: 120,
      },
      {
        id: '4',
        command: 'docker build -t app .',
        status: 'success',
        timestamp: new Date(Date.now() - 1000 * 60 * 60),
        duration: 4500,
      },
      {
        id: '5',
        command: 'kubectl get pods',
        status: 'success',
        timestamp: new Date(Date.now() - 1000 * 60 * 90),
        duration: 230,
      },
    ]
    setActivities(mockActivities)
  }, [])

  return (
    <div className="bg-dark-800 rounded-xl p-6 border border-dark-700">
      <div className="mb-6">
        <h2 className="text-white text-xl font-bold mb-2">Recent Activity</h2>
        <p className="text-dark-400 text-sm">Latest shell commands and executions</p>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between p-4 bg-dark-700/50 rounded-lg border border-dark-600 hover:border-dark-500 transition-colors"
          >
            <div className="flex items-center space-x-4 flex-1">
              <div className={`p-2 rounded-lg ${
                activity.status === 'success'
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-red-500/20 text-red-400'
              }`}>
                {activity.status === 'success' ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <XCircle className="w-5 h-5" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <Terminal className="w-4 h-4 text-dark-400" />
                  <code className="text-white font-mono text-sm">{activity.command}</code>
                </div>
                <div className="flex items-center space-x-4 text-xs text-dark-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{formatDistanceToNow(activity.timestamp, { addSuffix: true })}</span>
                  </div>
                  <span>Duration: {activity.duration}ms</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

