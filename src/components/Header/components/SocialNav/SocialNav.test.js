import React from 'react'
import { render } from 'utils/test-utils'
import { axe } from 'jest-axe'

import SocialNav from './SocialNav'

test('content is accessible', async () => {
  const { container } = render(<SocialNav />)
  const results = await axe(container.innerHTML)

  expect(results).toHaveNoViolations()
})
