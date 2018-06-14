import { call, takeEvery } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'

import saga, { trackLocationChange } from './saga'

describe('Analytics saga', () => {
  describe('#saga', () => {
    let generator

    beforeAll(() => {
      generator = saga()
    })

    it('should forward every LOCATION_CHANGE to trackLocationChange', () => {
      expect(generator.next().value).toEqual(takeEvery(LOCATION_CHANGE, trackLocationChange))
    })

    it('should be done', () => {
      expect(generator.next().done).toBe(true)
    })
  })

  describe('#trackLocationChange', () => {
    let generator

    const mockAction = {
      type: LOCATION_CHANGE,
      payload: {
        pathname: '/test'
      }
    }

    let restoreTrackingIdEnvVar
    const mockTrackingIdEnvVar = 'GA_TRACKING_ID'

    beforeAll(() => {
      window.gtag = () => ({})
      restoreTrackingIdEnvVar = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID
      process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID = mockTrackingIdEnvVar
      generator = trackLocationChange(mockAction)
    })

    afterAll(() => {
      process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID = restoreTrackingIdEnvVar
    })

    it('should push a page view to Google Analytics', () => {
      expect(generator.next().value).toEqual(call(window.gtag, 'config', mockTrackingIdEnvVar, {
        'page_path': mockAction.payload.pathname
      }))
    })

    it('should be done', () => {
      expect(generator.next().done).toBe(true)
    })
  })
})
