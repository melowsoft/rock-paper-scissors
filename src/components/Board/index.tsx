import React, { useState, useContext } from "react";

import { ScoreContext } from "../App";
import { WhiteButton } from "../Button/styles";

import { BoardStyled } from "./styles";
import { Weapon } from "../Weapon";

const elements = ["paper", "scissors", "rock", "lizard", "spock"];

interface Props {
  playing: boolean;
  setPlaying(score: any): any;
}

export const Board: React.FC<Props> = ({ playing, setPlaying }: Props) => {
  // const [score, setScore] = useState(0)
  const { score, setScore } = useContext(ScoreContext);
  const [results, setResults] = useState("");
  const [housePick, setHousePick] = useState("default");

  const [pick, setPick] = useState("");
  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function launchHousePick() {
    return new Promise((resolve, reject) => {
      let pick: string;
      const interval = setInterval(() => {
        pick = elements[getRandomInt(0, 5)];
        setHousePick(pick);
      }, 75);
      setTimeout(() => {
        clearInterval(interval);
        resolve(pick);
      }, 2000);
    });
  }
  async function onClick(name: string) {
    setPlaying(true);
    setPick(name);
    const house: any = await launchHousePick();
    const results: any = playWithIA(name, house);
    setResults(results);
    if (results === "win") {
      setScore(score + 1);
    }
  }
  function playWithIA(pick: any, housePick: any) {
    if (housePick === pick) {
      return "draw";
    }
    if (pick === "paper") {
      if (housePick === "scissors") {
        return "lose";
      }
      if (housePick === "lizard") {
        return "lose";
      }
      if (housePick === "rock") {
        return "win";
      }
      if (housePick === "spock") {
        return "win";
      }
    }
    if (pick === "scissors") {
      if (housePick === "paper") {
        return "win";
      }
      if (housePick === "lizard") {
        return "win";
      }
      if (housePick === "rock") {
        return "lose";
      }
      if (housePick === "spock") {
        return "lose";
      }
    }
    if (pick === "rock") {
      if (housePick === "paper") {
        return "lose";
      }
      if (housePick === "spock") {
        return "lose";
      }
      if (housePick === "scissors") {
        return "win";
      }
      if (housePick === "lizard") {
        return "win";
      }
    }
    if (pick === "lizard") {
      if (housePick === "paper") {
        return "win";
      }
      if (housePick === "spock") {
        return "win";
      }
      if (housePick === "scissors") {
        return "lose";
      }
      if (housePick === "rock") {
        return "lose";
      }
    }
    if (pick === "spock") {
      if (housePick === "paper") {
        return "lose";
      }
      if (housePick === "lizard") {
        return "lose";
      }
      if (housePick === "scissors") {
        return "win";
      }
      if (housePick === "rock") {
        return "win";
      }
    }
  }
  function handleTryAgainClick() {
    setPlaying(false);
    setResults("");
  }
  return (
    <BoardStyled playing={playing} results={results !== ""}>
      {/* <span className="line"></span> */}
      {!playing ? (
        <>
          <Weapon name="paper" onClick={onClick} />
          <Weapon name="scissors" onClick={onClick} />
          <Weapon name="rock" onClick={onClick} />
          <Weapon name="lizard" onClick={onClick} />
          <Weapon name="spock" onClick={onClick} />
        </>
      ) : (
        <>
          <div className="in-game">
            <Weapon
              playing={playing}
              name={pick}
              isShadowAnimated={results === "win"}
            />
            <p>You Picked</p>
          </div>
          <div className="in-game">
            <Weapon
              playing={playing}
              name={housePick}
              isShadowAnimated={results === "lose"}
            />
            <p>The House Picked</p>
          </div>
          <div className="results">
            {results && (
              <>
                <h2>YOU {results}</h2>
                <WhiteButton onClick={handleTryAgainClick}>
                  Play Again
                </WhiteButton>
              </>
            )}
          </div>
        </>
      )}
    </BoardStyled>
  );
};
