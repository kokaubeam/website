import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PrimaryNav from './components/PrimaryNav'
import SocialNav from './components/SocialNav'
import menuIcon from './media/menuIcon.svg'

export const Container = styled.header`
  position: relative;
  width: 100%;
  height: 41px;
  background: #121212;
  border-bottom: 1px solid #4a4a4a;
  transition: height 500ms ease;
`

export const StyledPrimaryNav = styled(PrimaryNav)`
  display: ${({ isNavOpen }) => (isNavOpen ? 'block' : 'none')};

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    left: 204px;
  }

  @media (min-width: 1440px) {
    left: calc((100% - 1440px) / 2 + 204px);
  }
`

export const StyledSocialNav = styled(SocialNav)`
  position: absolute;
  top: 8px;
  right: 16px;

  @media (min-width: 1440px) {
    top: 8px;
    right: calc((100% - 1440px) / 2 + 16px);
  }
`

export const BrandLink = styled(Link)`
  display: block;
  font-weight: 700;
  font-size: 24px;
  padding: 8px 16px;
  margin: 0;

  &:link,
  &:active,
  &:hover,
  &:visited {
    color: #fff;
    text-decoration: none;
  }
`

export const ExpandedBrandLink = styled(BrandLink)`
  display: none;
  width: 180px;

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1440px) {
    position: absolute;
    top: 0;
    left: calc((100% - 1440px) / 2);
  }
`
export const CompactBrandLink = styled(BrandLink)`
  position: absolute;
  top: 0;
  left: calc(50% - 30px);

  @media (min-width: 768px) {
    display: none;
  }
`

export const PrimaryNavButton = styled.button.attrs({
  type: 'button',
})`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  width: 40px;
  height: 40px;

  @media (min-width: 768px) {
    display: none;
  }
`

export const MenuIcon = styled.img.attrs({
  src: menuIcon,
})``
