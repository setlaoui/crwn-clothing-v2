import { useContext } from "react";


const Shop = () => {
    const {products}=useContext();
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