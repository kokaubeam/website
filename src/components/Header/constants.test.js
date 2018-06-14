import {
  HEADER_NAV_CLOSE,
  HEADER_NAV_TOGGLE
} from './constants'

describe('Header constants', () => {
  it('should export HEADER_NAV_CLOSE', () => {
    expect(HEADER_NAV_CLOSE).toBeDefined()
  })

  it('should export HEADER_NAV_TOGGLE', () => {
    expect(HEADER_NAV_TOGGLE).toBeDefined()
  })
})
