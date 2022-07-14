const connection = require('./connection')

function getBooks(db = connection) {
  return db('books').select(
    'id',
    'title',
    'author',
    'genre',
    'publishing_details as publishingDetails',
    'edition',
    'isbn',
    'summary',
    'condition',
    'image',
    'user_id as userId',
    'status',
    'rating'
  )
}

module.exports = {
  getBooks,
}
