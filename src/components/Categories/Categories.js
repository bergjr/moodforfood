import React, { memo } from "react";
import styles from "./Categories.module.scss";
import { useProductContext } from "common/context/ProductContext";
import { Link } from "react-router-dom";

const Categories = () => {
  const { categories } = useProductContext();

  return (
    <section id="categories" className={styles.categories}>
      <ul className={styles.container}>
        {categories.map((category) => {
          let photo = require(`assets/categories/${category.photo}`);
          return (
            <li
              className={styles[category.name]}
            >
            <Link to={`categories/${category.name}`}>  
              <div className={styles.overlay}></div>
              <img src={photo} alt={category.name}/>
              <h2>{category.name}</h2>
            </Link>
                
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default memo(Categories);
