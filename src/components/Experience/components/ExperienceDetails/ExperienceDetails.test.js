import React from 'react'
import { render } from 'test-utils'
import { axe } from 'jest-axe'

import ExperienceDetails from './ExperienceDetails'

const experience = {
  name: 'Insuricare',
  position: 'Insurance Agent',
  description:
    'Exploiting every loophole, dodging every obstacle! Penetrating the bureaucracy!',
  logo: './media/insuricare.svg',
  start: new Date('Feb 2012'),
  end: new Date('Mar 2015'),
}

test('content is accessible', async () => {
  const { container } = render(<ExperienceDetails experience={experience} />)
  const results = await axe(container.innerHTML)

  expect(results).toHaveNoViolations()
})

test('renders the name', () => {
  const { getByText } = render(<ExperienceDetails experience={experience} />)

  getByText(experience.name)
})

test('renders the position', () => {
  const { getByText } = render(<ExperienceDetails experience={experience} />)

  getByText(experience.position)
})

test('renders the description', () => {
  const { getByText } = render(<ExperienceDetails experience={experience} />)

  getByText(experience.description)
})

test('renders the logo', () => {
  const { getByAltText } = render(<ExperienceDetails experience={experience} />)

  const logo = getByAltText(`${experience.name} logo`)
  expect(logo).toHaveAttribute('src', experience.logo)
})

test('formats the timespan', () => {
  const { getByText } = render(<ExperienceDetails experience={experience} />)

  getByText('Feb 2012 – Mar 2015')
})
