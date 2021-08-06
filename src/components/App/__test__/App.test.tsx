import React from "react";
import { Provider } from "react-redux";
import App from "..";
import { cleanup, render, screen } from "@testing-library/react";
import { store } from "../../../state/store";

afterEach(cleanup);


test("should render App component", () => {
  render(
    <Provider store={store}>
      <App></App>
    </Provider>
  );

  const appElelment = screen.getByTestId('app-main');
  expect(appElelment).toBeInTheDocument()
});
