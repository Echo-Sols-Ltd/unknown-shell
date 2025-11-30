const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/shell', require('./routes/shell'))
app.use('/api/stats', require('./routes/stats'))
app.use('/api/insights', require('./routes/insights'))

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Unknown Shell API is running' })
})

// Database connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/unknown-shell'

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB')
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err)
  })

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`)
})

module.exports = app

