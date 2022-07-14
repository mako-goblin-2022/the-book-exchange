import { getBooksData } from '../apis/home'

export const SET_BOOKS = 'SET_BOOKS'
export const SET_BOOKS_ERROR = 'SET_BOOKS_ERROR'

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
