import styled from "styled-components"

interface BoardProps extends React.ComponentPropsWithoutRef<'div'> {
    playing?: boolean;
    results?: any
}

export const BoardStyled = styled.div<BoardProps>`
  display: grid;
  grid-template-columns: 130px 130px;
  justify-content: center;
  justify-items: center;
  grid-gap: 30px 50px;
  margin: 2em 0;
  position: relative;
  & div:nth-of-type(3) {
    grid-column: span 2;
  }
  .in-game {
    text-align: center;
    text-transform: uppercase;
    font-size: .8em;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .results {
    text-align: center;
    h2 {
      text-transform: uppercase;
      font-size: 56px;
      margin: 10px;
    }
  }
  .line {
    display: ${({ playing }) => !playing ? 'block' : 'none'};
    height: 14px;
    background: rgba(0,0,0,.2);
    position: absolute;
    width: 200px;
    top: 58px;
    &:before {
      content: '';
      height: 14px;
      background: rgba(0,0,0,.2);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(60deg);
      transform-origin: left top;
    }

    &:after {
      content: '';
      height: 14px;
      background: rgba(0,0,0,.2);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(-60deg);
      transform-origin: right top;
    }
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 300px 300px;
    ${({ playing, results }) => (playing && results) && 'grid-template-columns: 300px 110px 110px 300px;'}

    & div:nth-of-type(3) {
      ${({ playing, results }) => (playing && results) && 'grid-column: 2 / 4; grid-row: 1;'}
    }
    .line {
      width: 300px;
    }
    .results {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .in-game {
      font-size: 1.2em;
      display: flex;
      flex-direction: column;
      > div {
        order: 2;
      }
      > p {
        order: 1;
        margin-bottom: 2em;
      }
    }
  }
`