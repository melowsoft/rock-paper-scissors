import React from "react";
import Score from "..";
import { cleanup, render, screen } from "@testing-library/react";

afterEach(cleanup);

test("should render score component", () => {
  render(<Score score={2} user="Total" label="Rounds" />);

  const scoreElement = screen.getByTestId("score-id");
  expect(scoreElement).toBeInTheDocument();
  expect(scoreElement).toHaveTextContent("Rounds");
  expect(scoreElement).toHaveTextContent("Total");
  expect(scoreElement).toHaveTextContent("2");
});
