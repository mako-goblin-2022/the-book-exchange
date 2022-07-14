import { SET_PROFILE, SET_PROFILE_BOOKS } from '../actions/profile'

const initialState = [{ profile: {}, books: {} }]

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    // case SET_PROFILE:
    //   return { profile: payload.profile }
    case SET_PROFILE_BOOKS:
      return { profile: payload.profile, books: payload.books }
    default:
      return state
  }
}

export default profileReducer
