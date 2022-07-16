import request from 'superagent'
const homeApi = '/api/v1/home/'

export function getBooksData() {
  return request.get(homeApi).then((res) => {
    return res.body.books
  })
}

export function saveBook(bookBody) {
  return request
    .post(`${homeApi}/add`)
    .send(bookBody)
    .then((res) => {
      return res.body
    })
    .catch((res) => {
      res.status(500)
    })
}
