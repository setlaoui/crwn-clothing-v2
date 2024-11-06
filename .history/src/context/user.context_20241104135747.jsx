import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser]=useState(null);
    const value={currentUser, set}
    return <UserContext.Provider value={}>{children}</UserContext.Provider>
};
