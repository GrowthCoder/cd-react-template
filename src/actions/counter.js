const COUNTER_ADD = Symbol('COUNTER_ADD')
const COUNTER_RESET = Symbol('COUNTER_RESET')

export function addCounter () {
  return {
    type: COUNTER_ADD // action name
  }
}