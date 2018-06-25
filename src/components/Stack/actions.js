import {
  STACK_REQUEST,
  STACK_REQUEST_SUCCESS,
  STACK_REQUEST_FAILURE
} from './constants'

export function requestStack() {
  return {
    type: STACK_REQUEST
  }
}

export function requestStackSuccess(stack) {
  return {
    type: STACK_REQUEST_SUCCESS,
    stack
  }
}

export function requestStackFailure(error) {
  return {
    type: STACK_REQUEST_FAILURE,
    error
  }
}
