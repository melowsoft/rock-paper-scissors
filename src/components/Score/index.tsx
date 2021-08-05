import React, { useContext } from 'react'
import { ScoreContext } from '../App'


import {ScoreStyled} from "./styles"

interface Props {
    score: number;
    user: string;
}

export const Score: React.FC<Props> = ({score, user}: Props) => {
//const { score } = useContext(ScoreContext)
  return (
    <ScoreStyled>
        <p className="user">{user}</p>
      <small>Score</small>
      <p>{score || 0}</p>
    </ScoreStyled>
  )
}

export default Score
