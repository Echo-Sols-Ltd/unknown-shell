const express = require('express')
const { exec } = require('child_process')
const { promisify } = require('util')
const { authenticate } = require('../middleware/auth')
const Session = require('../models/Session')
const Command = require('../models/Command')
const { v4: uuidv4 } = require('uuid')

const execAsync = promisify(exec)
const router = express.Router()

// Safe commands whitelist
const SAFE_COMMANDS = ['ls', 'pwd', 'whoami', 'date', 'echo', 'help', 'clear', 'cat', 'head', 'tail', 'grep']

// Execute command
router.post('/execute', authenticate, async (req, res) => {
  try {
    const { command } = req.body

    if (!command) {
      return res.status(400).json({ message: 'Command is required' })
    }

    const commandName = command.split(' ')[0].toLowerCase()

    // Security: Only allow safe commands
    if (!SAFE_COMMANDS.includes(commandName)) {
      return res.json({
        output: '',
        error: `Command '${commandName}' is not allowed for security reasons`,
      })
    }

    // Get or create session
    let session = await Session.findOne({
      userId: req.user._id,
      status: 'active',
    })

    if (!session) {
      session = new Session({
        userId: req.user._id,
        sessionId: uuidv4(),
        status: 'active',
      })
      await session.save()
    }

    // Execute command
    const startTime = Date.now()
    let output = ''
    let error = null
    let status = 'success'

    try {
      // In production, use a sandboxed environment
      const { stdout, stderr } = await execAsync(command, {
        timeout: 5000,
        maxBuffer: 1024 * 1024,
      })
      output = stdout
      if (stderr) {
        error = stderr
      }
    } catch (err) {
      error = err.message
      status = 'error'
    }

    const executionTime = Date.now() - startTime

    // Save command to database
    const commandRecord = new Command({
      sessionId: session._id,
      userId: req.user._id,
      command,
      output,
      error,
      status,
      executionTime,
    })
    await commandRecord.save()

    // Update session stats
    session.commandsExecuted += 1
    session.totalDuration += executionTime
    await session.save()

    res.json({
      output,
      error,
      executionTime,
    })
  } catch (error) {
    res.status(500).json({ message: 'Command execution failed', error: error.message })
  }
})

// Get session history
router.get('/sessions', authenticate, async (req, res) => {
  try {
    const sessions = await Session.find({ userId: req.user._id })
      .sort({ startTime: -1 })
      .limit(50)

    res.json({ sessions })
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch sessions', error: error.message })
  }
})

// Get command history
router.get('/history', authenticate, async (req, res) => {
  try {
    const commands = await Command.find({ userId: req.user._id })
      .sort({ timestamp: -1 })
      .limit(100)
      .populate('sessionId', 'sessionId')

    res.json({ commands })
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch history', error: error.message })
  }
})

module.exports = router

