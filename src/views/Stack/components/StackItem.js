import React from 'react'
import PropTypes from 'prop-types'
import './StackItem.css'

export const StackItem = ({ name, logo }) => (
  <div className="StackItem">
    <span className="logo"><img src={logo} alt={name}/></span>
    <span className="name">{name}</span>
  </div>
)

StackItem.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string
}

export default StackItem
