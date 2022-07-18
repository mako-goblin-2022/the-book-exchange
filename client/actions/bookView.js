export const SET_BOOK = 'SET_BOOK'
export const SET_STATUS = 'SET_STATUS'
export const UPDATE_BOOK = 'UPDATE_BOOK'

import {
  getBook,
  processBookTransaction,
  editBookListing,
} from '../apis/bookView'

export function setBook(book) {
  return {
    type: SET_BOOK,
    payload: book,
  }
}

export function setStatus() {
  return {
    type: SET_STATUS,
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

export function sendTransactionData(id, newOwnerId, currentOwnerId) {
  return (dispatch) => {
    return processBookTransaction(id, newOwnerId, currentOwnerId).then(() => {
      dispatch(setStatus())
      return null
    })
  }
}

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
