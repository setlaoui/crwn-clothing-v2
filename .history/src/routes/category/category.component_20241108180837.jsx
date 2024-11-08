import { useParams } from "react-router-dom";
import "./category.styles.scss";
import { useContext } from "react";

const Category = () => {
  const { category } = useParams();
  const {categories } = useContext()
};

export default Category;
