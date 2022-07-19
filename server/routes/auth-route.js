const express = require('express')
const checkJwt = require('../auth0.js')
const db = require('../db/authDB')

const router = express.Router()

// GET /api/v1/auth/
router.put('/', checkJwt, async (req, res) => {
  const { userForm } = req.body
  const auth0Id = userForm.auth0Id
  const userToUpdate = {
    name: userForm.name,
    location: userForm.location,
    favouriteGenre: userForm.favouriteGenre,
    image: userForm.image,
  }
  try {
    const users = await db.updateUser(auth0Id, userToUpdate)
    res.json({ users })
  } catch (err) {
    console.error(err)
    if (err.message === 'Unauthorized') {
      return res
        .status(403)
        .send('Computer says "No": only logged in users may update their data')
    }
    res.status(500).send(err.message)
  }
})

router.post('/', async (req, res) => {
  const { auth0Id, email, name, location, favouriteGenre, image } = req.body
  const user = {
    auth0Id,
    name,
    location,
    favouriteGenre,
    tradingTokens: 1,
    email,
    image,
  }
  try {
    const existingUser = await db.userExists(auth0Id)
    if (existingUser) return res.sendStatus(200)
    await db.createUser(user)
    res.sendStatus(201)
  } catch (err) {
    console.log(err)
    res.status(500).send(err.message)
  }
})

module.exports = router
