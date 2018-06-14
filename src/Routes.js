import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './views/Home'
import NotFound from './views/NotFound'

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route component={NotFound}/>
  </Switch>
)

export default Routes
