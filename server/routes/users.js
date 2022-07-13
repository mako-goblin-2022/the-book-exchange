const express = require('express')

const router = express.Router()

// GET /api/v1/users/
router.get('/', (req, res) => {
  res.send('users route hit!')
})

module.exports = router
