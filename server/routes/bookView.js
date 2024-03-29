const express = require('express')
const router = express.Router()
// const checkJwt = require('../auth0.js')

const db = require('../db/bookView')
//PATCH api/v1/books/edit/:id
router.patch('/edit/:id', (req, res) => {
  const id = req.params.id
  const book = req.body
  db.updateBook(book, id)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      res.status(500).send(err.message)
    })
})
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
  const newOwnerId = req.body.newOwnerId
  const currentOwnerId = req.body.currentOwnerId
  db.transaction(id, newOwnerId, currentOwnerId)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
