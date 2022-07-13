const express = require('express')

const router = express.Router()

// GET /api/v1/books/
router.get('/', (req, res) => {
  res.send('books route hit!')
})

module.exports = router
