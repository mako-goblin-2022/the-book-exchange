const connection = require('./connection')

module.exports = { getBookDetails, updateStatus, updateBook }

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
