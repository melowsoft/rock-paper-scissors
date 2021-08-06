import React from "react";
import { Provider } from "react-redux";
import {Board} from "..";
import { cleanup, render, screen } from "@testing-library/react";
import { store } from "../../../state/store";

afterEach(cleanup);


test("should render board component", () => {
  render(
    <Provider store={store}>
       <Board playing={false} setPlaying={()=> console.log('test')} />
    </Provider>
  );

  const boardElelment = screen.getByTestId('board-id');
  expect(boardElelment).toBeInTheDocument()
});
