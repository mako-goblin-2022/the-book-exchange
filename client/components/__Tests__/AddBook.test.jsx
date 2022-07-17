//  /**
//  * @jest-environment jsdom
//  */

// import React from 'react'
// import { screen, render } from '@testing-library/react'
// import { Provider } from 'react-redux'
// import '@testing-library/jest-dom'

// import AddBook from '../AddBook'

// import {useDispatch} from 'react-redux'

// import {saveBook} from '../../actions/home'

// jest.mock('../../actions/home')
// jest.mock('react-redux')

// beforeEach(() => {
//   jest.clearAllMocks()
// })
// afterAll(() => {
//   jest.restoreAllMocks()
// })

// const fakeStore = {
//   subscribe: jest.fn(),
//   dispatch: jest.fn(),
//   getState: jest.fn(),
// }


// const fakeBook = {
//   id: 100,
//   title: 'The Best Book',
//   author: 'Kate',
//   genre: 'Classic',
//   publishing_details: '2022',
//   edition: 'First',
//   isbn: '4871873005',
//   summary: 'This is the best book in the world!',
//   condition: 'Well read',
//   image:
//     'https://en.wikipedia.org/wiki/Winnie-the-Pooh_(book)#/media/File:Winnie-the-Pooh_(book).png',
//   user_id: 2,
//   status: 'active',
//   rating: '10',
// }




// describe('<AddBook />', () => {
//   it('dispatches the saveBook thunk.', () => {
//     // expect.assertions(1)
//     const saveBookMockReturn = () => 'mockReturnFunctionsReturnValue'
//     saveBook.mockReturnValue(saveBookMockReturn)
//     render(
//       <Provider store={fakeStore}>
//         <AddBook />
//       </Provider>
//     )
//     expect(fakeStore.dispatch).toHaveBeenCalledWith(saveBookMockReturn)
//   })
// })
