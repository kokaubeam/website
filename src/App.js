import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'

import store, { history } from './store'
import Routes from './Routes'

import 'normalize.css'
import './App.css'

export const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
)

export default App
