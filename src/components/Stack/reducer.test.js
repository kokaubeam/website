import {
  STACK_REQUEST_SUCCESS
} from './constants'

import reducer from './reducer'

describe('Stack reducer', () => {
  describe('when the state is undefined', () => {
    let state

    beforeAll(() => {
      state = reducer(undefined, { type: '@@INIT' })
    })

    it('should return the default state', () => {
      expect(state).toEqual({
        tagSortOrder: ['Toolkit', 'Data', 'Infrastructure', 'Business Tools'],
        tools: []
      })
    })
  })

  describe('when reducing an action that it does NOT follow', () => {
    let state

    const prevState = {
      shouldNotBe: 'modified'
    }

    beforeAll(() => {
      state = reducer(prevState, { type: 'unfollowed-action' })
    })

    it('should NOT modify the state', () => {
      expect(state).toBe(prevState)
    })
  })

  describe('when reducing STACK_REQUEST_SUCCESS', () => {
    let state

    const prevState = {
      tagSortOrder: ['Tag 1', 'Tag 2'],
      tools: []
    }

    const mockStack = {
      tools: [{
        name: 'Slack',
        logo: './media/slack.svg',
        tags: ['Business Tools']
      }]
    }

    const mockAction = {
      type: STACK_REQUEST_SUCCESS,
      stack: mockStack
    }

    beforeAll(() => {
      state = reducer(prevState, mockAction)
    })

    it('should NOT modify the tagSortOrder', () => {
      expect(state.tagSortOrder).toEqual(prevState.tagSortOrder)
    })

    it('should update the tools', () => {
      expect(state.tools).toEqual(mockStack.tools)
    })
  })
})
