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

export function processBookTransaction(id, newOwnerId, currentOwnerId) {
  return request
    .patch(`${serverUrl}/books/status/${id}`)
    .send({ newOwnerId: newOwnerId, currentOwnerId: currentOwnerId })
    .catch((res) => {
      res.status(500)
    })
}
//api/v1/books/edit/:id
export function editBookListing(book, id) {
  return request
    .patch(`${serverUrl}/books/edit/${id}`)
    .send(book)
    .then((res) => {
      return res.body
    })
    .catch((res) => {
      res.status(500)
    })
}
