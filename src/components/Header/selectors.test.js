import { isNavOpenSelector } from './selectors'

describe('Header selectors', () => {
  describe('#isNavOpenSelector', () => {
    let isNavOpen

    const mockState = {
      header: {
        isNavOpen: true
      }
    }

    beforeAll(() => {
      isNavOpen = isNavOpenSelector(mockState)
    })

    it('should select if the nav is open', () => {
      expect(isNavOpen).toBe(mockState.header.isNavOpen)
    })
  })
})
