import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './components/Home'
import WorkHistory from './components/WorkHistory'
import Stack from './components/Stack'
import NotFound from './components/NotFound'

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/work-history" component={WorkHistory}/>
    <Route exact path="/stack" component={Stack}/>
    <Route component={NotFound}/>
  </Switch>
)

export default Routes
