const mongoose = require('mongoose')

const sessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  sessionId: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'terminated'],
    default: 'active',
  },
  startTime: {
    type: Date,
    default: Date.now,
  },
  endTime: {
    type: Date,
  },
  commandsExecuted: {
    type: Number,
    default: 0,
  },
  totalDuration: {
    type: Number,
    default: 0,
  },
})

module.exports = mongoose.model('Session', sessionSchema)

