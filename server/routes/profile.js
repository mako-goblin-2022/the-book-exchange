const express = require('express')

const router = express.Router()

const db = require('../db/profile')

// GET /api/v1/profile/:id
router.get('/:id', (req, res) => {
  const { id } = req.params
  db.getProfile(id)
    .then((data) => res.json(data))
    .catch(() => {
      res.status(500).send('server error')
    })
})

//GET /api/v1/profile/:id/books
router.get('/:id/books', (req, res) => {
  const user_id = req.params.id
  db.getBooksByUserId(user_id)
    .then((data) => res.json(data))
    .catch(() => {
      res.status(500).send('server error')
    })
})

router.post('/:id/add', (req, res) => {
  const book = req.body
  //const userId = req.body.user_id
  db.addBook(book)
    .then((newBook) => {
      res.json(newBook)
      return null
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
