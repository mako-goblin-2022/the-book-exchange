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
      dispatch(setBook(book))
      return null
    })
  }
}

//NEW update book status func to process full transaction
export function updateBookStatus(id, newOwnerId, currentOwnerId) {
  return (dispatch) => {
    return changeBookStatus(id, newOwnerId, currentOwnerId).then((book) => {
      dispatch(setStatus())
      return null
    })
  }
}
