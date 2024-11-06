import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

export const ProductContexts = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContexts.Provider value={value}>{children}</ProductContexts.Provider>
  );
};
