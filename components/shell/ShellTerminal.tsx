'use client'

import { useEffect, useRef, useState } from 'react'
import { Terminal as XTerm } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import { WebLinksAddon } from 'xterm-addon-web-links'
import 'xterm/css/xterm.css'
import axios from 'axios'
import { Play, Square, Trash2 } from 'lucide-react'

export default function ShellTerminal() {
  const terminalRef = useRef<HTMLDivElement>(null)
  const xtermRef = useRef<XTerm | null>(null)
  const fitAddonRef = useRef<FitAddon | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [currentCommand, setCurrentCommand] = useState('')

  useEffect(() => {
    if (!terminalRef.current) return

    const term = new XTerm({
      theme: {
        background: '#0f172a',
        foreground: '#e2e8f0',
        cursor: '#0ea5e9',
        black: '#0f172a',
        red: '#ef4444',
        green: '#10b981',
        yellow: '#f59e0b',
        blue: '#0ea5e9',
        magenta: '#8b5cf6',
        cyan: '#06b6d4',
        white: '#e2e8f0',
        brightBlack: '#475569',
        brightRed: '#f87171',
        brightGreen: '#34d399',
        brightYellow: '#fbbf24',
        brightBlue: '#60a5fa',
        brightMagenta: '#a78bfa',
        brightCyan: '#22d3ee',
        brightWhite: '#f1f5f9',
      },
      fontSize: 14,
      fontFamily: 'Courier New, monospace',
      cursorBlink: true,
      cursorStyle: 'block',
    })

    const fitAddon = new FitAddon()
    const webLinksAddon = new WebLinksAddon()

    term.loadAddon(fitAddon)
    term.loadAddon(webLinksAddon)

    term.open(terminalRef.current)
    fitAddon.fit()

    xtermRef.current = term
    fitAddonRef.current = fitAddon

    // Welcome message
    term.writeln('\x1b[1;36mWelcome to Unknown Shell\x1b[0m')
    term.writeln('\x1b[33mProfessional Shell SaaS Platform\x1b[0m')
    term.writeln('')
    term.writeln('Type commands and press Enter to execute.')
    term.writeln('')

    // Handle input
    let currentLine = ''
    const executeCommand = async (command: string) => {
      const term = xtermRef.current
      if (!term) return

      try {
        const token = localStorage.getItem('token')
        const response = await axios.post(
          '/api/shell/execute',
          { command },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )

        if (response.data.output) {
          term.writeln(response.data.output)
        }
        if (response.data.error) {
          term.writeln(`\x1b[31mError: ${response.data.error}\x1b[0m`)
        }
      } catch (error: any) {
        // Mock command execution for development
        const mockOutput = getMockCommandOutput(command)
        term.writeln(mockOutput)
      } finally {
        term.write('\x1b[32m$ \x1b[0m')
      }
    }

    term.onData((data) => {
      if (data === '\r') {
        // Enter pressed
        term.writeln('')
        if (currentLine.trim()) {
          executeCommand(currentLine.trim())
        }
        currentLine = ''
        term.write('\x1b[32m$ \x1b[0m')
      } else if (data === '\x7f' || data === '\b') {
        // Backspace
        if (currentLine.length > 0) {
          currentLine = currentLine.slice(0, -1)
          term.write('\b \b')
        }
      } else if (data === '\x03') {
        // Ctrl+C
        term.writeln('^C')
        currentLine = ''
        term.write('\x1b[32m$ \x1b[0m')
      } else {
        currentLine += data
        term.write(data)
      }
    })

    // Initial prompt
    term.write('\x1b[32m$ \x1b[0m')

    // Handle resize
    const handleResize = () => {
      fitAddon.fit()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      term.dispose()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps


  const getMockCommandOutput = (command: string): string => {
    const cmd = command.toLowerCase().trim()
    
    if (cmd === 'help') {
      return `Available commands:
  ls          - List directory contents
  pwd         - Print working directory
  whoami      - Display current user
  date        - Show current date and time
  echo <text> - Echo text
  clear       - Clear terminal
  help        - Show this help message`
    }
    
    if (cmd.startsWith('ls')) {
      return `README.md  package.json  src/  public/  node_modules/`
    }
    
    if (cmd === 'pwd') {
      return '/home/user/unknown-shell'
    }
    
    if (cmd === 'whoami') {
      return 'user@unknown-shell'
    }
    
    if (cmd === 'date') {
      return new Date().toString()
    }
    
    if (cmd.startsWith('echo ')) {
      return cmd.substring(5)
    }
    
    if (cmd === 'clear') {
      xtermRef.current?.clear()
      return ''
    }
    
    return `\x1b[33mCommand not found: ${command}\x1b[0m\nType 'help' for available commands.`
  }

  const clearTerminal = () => {
    xtermRef.current?.clear()
    xtermRef.current?.write('\x1b[32m$ \x1b[0m')
  }

  return (
    <div className="h-full flex flex-col bg-dark-900">
      <div className="bg-dark-800 border-b border-dark-700 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-white font-bold">Terminal</h2>
          <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400' : 'bg-dark-500'}`} />
          <span className="text-dark-400 text-sm">
            {isConnected ? 'Connected' : 'Ready'}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={clearTerminal}
            className="p-2 text-dark-400 hover:text-white hover:bg-dark-700 rounded-lg transition-colors"
            title="Clear terminal"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex-1 p-4">
        <div ref={terminalRef} className="h-full w-full" />
      </div>
    </div>
  )
}

