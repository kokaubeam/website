import React from 'react'
import PropTypes from 'prop-types'
import ExperienceDetails from '../ExperienceDetails'
import { StyledList, StyledListItem } from './styles.js'

export const ExperienceList = ({ experience }) => (
  <StyledList>
    {experience.map(experience => (
      <StyledListItem key={experience.name}>
        <ExperienceDetails experience={experience} />
      </StyledListItem>
    ))}
  </StyledList>
)

ExperienceList.propTypes = {
  experience: PropTypes.array,
}

export default ExperienceList
