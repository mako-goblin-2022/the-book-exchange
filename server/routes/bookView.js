const express = require('express')
const router = express.Router()

const db = require('../db/bookView')

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getBookDetails(id)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.patch('/status/:id', (req, res) => {
  const id = req.params.id
  db.updateStatus(id)
    .then((data) => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/add', (req, res) => {
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
