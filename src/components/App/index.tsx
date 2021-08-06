import {useState, useEffect} from "react"
import Header from "../Header";
import { Wrapper } from "../Wrapper";
import UserAvatar from "../../assets/images/boy.svg"
import HouseAvatar from "../../assets/images/woman.svg"
import {useActions} from "../../hooks/useAction"
import {useTypedSelector} from "../../hooks/useTypedSelector"
 

import {AppStyled} from "./styles"
import { Board } from "../Board";
import { Player } from "../Player";

const App = () => {
  const {scores} = useTypedSelector(state => state.scores)
  const {getScores, fetchWeapons} = useActions()
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    fetchWeapons()
    getScores()
    
  }, [])

  return (
      <AppStyled>
        <Wrapper>
          <div className="app-content">
            <Header />
            <Player
              avatar={UserAvatar}
              position="left"
              win={scores.wins}
              user="Player"
              playing={playing}
            />
            <Board playing={playing} setPlaying={setPlaying} />
            <Player
              avatar={HouseAvatar}
              position="right"
              win={scores.loss}
              user="House"
              playing={playing}
            />
          </div>
        </Wrapper>
      </AppStyled>
  );
};

export default App;
