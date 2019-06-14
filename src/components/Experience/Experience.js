import React, { useEffect, useState } from 'react'
import moment from 'moment'
import ExperienceList from './components/ExperienceList'
import { Container, Heading } from './styles'
import experience from './data/experience'

const getYearsOfExperience = experience => {
  if (experience.length === 0) {
    return 0
  }

  const oldestHistory = experience[experience.length - 1]

  return moment().diff(oldestHistory.start, 'years')
}

const Experience = () => {
  const [sortedExperience] = useState(
    experience.sort((a, b) => b.start - a.start),
  )
  const [yearsOfExperience] = useState(getYearsOfExperience(sortedExperience))

  useEffect(() => {
    document.title = `${yearsOfExperience} Years of Experience | Jonathan Davis`
  })

  return (
    <Container data-testid='experience'>
      <Heading data-testid='years-of-experience'>
        {yearsOfExperience} Years of Professional Experience
      </Heading>
      <ExperienceList experience={sortedExperience} />
    </Container>
  )
}

export default Experience
