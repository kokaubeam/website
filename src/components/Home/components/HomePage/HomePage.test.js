import React from 'react'
import { shallow } from 'enzyme'
import meImage from '../../media/me.jpg'
import laptopImage from '../../media/laptop.jpg'

import { HomePage } from './HomePage'

describe('HomePage component', () => {
  let component

  beforeAll(() => {
    component = shallow(<HomePage />)
  })

  it('should render', () => {
    expect(component).toExist()
  })

  it('should render a bio image', () => {
    const img = component.find('img').filterWhere(n => n.prop('src') === meImage)
    expect(img).toExist()
  })

  it('should render a laptop image', () => {
    const img = component.find('img').filterWhere(n => n.prop('src') === laptopImage)
    expect(img).toExist()
  })

  it('should render the title', () => {
    const title = component.find('h1')
    expect(title.text()).toContain('Husband, Father, Technology Innovator')
  })

  it('should render the content', () => {
    const content = component.find('main').text()
    expect(content).toContain('Hi, I’m Jonathan.')
    expect(content).toContain('I love thoughts and ideas. I enjoy conversation and people. I’m drivin by learning and creativity.')
    expect(content).toContain('Professionally, I thrive in technology and exploring it’s ever evolving potential to transform the way we live and connect.')
  })
})
