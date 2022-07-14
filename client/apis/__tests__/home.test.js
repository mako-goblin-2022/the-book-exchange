import { getBooksData } from '../home'
import nock from 'nock'

const getBooksMockData = [
  {
    id: 1,
    title: 'Winnie-the-Pooh',
    author: 'A. A. Milne',
    genre: 'Classic',
    publishing_details: 'Methuen (London), 1926',
    edition: 'First',
    isbn: '4871873005',
    summary:
      'Winnie-the-Pooh follows the many adventures of Winnie and his friends, Piglet, Eeyore, Tigger, Kanga, Christopher Robin, and many more. He calls himself a Bear of Very Little Brain, yet he shows faithfully that he is a wise and loving creature, furthermore a whimsical philosopher who is rather fond of honey. Three cheers for Pooh!',
    condition: 'Well read',
    image:
      'https://en.wikipedia.org/wiki/Winnie-the-Pooh_(book)#/media/File:Winnie-the-Pooh_(book).png',
    user_id: 2,
    status: 'active',
    rating: '',
  },

  {
    id: 2,
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    genre: 'Fantasy',
    publishing_details: 'Bloomsbury (UK) 1997',
    edition: 'First',
    isbn: '0-7475-3269-9',
    summary:
      "It is a story about Harry Potter, an orphan brought up by his aunt and uncle because his parents were killed when he was a baby. Harry is unloved by his uncle and aunt but everything changes when he is invited to join Hogwarts School of Witchcraft and Wizardry and he finds out he's a wizard.",
    condition: 'Pristine',
    image:
      'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg',
    user_id: 2,
    status: 'active',
    rating: '',
  },
]

describe('/api/v1/home', () => {
  it('returns an array of objects containing books data', () => {
    expect.assertions(1)
    const scope = nock('http://localhost')
      .get('/api/v1/home/')
      .reply(200, getBooksMockData)

    return getBooksData().then((res) => {
      console.log(res)
      expect(res[0].title).toBe('Winnie-the-Pooh')
      // expect(scope.isDone()).toBe(true)
      scope.done()
    })
  })
})
