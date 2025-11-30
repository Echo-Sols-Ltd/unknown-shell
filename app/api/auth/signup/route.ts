import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, password } = body

    // In production, this would call the backend API
    // For now, we'll use mock authentication
    if (name && email && password) {
      const token = 'mock-jwt-token-' + Date.now()
      const user = {
        id: Date.now().toString(),
        name,
        email,
      }

      return NextResponse.json({
        token,
        user,
      })
    }

    return NextResponse.json(
      { message: 'Invalid data' },
      { status: 400 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Signup failed' },
      { status: 500 }
    )
  }
}

