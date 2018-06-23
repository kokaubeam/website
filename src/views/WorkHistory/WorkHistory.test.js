import React from 'react'
import { shallow } from 'enzyme'
import data from './data'
import WorkHistoryItem from './components/WorkHistoryItem'

import { WorkHistory } from './WorkHistory'

describe('WorkHistory component', () => {
  let component

  beforeAll(() => {
    component = shallow(<WorkHistory />)
  })

  it('should render', () => {
    expect(component).toExist()
  })

  it('should render the title', () => {
    const title = component.find('h1')
    expect(title.text()).toContain('Work History')
  })

  it('should render a WorkHistoryItem for each item in the work history', () => {
    const histories = component.find(WorkHistoryItem)
    expect(histories.length).toBe(data.length)
  })

  it('should set the properties on each WorkHistoryItem', () => {
    const histories = component.find(WorkHistoryItem)
    histories.forEach((history, index) => {
      expect(history.prop('name')).toBe(data[index].name)
      expect(history.prop('logo')).toBe(data[index].logo)
    })
  })
})
