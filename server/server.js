const express = require('express')
const path = require('path')
const server = express()
const homeRoutes = require('./routes/home')
const bookRoutes = require('./routes/book')

const bookRoutes = require('./routes/bookView')
const profileRoutes = require('./routes/profile')
const authRoutes = require('./routes/auth-route')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/home', homeRoutes)
server.use('/api/v1/profile', profileRoutes)
server.use('/api/v1/auth', authRoutes)
server.use('/api/v1/books', bookRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
