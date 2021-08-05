import React from "react";

import { Avatar, Wrapper } from "./styles";

interface Props {
  win: number;
  avatar: string;
  position: string;
  user: string;
  playing: boolean;
}

export const Player: React.FC<Props> = ({
  win,
  avatar,
  position,
  user,
  playing,
}: Props) => {

  if(playing){
    return (
      <div></div>
    )
  }

    return (
            <Wrapper position={position}>
              <div className="user-score">
                <div className="win">Win</div>
                <div className="win-number">{win || 0}</div>
              </div>
              <Avatar avatar={avatar} />
              <div className="player">{user || ""}</div>
            </Wrapper>
          
    )
}
