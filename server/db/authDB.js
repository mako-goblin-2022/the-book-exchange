const connection = require('./connection')

function getUsers(db = connection) {
  return db('users').select()
}

function updateUser(auth0Id, formUserData, db = connection) {
  return db('users').where('id', auth0Id).insert(formUserData)
}

function createUser(user, db = connection) {
  console.log('db', user)
  return db('users').insert({
    id: user.auth0Id,
    name: user.name,
    location: user.location,
    favourite_genre: user.favouriteGenre,
    trading_tokens: user.tradingTokens,
    email: user.email,
    image: user.image,
  })
}

function userExists(auth0Id, db = connection) {
  return db('users').where('id', auth0Id).select().first()
}

module.exports = {
  getUsers,
  updateUser,
  createUser,
  userExists,
}
