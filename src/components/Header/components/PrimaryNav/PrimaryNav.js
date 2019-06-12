import React from 'react'
import { Container, NavList, NavListItem, StyledNavLink } from './styles.js'

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

export const PrimaryNav = props => (
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

export default PrimaryNav
