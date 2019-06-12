import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import {
  Container,
  Description,
  Logo,
  LogoContainer,
  Name,
  Position,
  Timespan,
} from './styles'

export const HistoryDetails = ({ experience }) => (
  <Container data-testid='experience-details'>
    <LogoContainer>
      <Logo src={experience.logo} alt={`${experience.name} logo`} />
    </LogoContainer>
    <Name>{experience.name}</Name>
    <Position>{experience.position}</Position>
    <Timespan>
      {moment(experience.start).format('MMM YYYY')} &ndash;{' '}
      {moment(experience.end).format('MMM YYYY')}
    </Timespan>
    <Description>
      <ReactMarkdown source={experience.description} />
    </Description>
  </Container>
)

HistoryDetails.propTypes = {
  experience: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date).isRequired,
  }),
}

export default HistoryDetails
