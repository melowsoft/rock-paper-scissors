import React from "react";
import Score from "../Score";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { HeaderStyled } from "./styles";

function Header() {
  const { scores } = useTypedSelector((state) => state.scores);

  return (
    <HeaderStyled data-testid="header-id">
      <Score score={scores.wins} user="Player"/>
      <Score score={scores.games} user="Total" label="Rounds"/>
      <Score score={scores.draws} user="Total" label="Draws"/>
      <Score score={scores.loss} user="House"/>
    </HeaderStyled>
  );
}

export default Header;
