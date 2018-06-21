import React from 'react'
import PropTypes from 'prop-types'

export const StackItem = ({ name, logo }) => (
  <div>
    <img src={logo} alt=""/>
    <span>{name}</span>
  </div>
)

StackItem.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string
}

export default StackItem
