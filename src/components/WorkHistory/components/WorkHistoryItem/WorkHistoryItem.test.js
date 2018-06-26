import React from 'react'
import { shallow } from 'enzyme'

import { WorkHistoryItem } from './WorkHistoryItem'

describe('WorkHistoryItem component', () => {
  let component

  const props = {
    history: {
      name: 'Insuricare',
      position: 'Insurance Agent',
      description: 'Exploiting every loophole, dodging every obstacle! Penetrating the bureaucracy!',
      logo: './media/insuricare.svg',
      start: new Date('Feb 2012'),
      end: new Date('Mar 2015')
    }
  }

  beforeAll(() => {
    component = shallow(<WorkHistoryItem {...props} />)
  })

  it('should render', () => {
    expect(component).toExist()
  })

  it('should render the name', () => {
    expect(component.text()).toContain(props.history.name)
  })

  it('should render the position', () => {
    expect(component.text()).toContain(props.history.position)
  })

  it('should render the description', () => {
    expect(component.text()).toContain(props.history.description)
  })

  it('should render the logo', () => {
    const image = component.find('img')
    expect(image.prop('src')).toEqual(props.history.logo)
  })

  it('should render a formatted timespan', () => {
    expect(component.text()).toContain('Feb 2012 – Mar 2015')
  })
})
