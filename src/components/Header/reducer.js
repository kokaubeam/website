import {
  HEADER_NAV_CLOSE,
  HEADER_NAV_TOGGLE
} from './constants'

const defaultState = {
  isNavOpen: false
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case HEADER_NAV_CLOSE:
      return {
        ...state,
        isNavOpen: false
      }
    case HEADER_NAV_TOGGLE:
      return {
        ...state,
        isNavOpen: !state.isNavOpen
      }
    default:
      return state
  }
}

export default reducer
