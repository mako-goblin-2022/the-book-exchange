import { SET_PROFILE, SET_PROFILE_BOOKS } from '../actions/profile'

const initialState = [{}]

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_PROFILE:
      return { profile: payload }
    case SET_PROFILE_BOOKS:
      return { books: payload }
    default:
      return state
  }
}

export default profileReducer
