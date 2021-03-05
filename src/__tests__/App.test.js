import { render } from "@testing-library/react";
import App from "../App";

test("smoke test for home route", () => {
  const { getByText } = render(<App />);
  expect(getByText("Handbook.Dev")).toBeTruthy();
  expect(getByText("Current Resources")).toBeTruthy();
});
