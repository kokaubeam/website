import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as headerReducer } from './components/Header'
import { reducer as stackReducer } from './components/Stack'

const rootReducer = combineReducers({
  header: headerReducer,
  router: routerReducer,
  stack: stackReducer
})

export default rootReducer
