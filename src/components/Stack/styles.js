import styled, { keyframes } from 'styled-components'

export const Container = styled.div``

export const Heading = styled.h1``

const ToolGroupAppear = keyframes`
  from {
    opacity: 0.0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1.0;
    transform: translateY(0);
  }
`

export const ToolGroup = styled.div`
  margin-bottom: 32px;
  animation: 200ms ease-out 100ms backwards ${ToolGroupAppear};

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
`

export const ToolGroupHeading = styled.h2``
