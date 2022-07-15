import request from 'superagent'

const serverUrl = '/api/v1'

export function getBook(id) {
  return request
    .get(`${serverUrl}/books/${id}`)
    .then((response) => {
      const booksData = response.body
      return booksData
    })
    .catch((res) => {
      res.status(500)
    })
}

export function changeBookStatus(id) {
  return request.patch(`${serverUrl}/books/status/${id}`)
}
