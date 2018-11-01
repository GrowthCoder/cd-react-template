import * as types from '@src/actions/auth'

export default function auth(state = {
  isAuth: false,
  user: 'gaoting'
}, action) {
  switch (action.type) {
    case types.LOGIN: 
      return {
        ...state,
        isAuth: true
      }
    case types.LOGOUT: 
      return {
        ...state,
        isAuth: false
      }
    case types.PROVINCE: 
      return {
        ...state,
        data: action.payload
      }
    default: 
      return state
  }
}