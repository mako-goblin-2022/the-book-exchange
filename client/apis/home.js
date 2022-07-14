import request from 'superagent'
const homeApi = '/api/v1/home/'

export function getBooksData() {
  return request.get(homeApi).then((res) => {
    return res.body.books
  })
}
