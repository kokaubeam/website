import React from 'react'
import { shallow } from 'enzyme'

import { HomePage } from './HomePage'

describe('HomePage component', () => {
  let component

  beforeAll(() => {
    component = shallow(<HomePage />)
  })

  it('should render', () => {
    expect(component).toExist()
  })
})
