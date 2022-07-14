export const SET_BOOKS = 'SET_BOOKS'

import { getBooks } from '../apis/bookView'

export function setBooks(books) {
  return {
    type: SET_BOOKS,
    payload: books,
  }
}

export function fetchBooks() {
  return (dispatch) => {
    return getBooks().then((books) => {
      console.log('action', books)
      dispatch(setBooks(books))
      return null
    })
  }
}
