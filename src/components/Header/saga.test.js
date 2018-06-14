import { put, takeEvery } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { headerNavClose } from './actions'

import saga, { closeHeaderNav } from './saga'

describe('Header saga', () => {
  describe('#saga', () => {
    let generator

    beforeAll(() => {
      generator = saga()
    })

    it('should forward every LOCATION_CHANGE action to closeHeaderNav', () => {
      expect(generator.next().value).toEqual(takeEvery(LOCATION_CHANGE, closeHeaderNav))
    })

    it('should be done', () => {
      expect(generator.next().done).toBe(true)
    })
  })

  describe('#closeHeaderNav', () => {
    let generator

    beforeAll(() => {
      generator = closeHeaderNav()
    })

    it('should close the header nav', () => {
      expect(generator.next().value).toEqual(put(headerNavClose()))
    })

    it('should be done', () => {
      expect(generator.next().done).toBe(true)
    })
  })
})
