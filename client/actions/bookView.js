export const SET_BOOK = 'SET_BOOK'
export const SET_STATUS = 'SET_STATUS'
export const UPDATE_BOOK = 'UPDATE_BOOK'

import { getBook, changeBookStatus, editBookListing } from '../apis/bookView'

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

// UPDATE BOOK
export function updatebook(book) {
  return {
    type: UPDATE_BOOK,
    payload: book,
  }
}
export function saveBook(book, id) {
  return (dispatch) => {
    return editBookListing(book, id).then(() => {
      dispatch(updatebook(book, id))
    })
  }
}
