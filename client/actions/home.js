import { getBooksData, saveBook, searchBooksData } from '../apis/home'

export const SET_BOOKS = 'SET_BOOKS'
export const SET_BOOKS_ERROR = 'SET_BOOKS_ERROR'
export const POST_BOOK = 'POST_BOOK'

export function setBooks(books) {
  return {
    type: SET_BOOKS,
    payload: books,
  }
}

export function setBooksError(errorMessage) {
  return {
    type: SET_BOOKS_ERROR,
    payload: errorMessage,
  }
}

export function fetchBooks() {
  return (dispatch) => {
    return getBooksData()
      .then((books) => {
        dispatch(setBooks(books))
        return null
      })
      .catch((err) => {
        dispatch(setBooksError(err.message))
      })
  }
}

export function postBook(book) {
  return {
    type: POST_BOOK,
    payload: book,
  }
}

export function addBook(newBook) {
  return (dispatch) => {
    return saveBook(newBook)
      .then((book) => {
        dispatch(postBook(book))
        return null
      })
      .catch((err) => {
        dispatch(setBooksError(err.message))
      })
  }
}

export function searchBooks(search) {
  return (dispatch) => {
    return searchBooksData(search)
      .then((books) => {
        dispatch(setBooks(books))
        return null
      })
      .catch((err) => {
        dispatch(setBooksError(err.message))
      })
  }
}
