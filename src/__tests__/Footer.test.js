import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Footer from "../components/layout/Footer";

import THEME from "../theme.json";

describe("test Footer", () => {
  test("correct year & explore js in footer", () => {
    const { getByText } = render(<Footer theme={THEME["light"]} />);
    expect(getByText("ExploreJS")).toBeTruthy();
    expect(getByText("© 2021")).toBeTruthy();
  });

  it("renders correctly", () => {
    const result = renderer.create(<Footer theme={THEME["light"]} />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
