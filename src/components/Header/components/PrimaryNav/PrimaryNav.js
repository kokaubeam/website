import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './PrimaryNav.css'

export const PrimaryNav = props => (
  <nav {...props} className={classNames('PrimaryNav', props.className)}>
    <ul>
      <li><NavLink to="/work-history">History</NavLink></li>
      <li><NavLink to="/stack">Stack</NavLink></li>
    </ul>
  </nav>
)

PrimaryNav.propTypes = {
  className: PropTypes.string
}

export default PrimaryNav
