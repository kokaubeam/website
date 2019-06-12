import styled, { css } from 'styled-components'
import Header from '../Header'

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  margin: 0 auto;
  padding-top: 41px;
  min-height: 100%;
  max-width: 1440px;
`

export const StyledHeader = styled(Header)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 500;

  ${({ isNavOpen }) =>
    isNavOpen &&
    css`
      position: fixed;
      height: 100%;
    `}

  @media (min-width: 768px) {
    display: block;
    height: auto;
  }
`

export const StyledAside = styled.aside`
  display: none;
  flex-shrink: 0;
  flex-grow: 0;
  margin: 16px;
  width: 288px;

  @media (min-width: 768px) {
    display: block;
  }
`

export const StyledMain = styled.main`
  margin: 0 16px 16px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 1440px) {
    width: 1440px;
    margin: 0 auto;
  }
`
