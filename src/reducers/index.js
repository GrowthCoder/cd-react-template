import { combineReducers } from 'redux';
import counter from './counter'

// combineReducers用于Reducer的拆分
const rootReducer = combineReducers({
  counter
})

export default rootReducer