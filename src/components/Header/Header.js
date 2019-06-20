import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  CompactBrandLink,
  Container,
  ExpandedBrandLink,
  MenuIcon,
  ToggleNavButton,
  StyledNav,
  StyledSocialNav,
} from './styles'

export const Header = ({ onToggleNavigation, ...props }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <Container isNavOpen={isNavOpen} data-testid='header' {...props}>
      <ExpandedBrandLink to='/'>Jonathan Davis</ExpandedBrandLink>
      <CompactBrandLink to='/'>JD</CompactBrandLink>

      <ToggleNavButton
        onClick={() => {
          setIsNavOpen(!isNavOpen)
          onToggleNavigation && onToggleNavigation(!isNavOpen)
        }}
        id='primary-nav-toggle'
        aria-haspopup='true'
        aria-controls='primary-nav'
      >
        <MenuIcon alt='Navigation' />
      </ToggleNavButton>

      <StyledNav
        id='primary-nav'
        aria-labelledby='primary-nav-toggle'
        rolee='menu'
        isNavOpen={isNavOpen}
      />
      <StyledSocialNav />
    </Container>
  )
}

Header.propTypes = {
  onToggleNavigation: PropTypes.func,
}

export default Header
