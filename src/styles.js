import { createGlobalStyle } from 'styled-components'

import openSansLightFont from './fonts/OpenSans-Light.woff2'
import openSansRegularFont from './fonts/OpenSans-Regular.woff2'
import openSansBoldFont from './fonts/OpenSans-Bold.woff2'
import ralewayExtraLightFont from './fonts/Raleway-ExtraLight.woff2'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src: local('Open Sans Light'), local('OpenSans-Light'),
      url(${openSansLightFont}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
      url(${openSansRegularFont}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: local('Open Sans Bold'), local('OpenSans-Bold'),
      url(${openSansBoldFont}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 200;
    src: local('Raleway ExtraLight'), local('Raleway-ExtraLight'),
      url(${ralewayExtraLightFont}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Open Sans', sans-serif;
  }

  h1 {
    font-size: 24px;
    font-weight: 300;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 48px;
      font-weight: 300;
      text-align: left;
    }
  }

  h2 {
    font-size: 24px;

    @media (min-width: 768px) {
      display: block;
      height: auto;
    }
  }

  body {
    background: #141414;
    color: rgba(255, 255, 255, 0.9);
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
  }

  a:link,
  a:visited {
    color: #fff;
    text-decoration: none;
  }

  a:hover,
  a:active {
    text-decoration: underline;
  }
`
