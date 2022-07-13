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

module.exports = router
