import React from 'react'
import { screen } from '@testing-library/react'
import { render } from '../../testUtils'

import App from '.'

test('renders application', () => {
  render(<App />)
  const linkElement = screen.getByTestId('app')
  expect(linkElement).toBeInTheDocument()
})
