import {
  HEADER_NAV_CLOSE,
  HEADER_NAV_TOGGLE
} from './constants'

import {
  headerNavClose,
  headerNavToggle
} from './actions'

describe('Header actions', () => {
  describe('#headerNavClose', () => {
    let action

    beforeAll(() => {
      action = headerNavClose()
    })

    it('should create a HEADER_NAV_CLOSE action', () => {
      expect(action).toEqual({
        type: HEADER_NAV_CLOSE
      })
    })
  })

  describe('#headerNavToggle', () => {
    let action

    beforeAll(() => {
      action = headerNavToggle()
    })

    it('should create a HEADER_NAV_TOGGLE action', () => {
      expect(action).toEqual({
        type: HEADER_NAV_TOGGLE
      })
    })
  })
})
