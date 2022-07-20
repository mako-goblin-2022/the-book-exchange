import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BookView from '../BookView'
import { fetchBook } from '../../actions/bookView'

jest.mock('../../actions/bookView')

beforeEach(() => {
  jest.clearAllMocks()
})
afterAll(() => {
  jest.restoreAllMocks()
})

describe('<BookView />', () => {
  it('shows book title as heading', () => {
    render(<BookView title="Harry Potter and the Philosopher's Stone" />)
    let heading = screen.getByRole('heading')
    expect(heading).toContainHTML("Harry Potter and the Philosopher's Stone")
  })
})
