const express = require('express')
const router = express.Router()
const db = require('../db/home')

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

router.post('/add', (req, res) => {
  const book = req.body
  //const userId = req.body.user_id
  db.addBook(book)
    .then((newBook) => {
      console.log(newBook)
      res.json(newBook)
      return null
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
