import { createContext } from "react";

export const ProductContext = createContext({});

export const ProductProvider = ({children})=>{
    return(
        <ProductContext.Provider value={value}></ProductContext.Provider>
    )
}