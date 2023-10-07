"use client";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { database } from "../firebaseConfig";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoginFormSubmitted, setIsLoginFormSubmitted] = useState(false);
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    if (isLoginFormSubmitted) {
      onAuthStateChanged(database, (user) => {
        if (user.refreshToken) {
          // console.log("user.refreshToken", user.refreshToken);
          // console.log("user", user);
          // console.log("user email", user.email);
          setUser({
            email: user.email,
            uid: user.uid,
            refreshToken: user.refreshToken,
          });
        } else {
          //
          setUser(null);
        }
      });
    }
  }, [isLoginFormSubmitted]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setIsLoginFormSubmitted,
        setUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
