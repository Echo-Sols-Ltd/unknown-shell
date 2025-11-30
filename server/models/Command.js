const mongoose = require('mongoose')

const commandSchema = new mongoose.Schema({
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Session',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  command: {
    type: String,
    required: true,
  },
  output: {
    type: String,
  },
  error: {
    type: String,
  },
  status: {
    type: String,
    enum: ['success', 'error'],
    default: 'success',
  },
  executionTime: {
    type: Number,
    default: 0,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Command', commandSchema)

