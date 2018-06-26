import { takeLatest, put, call } from 'redux-saga/effects'
import { STACK_REQUEST } from './constants'
import * as stackService from './service'
import {
  requestStack,
  requestStackSuccess,
  requestStackFailure
} from './actions'

import saga, { handleStackRequest } from './saga'

describe('Stack saga', () => {
  describe('#saga', () => {
    let generator

    beforeAll(() => {
      generator = saga()
    })

    it('should forward the latest STACK_REQUEST to handleStackRequest', () => {
      expect(generator.next().value).toEqual(takeLatest(STACK_REQUEST, handleStackRequest))
    })

    it('should be done', () => {
      expect(generator.next().done).toBe(true)
    })
  })

  describe('#handleStackRequest', () => {
    const mockAction = requestStack()

    describe('when successful', () => {
      let generator

      const mockStack = [{
        name: 'Business Tools',
        tools: [{
          name: 'Slack',
          logo: './media/slack.svg'
        }]
      }]

      beforeAll(() => {
        generator = handleStackRequest(mockAction)
      })

      it('should get the stack from the stack service', () => {
        expect(generator.next().value).toEqual(call(stackService.getStack))
      })

      it('should dispatch that the stack request was successful', () => {
        expect(generator.next(mockStack).value).toEqual(put(
          requestStackSuccess(mockStack)
        ))
      })

      it('should be done', () => {
        expect(generator.next().done).toBe(true)
      })
    })

    describe('when the stack service fails', () => {
      let generator

      const mockError = new Error('Everything is fine! Nothing is ruined!')

      beforeAll(() => {
        generator = handleStackRequest(mockAction)
      })

      it('should get the stack from the stack service', () => {
        expect(generator.next().value).toEqual(call(stackService.getStack))
      })

      it('should dispatch that the stack request failed', () => {
        expect(generator.throw(mockError).value).toEqual(put(
          requestStackFailure(mockError)
        ))
      })

      it('should be done', () => {
        expect(generator.next().done).toBe(true)
      })
    })
  })
})
