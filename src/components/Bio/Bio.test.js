import React from 'react'
import { shallow } from 'enzyme'
import meImage from './media/me.jpg'

import { Bio } from './Bio'

describe('Bio component', () => {
  let component

  beforeAll(() => {
    component = shallow(<Bio />)
  })

  it('should render', () => {
    expect(component).toExist()
  })

  it('should render a bio image', () => {
    const img = component.find('img').filterWhere(n => n.prop('src') === meImage)
    expect(img).toExist()
  })

  it('should render the title', () => {
    const title = component.find('h1')
    expect(title.text()).toContain('Husband, Father, Technology Innovator')
  })

  it('should render the content', () => {
    expect(component.text()).toContain('I love thoughts and ideas, enjoy conversation and people, and am drivin by learning and creativity.')
    expect(component.text()).toContain('Professionally, I thrive in technology and exploring its ever evolving potential to transform the way we live and connect.')
  })
})
