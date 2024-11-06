import { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrent]
    return <UserContext.Provider value={}>{children}</UserContext.Provider>
};
