/**
 * applyMiddleware 
 * 接受第三方中间件
 * 中间件组成一个数组，依次执行
 * 中间件执行有次序要求
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // 处理异步
import rootReducer from '@src/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'; // redux调试工具

// Reducer函数会自动执行 无需手动调用
// reducers传入，每当store.dispatch发送来一个新action 会自动调用Reducer 得到新的State
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk))
)


export default store