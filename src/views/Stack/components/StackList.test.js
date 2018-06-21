import React from 'react'
import { shallow } from 'enzyme'
import StackItem from './StackItem'

import { StackList } from './StackList'

describe('StackList component', () => {
  let component

  const props = {
    name: 'Toolkit',
    items: [{
      name: 'Tool 1',
      logo: './media/tool-1.svg'
    }, {
      name: 'Tool 2',
      logo: './media/tool-2.svg'
    }]
  }

  beforeAll(() => {
    component = shallow(<StackList {...props} />)
  })

  it('should render', () => {
    expect(component).toExist()
  })

  it('should render the stack name', () => {
    const name = component.find('h2')
    expect(name.text()).toContain(props.name)
  })

  it('should render a StackItem component for each item', () => {
    const items = component.find(StackItem)

    expect(items.length).toBe(props.items.length)

    items.forEach((item, index) => {
      expect(item.prop('name')).toBe(props.items[index].name)
      expect(item.prop('logo')).toBe(props.items[index].logo)
    })
  })
})
