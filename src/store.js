import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import rootSaga from './saga'

export const history = createHistory()

const routerMiddleware = createRouterMiddleware(history)
const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(
  routerMiddleware,
  sagaMiddleware
)

const store = createStore(rootReducer, middleware)

sagaMiddleware.run(rootSaga)

export default store
