import {
  STACK_REQUEST,
  STACK_REQUEST_SUCCESS,
  STACK_REQUEST_FAILURE
} from './constants'

import {
  requestStack,
  requestStackSuccess,
  requestStackFailure
} from './actions'

describe('Stack actions', () => {
  describe('#requestStack', () => {
    let action

    beforeAll(() => {
      action = requestStack()
    })

    it('should create the action', () => {
      expect(action).toEqual({
        type: STACK_REQUEST
      })
    })
  })

  describe('#requestStackSuccess', () => {
    let action

    const mockStack = [{
      name: 'Slack',
      logo: './media/slack.svg',
      tags: ['Business Tools']
    }]

    beforeAll(() => {
      action = requestStackSuccess(mockStack)
    })

    it('should create the action', () => {
      expect(action).toEqual({
        type: STACK_REQUEST_SUCCESS,
        stack: mockStack
      })
    })
  })

  describe('#requestStackFailure', () => {
    let action

    const mockError = new Error('Everything is fine! Nothing is ruined!')

    beforeAll(() => {
      action = requestStackFailure(mockError)
    })

    it('should create the action', () => {
      expect(action).toEqual({
        type: STACK_REQUEST_FAILURE,
        error: mockError
      })
    })
  })
})
