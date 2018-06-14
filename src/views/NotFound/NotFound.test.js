import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'

import { NotFound } from './NotFound'

describe('NotFound component', () => {
  let component

  beforeAll(() => {
    component = shallow(<NotFound />)
  })

  it('should render', () => {
    expect(component).toExist()
  })

  it('should render a link to the home page', () => {
    const link = component.find(Link).filterWhere(n => n.prop('to') === '/')
    expect(link).toExist()
  })
})
