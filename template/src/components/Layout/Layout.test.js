import React from 'react'
import { screen } from '@testing-library/react'
import { render } from '../../testUtils'

import Layout from '.'

test('renders "Welcome to the app" text', () => {
  render(<Layout />)
  const textElement = screen.getByText(/Welcome to the app/i)
  expect(textElement).toBeInTheDocument()
})
