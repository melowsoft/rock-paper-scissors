import styled from "styled-components"

export const ButtonStyled = styled.div`
  display: inline-flex;
  border: 1px solid white;
  border-radius: .5em;
  min-width: 128px;
  padding: .7em;
  box-sizing: border-box;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  :hover {
    background: white;
    color: #101a3f;
  }
`

export const WhiteButton = styled(ButtonStyled)`
  background: white;
  color: #101a3f;
  min-width: 220px;
`