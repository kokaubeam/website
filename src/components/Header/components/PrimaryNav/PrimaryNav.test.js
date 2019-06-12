import React from 'react'
import { renderWithRouter } from 'test-utils'
import { axe } from 'jest-axe'

import PrimaryNav from './PrimaryNav'

test('content is accessible', async () => {
  const { container } = renderWithRouter(<PrimaryNav />)
  const results = await axe(container.innerHTML)

  expect(results).toHaveNoViolations()
})
