export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER'
export const CLEAR_LOGGED_IN_USER = 'CLEAR_LOGGED_IN_USER'

import { addUser } from '../apis/api.js'

export function setLoggedInUser(userToSave) {
  return {
    type: SET_LOGGED_IN_USER,
    payload: userToSave,
  }
}

export function clearLoggedInUser() {
  return {
    type: CLEAR_LOGGED_IN_USER,
  }
}

export function sendUser(user) {
  return (dispatch) => {
    return addUser(user).then(() => {
      dispatch(setLoggedInUser(user))
    })
  }
}
