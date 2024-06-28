import React, { createContext, useState, useContext, useEffect } from "react";

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
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    // console.log(userData);
    // const { accessToken, refreshToken } = userData.user;
    localStorage.setItem("accessToken", userData.user.accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
