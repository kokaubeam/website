import React from 'react'
import PropTypes from 'prop-types'
import StackTool from '../StackTool'
import './StackToolGroup.css'

export const StackToolGroup = ({ name, tools }) => (
  <div className="StackToolGroup">
    <h2>{name}</h2>
    <ul>
      {tools.map(tool => <li key={tool.name}><StackTool tool={tool} /></li>)}
    </ul>
  </div>
)

StackToolGroup.propTypes = {
  name: PropTypes.string.isRequired,
  tools: PropTypes.array.isRequired
}

export default StackToolGroup
