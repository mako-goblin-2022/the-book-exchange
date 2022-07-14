import request from 'superagent'
///api/v1/profile/:id
const url = '/api/v1/profile/'

export function getProfile(id) {
  return request
    .get(url + id)
    .then((res) => {
      return res.body
    })
    .catch((res) => res.status(500).send('server error'))
}
