import React from 'react'
import { renderWithRouter } from 'utils/test-utils'
import { axe } from 'jest-axe'

import Header from './Header'

// TODO: Unskip when https://github.com/nickcolley/jest-axe/issues/56 is released
test.skip('content is accessible', async () => {
  const { container } = renderWithRouter(<Header />)

  const results = await axe(container.innerHTML)

  expect(results).toHaveNoViolations()
})
