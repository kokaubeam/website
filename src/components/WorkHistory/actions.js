import {
  WORK_HISTORY_REQUEST,
  WORK_HISTORY_REQUEST_SUCCESS,
  WORK_HISTORY_REQUEST_FAILURE
} from './constants'

export function requestWorkHistory() {
  return {
    type: WORK_HISTORY_REQUEST
  }
}

export function requestWorkHistorySuccess(workHistory) {
  return {
    type: WORK_HISTORY_REQUEST_SUCCESS,
    workHistory
  }
}

export function requestWorkHistoryFailure(error) {
  return {
    type: WORK_HISTORY_REQUEST_FAILURE,
    error
  }
}
