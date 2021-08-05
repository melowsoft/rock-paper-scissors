import { ActionType } from "../action-types"

interface GetScoresAction {
  type: ActionType.GET_SCORES;
}
interface UpdateScoresAction {
  type: ActionType.UPDATE_SCORES;
  payload: string
}


export type Action =   
| GetScoresAction 
| UpdateScoresAction 
