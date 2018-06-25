import {
  STACK_REQUEST_SUCCESS
} from './constants'

const defaultState = {
  tagSortOrder: ['Toolkit', 'Data', 'Infrastructure', 'Business Tools'],
  tools: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case STACK_REQUEST_SUCCESS:
      return {
        ...state,
        tools: [...action.stack.tools]
      }
    default:
      return state
  }
}

export default reducer
