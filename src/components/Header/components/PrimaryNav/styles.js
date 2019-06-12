import styled, { keyframes } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.nav`
  height: 100%;
`

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
`

const ListItemAppear = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const NavListItem = styled.li`
  flex: 1 100%;
  align-content: center;
  animation: 200ms ease-out 100ms backwards ${ListItemAppear};

  &:nth-child(2) {
    animation-delay: 200ms;
  }

  &:nth-child(3) {
    animation-delay: 300ms;
  }

  &:nth-child(4) {
    animation-delay: 400ms;
  }

  &:nth-child(5) {
    animation-delay: 500ms;
  }

  &:nth-child(6) {
    animation-delay: 600ms;
  }

  &:nth-child(7) {
    animation-delay: 700ms;
  }

  &:nth-child(8) {
    animation-delay: 800ms;
  }

  &:nth-child(9) {
    animation-delay: 900ms;
  }

  &:nth-child(10) {
    animation-delay: 1s;
  }

  @media (min-width: 768px) {
    flex: auto;
    animation: none;
  }
`

export const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: block;
    padding: 8px;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 18px;
  }

  &:hover,
  &:active,
  &.active {
    color: #ffffff;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.3), 0 0 15px #fff;
  }

  @media (min-width: 768px) {
    padding: 4px 8px;
  }
`
