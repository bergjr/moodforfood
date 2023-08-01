import React from "react";
import styles from "./CategoriesList.module.scss";
import { useProductContext } from "common/context/ProductContext";
import { Link } from "react-router-dom";

const CategoriesList = () => {
  const { categories, updateProducts } = useProductContext();

  return (
    <div className={styles.categories}>
      <ul className={styles.list}>
        {categories.map((category) => {
          return (
          <li key={category.id}>
            <Link to={`${category.id}`}>
              {category.name}
            </Link>
          </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesList;
