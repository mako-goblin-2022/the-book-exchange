const express = require('express')

const router = express.Router()

const db = require('../db/profile')
// GET /api/v1/profile/
// router.get('/', (req, res) => {
//   res.send('profile route hit!')
// })

// GET /api/v1/profile/:id
router.get('/:id', (req, res) => {
  const { id } = req.params
  db.getProfile(id)
    .then((data) => res.json(data))
    .catch(() => {
      // console.error(err.message)
      res.status(500).send('server error')
    })
  //res.send('profile route hit!')
})

module.exports = router
