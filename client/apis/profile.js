import request from 'superagent'
///api/v1/profile/:id
const url = '/api/v1/profile/'

export function getProfile(id) {
  return request
    .post(url)
    .send({ id })
    .then((res) => {
      return res.body
    })
    .catch((res) => res.status(500).send('server error'))
}
//GET /api/v1/profile/:id/books

export function getBooksbyID(id) {
  return request
    .post(url + 'books')
    .send({ id })
    .then((res) => {
      return res.body
    })
    .catch((res) => res.status(500).send('server error'))
}
