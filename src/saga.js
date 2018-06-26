import { all } from 'redux-saga/effects'
import { saga as analyticsSaga } from './components/Analytics'
import { saga as headerSaga } from './components/Header'
import { saga as stackSaga } from './components/Stack'
import { saga as workHistorySaga } from './components/WorkHistory'

export default function * () {
  yield all([
    analyticsSaga(),
    headerSaga(),
    stackSaga(),
    workHistorySaga()
  ])
}
