import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './views/Home'
import Stack from './views/Stack'
import NotFound from './views/NotFound'

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/stack" component={Stack}/>
    <Route component={NotFound}/>
  </Switch>
)

export default Routes
