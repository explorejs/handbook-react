import React, { useState } from "react";
import { auth } from "../adapters/firebase";
import { useAuth } from "../hooks/useAuth";
import styled from "styled-components";

// Components
import PrimaryBtn from "../components/PrimaryBtn";
import Heading1 from "../components/Heading1";
import { Link } from "react-router-dom";

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

const StyledSelect = styled.select`
  background-color: ${(props) => props.theme.bgSide};
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 2%);
  color: ${(props) => props.theme.mainText};
  font-size: 14px;
  margin-top: 1rem;
  padding: 12px 12px;
  width: 150px;
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
  const { profile } = useAuth();
  const serverUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_SERVER_BASE_URL
      : "http://localhost:8000";

  const initialState = {
    title: "",
    author: "",
    name_first: "",
    name_last: "",
    desc: "",
    cost: "",
    status: "active",
    tags: "",
    tagIdea: "",
    tagIdeaMsg: "",
    tagIdeaSubmitted: false,
    url: "",
  };
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((s) => ({ ...s, [name]: value }));
  };

  const newTagIdea = async (e) => {
    e.preventDefault();
    if (state.tagIdea) {
      await fetch(`${serverUrl}/tags`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tag: state.tagIdea }),
      })
        .then((res) => {
          setState((s) => ({
            ...s,
            tagIdeaMsg: "thanks!",
            tagIdeaSubmitted: true,
            tagIdea: "",
          }));
        })
        .catch((e) => {
          console.error(e);
          setState((s) => ({ ...s, tagIdeaMsg: JSON.stringify(e) }));
        });
    } else {
      setState((s) => ({ ...s, tagIdeaMsg: "Please enter the tag " }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await auth.currentUser.getIdToken();
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
          cost: Number(state.cost),
          tags: [state.tags],
          url: state.url,
        }),
      })
        .then((R) => R.json())
        .then((R) => R);
      if (result) {
        updateKey();
        console.dir(result);
        // TODO: Create a success view before resetting the form
        setState(initialState);
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (!profile.uid) {
    return (
      <div>
        <Heading1 content="Add New Resource" />
        <div style={{ height: "200px" }} />
        <p style={{ margin: "1rem 0" }}>
          Please login first so we can help you save your history and favorites
        </p>
        <Link to="/login">Log In</Link>
      </div>
    );
  }
  return (
    <div>
      <Heading1 content="Add New Resource" />
      <StyledForm onSubmit={handleSubmit}>
        <FormWrapper>
          <StyledLabel htmlFor="title">Title</StyledLabel>
          <StyledInput
            required
            name="title"
            value={state.title}
            placeholder="Title"
            onChange={handleChange}
          />

          <StyledLabel htmlFor="name_first">Author's first name</StyledLabel>
          <StyledInput
            name="name_first"
            required
            value={state.name_first}
            placeholder="Author's first name"
            onChange={handleChange}
          />

          <StyledLabel htmlFor="name_last">Author's last name</StyledLabel>
          <StyledInput
            name="name_last"
            required
            value={state.name_last}
            placeholder="Author's last name"
            onChange={handleChange}
          />

          <StyledLabel htmlFor="desc">Description</StyledLabel>
          <StyledTextarea
            name="desc"
            onChange={handleChange}
            placeholder="Description..."
            required
          />
          <InputWrapper>
            <StyledLabel htmlFor="cost">Cost</StyledLabel>
            <InputCost
              name="cost"
              required
              value={state.cost}
              placeholder="Cost"
              onChange={handleChange}
            />

            <StyledLabel htmlFor="url">URL</StyledLabel>
            <StyledInput
              name="url"
              required
              value={state.url}
              placeholder="URL"
              onChange={handleChange}
            />
          </InputWrapper>
          <StyledLabel htmlFor="tags">Tags</StyledLabel>
          <StyledSelect name="tags" onChange={handleChange}>
            <option value="">Choose Tag</option>
            <option value="html">html</option>
            <option value="css">css</option>
            <option value="javascript">javascript</option>
            <option value="data-structures">data structures</option>
            <option value="scss">sass</option>
            <option value="react">react</option>
            <option value="vue">vue</option>
            <option value="hooks">hooks</option>
          </StyledSelect>
        </FormWrapper>
        <PrimaryBtn content="Submit" type="submit" />
      </StyledForm>
      <br />
      <br />
      <StyledForm onSubmit={newTagIdea}>
        <label>Have a tag suggestion?</label>
        <p style={{ color: "tomato" }}>{state.tagIdeaMsg}</p>
        <StyledInput
          name="tagIdea"
          value={state.tagIdea}
          placeholder="tag idea"
          onChange={handleChange}
        />
        <PrimaryBtn
          content="Submit Tag"
          type="submit"
          disabled={!state.tagIdea}
        />
      </StyledForm>
    </div>
  );
};

export default AddNew;
