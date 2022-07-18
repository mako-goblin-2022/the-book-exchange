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

function updateStatus(id, newOwnerId, currentOwnerId, db = connection) {
  //include user id
  return db('books')
    .where({ id })
    .update({ status: 'inactive' }, { user_id: newOwnerId }) //update book.user_id, newOwnerId
    .then(() => {
      return db('users')
        .where('users.id', currentOwnerId)
        .increment('trading_tokens', 1)
    })
    .then(() => {
      db('users').where('users.id', newOwnerId).decrement('trading_tokens', 1)
    })
}

//return users table
//join books, users.id, book.userid
//select user id, trading token
//where user id, id
