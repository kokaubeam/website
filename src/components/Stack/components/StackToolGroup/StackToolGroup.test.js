import React from 'react'
import { shallow } from 'enzyme'
import StackTool from '../StackTool'

import { StackToolGroup } from './StackToolGroup'

describe('StackToolGroup component', () => {
  let component

  const props = {
    name: 'Stack Tool Group 1',
    tools: [{
      name: 'Tool 1',
      url: 'https://tool-1.puppies',
      logo: './media/tool-1.svg',
      tags: ['Toolkit']
    }, {
      name: 'Tool 2',
      url: 'https://tool-2.io',
      logo: './media/tool-2.svg',
      tags: ['Toolkit']
    }]
  }

  beforeAll(() => {
    component = shallow(<StackToolGroup {...props} />)
  })

  it('should render', () => {
    expect(component).toExist()
  })

  it('should render the stack name', () => {
    const name = component.find('h2')
    expect(name.text()).toContain(props.name)
  })

  it('should render a StackTool component for each tool', () => {
    const tools = component.find(StackTool)

    expect(tools.length).toBe(props.tools.length)

    tools.forEach((tool, index) => {
      expect(tool.prop('tool')).toBe(props.tools[index])
    })
  })
})
