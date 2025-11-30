import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // In production, this would call the backend API
    // For now, we'll use mock authentication
    if (email && password) {
      const token = 'mock-jwt-token-' + Date.now()
      const user = {
        id: '1',
        name: email.split('@')[0],
        email: email,
      }

      return NextResponse.json({
        token,
        user,
      })
    }

    return NextResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Login failed' },
      { status: 500 }
    )
  }
}

