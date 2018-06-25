import React from 'react'
import { shallow } from 'enzyme'
import StackToolGroup from '../StackToolGroup'
import Bio from '../../../Bio'
import { stackOrderedGroupedByTagSelector } from '../../selectors'
import { requestStack } from '../../actions'

jest.mock('../../selectors')

import {
  StackPage,
  mapStateToProps,
  mapDispatchToProps
} from './StackPage'

describe('StackPage component', () => {
  let component

  const props = {
    stackGroups: [{
      name: 'Business Tools',
      tools: [{
        name: 'Slack',
        logo: './media/slack.svg'
      }]
    }, {
      name: 'Data',
      tools: [{
        name: 'Kafka',
        logo: './media/kafka.svg'
      }]
    }],
    getStack: jest.fn()
  }

  beforeAll(() => {
    component = shallow(<StackPage {...props} />)
  })

  it('should render', () => {
    expect(component).toExist()
  })

  it('should render the title', () => {
    const title = component.find('h1')
    expect(title.text()).toContain('The Stack')
  })

  it('should render a StackToolGroup for each group', () => {
    const stackToolGroups = component.find(StackToolGroup)
    expect(stackToolGroups.length).toBe(props.stackGroups.length)
  })

  it('should set the properties on each StackToolGroup', () => {
    const stackToolGroups = component.find(StackToolGroup)
    stackToolGroups.forEach((stackToolGroup, index) => {
      expect(stackToolGroup.prop('name')).toBe(props.stackGroups[index].name)
      expect(stackToolGroup.prop('tools')).toBe(props.stackGroups[index].tools)
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
    const mockOrderedGroups = [{
      name: 'Group 1'
    }]

    beforeAll(() => {
      stackOrderedGroupedByTagSelector.mockReturnValue(mockOrderedGroups)
      map = mapStateToProps(mockState)
    })

    afterAll(() => {
      stackOrderedGroupedByTagSelector.mockReset()
    })

    it('should select the stack groups', () => {
      expect(stackOrderedGroupedByTagSelector).toHaveBeenCalledWith(mockState)
    })

    it('should map the state to the props', () => {
      expect(map).toEqual({
        stackGroups: mockOrderedGroups
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
        getStack: expect.any(Function)
      })
    })

    describe('#getStack', () => {
      beforeAll(() => {
        map.getStack()
      })

      it('should request the stack', () => {
        expect(mockDispatch).toHaveBeenCalledWith(requestStack())
      })
    })
  })
})
