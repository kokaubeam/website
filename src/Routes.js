import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './views/Home'
import WorkHistory from './views/WorkHistory'
import Stack from './components/Stack'
import NotFound from './views/NotFound'

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/work-history" component={WorkHistory}/>
    <Route exact path="/stack" component={Stack}/>
    <Route component={NotFound}/>
  </Switch>
)

export default Routes
