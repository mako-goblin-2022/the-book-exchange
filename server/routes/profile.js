const express = require('express')
const checkJwt = require('../auth0.js')

const router = express.Router()

const db = require('../db/profile')

// GET /api/v1/profile/:id
router.get('/:id', checkJwt, (req, res) => {
  const { id } = req.params
  db.getProfile(id)
    .then((data) => res.json(data))
    .catch(() => {
      res.status(500).send('server error')
    })
})

//GET /api/v1/profile/:id/books
router.get('/:id/books', checkJwt, (req, res) => {
  const user_id = req.params.id
  db.getBooksByUserId(user_id)
    .then((data) => res.json(data))
    .catch(() => {
      res.status(500).send('server error')
    })
})

module.exports = router
