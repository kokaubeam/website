import {
  WORK_HISTORY_REQUEST_SUCCESS
} from './constants'

import reducer from './reducer'

describe('WorkHistory reducer', () => {
  describe('when the state is undefined', () => {
    let state

    beforeAll(() => {
      state = reducer(undefined, { type: '@@INIT' })
    })

    it('should return the default state', () => {
      expect(state).toEqual([])
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

  describe('when reducing WORK_HISTORY_REQUEST_SUCCESS', () => {
    let state

    const prevState = []

    const mockWorkHistory = [{
      name: 'Aperture Science',
      position: 'Test Subject',
      description: 'Ate cake and tested Aperature Science products.',
      logo: './media/aperture-science.svg',
      start: new Date('Jun 1, 1940'),
      end: new Date('Aug 1, 1998')
    }]

    const mockAction = {
      type: WORK_HISTORY_REQUEST_SUCCESS,
      workHistory: mockWorkHistory
    }

    beforeAll(() => {
      state = reducer(prevState, mockAction)
    })

    it('should update the tools', () => {
      expect(state).toEqual(mockWorkHistory)
    })
  })
})
