import api from '@src/api'
export const LOGIN = Symbol('LOGIN')
export const LOGOUT = Symbol('LOGOUT')
export const PROVINCE = Symbol('PROVINCE')
// action is a object, type is required
// 要发多少种消息 就有多少个action
// export function login () {
//   return {
//     type: LOGIN
//   }
// }

export function logout () {
  return {
    type: LOGOUT
  }
}

export function login () {
  return dispatch => {
    api.getCity({
      query: {
        provinceId: 11111
      }
    }).then(res=>{
      dispatch(getProvince(res.data.data))
    })
  }
}

export function getProvince (data) {
  return {
    type: PROVINCE,
    payload: data
  }
}