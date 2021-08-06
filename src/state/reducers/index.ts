import { combineReducers } from 'redux'
import  scoreBoardReducer from './scoreBoardReducer'
import  weaponsReducer from './weaponReducer'

const reducers = combineReducers({
  scores: scoreBoardReducer,
  weapons: weaponsReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>