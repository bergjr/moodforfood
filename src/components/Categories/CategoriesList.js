import React from "react";
import styles from "./CategoriesList.module.scss";
import { useProductContext } from "common/context/ProductContext";
import { Link, NavLink } from "react-router-dom";

const CategoriesList = () => {
  const { categories, updateProducts } = useProductContext();

  return (
    <div className={styles.categories}>
      <ul className={styles.list}>
        {categories.map((category) => {
          return (
          <li key={category.id}>
            <NavLink to={`${category.id}`} className={({ isActive, isPending }) =>
    isPending ? "pending": isActive ? `${styles.item} ${styles.active}` : styles.item
  }>
              {category.name}
            </NavLink>
          </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesList;
