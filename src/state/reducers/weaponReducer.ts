import { ActionType } from "../action-types";
import { Action } from "../actions"
import {Weapon} from "../interface"

interface WeaponState {
  weapons: Weapon[];
  loading: boolean;
  error: string | null
}

const initialState = {
  weapons: [],
  loading: false,
  error: null
}

const reducer = (state: WeaponState = initialState, action: Action
  ): WeaponState => {
     switch (action.type) {
        case ActionType.FETCH_WEAPONS:
          return {...state, loading: true, error: null, weapons: [] }
        case ActionType.FETCH_WEAPONS_SUCCESS:
            return {...state, loading: false, error: null, weapons: action.payload }
        case ActionType.FETCH_WEAPONS_ERROR:
            return {...state, loading: false, error: action.payload, weapons: [] }  
        default:
          return state;
     } 
}

export default reducer;