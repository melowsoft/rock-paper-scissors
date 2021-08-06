import React from "react";
import { Provider } from "react-redux";
import Header from "..";
import { store } from "../../../state/store";
import { cleanup, render, screen } from "@testing-library/react";

afterEach(cleanup);

test("should render header component", () => {
  render(
    <Provider store={store}>     
  <Header></Header>
  </Provider>
  );

  const buttonElement = screen.getByTestId("header-id");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent('Score')
  expect(buttonElement).toHaveTextContent('Rounds')
  expect(buttonElement).toHaveTextContent('Draws')
});
