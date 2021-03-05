import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/layout/Header";

import THEME from "../theme.json";

describe("Header", () => {
  test("has About link", () => {
    const { getByText } = render(
      <Router>
        <Header theme={THEME["light"]} toggleTheme={jest.fn()} />
      </Router>
    );
    expect(getByText("About")).toBeTruthy();
  });
});
