import { takeLatest, put, call } from 'redux-saga/effects'
import { EXPERIENCE_REQUEST } from './constants'
import * as experienceService from './service'
import {
  requestExperienceSuccess,
  requestExperienceFailure
} from './actions'

export default function * () {
  yield takeLatest(EXPERIENCE_REQUEST, handleExperienceRequest)
}

export function * handleExperienceRequest() {
  try {
    const experience = yield call(experienceService.getExperience)
    yield put(requestExperienceSuccess(experience))
  } catch (error) {
    yield put(requestExperienceFailure(error))
  }
}
