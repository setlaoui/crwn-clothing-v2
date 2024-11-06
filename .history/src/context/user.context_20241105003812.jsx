import { createContext, useEffect, useState } from "react";
import { onAuthStateChangeListner } from "../utils/firebase/firebase.util";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  

  useEffect(() => {
    const unsuscribe = onAuthStateChangeListner((user)=>{console.log(user)})
    return unsuscribe
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
