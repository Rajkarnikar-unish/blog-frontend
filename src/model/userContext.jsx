import { createContext, useState } from "react";
import { User } from "./user";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(new User());

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
