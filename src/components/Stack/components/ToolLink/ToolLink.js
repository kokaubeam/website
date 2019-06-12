import React from 'react'
import PropTypes from 'prop-types'
import { ToolIcon, ToolIconContainer, ToolName, StyledLink } from './styles.js'

export const ToolLink = ({ tool }) => (
  <StyledLink
    className='ToolLink'
    href={tool.url}
    target='_blank'
    rel='noopener noreferrer'
    data-testid='tool-link'
  >
    <ToolIconContainer>
      <ToolIcon src={tool.logo} alt={tool.name} />
    </ToolIconContainer>
    <ToolName>{tool.name}</ToolName>
  </StyledLink>
)

ToolLink.propTypes = {
  tool: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }),
}

export default ToolLink
