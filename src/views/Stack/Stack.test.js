import React from 'react'
import { shallow } from 'enzyme'

import { Stack } from './Stack'

describe('Stack component', () => {
  let component

  beforeAll(() => {
    component = shallow(<Stack />)
  })

  it('should render', () => {
    expect(component).toExist()
  })

  it('should render the title', () => {
    const title = component.find('h1')
    expect(title.text()).toContain('The Stack')
  })
})
