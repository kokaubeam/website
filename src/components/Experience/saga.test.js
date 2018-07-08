import { takeLatest, put, call } from 'redux-saga/effects'
import { EXPERIENCE_REQUEST } from './constants'
import * as experienceService from './service'
import {
  requestExperience,
  requestExperienceSuccess,
  requestExperienceFailure
} from './actions'

import saga, { handleExperienceRequest } from './saga'

describe('Experience saga', () => {
  describe('#saga', () => {
    let generator

    beforeAll(() => {
      generator = saga()
    })

    it('should forward the latest EXPERIENCE_REQUEST to handleExperienceRequest', () => {
      expect(generator.next().value).toEqual(takeLatest(EXPERIENCE_REQUEST, handleExperienceRequest))
    })

    it('should be done', () => {
      expect(generator.next().done).toBe(true)
    })
  })

  describe('#handleExperienceRequest', () => {
    const mockAction = requestExperience()

    describe('when successful', () => {
      let generator

      const mockExperience = [{
        name: 'Business Tools',
        tools: [{
          name: 'Slack',
          logo: './media/slack.svg'
        }]
      }]

      beforeAll(() => {
        generator = handleExperienceRequest(mockAction)
      })

      it('should get the work history from the work history service', () => {
        expect(generator.next().value).toEqual(call(experienceService.getExperience))
      })

      it('should dispatch that the work history request was successful', () => {
        expect(generator.next(mockExperience).value).toEqual(put(
          requestExperienceSuccess(mockExperience)
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
        generator = handleExperienceRequest(mockAction)
      })

      it('should get the work history from the work history service', () => {
        expect(generator.next().value).toEqual(call(experienceService.getExperience))
      })

      it('should dispatch that the work history request failed', () => {
        expect(generator.throw(mockError).value).toEqual(put(
          requestExperienceFailure(mockError)
        ))
      })

      it('should be done', () => {
        expect(generator.next().done).toBe(true)
      })
    })
  })
})
