'use client'

import { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface ChartData {
  name: string
  commands: number
  sessions: number
}

export default function InsightsChart() {
  const [data, setData] = useState<ChartData[]>([])

  useEffect(() => {
    // Mock data - in production, fetch from API
    const mockData: ChartData[] = [
      { name: 'Mon', commands: 1200, sessions: 45 },
      { name: 'Tue', commands: 1900, sessions: 52 },
      { name: 'Wed', commands: 3000, sessions: 68 },
      { name: 'Thu', commands: 2780, sessions: 61 },
      { name: 'Fri', commands: 1890, sessions: 55 },
      { name: 'Sat', commands: 2390, sessions: 48 },
      { name: 'Sun', commands: 3490, sessions: 72 },
    ]
    setData(mockData)
  }, [])

  return (
    <div className="bg-dark-800 rounded-xl p-6 border border-dark-700">
      <div className="mb-6">
        <h2 className="text-white text-xl font-bold mb-2">Usage Trends</h2>
        <p className="text-dark-400 text-sm">Commands and sessions over the past week</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '8px',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="commands"
            stroke="#0ea5e9"
            strokeWidth={2}
            name="Commands"
            dot={{ fill: '#0ea5e9', r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="sessions"
            stroke="#10b981"
            strokeWidth={2}
            name="Sessions"
            dot={{ fill: '#10b981', r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

