import React from 'react'
import Score from '../Score'

import {HeaderStyled} from "./styles"

function Header() {
  return (
    <HeaderStyled>
      <h1>
        Rock <br /> Paper <br />  Scissors
      </h1>
      <Score />

    </HeaderStyled>
  )
}

export default Header
