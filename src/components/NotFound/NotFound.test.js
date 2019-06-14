import React from 'react'
import { renderWithRouter } from 'test-utils'
import { axe } from 'jest-axe'

import NotFound from './NotFound'

test('content is accessible', async () => {
  const { container } = renderWithRouter(<NotFound />)
  const results = await axe(container.innerHTML)

  expect(results).toHaveNoViolations()
})

test('renders the content', () => {
  const { getByText } = renderWithRouter(<NotFound />)

  getByText(/page not found/i)
  getByText(/Hmm\.\.\. can't find that page./)
})

test('sets the title', () => {
  renderWithRouter(<NotFound />)

  expect(document.title).toBe('Not Found | Jonathan Davis')
})
