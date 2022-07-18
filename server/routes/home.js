const express = require('express')
const router = express.Router()
const db = require('../db/home')
const { multerUpload } = require('../middleware/multer')

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

router.post('/add', multerUpload.single('image'), (req, res) => {
  const book = req.body
  const thisBook = { ...book, image: req.file.path.substring(13) }
  //GET the image file from multer
  //then readd to the book before the database gets it

  db.addBook(thisBook)
    .then((newBook) => {
      res.json(newBook)
      return null
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
