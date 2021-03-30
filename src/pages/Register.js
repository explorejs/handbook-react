import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import styled from 'styled-components';

// Components
import Heading1 from '../components/Heading1'
import PrimaryBtn from '../components/PrimaryBtn'


const StyledForm = styled.form`
  max-width: 35rem;
`

const FormWrapper = styled.div`
  margin: 2rem 0rem;
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  margin: 1.3rem 0rem -0.5rem 0rem;
  color: ${props => props.theme.smallText};
`

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 12px;
  margin-top: 1rem;
  background-color: ${props => props.theme.bgSide};
  color: ${props => props.theme.mainText};
  font-size: 14px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 2%);
`


const RegisterPage = () => {
  const { signOut, signUp, user } = useAuth();
  const [state, setState] = useState({ email: "", password: "", errMsg: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((s) => ({ ...s, [name]: value, errMsg: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: refactor the validation into own function
    // and improve the logic
    if (!state.password || state.password.length < 6) {
      setState((s) => ({
        ...s,
        errMsg: "please enter pw w/ length of at least 6",
      }));
    } else if (!state.email || !state.email.includes("@")) {
      setState((s) => ({ ...s, errMsg: "please enter a valid email" }));
    } else {
      try {
        await signUp(state.email, state.password);
      } catch (e) {
        console.error(e);
        if (e.message) {
          setState((s) => ({ ...s, errMsg: e.message }));
        } else {
          setState((s) => ({ ...s, errMsg: "Hit a snag, pls try again" }));
        }
      }
    }
  };

  if (user && user.email) {
    console.log(user);
    return (
      <>
        <h2>Register</h2>
        <p>Logged in !</p>
        <button onClick={signOut}>Log Out</button>
      </>
    );
  }
  return (
    <>
      <Heading1 content="Create an account" />
      <StyledForm
        onSubmit={handleSubmit}
      >
        <p style={{ color: "red" }}>{state.errMsg && state.errMsg}</p>
        <FormWrapper>
          <StyledLabel for="email">Email</StyledLabel>
          <StyledInput 
            name="email"
            onChange={handleChange}
            placeholder="alex@gmail.com"
            type="text"
            value={state.email}
          />

          <StyledLabel for="password">Password</StyledLabel>
          <StyledInput 
            name="password"
            onChange={handleChange}
            placeholder="$eCUre"
            type="password"
            value={state.password}
          />

        </FormWrapper>
        <PrimaryBtn content="Register" />
      </StyledForm>
    </>
  );
};

export default RegisterPage;
