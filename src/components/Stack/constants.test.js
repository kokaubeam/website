import {
  STACK_REQUEST,
  STACK_REQUEST_SUCCESS,
  STACK_REQUEST_FAILURE
} from './constants'

describe('Stack constants', () => {
  it('should export STACK_REQUEST', () => {
    expect(STACK_REQUEST).toBeDefined()
  })

  it('should export STACK_REQUEST_SUCCESS', () => {
    expect(STACK_REQUEST_SUCCESS).toBeDefined()
  })

  it('should export STACK_REQUEST_FAILURE', () => {
    expect(STACK_REQUEST_FAILURE).toBeDefined()
  })
})
