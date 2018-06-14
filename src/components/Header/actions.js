import {
  HEADER_NAV_CLOSE,
  HEADER_NAV_TOGGLE
} from './constants'

export const headerNavClose = () => ({
  type: HEADER_NAV_CLOSE
})

export const headerNavToggle = () => ({
  type: HEADER_NAV_TOGGLE
})
