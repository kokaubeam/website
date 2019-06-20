import React from 'react'
import { Container, NavList, NavListItem, StyledNavLink } from './styles'

const links = [
  {
    to: '/experience',
    label: 'Experience',
  },
  {
    to: '/stack',
    label: 'Stack',
  },
]

export const Nav = props => (
  <Container {...props}>
    <NavList>
      {links.map((link, index) => (
        <NavListItem key={index}>
          <StyledNavLink to={link.to}>{link.label}</StyledNavLink>
        </NavListItem>
      ))}
    </NavList>
  </Container>
)

export default Nav
