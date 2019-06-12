import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding-left: 44px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    padding-left: 80px;
  }
`

export const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 32px;
  width: 32px;

  @media (min-width: 768px) {
    height: 64px;
    width: 64px;
  }
`

export const Logo = styled.img`
  display: block;
  margin: auto;
  max-width: 32px;
  max-height: 32px;

  @media (min-width: 768px) {
    max-width: 64px;
    max-height: 64px;
  }
`

export const Name = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 4px;
`

export const Position = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
`

export const Timespan = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
`

export const Description = styled.div`
  color: rgba(255, 255, 255, 0.7);
`
