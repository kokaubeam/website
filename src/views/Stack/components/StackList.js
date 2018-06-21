import React from 'react'
import PropTypes from 'prop-types'
import StackItem from './StackItem'

export const StackList = ({ name, items }) => (
  <div>
    <h2>{name}</h2>
    {items.map(item => <StackItem key={item.name} {...item} />)}
  </div>
)

StackList.propTypes = {
  name: PropTypes.string,
  items: PropTypes.array.isRequired
}

export default StackList
