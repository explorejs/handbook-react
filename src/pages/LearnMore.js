import React from "react";

export default function LearnMore({people}) {

  return (
    <div
      style={{
        alignItems: "left",
        color: "black",
        display: "flex",
        fontFamily: "Lato",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <h2>Handbook</h2>
      <ul>
        {people.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}
