import {
  WORK_HISTORY_REQUEST,
  WORK_HISTORY_REQUEST_SUCCESS,
  WORK_HISTORY_REQUEST_FAILURE
} from './constants'

describe('WorkHistory constants', () => {
  it('should export WORK_HISTORY_REQUEST', () => {
    expect(WORK_HISTORY_REQUEST).toBeDefined()
  })

  it('should export WORK_HISTORY_REQUEST_SUCCESS', () => {
    expect(WORK_HISTORY_REQUEST_SUCCESS).toBeDefined()
  })

  it('should export WORK_HISTORY_REQUEST_FAILURE', () => {
    expect(WORK_HISTORY_REQUEST_FAILURE).toBeDefined()
  })
})
