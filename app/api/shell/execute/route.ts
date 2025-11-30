import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { command } = body

    // In production, this would execute commands on the server
    // For security, only allow safe commands
    const safeCommands = ['ls', 'pwd', 'whoami', 'date', 'echo', 'help', 'clear']
    const commandName = command.split(' ')[0].toLowerCase()

    if (!safeCommands.includes(commandName)) {
      return NextResponse.json({
        output: '',
        error: `Command '${commandName}' is not allowed for security reasons`,
      })
    }

    // Mock command execution
    let output = ''
    switch (commandName) {
      case 'ls':
        output = 'README.md  package.json  src/  public/  node_modules/'
        break
      case 'pwd':
        output = '/home/user/unknown-shell'
        break
      case 'whoami':
        output = 'user@unknown-shell'
        break
      case 'date':
        output = new Date().toString()
        break
      case 'echo':
        output = command.substring(5) || ''
        break
      case 'help':
        output = `Available commands: ls, pwd, whoami, date, echo, help, clear`
        break
      default:
        output = `Command executed: ${command}`
    }

    return NextResponse.json({
      output,
      error: null,
    })
  } catch (error) {
    return NextResponse.json(
      { output: '', error: 'Command execution failed' },
      { status: 500 }
    )
  }
}

