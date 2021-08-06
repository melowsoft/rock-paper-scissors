import React from "react";
import {Weapon} from "..";
import { cleanup, render, screen } from "@testing-library/react";

afterEach(cleanup);

test("should render weapon component", () => {
  render( <Weapon key={2} name='rock' onClick={() => console.log('Rock')} />);

  const buttonElement = screen.getByTestId("weapon-id");
  expect(buttonElement).toBeInTheDocument();
});
