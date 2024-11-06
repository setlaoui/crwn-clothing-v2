import { createContext } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{}
})

export const CartProvider =({children})=>{
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {isCartOpen, setIsCartOpen};

    return <CartContext
}