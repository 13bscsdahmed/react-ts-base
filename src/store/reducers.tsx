import { combineReducers } from 'redux'
import { AsyncReducer } from '@store/index';

const createReducer = (asyncReducers: AsyncReducer) => {
  return combineReducers({...asyncReducers})
}

export default createReducer