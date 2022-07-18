const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getProfile(id, db = connection) {
  return db('users').select().where('auth0_id', id).first()
}

function getBooksByUserId(user_id, db = connection) {
  return db('books').select().where({ user_id })
}

module.exports = {
  getProfile,
  getBooksByUserId,
}
