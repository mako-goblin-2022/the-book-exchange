const connection = require('./connection')

function getUsers(db = connection) {
  return db('users').select()
}

function updateUser(auth0Id, formUserData, db = connection) {
  return db('users').where('auth0_id', auth0Id).insert(formUserData)
}

function createUser(user, db = connection) {
  return db('users').insert(user)
}

function userExists(auth0Id, db = connection) {
  return db('users')
    .count('auth0_id as n')
    .where('auth0_id', auth0Id)
    .then((count) => count[0].n > 0)
}

module.exports = {
  getUsers,
  updateUser,
  createUser,
  userExists,
}
