const express = require('express')

const router = express.Router()

// GET /api/v1/auth/
router.get('/', (req, res) => {
  res.send('auth route hit!')
})

module.exports = router
