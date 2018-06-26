import React from 'react'
import { shallow } from 'enzyme'
import WorkHistoryItem from '../WorkHistoryItem'
import Bio from '../../../Bio'
import { workHistoryOrderByStartSelector } from '../../selectors'
import { requestWorkHistory } from '../../actions'

jest.mock('../../selectors')

import {
  WorkHistoryPage,
  mapStateToProps,
  mapDispatchToProps
} from './WorkHistoryPage'

describe('WorkHistoryPage component', () => {
  let component

  const props = {
    workHistory: [{
      name: 'Aperture Science',
      position: 'Test Subject',
      description: 'Ate cake and tested Aperature Science products.',
      logo: './media/aperture-science.svg',
      start: new Date('Jun 1, 1940'),
      end: new Date('Aug 1, 1998')
    }, {
      name: 'Black Mesa',
      position: 'Level 3 Research Associate Scientist',
      description: 'Defended the human race against hostile aliens. Lead an uprising against alien invaders.',
      logo: './media/black-mesa.svg',
      start: new Date('May 1, 2000'),
      end: new Date('May 16, 2005')
    }],
    getWorkHistory: jest.fn()
  }

  beforeAll(() => {
    component = shallow(<WorkHistoryPage {...props} />)
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
    expect(histories.length).toBe(props.workHistory.length)
  })

  it('should set the properties on each WorkHistoryItem', () => {
    const histories = component.find(WorkHistoryItem)
    histories.forEach((history, index) => {
      expect(history.prop('history')).toBe(props.workHistory[index])
    })
  })

  it('should render the bio', () => {
    const bio = component.find(Bio)
    expect(bio).toExist()
  })

  describe('#mapStateToProps', () => {
    let map

    const mockState = {
      mock: 'mockState'
    }
    const mockWorkHistory = [{
      name: 'Aperture Science',
      position: 'Test Subject',
      description: 'Ate cake and tested Aperature Science products.',
      logo: './media/aperture-science.svg',
      start: new Date('Jun 1, 1940'),
      end: new Date('Aug 1, 1998')
    }]

    beforeAll(() => {
      workHistoryOrderByStartSelector.mockReturnValue(mockWorkHistory)
      map = mapStateToProps(mockState)
    })

    afterAll(() => {
      workHistoryOrderByStartSelector.mockReset()
    })

    it('should select the work history', () => {
      expect(workHistoryOrderByStartSelector).toHaveBeenCalledWith(mockState)
    })

    it('should map the state to the props', () => {
      expect(map).toEqual({
        workHistory: mockWorkHistory
      })
    })
  })

  describe('#mapDispatchToProps', () => {
    let map

    const mockDispatch = jest.fn()

    beforeAll(() => {
      map = mapDispatchToProps(mockDispatch)
    })

    it('should map the state to the props', () => {
      expect(map).toEqual({
        getWorkHistory: expect.any(Function)
      })
    })

    describe('#getWorkHistory', () => {
      beforeAll(() => {
        map.getWorkHistory()
      })

      it('should request the stack', () => {
        expect(mockDispatch).toHaveBeenCalledWith(requestWorkHistory())
      })
    })
  })
})
