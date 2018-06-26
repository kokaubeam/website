import { takeLatest, put, call } from 'redux-saga/effects'
import { WORK_HISTORY_REQUEST } from './constants'
import * as workHistoryService from './service'
import {
  requestWorkHistorySuccess,
  requestWorkHistoryFailure
} from './actions'

export default function * () {
  yield takeLatest(WORK_HISTORY_REQUEST, handleWorkHistoryRequest)
}

export function * handleWorkHistoryRequest() {
  try {
    const workHistory = yield call(workHistoryService.getWorkHistory)
    yield put(requestWorkHistorySuccess(workHistory))
  } catch (error) {
    yield put(requestWorkHistoryFailure(error))
  }
}
