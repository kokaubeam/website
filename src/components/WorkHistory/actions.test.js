import {
  WORK_HISTORY_REQUEST,
  WORK_HISTORY_REQUEST_SUCCESS,
  WORK_HISTORY_REQUEST_FAILURE
} from './constants'

import {
  requestWorkHistory,
  requestWorkHistorySuccess,
  requestWorkHistoryFailure
} from './actions'

describe('WorkHistory actions', () => {
  describe('#requestWorkHistory', () => {
    let action

    beforeAll(() => {
      action = requestWorkHistory()
    })

    it('should create the action', () => {
      expect(action).toEqual({
        type: WORK_HISTORY_REQUEST
      })
    })
  })

  describe('#requestWorkHistorySuccess', () => {
    let action

    const mockWorkHistory = [{
      name: 'Aperture Science',
      position: 'Test Subject',
      description: 'Ate cake and tested Aperature Science products.',
      logo: './media/aperture-science.svg',
      start: new Date('Jun 1, 1940'),
      end: new Date('Aug 1, 1998')
    }]

    beforeAll(() => {
      action = requestWorkHistorySuccess(mockWorkHistory)
    })

    it('should create the action', () => {
      expect(action).toEqual({
        type: WORK_HISTORY_REQUEST_SUCCESS,
        workHistory: mockWorkHistory
      })
    })
  })

  describe('#requestWorkHistoryFailure', () => {
    let action

    const mockError = new Error('Everything is fine! Nothing is ruined!')

    beforeAll(() => {
      action = requestWorkHistoryFailure(mockError)
    })

    it('should create the action', () => {
      expect(action).toEqual({
        type: WORK_HISTORY_REQUEST_FAILURE,
        error: mockError
      })
    })
  })
})
