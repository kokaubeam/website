import React from 'react'
import { render } from 'test-utils'

import ExperienceList from './ExperienceList'

test('renders each history item in the experience', () => {
  const mockExperience = [
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
  ]

  const { getByText } = render(<ExperienceList experience={mockExperience} />)

  mockExperience.forEach(experience => {
    getByText(experience.name)
  })
})
