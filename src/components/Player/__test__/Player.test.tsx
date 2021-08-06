import React from "react";
import { Provider } from "react-redux";
import {Player} from "..";
import { store } from "../../../state/store";
import { cleanup, render, screen } from "@testing-library/react";
import UserAvatar from "../../../assets/images/boy.svg"

afterEach(cleanup);

test("should render player component", () => {
  render(
 <Provider store={store}>     
       <Player
              avatar={UserAvatar}
              position="left"
              win={2}
              user="Player"
              playing={false}
            />
  </Provider>
  );

  const playerElement = screen.getByTestId("player-id");
  expect(playerElement).toBeInTheDocument();
  expect(playerElement).toHaveTextContent('Player')
});
