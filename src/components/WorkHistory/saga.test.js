import { takeLatest, put, call } from 'redux-saga/effects'
import { WORK_HISTORY_REQUEST } from './constants'
import * as workHistoryService from './service'
import {
  requestWorkHistory,
  requestWorkHistorySuccess,
  requestWorkHistoryFailure
} from './actions'

import saga, { handleWorkHistoryRequest } from './saga'

describe('WorkHistory saga', () => {
  describe('#saga', () => {
    let generator

    beforeAll(() => {
      generator = saga()
    })

    it('should forward the latest WORK_HISTORY_REQUEST to handleWorkHistoryRequest', () => {
      expect(generator.next().value).toEqual(takeLatest(WORK_HISTORY_REQUEST, handleWorkHistoryRequest))
    })

    it('should be done', () => {
      expect(generator.next().done).toBe(true)
    })
  })

  describe('#handleWorkHistoryRequest', () => {
    const mockAction = requestWorkHistory()

    describe('when successful', () => {
      let generator

      const mockWorkHistory = [{
        name: 'Business Tools',
        tools: [{
          name: 'Slack',
          logo: './media/slack.svg'
        }]
      }]

      beforeAll(() => {
        generator = handleWorkHistoryRequest(mockAction)
      })

      it('should get the work history from the work history service', () => {
        expect(generator.next().value).toEqual(call(workHistoryService.getWorkHistory))
      })

      it('should dispatch that the work history request was successful', () => {
        expect(generator.next(mockWorkHistory).value).toEqual(put(
          requestWorkHistorySuccess(mockWorkHistory)
        ))
      })

      it('should be done', () => {
        expect(generator.next().done).toBe(true)
      })
    })

    describe('when the work history service fails', () => {
      let generator

      const mockError = new Error('Everything is fine! Nothing is ruined!')

      beforeAll(() => {
        generator = handleWorkHistoryRequest(mockAction)
      })

      it('should get the work history from the work history service', () => {
        expect(generator.next().value).toEqual(call(workHistoryService.getWorkHistory))
      })

      it('should dispatch that the work history request failed', () => {
        expect(generator.throw(mockError).value).toEqual(put(
          requestWorkHistoryFailure(mockError)
        ))
      })

      it('should be done', () => {
        expect(generator.next().done).toBe(true)
      })
    })
  })
})
