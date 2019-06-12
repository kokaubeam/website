import styled from 'styled-components'

export const ToolName = styled.div`
  display: none;

  @media (min-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    height: 18px;
    width: 64px;
    overflow: hidden;
    text-overflow: ellipsis;
    z-index: 500;
  }
`

export const StyledLink = styled.a`
  display: block;
  width: 32px;
  text-align: center;

  @media (min-width: 768px) {
    position: relative;
    padding-bottom: 26px;
    width: 64px;

    &:hover ${ToolName} {
      top: 72px;
      left: -24px;
      bottom: auto;
      padding: 8px;
      height: auto;
      width: 96px;
      /* border: 2px solid #777; */
      border-radius: 4px;
      background: #242424;
    }
  }
`

export const ToolIconContainer = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  width: 32px;

  @media (min-width: 768px) {
    height: 64px;
    width: 64px;
  }
`

export const ToolIcon = styled.img`
  display: block;
  margin: auto;
  max-width: 32px;
  max-height: 32px;

  @media (min-width: 768px) {
    max-width: 64px;
    max-height: 64px;
  }
`
