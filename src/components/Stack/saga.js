import { takeLatest, put, call } from 'redux-saga/effects'
import { STACK_REQUEST } from './constants'
import * as stackService from './service'
import {
  requestStackSuccess,
  requestStackFailure
} from './actions'

export default function * () {
  yield takeLatest(STACK_REQUEST, handleStackRequest)
}

export function * handleStackRequest() {
  try {
    const stacks = yield call(stackService.getStack)
    yield put(requestStackSuccess(stacks))
  } catch (error) {
    yield put(requestStackFailure(error))
  }
}
