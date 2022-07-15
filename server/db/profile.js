const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getProfile(id, db = connection) {
  return db('users').select().where('id', id).first()
}

function getBooksByUserId(user_id, db = connection) {
  return db('books').select().where({ user_id })
}

function addBook(book, db = connection) {
  return db('books')
    .insert(book)
    .then(([id]) => {
      return { ...book, id }
    })
}

module.exports = {
  getProfile,
  getBooksByUserId,
  addBook,
}
