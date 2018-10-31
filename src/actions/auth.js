export const LOGIN = Symbol('LOGIN')
export const LOGOUT = Symbol('LOGOUT')
// action is a object, type is required
// 要发多少种消息 就有多少个action
export function login () {
  return {
    type: LOGIN
  }
}

export function logout () {
  return {
    type: LOGOUT
  }
}