import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import Bio from '../Bio'
import Home from '../Home'
import Experience from '../Experience'
import Stack from '../Stack'
import NotFound from '../NotFound'

import { Container, StyledAside, StyledHeader, StyledMain } from './styles'

const routes = [
  {
    path: '/',
    exact: true,
    main: Home,
  },
  {
    path: '/experience',
    exact: true,
    aside: Bio,
    main: Experience,
  },
  {
    path: '/stack',
    exact: true,
    aside: Bio,
    main: Stack,
  },
  {
    main: NotFound,
  },
]

export const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <Container>
      <StyledHeader
        onToggleNavigation={isNavOpen => setIsNavOpen(isNavOpen)}
        isNavOpen={isNavOpen}
      />
      <Switch>
        {routes.map(
          (route, index) =>
            route.aside && (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={() => (
                  <StyledAside>
                    <route.aside />
                  </StyledAside>
                )}
              />
            ),
        )}
      </Switch>
      <StyledMain>
        <Switch>
          {routes.map(
            (route, index) =>
              route.main && (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ),
          )}
        </Switch>
      </StyledMain>
    </Container>
  )
}

export default App
