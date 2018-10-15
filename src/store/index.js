import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '@src/reducers'

// combineReducers用于Reducer的拆分
const reducer = combineReducers(reducers)

// Reducer函数会自动执行 无需手动调用
// reducers传入，每当store.dispatch发送来一个新action 会自动调用Reducer 得到新的State
const store = createStore(reducer, applyMiddleware(thunk))

export default store