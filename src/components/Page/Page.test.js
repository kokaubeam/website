import React from 'react'
import { shallow } from 'enzyme'
import Header from '../Header/Header'

import { Page } from './Page'

describe('Page component', () => {
  let component

  const props = {
    className: 'mockClassName',
    children: <div id="children" />
  }

  beforeAll(() => {
    component = shallow(<Page {...props} />)
  })

  it.only('should render', () => {
    expect(component).toExist()
  })

  it('should render the Header', () => {
    const header = component.find(Header)
    expect(header).toExist()
  })

  it('should render children', () => {
    const children = component.find('#children')
    expect(children).toExist()
  })

  it('should extend the className', () => {
    expect(component.prop('className')).toBe('Page mockClassName')
  })
})
