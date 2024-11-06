import { createContext } from "react";

export const ProductContext = createContext({
    products:[],
    
});

export const ProductProvider = ({children})=>{
    return(
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}