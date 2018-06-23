import React from 'react'
import { shallow } from 'enzyme'
import { NavLink } from 'react-router-dom'

import { PrimaryNav } from './PrimaryNav'

describe('PrimaryNav component', () => {
  let component

  const props = {
    id: 'mock-id',
    'aria-labelledby': 'mock-label'
  }

  beforeAll(() => {
    component = shallow(<PrimaryNav {...props} />)
  })

  it('should render', () => {
    expect(component).toExist()
  })

  it('should set the className', () => {
    expect(component.prop('className')).toBe('PrimaryNav')
  })

  it('should a link to the work-history page', () => {
    const link = component.find(NavLink).filterWhere(n => n.prop('to') === '/work-history')
    expect(link).toExist()
  })

  it('should a link to the stack page', () => {
    const link = component.find(NavLink).filterWhere(n => n.prop('to') === '/stack')
    expect(link).toExist()
  })

  it('should spred the props', () => {
    expect(component.props()).toMatchObject(props)
  })

  describe('when a className prop is set', () => {
    beforeAll(() => {
      component.setProps({
        className: 'mockClassName'
      })
    })

    it('should extend the className', () => {
      expect(component.prop('className')).toBe('PrimaryNav mockClassName')
    })
  })
})
