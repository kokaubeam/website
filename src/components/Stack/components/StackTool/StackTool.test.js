import React from 'react'
import { shallow } from 'enzyme'

import { StackTool } from './StackTool'

describe('StackTool component', () => {
  let component

  const props = {
    tool: {
      name: 'Tool 1',
      logo: './media/tool-1.svg'
    }
  }

  beforeAll(() => {
    component = shallow(<StackTool {...props} />)
  })

  it('should render', () => {
    expect(component).toExist()
  })

  it('should render the name', () => {
    expect(component.text()).toContain(props.tool.name)
  })

  it('should render the logo', () => {
    const image = component.find('img')
    expect(image.prop('src')).toEqual(props.tool.logo)
    expect(image.prop('alt')).toEqual(props.tool.name)
  })
})
