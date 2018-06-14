import { call, takeEvery } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'

export default function * () {
  yield takeEvery(LOCATION_CHANGE, trackLocationChange)
}

export function * trackLocationChange(action) {
  const trackingId = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID

  yield call(window.gtag, 'config', trackingId, {
    page_path: action.payload.pathname
  })
}
