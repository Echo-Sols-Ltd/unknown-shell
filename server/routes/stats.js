const express = require('express')
const { authenticate } = require('../middleware/auth')
const Session = require('../models/Session')
const Command = require('../models/Command')

const router = express.Router()

router.get('/', authenticate, async (req, res) => {
  try {
    const userId = req.user._id

    // Get total sessions
    const totalSessions = await Session.countDocuments({ userId })

    // Get active sessions
    const activeSessions = await Session.countDocuments({
      userId,
      status: 'active',
    })

    // Get total commands executed
    const commandsExecuted = await Command.countDocuments({ userId })

    // Calculate average response time
    const commands = await Command.find({ userId })
    const avgResponseTime =
      commands.length > 0
        ? Math.round(
            commands.reduce((sum, cmd) => sum + cmd.executionTime, 0) / commands.length
          )
        : 0

    res.json({
      totalSessions,
      activeSessions,
      commandsExecuted,
      averageResponseTime: avgResponseTime,
    })
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch stats', error: error.message })
  }
})

module.exports = router

