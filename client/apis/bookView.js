import request from 'superagent'

const serverUrl = '/api/v1'

export function getBooks() {
  return request
    .get(`${serverUrl}/books`)
    .then((response) => {
      const booksData = response.body
      return booksData
    })
    .catch((res) => {
      res.status(500)
    })
}
