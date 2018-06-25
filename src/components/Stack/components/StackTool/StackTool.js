import React from 'react'
import PropTypes from 'prop-types'
import './StackTool.css'

export const StackTool = ({ tool }) => (
  <div className="StackTool">
    <span className="logo"><img src={tool.logo} alt={tool.name}/></span>
    <span className="name">{tool.name}</span>
  </div>
)

StackTool.propTypes = {
  tool: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
  })
}

export default StackTool
