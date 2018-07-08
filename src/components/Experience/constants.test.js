import {
  EXPERIENCE_REQUEST,
  EXPERIENCE_REQUEST_SUCCESS,
  EXPERIENCE_REQUEST_FAILURE
} from './constants'

describe('Experience constants', () => {
  it('should export EXPERIENCE_REQUEST', () => {
    expect(EXPERIENCE_REQUEST).toBeDefined()
  })

  it('should export EXPERIENCE_REQUEST_SUCCESS', () => {
    expect(EXPERIENCE_REQUEST_SUCCESS).toBeDefined()
  })

  it('should export EXPERIENCE_REQUEST_FAILURE', () => {
    expect(EXPERIENCE_REQUEST_FAILURE).toBeDefined()
  })
})
