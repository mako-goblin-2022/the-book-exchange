export const SET_BOOK = 'SET_BOOK'
export const SET_STATUS = 'SET_STATUS'

import { getBook, changeBookStatus } from '../apis/bookView'

export function setBook(book) {
  return {
    type: SET_BOOK,
    payload: book,
  }
}

export function setStatus() {
  return {
    type: SET_STATUS, //SET_STATUS_INACTIVE
  }
}

export function fetchBook(id) {
  return (dispatch) => {
    return getBook(id).then((book) => {
      console.log('action', book)
      dispatch(setBook(book))
      return null
    })
  }
}

export function updateBookStatus(id) {
  return (dispatch) => {
    return changeBookStatus(id).then((book) => {
      dispatch(setStatus())
      return null
    })
  }
}
