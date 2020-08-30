import React from 'react'
import { render as testLibRender } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

export const render = (components) =>
  testLibRender(<MemoryRouter>{components}</MemoryRouter>)
