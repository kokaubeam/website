import React from 'react'
import { render } from 'test-utils'
import { axe } from 'jest-axe'
import meImage from '../../media/me.jpg'

import Bio from './Bio'

test('content is accessible', async () => {
  const { container } = render(<Bio />)
  const results = await axe(container.innerHTML)

  expect(results).toHaveNoViolations()
})

test('renders the profile picture', () => {
  const { getByAltText } = render(<Bio />)

  const profilePicture = getByAltText(`Jonathan Davis`)
  expect(profilePicture).toHaveAttribute('src', meImage)
})

test('renders the content', () => {
  const { getByText } = render(<Bio />)

  getByText(/I love thoughts and ideas/)
  getByText(/Professionally, I thrive in technology/)
})
