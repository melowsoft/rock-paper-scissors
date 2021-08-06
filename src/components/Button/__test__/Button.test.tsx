import React from "react";
import Button from "..";
import { cleanup, render, screen } from "@testing-library/react";

afterEach(cleanup);

test("should render Button component", () => {
  render(<Button>Play Game</Button>);

  const buttonElement = screen.getByTestId("button-id");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent('Play Game')
});
