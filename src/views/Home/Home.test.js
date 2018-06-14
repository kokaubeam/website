import React from 'react'
import { shallow } from 'enzyme'

import { Home } from './Home'

describe('Home component', () => {
  let component

  beforeAll(() => {
    component = shallow(<Home />)
  })

  it('should render', () => {
    expect(component).toExist()
  })
})
