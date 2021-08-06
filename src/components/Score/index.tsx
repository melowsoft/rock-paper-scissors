import React, { useContext } from 'react'

import {ScoreStyled} from "./styles"

interface Props {
    score: number;
    user: string;
    label?: string
}

export const Score: React.FC<Props> = ({score, user, label}: Props) => {
//const { score } = useContext(ScoreContext)
  return (
    <ScoreStyled>
        <p className="user">{user}</p>
      <small>{label ? label: 'Score'}</small>
      <p>{score || 0}</p>
    </ScoreStyled>
  )
}

export default Score
