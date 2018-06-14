import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as headerReducer } from './components/Header'

const rootReducer = combineReducers({
  header: headerReducer,
  router: routerReducer
})

export default rootReducer
