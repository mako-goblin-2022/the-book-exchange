const connection = require('./connection')

function getBookDetails(id, db = connection) {
  return db('books').where({ id }).select().first()
}

module.exports = { getBookDetails }
