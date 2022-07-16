const connection = require('./connection')

module.exports = { getBookDetails, updateStatus }

function getBookDetails(id, db = connection) {
  return db('books')
    .join('users', 'books.user_id', 'users.id')
    .select(
      'books.id',
      'books.title',
      'books.author',
      'books.genre',
      'books.publishing_details as publishingDetails',
      'books.edition',
      'books.isbn',
      'books.summary',
      'books.condition',
      'books.image',
      'books.user_id as userId',
      'books.status',
      'books.rating',
      'users.name as usersName',
      'users.email as usersEmail'
    )
    .where('books.id', id)
    .first()
}

function updateStatus(id, db = connection) {
  return db('books').where({ id }).update({ status: 'inactive' })
}
