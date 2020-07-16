import React from "react";
import {
  render,
  cleanup,
} from "@testing-library/react";
import App from "./App.js";

afterEach(cleanup);

test("renders Paginated Books", () => {
  const { getByText } = render(<App />);
  expect(
    getByText("Paginated Books")
  ).toBeTruthy();
});
