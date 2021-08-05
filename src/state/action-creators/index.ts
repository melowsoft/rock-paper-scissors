import { Dispatch } from "redux"
import { ActionType } from '../action-types';
import { Action } from "../actions"

export const getScores = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_SCORES
    })
  }
}

export const updateScores = (result: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE_SCORES,
      payload: result
    })
  }
}