import React, { useState, useEffect, useContext, createContext } from "react";
import { auth, db } from "../adapters/firebase";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signIn = (email, password) =>
    auth.signInWithEmailAndPassword(email, password).then((response) => {
      setUser(response.user);
      return response.user;
    });

  const signUp = async (email, password) =>
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (response) => {
        const { uid } = response.user;
        const userRef = db.collection("users").doc(uid);
        await userRef.set({
          email,
          signedUp: Date.now(),
          status: "active",
          uid,
        });
        setUser(response.user);
        return response.user;
      });

  const signOut = () =>
    auth.signOut().then(() => {
      setUser(false);
    });

  const sendPasswordResetEmail = (email) =>
    auth.sendPasswordResetEmail(email).then(() => {
      return true;
    });

  const confirmPasswordReset = (code, password) =>
    auth.confirmPasswordReset(code, password).then(() => {
      return true;
    });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    confirmPasswordReset,
    sendPasswordResetEmail,
    signIn,
    signUp,
    signOut,
    user,
  };
}
