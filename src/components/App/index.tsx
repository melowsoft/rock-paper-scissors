import {useState, createContext} from "react"
import { Provider } from "react-redux";
import { store } from "../../state";
import Header from "../Header";
import { Wrapper } from "../Wrapper";
import UserAvatar from "../../assets/images/boy.svg"
import HouseAvatar from "../../assets/images/woman.svg"
 

import {AppStyled} from "./styles"
//import { Player } from "../Player";
import { Board } from "../Board";
import { Player } from "../Player";

export const ScoreContext = createContext<any>({score: 0, setScore: () => console.log("")})

const App = () => {
  const [score, setScore] = useState(0)
  const [playing, setPlaying] = useState(false)
  return (
    <Provider store={store}>
       <ScoreContext.Provider value={{
      score,
      setScore,
    }}>
      <AppStyled>
        <Wrapper>
          <div className="app-content">
            <Header />
            <Player
              avatar={UserAvatar}
              position="left"
              win={score}
              user="Player"
              playing={playing}
            />
            <Board playing={playing} setPlaying={setPlaying} />
            <Player
              avatar={HouseAvatar}
              position="right"
              win={0}
              user="House"
              playing={playing}
            />
          </div>
        </Wrapper>
      </AppStyled>
      </ScoreContext.Provider>
    </Provider>
  );
};

export default App;
