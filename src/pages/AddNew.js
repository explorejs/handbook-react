import React, { useState } from "react";
import { auth } from "../adapters/firebase";
import styled from "styled-components";

// Components
import PrimaryBtn from "../components/PrimaryBtn";
import Heading1 from "../components/Heading1";

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

const StyledForm = styled.form`
  max-width: 35rem;
`;

const FormWrapper = styled.div`
  margin: 2rem 0rem;
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  display: none;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 12px;
  margin-top: 1rem;
  background-color: ${(props) => props.theme.bgSide};
  color: ${(props) => props.theme.mainText};
  font-size: 14px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 2%);
`;

const InputCost = styled(StyledInput)`
  width: 5rem;
  margin-right: 0.9rem;
`;

const StyledTextarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 13rem;
  padding: 12px 12px;
  margin-top: 1rem;
  background-color: ${(props) => props.theme.bgSide};
  color: ${(props) => props.theme.mainText};
  border: none;
  font-size: 14px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 2%);
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const AddNew = ({ updateKey }) => {
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
          tags:
            state.tags
              .trim()
              .split(" ")
              .map((item) => item.toLowerCase().trim().replace(",", ""))
              .filter((x) => x) || [],
          url: state.url,
        }),
      })
        .then((R) => R.json())
        .then((R) => R);
      if (result) {
        updateKey();
        console.dir(result);
        // TODO: Create a success view before resetting the form
        setState({
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
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <Heading1 content="Add New Resource" />
      <StyledForm onSubmit={handleSubmit}>
        <FormWrapper>
          <StyledLabel htmlFor="title">Title</StyledLabel>
          <StyledInput
            name="title"
            value={state.title}
            placeholder="Title"
            onChange={handleChange}
          />

          <StyledLabel htmlFor="name_first">Author's first name</StyledLabel>
          <StyledInput
            name="name_first"
            value={state.name_first}
            placeholder="Author's first name"
            onChange={handleChange}
          />

          <StyledLabel htmlFor="name_last">Author's last name</StyledLabel>
          <StyledInput
            name="name_last"
            value={state.name_last}
            placeholder="Author's last name"
            onChange={handleChange}
          />

          <StyledLabel htmlFor="desc">Description</StyledLabel>
          <StyledTextarea name="desc" placeholder="Description..." />
          <InputWrapper>
            <StyledLabel htmlFor="cost">Cost</StyledLabel>
            <InputCost
              name="cost"
              value={state.cost}
              placeholder="Cost"
              onChange={handleChange}
            />

            <StyledLabel htmlFor="url">URL</StyledLabel>
            <StyledInput
              name="url"
              value={state.url}
              placeholder="URL"
              onChange={handleChange}
            />
          </InputWrapper>
          <StyledLabel htmlFor="tags">Tags</StyledLabel>
          <StyledInput
            name="tags"
            value={state.tags}
            placeholder="Tags"
            onChange={handleChange}
          />
        </FormWrapper>
        <PrimaryBtn content="Submit" type="submit" />
      </StyledForm>
      {/* <form
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
        <PrimaryBtn content={'Submit'}/>
      </form> */}
    </div>
  );
};

export default AddNew;
