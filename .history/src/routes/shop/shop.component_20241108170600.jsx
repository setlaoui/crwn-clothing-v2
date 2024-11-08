import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";

import './shop.styles.scss'

const Shop = () => {
  const { products: categories } = useContext(CategoriesContext);
  return (
    <div className="products-container">
      {categories.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
