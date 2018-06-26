import React from 'react'
import { shallow } from 'enzyme'
import data from '../../data'
import WorkHistoryItem from '../WorkHistoryItem'
import Bio from '../../../Bio'

import { WorkHistoryPage } from './WorkHistoryPage'

describe('WorkHistoryPage component', () => {
  let component

  beforeAll(() => {
    jest.spyOn(data, 'sort')
    component = shallow(<WorkHistoryPage />)
  })

  afterAll(() => {
    data.sort.mockRestore()
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
      expect(history.prop('history')).toBe(data[index])
    })
  })

  it('should have sorted the work history to show the most recent history first', () => {
    expect(data.sort).toHaveBeenCalled()

    const sortFunction = data.sort.mock.calls[0][0]
    const toSort = [{
      start: new Date('2010')
    }, {
      start: new Date('2020')
    }, {
      start: new Date('2015')
    }]

    toSort.sort(sortFunction)

    expect(toSort[0].start).toEqual(new Date('2020'))
  })

  it('should render the bio', () => {
    const bio = component.find(Bio)
    expect(bio).toExist()
  })
})
