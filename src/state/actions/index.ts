import { ActionType } from "../action-types"
import { Weapon } from "../interface"

interface GetScoresAction {
  type: ActionType.GET_SCORES;
}
interface UpdateScoresAction {
  type: ActionType.UPDATE_SCORES;
  payload: string
}
interface FetchWeaponAction {
  type: ActionType.FETCH_WEAPONS;
}

interface FetchWeaponSuccessAction {
  type: ActionType.FETCH_WEAPONS_SUCCESS;
  payload: Weapon[];
}
interface FetchWeaponErrorAction {
  type: ActionType.FETCH_WEAPONS_ERROR;
  payload: string;
}


export type Action =   
| GetScoresAction 
| UpdateScoresAction 
| FetchWeaponAction 
| FetchWeaponSuccessAction 
| FetchWeaponErrorAction 
