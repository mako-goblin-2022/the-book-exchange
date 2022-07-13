 /**
 * @jest-environment jsdom
 */

  import React from 'react'
  import { screen, render } from '@testing-library/react'
  import '@testing-library/jest-dom'
  
  import Header from '../Header'
  
  describe('<Header/>', () => {
    it('renders a <h1> tag that includes "The Book Exchange"', () => {
      render(<Header />)
      // expect.assertions(2)
      const heading = screen.getAllByRole('heading')
      console.log(heading)
      expect(heading[0]).toContainHTML('h1')
      expect(heading[0]).toHaveTextContent(/The Book Exchange/)
    })
  })