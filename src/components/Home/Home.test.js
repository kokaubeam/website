import React from 'react'
import { render } from 'test-utils'
import { axe } from 'jest-axe'

import Home from './Home'

test('content is accessible', async () => {
  const { container } = render(<Home />)
  const results = await axe(container.innerHTML)

  expect(results).toHaveNoViolations()
})
