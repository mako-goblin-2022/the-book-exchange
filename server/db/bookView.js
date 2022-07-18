const connection = require('./connection')

module.exports = { getBookDetails, transaction }

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

// this function updates status from active to inactive, updates user_id and increments/decrements the user's book tokens
function transaction(id, newOwnerId, currentOwnerId, db = connection) {
  return db('books')
    .where({ id })
    .update({ status: 'inactive', user_id: newOwnerId })
    .then(() => {
      return db('users')
        .where('users.id', currentOwnerId)
        .increment('trading_tokens', 1)
    })
    .then(() => {
      return db('users')
        .where('users.id', newOwnerId)
        .decrement('trading_tokens', 1)
    })
}
