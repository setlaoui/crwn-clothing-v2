import { Fragment, useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";

import "./shop.styles.scss";

const Shop = () => {
  const { categories: categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment key={title}>
      {Object.keys(categoriesMap).map((title) => (
        <>
          <h2>{title}</h2>
          <div  className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ))}
    <Fragment />
  );
};

export default Shop;
