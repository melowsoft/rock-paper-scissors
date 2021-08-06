import { ActionType } from "../action-types";
import { Action } from "../actions"

interface ScoreBoardState {
  scores: {wins: number; loss: number; draws: number; games: number}
}

const initialState = {
  scores: {wins: 0, loss: 0, draws: 0, games: 0}
}

const reducer = (state: ScoreBoardState = initialState, action: Action
  ): ScoreBoardState => {
     switch (action.type) {
        case ActionType.UPDATE_SCORES:
          const {scores} = state
          let gamesIncrement = scores.games + 1
          switch(action.payload){
             case 'win':
               let winIncrement = scores.wins + 1;
               
              const winState = {...scores, wins: winIncrement, games: gamesIncrement}
                return {
                  ...state,
                  scores: winState
                };
             case 'lose':
               let lossIncrement = scores.loss + 1
               
              const loseState = {...scores, loss: lossIncrement, games: gamesIncrement}
                return {
                  ...state,
                  scores: loseState
                };
             case 'draw':
               let drawIncrement = scores.draws + 1;
              const drawState = {...scores, draws: drawIncrement, games: gamesIncrement}
                return {
                  ...state,
                  scores: drawState
                };
               default: 
               return state; 
          }
         
        case ActionType.GET_SCORES:
          return {...state}
        default:
          return state;
     } 
}

export default reducer;