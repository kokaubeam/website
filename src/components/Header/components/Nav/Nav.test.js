import React from 'react'
import { renderWithRouter } from 'utils/test-utils'
import { axe } from 'jest-axe'

import Nav from './Nav'

test('content is accessible', async () => {
  const { container } = renderWithRouter(<Nav />)
  const results = await axe(container.innerHTML)

  expect(results).toHaveNoViolations()
})
