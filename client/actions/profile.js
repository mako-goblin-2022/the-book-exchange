import { getProfile, getBooksbyID } from '../apis/profile'

export const SET_PROFILE = 'SET_PROFILE'
export const SET_PROFILE_BOOKS = 'SET_PROFILE_BOOKS'

export function setprofile(profile) {
  return {
    type: SET_PROFILE,
    payload: profile,
  }
}
export function setprofilebooks(book) {
  return {
    type: SET_PROFILE_BOOKS,
    payload: book,
  }
}

export function fetchProfile(id) {
  return (dispatch) => {
    return getProfile(id).then((pro) => {
      dispatch(setprofile(pro))
    })
  }
}
export function fetchBooks(id) {
  return (dispatch) => {
    return getBooksbyID(id).then((b) => {
      dispatch(setprofilebooks(b))
    })
  }
}
