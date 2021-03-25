import React, { useState } from "react";
import { auth } from "../adapters/firebase";

const newRecord = {
  title: "some string",
  author: {
    name_first: "my first name",
    name_last: "my last name",
  },
  desc: "some string",
  cost: 0,
  status: "active",
  tags: ["css", "react"],
  ts: Date.now(),
  url: "www.google.com",
};

const AddNew = () => {
  const [state, setState] = useState({
    title: "",
    author: "",
    name_first: "",
    name_last: "",
    desc: "",
    cost: "",
    status: "active",
    tags: "",
    url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await auth.currentUser.getIdToken();
      const serverUrl =
        process.env.NODE_ENV === "production"
          ? process.env.REACT_APP_SERVER_BASE_URL
          : "http://localhost:8000";
      const result = await fetch(`${serverUrl}/mongo/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: state.title,
          author: {
            name_first: state.name_first,
            name_last: state.name_last,
          },
          desc: state.desc,
          cost: state.cost,
          tags: [state.tags],
          url: state.url,
        }),
      })
        .then((R) => R.json())
        .then((R) => R);
      if (result) {
        console.dir(result);
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <h1>Add New</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", maxWidth: "250px" }}
      >
        <label style={{ display: "flex", flexDirection: "column" }}>
          Title
          <input name="title" value={state.title} onChange={handleChange} />
        </label>
        <label style={{ display: "flex", flexDirection: "column" }}>
          Author First Name
          <input
            name="name_first"
            value={state.name_first}
            onChange={handleChange}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column" }}>
          Author Last Name
          <input
            name="name_last"
            value={state.name_last}
            onChange={handleChange}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column" }}>
          desc
          <input name="desc" value={state.desc} onChange={handleChange} />
        </label>
        <label style={{ display: "flex", flexDirection: "column" }}>
          Cost
          <input name="cost" value={state.cost} onChange={handleChange} />
        </label>
        <label style={{ display: "flex", flexDirection: "column" }}>
          tags
          <input name="tags" value={state.tags} onChange={handleChange} />
        </label>
        <label style={{ display: "flex", flexDirection: "column" }}>
          URL
          <input name="url" value={state.url} onChange={handleChange} />
        </label>
        <label>
          <button type="submit">Submit</button>
        </label>
      </form>
    </div>
  );
};

export default AddNew;
