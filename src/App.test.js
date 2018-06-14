import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import store, { history } from './store'
import Routes from './Routes'

jest.mock('./store')
jest.mock('./Routes')

import { App } from './App'

describe('App component', () => {
  let component

  beforeAll(() => {
    component = shallow(<App />)
  })

  it('should render the component', () => {
    expect(component).toExist()
  })

  it('should render the Provider connected to the store', () => {
    const provider = component.find(Provider)
    expect(provider).toExist()
    expect(provider.prop('store')).toBe(store)
  })

  it('should render the Router connected to the history', () => {
    const provider = component.find(Router)
    expect(provider).toExist()
    expect(provider.prop('history')).toBe(history)
  })

  it('should render the Routes', () => {
    const routes = component.find(Routes)
    expect(routes).toExist()
  })
})
