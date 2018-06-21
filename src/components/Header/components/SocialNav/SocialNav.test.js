import React from 'react'
import { shallow } from 'enzyme'

import { SocialNav } from './SocialNav'

describe('SocialNav component', () => {
  let component

  beforeAll(() => {
    component = shallow(<SocialNav />)
  })

  it('should render', () => {
    expect(component).toExist()
  })

  it('should set the className', () => {
    expect(component.prop('className')).toBe('SocialNav')
  })

  it('should link to Twitter', () => {
    const link = component.find('a')
      .filterWhere(n => n.prop('href') === 'https://twitter.com/kokaubeam')

    expect(link).toExist()
  })

  it('should link to Github', () => {
    const link = component.find('a')
      .filterWhere(n => n.prop('href') === 'https://github.com/kokaubeam')

    expect(link).toExist()
  })

  it('should link to LinkedIn', () => {
    const link = component.find('a')
      .filterWhere(n => n.prop('href') === 'https://www.linkedin.com/in/kokaubeam/')

    expect(link).toExist()
  })

  describe('when a className prop is set', () => {
    beforeAll(() => {
      component.setProps({
        className: 'mockClassName'
      })
    })

    it('should extend the className', () => {
      expect(component.prop('className')).toBe('SocialNav mockClassName')
    })
  })
})
