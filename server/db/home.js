const connection = require('./connection')

function getBooks(db = connection) {
  return db('books')
    .where('status', 'active')
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
}

function addBook(book, db = connection) {
  return db('books')
    .insert(book, ['id'])
    .then(([id]) => {
      return { ...book, id }
    })
}

function searchBooks(search, db = connection) {
  return db('books')
    .whereLike('title', `%${search}%`)
    .orWhereLike('author', `%${search}%`)
    .orWhereLike('genre', `%${search}%`)
}

module.exports = {
  getBooks,
  addBook,
  searchBooks,
}
