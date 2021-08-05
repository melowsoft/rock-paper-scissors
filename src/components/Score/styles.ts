import styled from "styled-components"

export const ScoreStyled = styled.div`
  background: white;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  width: 80px;
  small {
    color: #2A45C2;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 1px;
  }

  .user {
      font-size: 10px;
      margin-bottom: 5px;
  }

  p {
    color: #565468;
    font-size: 40px;
    margin: 0;
    font-weight: 700;
    position: relative;
  }
  @media screen and (min-width: 768px) {
    padding: 10px 20px;
    small {
      font-size: 16px;
    }
    p {
      font-size: 60px;
    }
  }
`