import { all } from 'redux-saga/effects'
import { saga as analyticsSaga } from './components/Analytics'
import { saga as headerSaga } from './components/Header'
import { saga as stackSaga } from './components/Stack'
import { saga as experienceSaga } from './components/Experience'

export default function * () {
  yield all([
    analyticsSaga(),
    headerSaga(),
    stackSaga(),
    experienceSaga()
  ])
}
