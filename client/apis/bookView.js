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

//the OG function to update book status
// export function changeBookStatus(id) {
//   return request.patch(`${serverUrl}/books/status/${id}`)
// }

//Updating book status function to include newOwnerId and Current OwnerId to process a full transaction

export function changeBookStatus(id, newOwnerId, currentOwnerId) {
  return request
    .patch(`${serverUrl}/books/status/${id}`)
    .send(newOwnerId, currentOwnerId)
    .catch((res) => {
      res.status(500)
    })
}
