import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import rootSaga from './saga'

jest.mock('redux')
jest.mock('history/createBrowserHistory')
jest.mock('react-router-redux')
jest.mock('redux-saga')
jest.mock('./reducer')
jest.mock('./saga')

describe('Store', () => {
  let store
  let history

  const mockHistory = 'mockHistory'
  const mockSagaMiddleware = {
    run: jest.fn()
  }
  const mockRouterMiddleware = 'mockRouterMiddleware'
  const mockAppliedMiddleware = 'mockAppliedMiddleware'
  const mockStore = 'mockStore'

  beforeAll(() => {
    createHistory.mockReturnValue(mockHistory)
    createSagaMiddleware.mockReturnValue(mockSagaMiddleware)
    createRouterMiddleware.mockReturnValue(mockRouterMiddleware)
    applyMiddleware.mockReturnValue(mockAppliedMiddleware)
    createStore.mockReturnValue(mockStore)

    const storeImport = require('./store')
    store = storeImport.default
    history = storeImport.history
  })

  it('should create the history', () => {
    expect(createHistory).toBeCalled()
  })

  it('should export the history', () => {
    expect(history).toBe(mockHistory)
  })

  it('should create the saga middleware', () => {
    expect(createSagaMiddleware).toHaveBeenCalledTimes(1)
  })

  it('should create the router middleware with the history', () => {
    expect(createRouterMiddleware).toBeCalledWith(mockHistory)
  })

  it('should apply the middleware', () => {
    expect(applyMiddleware).toHaveBeenCalledTimes(1)
    expect(applyMiddleware).toHaveBeenCalledWith(
      mockRouterMiddleware,
      mockSagaMiddleware
    )
  })

  it('should create the store', () => {
    expect(createStore).toHaveBeenCalledTimes(1)
    expect(createStore).toHaveBeenCalledWith(rootReducer, mockAppliedMiddleware)
  })

  it('should run the root saga', () => {
    expect(mockSagaMiddleware.run).toBeCalledWith(rootSaga)
  })

  it('should export the store', () => {
    expect(store).toBe(mockStore)
  })
})
