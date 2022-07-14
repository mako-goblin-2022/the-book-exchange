import { getProfile } from '../apis/profile'

export const SET_PROFILE = 'SET_PROFILE'

export function setprofile(profile) {
  return {
    type: SET_PROFILE,
    payload: profile,
  }
}

export function fetchProfile(id) {
  return (dispatch) => {
    return getProfile(id).then((pro) => {
      dispatch(setprofile(pro))
    })
  }
}
