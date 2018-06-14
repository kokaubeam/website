import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as headerReducer } from './components/Header'

jest.mock('redux')
jest.mock('react-router-redux')

describe('Root reducer', () => {
  let rootReducer

  const mockCombinedReducer = 'mockCombinedReducer'

  beforeAll(() => {
    combineReducers.mockReturnValue(mockCombinedReducer)
    rootReducer = require('./reducer').default
  })

  it('should combine the reducers', () => {
    expect(combineReducers).toHaveBeenCalledTimes(1)
    expect(combineReducers).toHaveBeenCalledWith({
      header: headerReducer,
      router: routerReducer
    })
  })

  it('should export the combinded reducer', () => {
    expect(rootReducer).toBe(mockCombinedReducer)
  })
})
