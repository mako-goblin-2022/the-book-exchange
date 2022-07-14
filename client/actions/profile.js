import { getProfile, getBooksbyID } from '../apis/profile'

export const SET_PROFILE = 'SET_PROFILE'
export const SET_PROFILE_BOOKS = 'SET_PROFILE_BOOKS'

// export function setprofile(profile) {
//   return {
//     type: SET_PROFILE,
//     payload: { profile: profile },
//   }
// }
export function setprofilebooks(profile, book) {
  return {
    type: SET_PROFILE_BOOKS,
    payload: { profile: profile, book: book },
  }
}

// export function fetchProfile(id) {
//   return (dispatch) => {
//     return getProfile(id).then((pro) => {
//       dispatch(setprofile(pro))
//     })
//   }
// }
export async function fetchBooks(id) {
  const profile = await getProfile(id)
  return (dispatch) => {
    return getBooksbyID(id).then((b) => {
      dispatch(setprofilebooks(profile, b))
    })
  }
}
