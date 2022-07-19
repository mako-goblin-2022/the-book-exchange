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

router.post('/add', (req, res) => {
  const book = req.body
  db.addBook(book)
    .then((newBook) => {
      res.json(newBook)
      return null
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})
router.post('/add-upload', multerUpload.single('image'), (req, res) => {
  const book = req.body
  const thisBook = { ...book, image: req.file.path.substring(13) }
  db.addBook(thisBook)
    .then((newBook) => {
      res.json(newBook)
      return null
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.get('/search', (req, res) => {
  const search = req.query.search
  db.searchBooks(search)
    .then((books) => {
      res.json({ books })
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
