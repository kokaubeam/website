import React from 'react'
import PropTypes from 'prop-types'
import ToolLink from '../ToolLink'
import { StyledList, StyledListItem } from './styles'

export const ToolList = ({ tools }) => (
  <StyledList>
    {tools.map(tool => (
      <StyledListItem key={tool.name}>
        <ToolLink tool={tool} />
      </StyledListItem>
    ))}
  </StyledList>
)

ToolList.propTypes = {
  tools: PropTypes.array.isRequired,
}

export default ToolList
