import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './WorkHistoryItem.css'

export const WorkHistoryItem = ({ history }) => (
  <div className="WorkHistoryItem">
    <span className="logo"><img src={history.logo} alt={history.name}/></span>
    <span className="name">{history.name}</span>
    <span className="position">{history.position}</span>
    <span className="timespan">{moment(history.start).format('MMM YYYY')} &ndash; {moment(history.end).format('MMM YYYY')}</span>
    <p className="description">{history.description}</p>
  </div>
)

WorkHistoryItem.propTypes = {
  history: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date).isRequired
  })
}

export default WorkHistoryItem
