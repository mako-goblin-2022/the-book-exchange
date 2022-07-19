import { SET_BOOKS, SET_BOOKS_ERROR, POST_BOOK } from '../actions/home'

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
    case POST_BOOK:
      return {
        content: [...(state.content || []), payload],
        error: null,
      }

    default:
      return state
  }
}
export default home
