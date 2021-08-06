import React from "react";
import {Wrapper} from "..";
import { cleanup, render, screen } from "@testing-library/react";

afterEach(cleanup);

test("should render wrapper component", () => {
  render(<Wrapper><p>child</p></Wrapper>);

  const buttonElement = screen.getByTestId("wrapper-id");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent('child')
});
