import { Routes } from "react-router-dom";
import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<Cate}></Route>
    </Routes>
  );
};

export default Shop;
