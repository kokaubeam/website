import React from 'react'
import PropTypes from 'prop-types'
import './StackTool.css'

export const StackTool = ({ tool }) => (
  <a className="StackTool" href={tool.url} target="_blank">
    <span className="logo"><img src={tool.logo} alt={tool.name}/></span>
    <span className="name">{tool.name}</span>
  </a>
)

StackTool.propTypes = {
  tool: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
  })
}

export default StackTool
