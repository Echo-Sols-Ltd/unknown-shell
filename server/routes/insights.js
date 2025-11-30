const express = require('express')
const { authenticate } = require('../middleware/auth')
const Command = require('../models/Command')
const Session = require('../models/Session')

const router = express.Router()

// Get usage trends
router.get('/trends', authenticate, async (req, res) => {
  try {
    const userId = req.user._id
    const days = parseInt(req.query.days) || 7

    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

    // Get commands grouped by day
    const commands = await Command.aggregate([
      {
        $match: {
          userId: userId,
          timestamp: { $gte: startDate },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$timestamp' },
          },
          commands: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ])

    // Get sessions grouped by day
    const sessions = await Session.aggregate([
      {
        $match: {
          userId: userId,
          startTime: { $gte: startDate },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$startTime' },
          },
          sessions: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ])

    res.json({ commands, sessions })
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch trends', error: error.message })
  }
})

// Get top commands
router.get('/top-commands', authenticate, async (req, res) => {
  try {
    const userId = req.user._id
    const limit = parseInt(req.query.limit) || 10

    const topCommands = await Command.aggregate([
      {
        $match: { userId: userId },
      },
      {
        $group: {
          _id: {
            $arrayElemAt: [{ $split: ['$command', ' '] }, 0],
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { count: -1 },
      },
      {
        $limit: limit,
      },
    ])

    res.json({ topCommands })
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch top commands', error: error.message })
  }
})

module.exports = router

