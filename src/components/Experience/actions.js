import {
  EXPERIENCE_REQUEST,
  EXPERIENCE_REQUEST_SUCCESS,
  EXPERIENCE_REQUEST_FAILURE
} from './constants'

export function requestExperience() {
  return {
    type: EXPERIENCE_REQUEST
  }
}

export function requestExperienceSuccess(experience) {
  return {
    type: EXPERIENCE_REQUEST_SUCCESS,
    experience
  }
}

export function requestExperienceFailure(error) {
  return {
    type: EXPERIENCE_REQUEST_FAILURE,
    error
  }
}
