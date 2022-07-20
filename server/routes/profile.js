const express = require('express')

const router = express.Router()

const db = require('../db/profile')

// POST /api/v1/profile/
router.post('/', (req, res) => {
  const id = req.body.id
  db.getProfile(id)
    .then((data) => res.json(data))
    .catch(() => {
      res.status(500).send('server error')
    })
})

//GET /api/v1/profile/:id/books
router.post('/books', (req, res) => {
  const user_id = req.body.id
  db.getBooksByUserId(user_id)
    .then((data) => res.json(data))
    .catch(() => {
      res.status(500).send('server error')
    })
})

module.exports = router
