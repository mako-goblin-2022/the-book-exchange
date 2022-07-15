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
//GET /api/v1/profile/:id/books

export function getBooksbyID(id) {
  return request
    .get(url + id + '/books')
    .then((res) => {
      //  console.log('api:', res.body)
      return res.body
    })
    .catch((res) => res.status(500).send('server error'))
}
