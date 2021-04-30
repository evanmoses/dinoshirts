import { screen, render } from "@testing-library/react";
import { renderWithRouter } from "test-utils";
// import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";

import App from "./app";

test("full app rendering/navigating", () => {
  renderWithRouter(<App />);
  expect(screen.getByText(/dino shirts/i)).toBeInTheDocument();

  // const leftClick = { button: 0 }
  // userEvent.click(screen.getByText(/about/i), leftClick)
  //
  // // check that the content changed to the new page
  // expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
});

test("landing on a bad page", () => {
  const route = "/some/bad/route";
  renderWithRouter(<App />, { route });

  expect(screen.getByText(/WRONG PLACE!/i)).toBeInTheDocument();
});
