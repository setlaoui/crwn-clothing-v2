import { createContext, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.util";

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => getCategoriesAndDocuments());
  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
