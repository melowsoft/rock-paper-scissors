import React from "react";
import Score from "../Score";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { HeaderStyled } from "./styles";

function Header() {
  const { scores } = useTypedSelector((state) => state.scores);
  console.log(scores, "scores, now");
  return (
    <HeaderStyled>
      <Score score={scores.wins} user="Player"/>
      <h1>
        Rock <br /> Paper <br /> Scissors
      </h1>
      <Score score={scores.loss} user="House"/>
    </HeaderStyled>
  );
}

export default Header;
