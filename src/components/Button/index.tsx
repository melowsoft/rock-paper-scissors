import React from 'react'

import {ButtonStyled} from "./styles"

const Button: React.FC = ({ children, ...props }) => {
  return (
    <ButtonStyled {...props} data-testid="button-id">
      {children}
    </ButtonStyled>
  )
}



export default Button
