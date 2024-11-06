import { createContext, useEffect, useState } from "react";
import { onAuthStateChangeListner } from "../utils/firebase/firebase.util";
import { signOut } from "firebase/auth";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  signOut();

  useEffect(() => {
    const unsuscribe = onAuthStateChangeListner((user)=>{console.log(user)})
    return unsuscribe
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
