
import { render } from "@testing-library/react";
import { BrowserRouter as Router, } from "react-router-dom";
import Header from "../Header"

test("If active show hi", () => {
  const { getByText } = render( <Router><Header active /></Router>)
  expect(getByText("hi")).toBeTruthy()
});

test("If not active dont show hi", () => {
    const { queryByText } = render(<Router><Header  /></Router>)
    expect(queryByText("hi")).toBeFalsy()
  });
  


 