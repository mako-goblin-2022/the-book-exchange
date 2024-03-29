const connection = require('./connection')

module.exports = { getBookDetails, transaction, updateBook }

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
      'users.email as usersEmail',
      'users.location as usersLocation',
      'users.id as traderId'
    )
    .where('books.id', id)
    .first()
}

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
function updateBook(book, id, db = connection) {
  return db('books')
    .update({
      id: id,
      title: book.title,
      author: book.author,
      genre: book.genre,
      publishing_details: book.publishingDetails,
      edition: book.edition,
      isbn: book.isbn,
      summary: book.summary,
      condition: book.condition,
      image: book.image,
      user_id: book.userId,
      status: book.status,
      rating: book.rating,
    })
    .where({ id })
}
