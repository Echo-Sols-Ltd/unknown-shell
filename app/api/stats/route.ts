import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Mock stats data - in production, fetch from database
    const stats = {
      totalSessions: 1247,
      activeSessions: 8,
      commandsExecuted: 45632,
      averageResponseTime: 142,
    }

    return NextResponse.json(stats)
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
}

