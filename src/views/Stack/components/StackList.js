import React from 'react'
import PropTypes from 'prop-types'
import StackItem from './StackItem'
import './StackList.css'

export const StackList = ({ name, items }) => (
  <div className="StackList">
    <h2>{name}</h2>
    <ul>
      {items.map(item => <li key={item.name}><StackItem {...item} /></li>)}
    </ul>
  </div>
)

StackList.propTypes = {
  name: PropTypes.string,
  items: PropTypes.array.isRequired
}

export default StackList
