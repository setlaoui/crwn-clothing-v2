import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsuscribe = onAuthStateChangeListner(()=>{})
    
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
