import React from 'react'
import { Route } from 'react-router-dom'
import { shallow } from 'enzyme'

import Home from './views/Home'
import WorkHistory from './views/WorkHistory'
import Stack from './views/Stack'
import NotFound from './views/NotFound'

import Routes from './Routes'

describe('Routes', () => {
  let component

  beforeAll(() => {
    component = shallow(<Routes />)
  })

  describe('when a route does NOT match', () => {
    it('should render the NotFound component', () => {
      const route = component.find(Route).last()
      expect(route.prop('component')).toBe(NotFound)
    })
  })

  describe('/', () => {
    let route

    beforeAll(() => {
      route = component.find(Route)
        .filterWhere(n => n.prop('path') === '/')
    })

    it('should render the Home component', () => {
      expect(route.prop('component')).toBe(Home)
    })

    it('should match the exact path', () => {
      expect(route.prop('exact')).toBe(true)
    })
  })

  describe('/work-history', () => {
    let route

    beforeAll(() => {
      route = component.find(Route)
        .filterWhere(n => n.prop('path') === '/work-history')
    })

    it('should render the WorkHistory component', () => {
      expect(route.prop('component')).toBe(WorkHistory)
    })

    it('should match the exact path', () => {
      expect(route.prop('exact')).toBe(true)
    })
  })

  describe('/stack', () => {
    let route

    beforeAll(() => {
      route = component.find(Route)
        .filterWhere(n => n.prop('path') === '/stack')
    })

    it('should render the Stack component', () => {
      expect(route.prop('component')).toBe(Stack)
    })

    it('should match the exact path', () => {
      expect(route.prop('exact')).toBe(true)
    })
  })
})
