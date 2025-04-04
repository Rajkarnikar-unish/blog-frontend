import React, { createContext, useState, useContext, useEffect } from "react";
import {
  getCookies,
  getOAuthUser,
  logoutOAuth2User,
} from "./services/OAuthService";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // const [userDetails, setUserDetails] = useState(null);

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  useEffect(() => {
    if (accessToken && refreshToken) {
      setUser({
        accessToken,
        refreshToken,
      });
    } else {
      // checkOAuth2Session();
    }
  }, []);

  const checkOAuth2Session = async () => {
    try {
      getOAuthUser()
        .then((response) => {
          if (response.status === 200) {
            return response.data;
          } else if (response.status === 401) {
            return response.message;
          }
        })
        .then((data) => {
          // console.log(data);
          if(data.isEmailVerified) {
            setUser(data);
          }
        });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.warn("User session expired or not found. Logging out...");
        setUser(null);
      } else {
        console.error("Failed to retrieve OAuth2 session: ", error);
      }
    }
  };

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("accessToken", userData.user.accessToken);
    localStorage.setItem("refreshToken", userData.user.refreshToken);
  };

  const logout = () => {
    //Remove tokens from localStorage
    if (accessToken || refreshToken) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      setUser(null);
    } else {
      logoutOAuth2User().then((response) => console.log(response));
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
