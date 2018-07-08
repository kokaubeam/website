import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as headerReducer } from './components/Header'
import { reducer as stackReducer } from './components/Stack'
import { reducer as experienceReducer } from './components/Experience'

const rootReducer = combineReducers({
  header: headerReducer,
  router: routerReducer,
  stack: stackReducer,
  experience: experienceReducer
})

export default rootReducer
