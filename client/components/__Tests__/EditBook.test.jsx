 /**
 * @jest-environment jsdom
 */

import React from 'react'
 import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import EditBook from '../EditBook'
// import store from '../../index'
// import { fetchBook, saveBook } from '../../actions/bookView'

jest.mock('../../actions/bookView')

//clear and reset mock data before tests
beforeEach(() => {
  jest.clearAllMocks()
})
afterAll(() => {
  jest.restoreAllMocks()
})

//internal store functions mocked 
const fakeStore = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(()=>{}),
}

// //mock data
// const fakeBook = {
//   id: 1,
//   title: 'The Best Book',
//   author: 'Kate',
// }

// const fakeEditedBook = {
//     id: 1,
//     title: 'The Best Book',
//     author: 'Mandy',
// }

//TODO test
describe("<EditBook />", () => {
  it('renders an h2 element that says "Edit the book below"',() => {
    expect.assertions(1)
    render
    (<Provider store={fakeStore}>
      <BrowserRouter>
    <EditBook />
    </BrowserRouter>
    </Provider>
    )
    const heading = screen.getAllByRole('heading')
    console.log(heading)
    expect(heading[0]).toContainHTML('h2')
    expect(heading[0]).toHaveTextContent(/Edit the book below/)
  })
  it.todo('displays book data as the default values inside the input')
  it.todo('fires the button when clicked and dispatches the saveBook thunk')
})