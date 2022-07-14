const express = require('express')
const router = express.Router()
const db = require('../db/home')

//get all the bookData

router.get('/', (req, res) => {
  db.getBooks()
    .then((results) => {
      res.json({ books: results.map((book) => book) })
      return null
    })
    .catch(() => {
      res.status(500).json({ message: 'Server error' })
    })
})

module.exports = router
