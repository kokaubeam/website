import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Normalize } from 'styled-normalize'
import { GlobalStyle } from './styles'

import App from './components/App'

ReactDOM.render(
  <>
    <Normalize />
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </>,
  document.getElementById('root'),
)
