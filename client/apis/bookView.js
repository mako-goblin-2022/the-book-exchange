import request from 'superagent'

const serverUrl = '/api/v1'

// export function getBooks() {
//   return request
//     .get(`${serverUrl}/books`)
//     .then((response) => {
//       const booksData = response.body
//       //console.log('api', booksData)
//       return booksData
//     })
//     .catch((res) => {
//       res.status(500)
//     })
// }

export function getBook(id) {
  return request
    .get(`${serverUrl}/books/${id}`)
    .then((response) => {
      const booksData = response.body
      //console.log('api', booksData)
      return booksData
    })
    .catch((res) => {
      res.status(500)
    })
}
