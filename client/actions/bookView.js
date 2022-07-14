export const SET_BOOK = 'SET_BOOK'

import { getBook } from '../apis/bookView'

// export function setBooks(books) {
//   return {
//     type: SET_BOOKS,
//     payload: books,
//   }
// }

export function setBook(book) {
  return {
    type: SET_BOOK,
    payload: book,
  }
}
// export function fetchBooks() {
//   return (dispatch) => {
//     return getBooks().then((books) => {
//       console.log('action', books)
//       dispatch(setBooks(books))
//       return null
//     })
//   }
// }

export function fetchBook(id) {
  return (dispatch) => {
    return getBook(id).then((book) => {
      console.log('action', book)
      dispatch(setBook(book))
      return null
    })
  }
}
