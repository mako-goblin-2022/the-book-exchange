import { getBooksData, saveBook, saveimageBook, searchBooksData } from '../home'
import nock from 'nock'

const getBooksMockData = {
  books: [
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
  ],
}

describe('/api/v1/home', () => {
  it('returns an array of objects containing books data', () => {
    expect.assertions(1)
    const scope = nock('http://localhost')
      .get('/api/v1/home/')
      .reply(200, getBooksMockData)

    return getBooksData().then((res) => {
      expect(res[0].title).toBe('Winnie-the-Pooh')
      scope.done()
    })
  })
})

describe('POST/api/v1/home/add', () => {
  it('adds one book', async () => {
    const fakeBook = {
      id: 1,
      title: 'The Best Book',
      author: 'Kate',
      genre: 'Classic',
      publishing_details: '2022',
      edition: 'First',
      isbn: '4871873005',
      summary: 'This is the best book in the world!',
      condition: 'Well read',
      image:
        'https://en.wikipedia.org/wiki/Winnie-the-Pooh_(book)#/media/File:Winnie-the-Pooh_(book).png',
      user_id: 2,
      status: 'active',
      rating: '10',
    }
    const scope = nock('http://localhost')
      .post('/api/v1/home/add')
      .reply(200, fakeBook)
    const book = await saveBook(fakeBook)
    expect.assertions(3)
    expect(book).toHaveProperty('title')
    expect(book.title).toBe('The Best Book')
    expect(book).toEqual(fakeBook)
    scope.done()
  })
})

// ****** IMAGE UPLOAD SECTION ****** //
const fileimage = {
  id: 420,
  title: 'Bobs',
  image: {
    fieldname: 'image',
    originalname: 'discord_me.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: 'server/public/images/uploads',
    filename: '1658202819551-847690973-discord_me.jpg',
    path: 'server/public/images/uploads/1658202819551-847690973-discord_me.jpg',
    size: 55111,
  },
  user_id: '2',
}
describe('POST /api/v1/home/add-upload', () => {
  it('sends book correctly', () => {
    expect.assertions(2)
    const scope = nock('http://localhost')
      .post('/api/v1/home/add-upload')
      .reply(200, fileimage)

    return saveimageBook(fileimage).then((book) => {
      expect(book.title).toBe('Bobs')

      expect(scope.isDone()).toBeTruthy()
    })
  })
})
// ************************************* //
describe('/api/v1/home/search', () => {
  it('returns a book or books based on a search', () => {
    const searchTerm = 'kate'
    const fakeBooks = {
      books: [
        {
          id: 1,
          title: 'The Best Book',
          author: 'Kate',
          genre: 'Classic',
          publishing_details: '2022',
          edition: 'First',
          isbn: '4871873005',
          summary: 'This is the best book in the world!',
          condition: 'Well read',
          image:
            'https://en.wikipedia.org/wiki/Winnie-the-Pooh_(book)#/media/File:Winnie-the-Pooh_(book).png',
          user_id: 2,
          status: 'active',
          rating: '10',
        },
        {
          id: 2,
          title: 'The Best Book',
          author: 'Kate',
          genre: 'Classic',
          publishing_details: '2022',
          edition: 'First',
          isbn: '4871873005',
          summary: 'This is the best book in the world!',
          condition: 'Well read',
          image:
            'https://en.wikipedia.org/wiki/Winnie-the-Pooh_(book)#/media/File:Winnie-the-Pooh_(book).png',
          user_id: 2,
          status: 'active',
          rating: '10',
        },
      ],
    }
    const scope = nock('http://localhost')
      .persist()
      .get(`/api/v1/home/search`)
      .query({ search: searchTerm })
      .reply(200, fakeBooks)

    return searchBooksData(searchTerm).then((books) => {
      expect.assertions(1)
      expect(books[0].title).toBe(`The Best Book`)
      scope.done()
    })
  })
})
