import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './components/Home'
import Experience from './components/Experience'
import Stack from './components/Stack'
import NotFound from './components/NotFound'

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/experience" component={Experience}/>
    <Route exact path="/stack" component={Stack}/>
    <Route component={NotFound}/>
  </Switch>
)

export default Routes
