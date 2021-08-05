import React, { useContext } from 'react'
import { ScoreContext } from '../App'


import {ScoreStyled} from "./styles"

function Score() {
const { score } = useContext(ScoreContext)
  return (
    <ScoreStyled>
      <small>Score</small>
      <p>{score}</p>
    </ScoreStyled>
  )
}

export default Score
