import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'

export * from '@testing-library/react'

export function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    ...options
  } = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>, options),
    history,
  }
}
