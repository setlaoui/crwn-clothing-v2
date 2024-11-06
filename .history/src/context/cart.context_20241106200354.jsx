import { createContext, useState } from "react";

const addCartItem =()

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setItemToCart] = useState([]);

  const addItemToCart = (productAdd)=>{

  }

  const value = { isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
