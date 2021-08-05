import {useState, createContext, useEffect} from "react"
import Header from "../Header";
import { Wrapper } from "../Wrapper";
import UserAvatar from "../../assets/images/boy.svg"
import HouseAvatar from "../../assets/images/woman.svg"
import {useActions} from "../../hooks/useAction"
import {useTypedSelector} from "../../hooks/useTypedSelector"
 

import {AppStyled} from "./styles"
import { Board } from "../Board";
import { Player } from "../Player";

export const ScoreContext = createContext<any>({score: 0, setScore: () => console.log("")})

const App = () => {
  const {scores} = useTypedSelector(state => state.scores)
  const {getScores} = useActions()
  const [score, setScore] = useState(0)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
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
