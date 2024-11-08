import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";

import "./shop.styles.scss";

const Shop = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categories).map((title) => {
        <>
            <h2>{title}</h2>
        </>;
      })}
      <div className="products-container">
        {categories.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Shop;
