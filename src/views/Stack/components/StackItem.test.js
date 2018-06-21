import React from 'react'
import { shallow } from 'enzyme'

import { StackItem } from './StackItem'

describe('StackItem component', () => {
  let component

  const props = {
    name: 'Item 1',
    logo: './media/item-1.svg'
  }

  beforeAll(() => {
    component = shallow(<StackItem {...props} />)
  })

  it('should render', () => {
    expect(component).toExist()
  })

  it('should render the name', () => {
    expect(component.text()).toContain(props.name)
  })

  it('should render the logo', () => {
    const image = component.find('img')
    expect(image.prop('src')).toEqual(props.logo)
  })
})
