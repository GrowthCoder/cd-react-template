export const COUNTER_ADD = Symbol('COUNTER_ADD')
export const COUNTER_RESET = Symbol('COUNTER_RESET')

export function addCounter () {
  return {
    type: COUNTER_ADD // action name
  }
}

export function asyncCount () {
  // return a function,simulation async operation
  return dispatch => {
    setTimeout(() => {
      dispatch(addCounter())
    }, 1000)
  }
}