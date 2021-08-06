import React from 'react'
import PAPER from "../../assets/images/icon-paper.svg"
import ROCK from "../../assets/images/icon-rock.svg"
import SCISSORS from "../../assets/images/icon-scissors.svg"
import LIZARD from "../../assets/images/icon-lizard.svg"
import SPOCK from "../../assets/images/icon-spock.svg"

import {WeaponStyled} from "./styles"

const colors: any = {
  paper: {
    base: '#516ef4',
    border: '#2543c3',
    icon: PAPER
  },
  rock: {
    base: '#de3a5a',
    border: '#980e31',
    icon: ROCK
  },
  scissors: {
    base: '#eca81e',
    border: '#c76c14',
    icon: SCISSORS
  },
  lizard: {
    base: '#51bb51',
    border: '#156b14',
    icon: LIZARD
  },
  spock: {
    base: '#ec1ed3',
    border: '#9b14c7',
    icon: SPOCK
  },
  default: {
    base: 'trasparent',
    border: 'trasparent',
  }
}

interface Props {
    name?: string;
    onClick?(name: string): any;
    isShadowAnimated?: boolean;
    playing?: boolean;
}

export const Weapon: React.FC<Props> = ({ name = 'default', onClick, isShadowAnimated = false, playing = false }: Props) => {

  function handleClick() {
    if (onClick) {
      onClick(name)
    }
  }
  const color = colors[name]
  return (
    <WeaponStyled 
    color={color} 
    onClick={handleClick} 
    name={name} 
    isShadowAnimated={isShadowAnimated} 
    playing={playing} data-testid="weapon-id">
      <div className="box">
        <img src={color.icon} alt="weapon-icon" />
      </div>
    </WeaponStyled>
  )
}
