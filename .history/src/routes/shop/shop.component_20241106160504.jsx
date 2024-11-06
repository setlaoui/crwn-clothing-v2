import { useContext } from "react";
import { ProductContexts } from "../../context/products.context";


const Shop = () => {
    const {products}=useContext(ProductContexts);
  return (
    <div>
      {SHOP_DATA.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
