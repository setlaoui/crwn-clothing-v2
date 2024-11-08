import { useParams } from "react-router-dom";
import "./category.styles.scss";
import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products = categories[category];
};

export default Category;
