import nock from 'nock'
import { editBookListing } from '../bookView'

const editBookMockData = {
  id: 1,
  title: 'Winnie-the-Pooh',
  author: 'A. A. Milne',
  genre: 'Horror',
}

describe('editBookListing', () => {
  test('returns updated Book object', () => {
    //expect.assertions(2)
    const id = editBookMockData.id
    const scope = nock('http://localhost')
      .patch('/api/v1/books/edit/1')
      .reply(200, editBookMockData)

    return editBookListing(editBookMockData, id).then((res) => {
      //console.log(res)
      expect(res).toEqual(editBookMockData)
      expect(scope.isDone()).toBe(true)
    })
  })

  test('fails to update book object', () => {
    expect.assertions(2)
    const scope = nock('http://localhost')
      .patch('/api/v1/books/edit/1')
      .reply(500)
    let error = null
    return editBookListing(editBookMockData, editBookMockData.id)
      .catch((err) => {
        error = err
      })
      .finally(() => {
        expect(error).not.toBeNull()
        expect(scope.isDone()).toBeTruthy()
      })
  })
})
