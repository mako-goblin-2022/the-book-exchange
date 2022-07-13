const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getProfile(id, db = connection) {
  return db('users').select().where('id', id).first()
}

module.exports = {
  getProfile,
}
