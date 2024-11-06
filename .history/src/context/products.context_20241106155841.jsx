import { createContext } from "react";

export const ProductContext = createContext({
    products:[],

});

export const ProductProvider = ({children})=>{
    const []
    return(
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}