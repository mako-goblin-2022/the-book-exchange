const express = require('express')
const path = require('path')

const server = express()

const bookRoutes = require('./routes/bookView')
const profileRoutes = require('./routes/profile')
const authRoutes = require('./routes/auth-routes')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/profile', profileRoutes) //profile
server.use('/api/v1/auth', authRoutes)
server.use('/api/v1/books', bookRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
