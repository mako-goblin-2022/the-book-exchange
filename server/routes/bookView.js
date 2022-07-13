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
