const connection = require('./connection')

module.exports = { getBookDetails, updateStatus }

function getBookDetails(id, db = connection) {
  return db('books')
    .where({ id })
    .select(
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
    .first()
}

function updateStatus(id, db = connection) {
  return db('books').where({ id }).update({ status: 'inactive' })
}
