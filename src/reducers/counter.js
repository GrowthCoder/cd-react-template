import * as types from '@src/actions/counter'
// Reducer为纯函数 同样输入 得到同样输出
// 整个应用的初始状态，可以作为state的默认值
export default function(state = {
  count: 0
}, action) {
  switch (action.type) {
    case types.COUNTER_ADD:
      return {
        ...state,
        count: state.count + 1
      }
    case types.COUNTER_RESET: 
      return {
        ...state,
        count: 0
      }
    default: 
      return state
  }
}