import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from '../reducers/counter'

const reducers = combineReducers({
  counter: counterReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store