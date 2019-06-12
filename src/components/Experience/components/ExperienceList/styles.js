import styled, { keyframes } from 'styled-components'

const ListItemAppear = keyframes`
  from {
    opacity: 0.0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1.0;
    transform: translateX(0);
  }
`

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const StyledListItem = styled.li`
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

  &:nth-child(11) {
    animation-delay: 1.1s;
  }

  &:nth-child(12) {
    animation-delay: 1.2s;
  }

  &:nth-child(13) {
    animation-delay: 1.3s;
  }

  &:nth-child(14) {
    animation-delay: 1.4s;
  }
`
