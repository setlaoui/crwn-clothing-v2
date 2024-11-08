import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./shop.styles.scss";

const Shop = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
