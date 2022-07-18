const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function searchBooks(search, db = connection) {
  return db('books')
    .whereILike('title', `%${search}%`)
    .orWhereILike('author', `%${search}%`)
    .select()
}

module.exports = {
  searchBooks,
}
