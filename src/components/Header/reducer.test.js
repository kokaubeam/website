import {
  HEADER_NAV_CLOSE,
  HEADER_NAV_TOGGLE
} from './constants'

import reducer from './reducer'

describe('Header reducer', () => {
  describe('when the state is undefined', () => {
    let state

    beforeAll(() => {
      state = reducer(undefined, { type: '@@INIT' })
    })

    it('should return the default state', () => {
      expect(state).toEqual({
        isNavOpen: false
      })
    })
  })

  describe('when reducing an action that it does NOT follow', () => {
    let state

    const prevState = {
      isNavOpen: true
    }

    beforeAll(() => {
      state = reducer(prevState, { type: 'unfollowed-action' })
    })

    it('should NOT modify the state', () => {
      expect(state).toBe(prevState)
    })
  })

  describe('when reducing HEADER_NAV_CLOSE', () => {
    let state

    const prevState = {
      isNavOpen: true
    }

    const mockAction = {
      type: HEADER_NAV_CLOSE
    }

    beforeAll(() => {
      state = reducer(prevState, mockAction)
    })

    it('should close the nav', () => {
      expect(state).toEqual({
        isNavOpen: false
      })
    })
  })

  describe('when reducing HEADER_TOGGLE_MENU', () => {
    describe('when the nav is open', () => {
      let state

      const prevState = {
        isNavOpen: true
      }

      const mockAction = {
        type: HEADER_NAV_TOGGLE
      }

      beforeAll(() => {
        state = reducer(prevState, mockAction)
      })

      it('should close the nav', () => {
        expect(state).toEqual({
          isNavOpen: false
        })
      })
    })

    describe('when the nav is closed', () => {
      let state

      const prevState = {
        isNavOpen: false
      }

      const mockAction = {
        type: HEADER_NAV_TOGGLE
      }

      beforeAll(() => {
        state = reducer(prevState, mockAction)
      })

      it('should open the nav', () => {
        expect(state).toEqual({
          isNavOpen: true
        })
      })
    })
  })
})
