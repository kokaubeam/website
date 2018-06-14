import { put, takeEvery } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { headerNavClose } from './actions'

export default function * () {
  yield takeEvery(LOCATION_CHANGE, closeHeaderNav)
}

export function * closeHeaderNav() {
  yield put(headerNavClose())
}
