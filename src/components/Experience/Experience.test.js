import React from 'react'
import { render } from 'test-utils'
import { axe } from 'jest-axe'
import MockDate from 'mockdate'
import mockExperience from './data/experience'

import Experience from './Experience'

jest.mock('./data/experience', () => [
  {
    name: 'Aperture Science',
    position: 'Test Subject',
    description: 'Ate cake and tested Aperature Science products.',
    logo: './media/aperture-science.svg',
    start: new Date('Jun 1, 1940'),
    end: new Date('Aug 1, 1998'),
  },
  {
    name: 'Black Mesa',
    position: 'Level 3 Research Associate Scientist',
    description:
      'Defended the human race against hostile aliens. Lead an uprising against alien invaders.',
    logo: './media/black-mesa.svg',
    start: new Date('May 1, 2000'),
    end: new Date('May 16, 2005'),
  },
])

test('content is accessible', async () => {
  const { container } = render(<Experience />)
  const results = await axe(container.innerHTML)

  expect(results).toHaveNoViolations()
})

test('has the correct years of experience', () => {
  MockDate.set(new Date('Dec 15, 2010'))

  const { getByTestId } = render(<Experience />)

  expect(getByTestId('years-of-experience')).toHaveTextContent(/70 years/i)

  MockDate.reset()
})

test('renders all the history', () => {
  const { getByText } = render(<Experience />)

  mockExperience.forEach(experience => {
    getByText(experience.name)
  })
})

test('renders the most recent experience first', () => {
  const { queryAllByTestId } = render(<Experience />)

  const experience = queryAllByTestId('experience-details')
  expect(experience.length).toBe(2)
  expect(experience[0]).toHaveTextContent(/Black Mesa/)
  expect(experience[1]).toHaveTextContent(/Aperture Science/)
})
