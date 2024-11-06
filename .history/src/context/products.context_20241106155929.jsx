import { createContext, useState } from "react";
import PRODUCTS from ''

export const ProductContext = createContext({
    products:[],

});

export const ProductProvider = ({children})=>{
    const [products, setProducts]=useState(PRO);
    return(
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}