import React from "react";
import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

// author: {name_first: "Yangshun", name_last: "Tay"}
// cost: 0
// desc: "Answers to Front-end Job Interview Questions - JS Questions. Pull requests for suggestions and corrections are welcome!"
// status: "active"
// tags: (2) ["interview", "front-end"]
// title: "front-end-interview-handbook"
// ts: "2021-02-06T23:36:56.596Z"
// url: "https://github.com/yangshun/front-end-interview-handbook/blob/master/contents/en/javascript-questions.md"
// _id

const StyledLink = styled.a`
  color: ${(props) => props.theme.mainText};
`;
const ContentRow = ({ favorite, resource, theme, toggleFavorite }) => (
  <li key={resource._id} style={{ margin: "0.5rem 0" }}>
    <span style={{ marginRight: "0.5rem" }}>
      {favorite ? (
        <AiFillStar onClick={() => toggleFavorite(resource._id)} />
      ) : (
        <AiOutlineStar onClick={() => toggleFavorite(resource._id)} />
      )}
    </span>
    <StyledLink href={resource.url} rel="noreferrer nofollow" target="_blank">
      {resource.title}
    </StyledLink>
  </li>
);

export default ContentRow;
