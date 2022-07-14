import { SET_BOOKS, SET_BOOKS_ERROR } from '../actions/home'

const initialState = {
  content: null,
  error: null,
}

const home = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_BOOKS:
      return {
        content: payload,
        error: null,
      }
    case SET_BOOKS_ERROR:
      return {
        content: null,
        error: payload,
      }

    default:
      return state
  }
}
export default home
