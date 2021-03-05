import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import ContentRow from "../components/ContentRow";

import THEME from "../theme.json";

const mockContent = [
  {
    author: { name_first: "Yangshun", name_last: "Tay" },
    cost: 0,
    desc:
      "Answers to Front-end Job Interview Questions - JS Questions. Pull requests for suggestions and corrections are welcome!",
    status: "active",
    tags: (2)[("interview", "front-end")],
    title: "front-end-interview-handbook",
    ts: "2021-02-06T23:36:56.596Z",
    url:
      "https://github.com/yangshun/front-end-interview-handbook/blob/master/contents/en/javascript-questions.md",
    _id: "123",
  },
];

describe("ContentRow", () => {
  test("Shows title field of resources", () => {
    const { getByText } = render(
      <ContentRow theme={THEME["light"]} resource={mockContent[0]} />
    );
    expect(getByText("front-end-interview-handbook")).toBeTruthy();
  });
});
