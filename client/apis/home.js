import request from 'superagent'
const homeApi = '/api/v1/home/'

export function getBooksData() {
  return request.get(homeApi).then((res) => {
    return res.body.books
  })
}

export function saveBook(bookBody) {
  //console.log('save', bookBody)
  return request
    .post(`${homeApi}add`)
    .send(bookBody)
    .then((res) => {
      return res.body
    })
}
export function saveimageBook(bookBody) {
  //console.log('Saveimg', bookBody)
  return request
    .post(`${homeApi}add-upload`)
    .send(bookBody)
    .then((res) => {
      return res.body
    })
}
export function searchBooksData(search) {
  return request.get(`${homeApi}search?search=${search}`).then((res) => {
    return res.body.books
  })
}
