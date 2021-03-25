<<<<<<< HEAD
import React from 'react'

const Register = () => {
    return (
        <div>
            
        </div>
    )
}

export default Register
=======
import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

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
      <h2>Register</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <p style={{ color: "red" }}>{state.errMsg && state.errMsg}</p>
        <label style={{ width: "100px" }}>
          Email
          <input
            name="email"
            onChange={handleChange}
            placeholder="alex@gmail.com"
            type="text"
            value={state.email}
          />
        </label>
        <label style={{ width: "100px" }}>
          Password
          <input
            name="password"
            onChange={handleChange}
            placeholder="$eCUre"
            type="password"
            value={state.password}
          />
        </label>
        <button style={{ width: "100px" }}>Register</button>
      </form>
    </>
  );
};

export default RegisterPage;
>>>>>>> 2ceb091d54d709a95f1488cd13acb8e152df93c2
