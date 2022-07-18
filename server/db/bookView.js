const connection = require('./connection')

module.exports = { getBookDetails, updateStatus, updateBook }

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
    // Pretty sure this can be done more tersely, but I forget the syntax offhand.
    // Maybe something like?
    // select(*, 'books.publishing_details as publishingDetails', 'books.user_id as userId', 'users.name as usersName', 'users.email as usersEmail')
    .where('books.id', id)
    .first()
}

function updateStatus(id, db = connection) {
  // Is this likely to support other statuses in the future?
  return db('books').where({ id }).update({ status: 'inactive' })
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
    // This could perhaps be done a bit more succinctly as:
    // { ...book, id, publishing_details: book.publishingDetails, user_id: book.userId }
    // There will wind up with a couple garbage properties that the db won't recognise, but it should be harmless
    .where({ id })
}
