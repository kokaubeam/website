import {
  EXPERIENCE_REQUEST,
  EXPERIENCE_REQUEST_SUCCESS,
  EXPERIENCE_REQUEST_FAILURE
} from './constants'

import {
  requestExperience,
  requestExperienceSuccess,
  requestExperienceFailure
} from './actions'

describe('Experience actions', () => {
  describe('#requestExperience', () => {
    let action

    beforeAll(() => {
      action = requestExperience()
    })

    it('should create the action', () => {
      expect(action).toEqual({
        type: EXPERIENCE_REQUEST
      })
    })
  })

  describe('#requestExperienceSuccess', () => {
    let action

    const mockExperience = [{
      name: 'Aperture Science',
      position: 'Test Subject',
      description: 'Ate cake and tested Aperature Science products.',
      logo: './media/aperture-science.svg',
      start: new Date('Jun 1, 1940'),
      end: new Date('Aug 1, 1998')
    }]

    beforeAll(() => {
      action = requestExperienceSuccess(mockExperience)
    })

    it('should create the action', () => {
      expect(action).toEqual({
        type: EXPERIENCE_REQUEST_SUCCESS,
        experience: mockExperience
      })
    })
  })

  describe('#requestExperienceFailure', () => {
    let action

    const mockError = new Error('Everything is fine! Nothing is ruined!')

    beforeAll(() => {
      action = requestExperienceFailure(mockError)
    })

    it('should create the action', () => {
      expect(action).toEqual({
        type: EXPERIENCE_REQUEST_FAILURE,
        error: mockError
      })
    })
  })
})
