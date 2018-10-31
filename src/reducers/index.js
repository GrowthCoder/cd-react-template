import { combineReducers } from 'redux';
import counter from './counter'
import auth from './auth'
// combineReducers用于Reducer的拆分
// State 的属性名必须与子 Reducer 同名
const rootReducer = combineReducers({
  counter,
  auth
})

export default rootReducer