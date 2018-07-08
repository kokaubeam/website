import {
  EXPERIENCE_REQUEST_SUCCESS
} from './constants'

const defaultState = []

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case EXPERIENCE_REQUEST_SUCCESS:
      return [...action.experience]
    default:
      return state
  }
}

export default reducer
