import {
  WORK_HISTORY_REQUEST_SUCCESS
} from './constants'

const defaultState = []

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case WORK_HISTORY_REQUEST_SUCCESS:
      return [...action.workHistory]
    default:
      return state
  }
}

export default reducer
