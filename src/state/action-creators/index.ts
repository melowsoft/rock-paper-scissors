import axios from 'axios';
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

export const fetchWeapons = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_WEAPONS
    })

    try {
      const {data} = await axios.get('https://codechallenge.boohma.com/choices')

     dispatch({
       type: ActionType.FETCH_WEAPONS_SUCCESS,
       payload: data
     }) 

    } catch (err) {
      dispatch({
        type: ActionType.FETCH_WEAPONS_ERROR,
        payload: err.message
      })
    }
  }
}
export const playGame = async (pickId: number) => {

    try {
      const {data} = await axios.post('https://codechallenge.boohma.com/play', 
      JSON.stringify({
        player: pickId 
      }))

      console.log(data, "from action")
    return data;

    } catch (err) {
    return  console.log(err.message, "error here")
    }
  
}
