import React from 'react'
import { shallow } from 'enzyme'

import { StackTool } from './StackTool'

describe('StackTool component', () => {
  let component

  const props = {
    tool: {
      name: 'Tool 1',
      url: 'https://tool-1.puppies',
      logo: './media/tool-1.svg'
    }
  }

  beforeAll(() => {
    component = shallow(<StackTool {...props} />)
  })

  it('should render', () => {
    expect(component).toExist()
  })

  it('should link to the tool\'s website', () => {
    expect(component.prop('href')).toBe(props.tool.url)
    expect(component.prop('target')).toBe('_blank')
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
