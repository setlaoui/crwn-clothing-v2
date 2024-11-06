import { createContext } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{}
})

export const Cart