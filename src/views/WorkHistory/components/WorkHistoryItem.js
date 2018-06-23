import React from 'react'
import PropTypes from 'prop-types'
import './WorkHistoryItem.css'

export const WorkHistoryItem = ({ name, position, description, logo, start, end }) => (
  <div className="WorkHistoryItem">
    <span className="logo"><img src={logo} alt={name}/></span>
    <span className="name">{name}</span>
    <span className="position">{position}</span>
    <span className="timespan">{start.toString()} &ndash; {end.toString()}</span>
    <p className="description">{description}</p>
  </div>
)

WorkHistoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired
}

export default WorkHistoryItem
