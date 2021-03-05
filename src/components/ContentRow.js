import React from "react";

// author: {name_first: "Yangshun", name_last: "Tay"}
// cost: 0
// desc: "Answers to Front-end Job Interview Questions - JS Questions. Pull requests for suggestions and corrections are welcome!"
// status: "active"
// tags: (2) ["interview", "front-end"]
// title: "front-end-interview-handbook"
// ts: "2021-02-06T23:36:56.596Z"
// url: "https://github.com/yangshun/front-end-interview-handbook/blob/master/contents/en/javascript-questions.md"
// _id
const ContentRow = ({ resource, theme }) => (
  <li key={resource._id} style={{ margin: "0.5rem 0" }}>
    <a
      href={resource.url}
      rel="noreferrer nofollow"
      target="_blank"
      style={{ color: theme.color }}
    >
      {resource.title}
    </a>
  </li>
);

export default ContentRow;
