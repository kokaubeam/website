import { all } from 'redux-saga/effects'
import { saga as analyticsSaga } from './components/Analytics'
import { saga as headerSaga } from './components/Header'

export default function * () {
  yield all([
    analyticsSaga(),
    headerSaga()
  ])
}
