import React from 'react'

import {ButtonStyled} from "./styles"

const Button: React.FC = ({ children, ...props }) => {
  return (
    <ButtonStyled {...props}>
      {children}
    </ButtonStyled>
  )
}



export default Button
