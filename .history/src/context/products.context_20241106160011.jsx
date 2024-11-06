import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value={}
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
