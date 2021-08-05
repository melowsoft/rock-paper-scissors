import { combineReducers } from 'redux'
import  scoreBoardReducer from './scoreBoardReducer'

const reducers = combineReducers({
  scores: scoreBoardReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>