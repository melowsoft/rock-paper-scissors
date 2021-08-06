import React from 'react'

import {WrapperStyled} from "./styles"

interface Props {
    children: JSX.Element
  }

export const Wrapper: React.FC<Props> = ({ children }: Props) => {
  return (
    <WrapperStyled data-testid="wrapper-id">
      {children}
    </WrapperStyled>
  )
}


